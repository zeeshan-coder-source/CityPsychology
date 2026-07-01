import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Brain, Users, Heart, Stethoscope, Baby, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Individual Therapy',
    description: 'Navigate anxiety, depression, and life transitions with evidence-based therapeutic approaches tailored to your unique needs.',
  },
  {
    icon: Users,
    title: 'Couples Counseling',
    description: 'Strengthen your relationship through effective communication strategies and renewed emotional connection.',
  },
  {
    icon: Baby,
    title: 'Adolescent Counseling',
    description: 'Specialized support for teens facing behavioral challenges, identity struggles, and family transitions.',
  },
  {
    icon: Stethoscope,
    title: 'Medication Management',
    description: 'Integrated psychiatric care with an MD to ensure a holistic approach to your mental health treatment plan.',
  },
  {
    icon: Heart,
    title: 'Family Therapy',
    description: 'Heal family dynamics and create healthier patterns through systemic therapeutic intervention.',
  },
  {
    icon: Brain,
    title: 'Trauma & EMDR',
    description: 'Specialized trauma recovery using EMDR and other proven modalities for deep, lasting healing.',
  },
];

export default function ServicesPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4"
          >
            Comprehensive Care
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-semibold text-foreground"
          >
            Our Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-body font-medium text-sm hover:gap-3 transition-all"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}