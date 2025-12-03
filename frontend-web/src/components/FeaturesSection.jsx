// src/components/FeaturesSection.jsx
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h3>What sets us apart</h3>
        <p className="features-subtitle">Three core systems working in perfect synchronization</p>
        
        <div className="feature-cards">
          {/* Feature Card 1 */}
          <div className="feature-card card-1">
            <div className="icon-overlay"></div>
            <h4>Real-time GPS tracking</h4>
            <a href="#" className="btn btn-learn-more">Learn More &gt;</a>
          </div>
          
          {/* Feature Card 2 */}
          <div className="feature-card card-2">
            <div className="icon-overlay"></div>
            <h4>Secure student authentication</h4>
            <a href="#" className="btn btn-learn-more">Learn More &gt;</a>
          </div>
          
          {/* Feature Card 3 */}
          <div className="feature-card card-3">
            <div className="icon-overlay"></div>
            <h4>Data-driven route optimization</h4>
            <a href="#" className="btn btn-learn-more">Learn More &gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;