import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TEXTURE_IMG = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/6ad9ecccc_generated_87ea5579.png';

export default function IntroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-card">
      {/* Subtle horizon line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-border/50" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4"
            >
              Our Philosophy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-[1.2] mb-6"
            >
              Guiding Families
              <br />
              <span className="text-primary italic">to Brighter Futures</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-body text-lg leading-[1.8] mb-6"
            >
              For over a decade, City Psychology has dedicated itself to working with children, individuals, and families—addressing everything from severe mental illness and trauma to addiction and relationship challenges.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground font-body text-lg leading-[1.8]"
            >
              Our comprehensive approach to behavioral and family dynamics has consistently delivered impactful results, fostering lasting growth and well-being across every area of our clients' lives.
            </motion.p>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={TEXTURE_IMG}
                alt="Zen stones representing balance and healing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-primary/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}