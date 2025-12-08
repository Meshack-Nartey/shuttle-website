// src/components/FeaturesSection.jsx
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h3>What sets us apart</h3>
        <p className="features-subtitle">Three core systems working in perfect synchronization</p>
        
        <div className="feature-cards">
          <div className="feature-card card-1">
            <h4>Real-time GPS <br />tracking</h4>
            <p className="card-subtitle sub-1">Know exactly where every shuttle is, every moment</p>
            <a href="#" className="btn-learn-more">Learn More &gt;</a>
          </div>
          <div className="feature-card card-2">
            <div className="icon-overlay"></div>
            <h4>Secure student authentication</h4>
            <p className="card-subtitle sub-2">Protect your students with verified boarding via student/staff email</p>
            <a href="#" className="btn-learn-more">Learn More &gt;</a>
          </div>
          <div className="feature-card card-3">
            <div className="icon-overlay"></div>
            <h4>Data-driven route optimization</h4>
            <p className="card-subtitle sub-3">Reduce wait times and fuel costs through intelligent algorithms</p>
            <a href="#" className="btn-learn-more">Learn More &gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;