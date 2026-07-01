import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-foreground text-card overflow-hidden">
      {/* Ghost logo background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-heading text-[20vw] font-bold text-card/[0.03] whitespace-nowrap leading-none">
          CITY PSYCHOLOGY
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">CP</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-lg">City Psychology</p>
                <p className="text-[10px] font-body tracking-[0.2em] uppercase text-card/50">Palm Beach</p>
              </div>
            </div>
            <p className="text-card/60 font-body text-sm leading-relaxed">
              Elevating mental health care in West Palm Beach with an integrated approach combining therapy and psychiatric services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase mb-6 text-primary">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Our Team', path: '/team' },
                { label: 'About', path: '/about' },
                { label: 'FAQ', path: '/faq' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-card/60 hover:text-card text-sm font-body transition-colors flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase mb-6 text-primary">Contact</h4>
            <div className="flex flex-col gap-4 text-sm font-body">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-card/60">1818 S Australian Ave<br />Suite 404<br />West Palm Beach, FL 33409</span>
              </div>
              <a href="tel:5615375586" className="flex items-center gap-3 text-card/60 hover:text-card transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                561-537-5586
              </a>
              <a href="mailto:dillon@citypsychologypb.com" className="flex items-center gap-3 text-card/60 hover:text-card transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                dillon@citypsychologypb.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-wider uppercase mb-6 text-primary">Hours</h4>
            <div className="flex flex-col gap-3 text-sm font-body">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span className="text-card/60">Mon – Sat: By Appointment</span>
              </div>
              <p className="text-card/40 text-xs mt-2">
                Office & Telehealth sessions available. Flexible scheduling to accommodate your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-card/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-body text-card/40">
          <p>© {new Date().getFullYear()} City Psychology PB. All rights reserved.</p>
          <p>Licensed Mental Health Counselor · West Palm Beach, FL</p>
        </div>
      </div>
    </footer>
  );
}