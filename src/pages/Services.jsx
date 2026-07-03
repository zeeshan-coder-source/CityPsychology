import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Brain, Users, Heart, Stethoscope, Baby, Sparkles, Shield, MessageCircle, ArrowRight } from 'lucide-react';

const LINEN_IMG = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/3fb221ca4_generated_7b9764f7.png';

const services = [
  {
    icon: Brain,
    title: 'Individual Counseling',
    description: 'Life can be full of anxiety, dead-end situations, or feelings of emptiness. Our evidence-based individual therapy helps you navigate challenges with CBT, EMDR, and psychodynamic approaches tailored to your unique story.',
    approaches: ['Cognitive Behavioral (CBT)', 'EMDR', 'Psychodynamic', 'Solution-Focused Brief Therapy'],
  },
  {
    icon: Baby,
    title: 'Adolescent Counseling',
    description: 'Teens face unique challenges—family changes, identity struggles, peer pressure. Unlike adults, they cannot yet draw on past solution strategies. We provide age-appropriate therapeutic support including play therapy for younger clients.',
    approaches: ['Play Therapy', 'Family Systems', 'Behavioral Intervention', 'Interpersonal Therapy'],
  },
  {
    icon: Users,
    title: 'Couples Counseling',
    description: 'Even without major problems, routine and boredom can erode partnerships. We help couples rediscover connection, rebuild communication, and navigate conflict with proven therapeutic frameworks.',
    approaches: ['Interpersonal Therapy', 'Family/Marital', 'Motivational Interviewing', 'Eclectic'],
  },
  {
    icon: Heart,
    title: 'Family Therapy',
    description: 'Family dynamics shape who we are. Our systemic approach addresses the whole family unit, healing patterns that have been passed down and creating healthier ways of relating to one another.',
    approaches: ['Family Systems', 'Interpersonal', 'Solution-Focused', 'Intervention'],
  },
  {
    icon: Stethoscope,
    title: 'Medication Management',
    description: 'Our integrated model pairs therapy with psychiatric care from an MD. This dual approach ensures your treatment plan addresses both the psychological and biological dimensions of mental health.',
    approaches: ['Psychiatric Evaluation', 'Ongoing Monitoring', 'Integrated Treatment Planning'],
  },
  {
    icon: Sparkles,
    title: 'Trauma & EMDR',
    description: 'Specialized trauma recovery using Eye Movement Desensitization and Reprocessing (EMDR) alongside traditional therapeutic modalities for deep, lasting healing from PTSD, abuse, and traumatic experiences.',
    approaches: ['EMDR', 'Trauma-Focused CBT', 'Psychodynamic', 'Somatic Approaches'],
  },
  {
    icon: Shield,
    title: 'Addiction Counseling',
    description: 'Our comprehensive approach to addiction addresses both the substance use and underlying mental health conditions, providing a path to sustainable recovery and a fulfilling life.',
    approaches: ['Motivational Interviewing', 'CBT', 'Family Systems', 'Relapse Prevention'],
  },
  {
    icon: MessageCircle,
    title: 'Christian Counseling',
    description: 'As members of the South Florida Association of Christian Counselors, we integrate faith and psychological well-being, nurturing mind, body, and spirit toward the abundant life God intends.',
    approaches: ['Faith-Integrated Therapy', 'Biblical Principles', 'Professional Clinical Methods'],
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <service.icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
        {service.title}
      </h3>
      <p className="text-muted-foreground font-body text-[15px] leading-[1.8] mb-6">
        {service.description}
      </p>
      <div className="pt-4 border-t border-border/50">
        <p className="text-xs font-body text-muted-foreground/60 tracking-wider uppercase mb-3">Approaches</p>
        <div className="flex flex-wrap gap-2">
          {service.approaches.map((a) => (
            <span key={a} className="text-xs font-body text-foreground/70 px-3 py-1 rounded-full bg-muted border border-border/50">
              {a}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={LINEN_IMG} alt="Natural texture" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4"
          >
            Comprehensive Care
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto"
          >
            A curated suite of evidence-based treatments designed to address the full spectrum of mental health needs—from individual therapy to integrated psychiatric care.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-muted-foreground font-body mb-6">Ready to begin? Sessions are $150 with sliding scale options available.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium text-sm hover:bg-primary/90 transition-all animate-pulse-glow"
            >
              Book Your Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}