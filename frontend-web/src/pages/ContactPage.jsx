// src/pages/ContactPage.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroContact from '../components/HeroContact'; // Unique Hero/Banner
import ContactFormSection from '../components/ContactFormSection'; // Unique Form

const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroContact />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;