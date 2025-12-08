// src/pages/HomePage.jsx

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroHome from "../components/HeroHome";
import ReliabilitySection from "../components/ReliabilitySection";
import FeaturesSection from "../components/FeaturesSection";
import CTA from "../components/CTA"; // This is also your final section

const HomePage = () => {
  return (
    <div>
      <main>
        <HeroHome />
        <ReliabilitySection />
        <FeaturesSection />
        <CTA />
      </main>
    </div>
  );
};

export default HomePage;
