import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// const PORTRAIT_1 = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/9b7c9cf98_generated_0a1a7d92.png';
// const PORTRAIT_2 = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/0c725716b_generated_e3c16872.png';
// const PORTRAIT_3 = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/ff7816c46_generated_681cf98f.png';

// const team = [
//   {
//     name: 'Dillon Dunn, LMHC',
//     role: 'Founder & Licensed Mental Health Counselor',
//     specialties: 'CBT · EMDR · Family Systems · Addiction',
//     image: PORTRAIT_1,
//   },
//   {
//     name: 'Medical Director',
//     role: 'Psychiatrist (MD)',
//     specialties: 'Medication Management · Integrated Care',
//     image: PORTRAIT_2,
//   },
//   {
//     name: 'Associate Therapist',
//     role: 'Licensed Clinical Social Worker',
//     specialties: 'Individual · Couples · Play Therapy',
//     image: PORTRAIT_3,
//   },
// ];

import img1 from '@/assets/1.webp';
import img2 from '@/assets/2.webp';
import img3 from '@/assets/3.webp';
import img4 from '@/assets/4.webp';
import img5 from '@/assets/5.webp';
import img6 from '@/assets/6.webp';

const team = [
  {
    name: 'Dillon A Steinman, LMHC, QS',
    role: 'Founder & Licensed Mental Health Counselor',
    specialties: 'Youth & Family Therapy · Inpatient/Outpatient Care · Clinical Supervision',
    image: img1,
  },
  {
    name: 'Peter Copan',
    role: 'Registered Mental Health Counselor Intern',
    specialties: 'Trauma Recovery · Self-Discovery · Neuroscience-Informed Therapy',
    image: img2,
  },
  {
    name: 'Michelle Cook, LMHC',
    role: 'Licensed Mental Health Counselor',
    specialties: 'EMDR · Trauma Processing · Christian Faith-Integrated Counseling',
    image: img3,
  },
  {
    name: 'Terrini Woods, LMHC',
    role: 'Licensed Mental Health Counselor',
    specialties: 'CBT · SFBT · Family & Grief Counseling · Faith-Based Support',
    image: img4,
  },
  {
    name: 'Jess Fuentes, LMHC',
    role: 'Licensed Mental Health Counselor',
    specialties: 'Couples Therapy · Anxiety & Depression · Christian-Rooted Psychotherapy',
    image: img5,
  },
  {
    name: 'Snjezana Mileta',
    role: 'Psychotherapist',
    specialties: 'Psychodynamic Therapy · CBT · DBT · EMDR · Attachment-Focused Care',
    image: img6,
  },
];




export default function TeamPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4"
            >
              The Roster
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-semibold text-foreground"
            >
              Meet Our Team
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-primary font-body font-medium text-sm hover:gap-3 transition-all"
            >
              View Full Team <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-card/80 text-xs font-body">{member.specialties}</p>
                </div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-muted-foreground font-body text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}