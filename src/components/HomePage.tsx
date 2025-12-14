'use client'

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import RbiGuidelinesSection from '@/components/RbiGuidelinesSection';
import FaqSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LegalWins from "@/components/LegalWins";
import MediaCoverage from '@/components/MediaCoverage';
import CTAModal from '@/components/CTAModal'
//import WhatsappChatIcon from '@/components/WhatsappChatIcon'
import StickyFooterCTA from "@/components/StickyFooterCTA";

function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollId = searchParams.get("scrollTo");
    if (scrollId) {
      const el = document.getElementById(scrollId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [searchParams]);

  return null;
}

export default function HomePage() {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      {/* <WhatsappChatIcon /> */}
      <CTAModal />
      <main className="bg-white text-gray-900 pb-24 pb-[70px]">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <Testimonials />
        <LegalWins />
        <CTASection />
        <RbiGuidelinesSection />
        <MediaCoverage />
        <FaqSection />
        <ContactSection />
        <Footer />
        <StickyFooterCTA />
      </main>
    </>
  );
}
