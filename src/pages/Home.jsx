import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import IntegratedCare from '@/components/home/IntegratedCare';
import TeamPreview from '@/components/home/TeamPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import Contact from './Contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesPreview />
      <IntegratedCare />
      <TeamPreview />
      <TestimonialsSection />
      <CTASection />
      <Contact />
    </>
  );
}
