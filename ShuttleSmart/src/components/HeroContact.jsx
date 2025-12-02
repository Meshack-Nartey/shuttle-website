import React from 'react';

const HeroContact = () => {
  return (
    <section className="hero-contact">
      <div className="container hero-contact-content">
        <h1>Ready for smarter shuttles?</h1>
        <p className="hero-contact-subtitle">
          Let us transform your bus logistics today, starting on your campus.
        </p>
        <div className="hero-contact-buttons">
          {/* Note the button style change: two primary buttons */}
          <a href="/demo" className="btn btn-primary btn-connect">Connect</a>
          <a href="/demo" className="btn btn-primary btn-demo-light">Demo</a>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;