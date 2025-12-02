// src/components/CTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h3>Ready to transform your fleet</h3>
        <p className="cta-description">Schedule a strategic call with our logistics team today</p>
        <div className="cta-buttons">
          <Link to="/demo" className="btn btn-secondary">Book a strategic call</Link>
          <Link to="/about" className="btn btn-link">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;