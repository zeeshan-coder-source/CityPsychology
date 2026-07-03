import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const OFFICE_IMG = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/f7aed5b5b_generated_84790256.png';
const TEXTURE_IMG = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/6ad9ecccc_generated_87ea5579.png';

const values = [
  { title: 'Evidence-Based Care', description: 'Every approach is grounded in proven clinical methodologies and ongoing research.' },
  { title: 'Integrated Treatment', description: 'Therapy and psychiatry working in concert for comprehensive mental wellness.' },
  { title: 'Client-Centered', description: 'Your unique needs, values, and goals drive every aspect of your treatment plan.' },
  { title: 'Accessible & Flexible', description: 'Sliding scale options, flexible scheduling, and both in-person and telehealth sessions.' },
  { title: 'Faith-Compatible', description: 'Integration of Christian values for those who desire a faith-informed approach.' },
  { title: 'Growth-Oriented', description: 'Building a multi-disciplinary group to serve the Palm Beach community at scale.' },
];

const insurances = [
  'Aetna', 'BlueCross BlueShield', 'Cigna', 'United Healthcare',
  'Humana', 'Medicare', 'Tricare', 'And More...',
];

export default function About() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: '-80px' });
  const insuranceRef = useRef(null);
  const insuranceInView = useInView(insuranceRef, { once: true, margin: '-80px' });

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-40 pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6"
          >
            About City Psychology
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative group"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={OFFICE_IMG}
                  alt="City Psychology office"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-primary/20 rounded-2xl -z-10" />
            </motion.div>

            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground font-body text-[15px] leading-[1.8] mb-6"
              >
                City Psychology was founded with a vision: to create a new standard of mental health care in West Palm Beach. Not just another counseling office, but a curated infrastructure for human flourishing—where clinical excellence meets coastal serenity.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground font-body text-[15px] leading-[1.8] mb-6"
              >
                With over a decade of experience in behavioral health, family dynamics, and addiction counseling, our founder recognized that true healing requires more than talk therapy alone. That's why we're building an integrated model—combining licensed therapists with psychiatric physicians—to offer comprehensive, coordinated care under one roof.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground font-body text-[15px] leading-[1.8]"
              >
                Our goal is to empower individuals, couples, and families to lead lives they love—identifying and overcoming obstacles to satisfaction and happiness with practical goals and evidence-based strategies.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4"
            >
              What Defines Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-semibold text-foreground"
            >
              Our Values
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section ref={insuranceRef} className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={insuranceInView ? { opacity: 1, y: 0 } : {}}
            className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4"
          >
            Accessible Care
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={insuranceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6"
          >
            Insurance & Rates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={insuranceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-body text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Sessions are $150 with sliding scale options for eligible clients. We accept most major insurances and work with you to verify coverage.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {insurances.map((ins, i) => (
              <motion.span
                key={ins}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={insuranceInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-body text-foreground/80"
              >
                {ins}
              </motion.span>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-primary font-body font-medium text-sm hover:gap-3 transition-all"
          >
            Verify Your Coverage <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}