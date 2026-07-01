import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const COASTAL_IMG = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/c0246a5b7_generated_b921fbd6.png';

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={COASTAL_IMG} alt="Palm Beach coastline" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/60" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4"
        >
          Your Journey Starts Here
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-card leading-[1.2] mb-6"
        >
          Ready to Build a
          <br />
          <span className="italic text-primary">Life You Love?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-card/70 font-body text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Begin with a complimentary consultation. No obligation, just a conversation to see if City Psychology is the right fit for you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium text-sm hover:bg-primary/90 transition-all animate-pulse-glow"
          >
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:5615375586"
            className="inline-flex items-center gap-2 px-8 py-4 border border-card/30 text-card rounded-full font-body font-medium text-sm hover:bg-card/10 transition-all"
          >
            <Phone className="w-4 h-4" /> Call 561-537-5586
          </a>
        </motion.div>
      </div>
    </section>
  );
}