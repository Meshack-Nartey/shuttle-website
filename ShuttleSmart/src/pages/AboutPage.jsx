import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA'; // Reusable CTA component

// Unique About Page Components
import HeroAbout from '../components/HeroAbout';
import WhyBuiltSection from '../components/WhyBuiltSection';
import HowItWorksSection from '../components/HowItWorksSection';
import HistorySection from '../components/HistorySection';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroAbout />
        <WhyBuiltSection />
        <HowItWorksSection />
        <HistorySection />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;