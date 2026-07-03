import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What should I expect during my first visit?',
    a: 'Your first session begins with a comprehensive assessment where we discuss your history, current challenges, and goals. This helps us create a personalized treatment plan. We encourage you to start with a free, no-obligation phone consultation to ensure we\'re the right fit.',
  },
  {
    q: 'Do you accept insurance?',
    a: 'Yes, we accept most major insurance plans including Aetna, BlueCross BlueShield, Cigna, United Healthcare, Humana, Medicare, and Tricare. We\'ll help you verify your coverage and understand any out-of-pocket costs before your first session.',
  },
  {
    q: 'How much do sessions cost?',
    a: 'Our standard session rate is $150. We offer a sliding scale for eligible clients and accept various payment methods. We also offer reduced fees in certain circumstances to ensure our services remain accessible.',
  },
  {
    q: 'Do you offer telehealth / online sessions?',
    a: 'Absolutely. We provide both in-person sessions at our West Palm Beach office and secure telehealth sessions. Many clients appreciate the flexibility of choosing the format that best suits their schedule and comfort level.',
  },
  {
    q: 'What types of therapy do you offer?',
    a: 'We offer a diverse range of evidence-based approaches including CBT, EMDR, Family Systems therapy, Psychodynamic therapy, Play Therapy, Motivational Interviewing, and Solution-Focused Brief Therapy. Your therapist will recommend the approaches best suited to your needs.',
  },
  {
    q: 'What is integrated care with medication management?',
    a: 'Our integrated model combines traditional talk therapy with psychiatric services from a physician (MD). This means your therapist and psychiatrist work together to create a coordinated treatment plan that addresses both the psychological and biological aspects of mental health.',
  },
  {
    q: 'Do you offer Christian counseling?',
    a: 'Yes. As members of the South Florida Association of Christian Counselors, we offer faith-integrated therapeutic approaches for clients who desire them. This combines professional clinical methods with Christian values and principles.',
  },
  {
    q: 'What ages do you work with?',
    a: 'We work with children, adolescents, adults, and seniors. Our team has specialized training in age-appropriate therapeutic approaches, including play therapy for younger children and family systems work for adolescents.',
  },
  {
    q: 'How do I schedule an appointment?',
    a: 'You can reach us by phone at 561-537-5586, email at dillon@citypsychologypb.com, or by using the booking form on our Contact page. We offer flexible scheduling Monday through Saturday.',
  },
  {
    q: 'Is everything confidential?',
    a: '100% confidential. Your privacy is our highest priority. All sessions and records are protected under HIPAA regulations and professional ethical standards.',
  },
];

export default function FAQ() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

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
            Common Questions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Everything you need to know about starting your therapeutic journey with City Psychology.
          </motion.p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="pb-32 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-sm transition-all"
                >
                  <AccordionTrigger className="text-left font-heading text-lg font-semibold text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body text-[15px] leading-[1.8] pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground font-body mb-4">Still have questions?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium text-sm hover:bg-primary/90 transition-all"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}