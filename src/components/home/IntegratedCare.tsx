import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const OFFICE_IMG = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/f7aed5b5b_generated_84790256.png';

const leftItems = [
  'Anxiety & Depression',
  'Relationship Conflict',
  'Behavioral Challenges',
  'Trauma & PTSD',
  'Addiction Recovery',
  'Life Transitions',
];

const rightItems = [
  'CBT & EMDR Therapy',
  'Couples & Family Systems',
  'Adolescent Behavioral Plans',
  'Integrated Psychiatric Care',
  'Evidence-Based Interventions',
  'Medication Management',
];

export default function IntegratedCare() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={OFFICE_IMG} alt="Therapy office" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/85 backdrop-blur-sm" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4"
          >
            The Synergy of Science
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-semibold text-card"
          >
            Integrated Healing
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left: Symptoms */}
          <div>
            <p className="text-primary/80 text-xs font-body tracking-[0.2em] uppercase mb-8 text-center">Your Challenges</p>
            <div className="space-y-4">
              {leftItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="text-card/70 font-body text-sm px-6 py-4 border border-card/10 rounded-xl backdrop-blur-sm bg-card/5 text-center"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Center: Unity CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col items-center justify-center py-12"
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent mb-8" />
            <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-6">
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-card mb-3 text-center">
              Experience<br />Integrated Healing
            </h3>
            <p className="text-card/60 text-sm font-body text-center mb-8 max-w-xs">
              Where therapy and psychiatry converge for complete mental wellness.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full text-sm font-body font-medium hover:bg-primary/90 transition-all animate-pulse-glow"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="w-px h-16 bg-gradient-to-b from-primary via-transparent to-transparent mt-8" />
          </motion.div>

          {/* Right: Solutions */}
          <div>
            <p className="text-primary/80 text-xs font-body tracking-[0.2em] uppercase mb-8 text-center">Our Solutions</p>
            <div className="space-y-4">
              {rightItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="text-card/70 font-body text-sm px-6 py-4 border border-card/10 rounded-xl backdrop-blur-sm bg-card/5 text-center"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}