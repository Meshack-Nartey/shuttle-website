// src/pages/DemoPage.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Unique Demo Page Components
import HeroDemo from '../components/HeroDemo';
import TimelineSection from '../components/TimelineSection';
import DataProtectionSection from '../components/DataProtectionSection';

const DemoPage = () => {
  return (
    <>
   
      <main>
        <HeroDemo />
        <TimelineSection />
        <DataProtectionSection />
      </main>
    </>
  );
};

export default DemoPage;