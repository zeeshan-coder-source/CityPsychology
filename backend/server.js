import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load .env manually from the current directory
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, '.env');
try {
  const envFile = readFileSync(envPath, 'utf-8');
  envFile.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const [key, ...rest] = trimmed.split('=');
    if (key) process.env[key.trim()] = rest.join('=').trim();
  });
} catch {
  console.warn('⚠️  .env file not found — using system environment variables.');
}

const app  = express();
const PORT = process.env.SERVER_PORT || 3001;

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176', 'http://localhost:3000'] }));
app.use(express.json());

// ── Nodemailer Transporter ──────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST || 'smtp.gmail.com',
  port:   Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465, // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false // Bypasses SSL handshake issues if local certificates are outdated
  },
  family: 4, // Forces Node to use IPv4 (fixes ENETUNREACH IPv6 routing errors on Windows)
});

// Verify connection on startup
transporter.verify((error) => {
  if (error) {
    console.error('❌ SMTP connection failed:', error.message);
  } else {
    console.log('✅ SMTP connected — ready to send emails!');
  }
});

// ── Route: Send Email ───────────────────────────────────────────────────────
app.post('/api/send-email', async (req, res) => {
  const {
    name,
    email,
    phone,
    serviceType,
    clientType,
    sessionFormat,
    message,
  } = req.body;

  // Basic validation
  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, error: 'Name, email, and phone are required.' });
  }

  const mailOptions = {
    from:    `"City Psychology Website" <${process.env.EMAIL_FROM}>`,
    to:      process.env.EMAIL_TO,
    replyTo: email,
    subject: `New Consultation Request from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Consultation Request — City Psychology
        </h2>

        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr style="background: #f3f4f6;">
            <td style="padding: 10px 14px; font-weight: bold; width: 35%;">Full Name</td>
            <td style="padding: 10px 14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: bold;">Email</td>
            <td style="padding: 10px 14px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background: #f3f4f6;">
            <td style="padding: 10px 14px; font-weight: bold;">Phone</td>
            <td style="padding: 10px 14px;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: bold;">Service Type</td>
            <td style="padding: 10px 14px;">${serviceType || 'Not specified'}</td>
          </tr>
          <tr style="background: #f3f4f6;">
            <td style="padding: 10px 14px; font-weight: bold;">Client Type</td>
            <td style="padding: 10px 14px;">${clientType || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: bold;">Session Format</td>
            <td style="padding: 10px 14px;">${sessionFormat || 'Not specified'}</td>
          </tr>
        </table>

        ${message ? `
        <div style="margin-top: 16px; padding: 14px; background: #f9fafb; border-left: 4px solid #2563eb; border-radius: 4px;">
          <strong>Additional Details:</strong>
          <p style="margin: 8px 0 0; color: #374151;">${message}</p>
        </div>` : ''}

        <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
          This email was sent from the City Psychology website contact form.<br>
          Reply directly to this email to respond to <strong>${name}</strong>.
        </p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent to ${process.env.EMAIL_TO} — MessageID: ${info.messageId}`);
    return res.json({ success: true, messageId: info.messageId });
  } catch (err) {
    console.error('❌ Email send error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ── Health Check ────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── Start ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Email server running at http://localhost:${PORT}`);
  console.log(`   From : ${process.env.EMAIL_FROM}`);
  console.log(`   To   : ${process.env.EMAIL_TO}\n`);
});
