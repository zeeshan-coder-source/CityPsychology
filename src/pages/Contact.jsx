import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const API_URL = 'http://localhost:3001/api/send-email';

export default function Contact() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: '-60px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    clientType: '',
    sessionFormat: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success('Message sent! We will be in touch shortly.');
        setFormData({
          name: '', email: '', phone: '',
          serviceType: '', clientType: '', sessionFormat: '', message: '',
        });
      } else {
        toast.error(data.error || 'Failed to send. Please try again.');
      }
    } catch (err) {
      console.error('Send error:', err);
      toast.error('Could not reach mail server. Make sure the server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-40 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4"
          >
            Begin Your Journey
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Start with a complimentary, no-obligation consultation. Let's find the right path forward together.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground mb-1">Office Location</p>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      1818 South Australian Avenue<br />
                      Suite 404<br />
                      West Palm Beach, FL 33409
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground mb-1">Phone</p>
                    <a href="tel:5615375586" className="text-muted-foreground font-body text-sm hover:text-primary transition-colors">
                      561-537-5586
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:dillon@citypsychologypb.com" className="text-muted-foreground font-body text-sm hover:text-primary transition-colors">
                      dillon@citypsychologypb.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground mb-1">Availability</p>
                    <p className="text-muted-foreground font-body text-sm">
                      Monday – Saturday<br />
                      By Appointment<br />
                      Office & Telehealth
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="rounded-xl overflow-hidden border border-border h-56"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.5!2d-80.0532!3d26.6962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQxJzQ2LjMiTiA4MMKwMDMnMTEuNSJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="grayscale opacity-80"
                  title="City Psychology Location"
                />
              </motion.div>
            </div>

            {/* Booking Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border/50 shadow-lg shadow-foreground/5">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                  Book a Free Consultation
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-8">
                  Tell us about yourself and we'll match you with the right provider.
                </p>

                {/* Natural language booking */}
                <div className="p-6 rounded-xl bg-muted/50 border border-border/50 mb-8">
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    I am looking for{' '}
                    <Select value={formData.serviceType} onValueChange={(v) => setFormData({ ...formData, serviceType: v })}>
                      <SelectTrigger className="inline-flex w-auto min-w-[160px] h-8 px-3 border-b-2 border-primary bg-transparent rounded-none text-primary font-medium">
                        <SelectValue placeholder="select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="therapy">Therapy</SelectItem>
                        <SelectItem value="medication">Medication Management</SelectItem>
                        <SelectItem value="couples">Couples Counseling</SelectItem>
                        <SelectItem value="family">Family Therapy</SelectItem>
                        <SelectItem value="other">Other Services</SelectItem>
                      </SelectContent>
                    </Select>
                    {' '}for{' '}
                    <Select value={formData.clientType} onValueChange={(v) => setFormData({ ...formData, clientType: v })}>
                      <SelectTrigger className="inline-flex w-auto min-w-[130px] h-8 px-3 border-b-2 border-primary bg-transparent rounded-none text-primary font-medium">
                        <SelectValue placeholder="select client" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="myself">Myself</SelectItem>
                        <SelectItem value="child">My Child</SelectItem>
                        <SelectItem value="us">My Partner & I</SelectItem>
                        <SelectItem value="family">My Family</SelectItem>
                      </SelectContent>
                    </Select>
                    {' '}and I prefer{' '}
                    <Select value={formData.sessionFormat} onValueChange={(v) => setFormData({ ...formData, sessionFormat: v })}>
                      <SelectTrigger className="inline-flex w-auto min-w-[130px] h-8 px-3 border-b-2 border-primary bg-transparent rounded-none text-primary font-medium">
                        <SelectValue placeholder="select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-person">In-Person</SelectItem>
                        <SelectItem value="telehealth">Telehealth</SelectItem>
                        <SelectItem value="either">Either</SelectItem>
                      </SelectContent>
                    </Select>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-body text-muted-foreground tracking-wider uppercase mb-2 block">Full Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background border-border/50 focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-body text-muted-foreground tracking-wider uppercase mb-2 block">Phone *</label>
                      <Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-background border-border/50 focus:border-primary"
                        placeholder="(561) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-body text-muted-foreground tracking-wider uppercase mb-2 block">Email *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border/50 focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-body text-muted-foreground tracking-wider uppercase mb-2 block">Additional Details</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background border-border/50 focus:border-primary min-h-[100px]"
                      placeholder="Tell us anything else you'd like us to know..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow font-body font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Request Consultation
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground/60 font-body text-center">
                    100% Confidential · HIPAA Compliant · Free Initial Consultation
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}