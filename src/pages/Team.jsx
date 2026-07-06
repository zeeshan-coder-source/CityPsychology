import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Contact from './Contact';

// const PORTRAIT_1 = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/9b7c9cf98_generated_0a1a7d92.png';
// const PORTRAIT_2 = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/0c725716b_generated_e3c16872.png';
// const PORTRAIT_3 = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/ff7816c46_generated_681cf98f.png';

// const providers = [
//     {
//         name: 'Dillon Dunn, LMHC',
//         title: 'Founder & Licensed Mental Health Counselor',
//         bio: 'With over a decade of experience working with children, families, and individuals, Dillon brings a comprehensive approach to behavioral health. His specialized training in family dynamics, addiction, and trauma recovery has consistently delivered transformative results. A graduate of Palm Beach Atlantic University and member of the South Florida Association of Christian Counselors.',
//         specialties: ['CBT', 'EMDR', 'Family Systems', 'Addiction Recovery', 'Play Therapy', 'Motivational Interviewing'],
//         image: PORTRAIT_1,
//     },
//     {
//         name: 'Medical Director',
//         title: 'Psychiatrist (MD) — Medication Management',
//         bio: 'Our psychiatric team provides integrated medication management alongside therapeutic treatment. This dual approach ensures comprehensive care addressing both psychological and biological dimensions of mental wellness. Patients benefit from coordinated treatment planning between therapy and psychiatric services.',
//         specialties: ['Psychiatric Evaluation', 'Medication Management', 'Integrated Care', 'Treatment Planning'],
//         image: PORTRAIT_2,
//     },
//     {
//         name: 'Associate Therapist',
//         title: 'Licensed Clinical Social Worker',
//         bio: 'Bringing compassion and clinical expertise to individual and couples work, our associate therapists expand City Psychology\'s capacity to serve more clients while maintaining the highest standards of personalized care and therapeutic excellence.',
//         specialties: ['Individual Therapy', 'Couples Counseling', 'Play Therapy', 'Solution-Focused Brief Therapy'],
//         image: PORTRAIT_3,
//     },
// ];

import img1 from '@/assets/1.webp';
import img2 from '@/assets/2.webp';
import img3 from '@/assets/3.webp';
import img4 from '@/assets/4.webp';
import img5 from '@/assets/5.webp';
import img6 from '@/assets/6.webp';

const providers = [
    {
        name: 'Dillon A Steinman, LMHC, QS',
        title: 'Founder & Licensed Mental Health Counselor',
        bio: 'Dillon has been working with youth since 1999 and has been full-time in the mental health field since 2004. Serving as an individual and family therapist since 2007, he brings a wealth of experience across both inpatient and outpatient settings, offering clients a deeply grounded and comprehensive approach to care.',
        specialties: ['Youth Counseling', 'Family Therapy', 'Inpatient Care', 'Outpatient Care', 'Clinical Supervision'],
        image: img1,
    },
    {
        name: 'Peter Copan',
        title: 'Registered Mental Health Counselor Intern',
        bio: 'Peter believes that most people don\'t realize how amazing they truly are, or how pain and trauma can block them from embracing that amazingness. Over the years, he has developed a process that empowers clients to better understand themselves and discover the map they\'ve been relying on to navigate their lives, offering hospitality, kindness, and respect in every session. His work blends insights from neuroscience and psychology with time-tested ancient wisdom, guiding clients toward healing and a more meaningful way of living — whether that means addressing deep-rooted pain or putting out fires currently springing up in life.',
        specialties: ['Trauma-Informed Therapy', 'Self-Discovery', 'Neuroscience-Based Approaches', 'Relationship Navigation'],
        image: img2,
    },
    {
        name: 'Michelle Cook, LMHC',
        title: 'Licensed Mental Health Counselor',
        bio: 'Michelle works with clients who feel weighed down by hardship, stress, and past trauma — helping them move past patterns like insecurity, isolation, fear, and impulsive reactions toward a more genuine, connected, and free version of themselves. She equips clients with practical social and emotional tools for daily living, and uses EMDR, an evidence-based approach known for providing quick relief from distress, to help process past trauma. For those who wish to integrate their Christian faith into the healing process, Michelle offers that support as well.',
        specialties: ['EMDR', 'Trauma Processing', 'Coping Skills Development', 'Christian Faith-Integrated Counseling'],
        image: img3,
    },
    {
        name: 'Terrini Woods, LMHC',
        title: 'Licensed Mental Health Counselor',
        bio: 'Terrini creates a judgement-free space grounded in genuine care, helping clients navigate communication struggles with loved ones, high stress, grief and loss, family and parent conflicts, and past traumas that interrupt their peace. She strongly believes in the power of prayer, psycho-education, and mental health awareness to foster holistic healing. Drawing on Cognitive Behavioral Therapy, Solution-Focused Brief Therapy, Humanistic, Interpersonal, Emotionally Focused, Narrative, and Strength-Based approaches, Terrini listens closely to each client\'s story and tailors her support accordingly.',
        specialties: ['CBT', 'Solution-Focused Brief Therapy', 'Emotionally Focused Therapy', 'Narrative Therapy', 'Grief & Loss', 'Family Conflict'],
        image: img4,
    },
    {
        name: 'Jess Fuentes, LMHC',
        title: 'Licensed Mental Health Counselor',
        bio: 'Jess helps clients break free from personal struggles, build stronger relationships, and live more fulfilling lives. Whether working with couples looking to deepen their connection or overcome relational trauma, young adults navigating life\'s direction, or individuals struggling with anxiety and depression, Jess is dedicated to providing a warm, accepting environment for growth. Her approach draws on evidence-based psychotherapy rooted in a Christian understanding, helping clients become stronger and experience real healing.',
        specialties: ['Couples Therapy', 'Relational Trauma', 'Anxiety & Depression', 'Christian-Rooted Psychotherapy'],
        image: img5,
    },
    {
        name: 'Snjezana Mileta',
        title: 'Psychotherapist',
        bio: 'Snjezana believes meaningful, lasting change begins within a strong therapeutic relationship. Her approach is primarily psychodynamic, focused on developing insight into unconscious patterns, early life experiences, and relational dynamics that continue to shape thoughts, emotions, and behaviors in the present. Together with clients, she explores how childhood wounds, attachment experiences, and longstanding coping strategies contribute to current challenges, integrating evidence-based methods including CBT, DBT, mindfulness, experiential body-mind techniques, and EMDR for trauma. Her goal is to provide a safe, compassionate, nonjudgmental space where healing and transformation can occur.',
        specialties: ['Psychodynamic Therapy', 'CBT', 'DBT', 'Mindfulness', 'EMDR', 'Attachment-Focused Work'],
        image: img6,
    },
];



function ProviderCard({ provider, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="group"
        >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-500">
                {/* Portrait */}
                <div className="lg:col-span-2 relative aspect-[3/4] rounded-xl overflow-hidden">
                    <img
                        src={provider.image}
                        alt={provider.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                </div>

                {/* Info */}
                <div className="lg:col-span-3 flex flex-col justify-center">
                    <p className="text-primary font-body text-xs tracking-[0.2em] uppercase mb-2">{provider.title}</p>
                    <h3 className="font-heading text-3xl font-semibold text-foreground mb-4">{provider.name}</h3>
                    <p className="text-muted-foreground font-body text-[15px] leading-[1.8] mb-6">{provider.bio}</p>
                    <div>
                        <p className="text-xs font-body text-muted-foreground/60 tracking-wider uppercase mb-3">Specialties</p>
                        <div className="flex flex-wrap gap-2">
                            {provider.specialties.map((s) => (
                                <span key={s} className="text-xs font-body text-foreground/70 px-3 py-1.5 rounded-full bg-muted border border-border/50">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Team() {
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
                        The Roster
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6"
                    >
                        Meet Our Team
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        A curated team of clinical professionals dedicated to integrated, personalized mental health care in West Palm Beach.
                    </motion.p>
                </div>
            </section>

            {/* Providers */}
            <section className="pb-32 bg-background">
                <div className="max-w-6xl mx-auto px-6 space-y-8">
                    {providers.map((provider, i) => (
                        <ProviderCard key={provider.name} provider={provider} index={i} />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <p className="text-muted-foreground font-body mb-6">Interested in joining our growing team?</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-primary font-body font-medium text-sm hover:gap-3 transition-all"
                    >
                        Get In Touch <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            <Contact />
        </>
    );
}


