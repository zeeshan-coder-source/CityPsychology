import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PORTRAIT_1 = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/9b7c9cf98_generated_0a1a7d92.png';
const PORTRAIT_2 = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/0c725716b_generated_e3c16872.png';
const PORTRAIT_3 = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/ff7816c46_generated_681cf98f.png';

const providers = [
    {
        name: 'Dillon Dunn, LMHC',
        title: 'Founder & Licensed Mental Health Counselor',
        bio: 'With over a decade of experience working with children, families, and individuals, Dillon brings a comprehensive approach to behavioral health. His specialized training in family dynamics, addiction, and trauma recovery has consistently delivered transformative results. A graduate of Palm Beach Atlantic University and member of the South Florida Association of Christian Counselors.',
        specialties: ['CBT', 'EMDR', 'Family Systems', 'Addiction Recovery', 'Play Therapy', 'Motivational Interviewing'],
        image: PORTRAIT_1,
    },
    {
        name: 'Medical Director',
        title: 'Psychiatrist (MD) — Medication Management',
        bio: 'Our psychiatric team provides integrated medication management alongside therapeutic treatment. This dual approach ensures comprehensive care addressing both psychological and biological dimensions of mental wellness. Patients benefit from coordinated treatment planning between therapy and psychiatric services.',
        specialties: ['Psychiatric Evaluation', 'Medication Management', 'Integrated Care', 'Treatment Planning'],
        image: PORTRAIT_2,
    },
    {
        name: 'Associate Therapist',
        title: 'Licensed Clinical Social Worker',
        bio: 'Bringing compassion and clinical expertise to individual and couples work, our associate therapists expand City Psychology\'s capacity to serve more clients while maintaining the highest standards of personalized care and therapeutic excellence.',
        specialties: ['Individual Therapy', 'Couples Counseling', 'Play Therapy', 'Solution-Focused Brief Therapy'],
        image: PORTRAIT_3,
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
        </>
    );
}