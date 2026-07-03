import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "City Psychology has been a game-changer for our family. The integrated approach between therapy and understanding our needs made all the difference. We finally feel like we're moving forward together.",
    author: "Sarah M.",
    context: "Family Therapy Client",
  },
  {
    text: "I was hesitant about starting counseling, but the team at City Psychology made me feel safe from day one. The combination of talk therapy and a structured plan gave me tools I use every single day.",
    author: "James R.",
    context: "Individual Counseling Client",
  },
  {
    text: "After trying several therapists, we found City Psychology and finally felt heard. Their approach to couples counseling is thoughtful, structured, and genuinely transformative.",
    author: "Michelle & David K.",
    context: "Couples Counseling Clients",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4"
        >
          Client Experiences
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-16"
        >
          Stories of <span className="italic text-primary">Transformation</span>
        </motion.h2>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-heading text-xl md:text-2xl text-foreground leading-relaxed italic mb-8">
                "{testimonials[current].text}"
              </p>
              <div>
                <p className="font-body font-semibold text-foreground">{testimonials[current].author}</p>
                <p className="font-body text-sm text-muted-foreground">{testimonials[current].context}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-border'
                  }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}