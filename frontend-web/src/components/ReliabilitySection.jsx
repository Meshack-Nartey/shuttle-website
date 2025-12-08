// src/components/ReliabilitySection.jsx
import React from "react";

const ReliabilitySection = () => {
  return (
    <section className="reliability-section">
      <h2>Built on reliability</h2>
      <div className="container reliability-grid">
        <div className="stats-column">
          <div className="stat-card">
            <p className="stat-number">99.9%</p>
            <p className="stat-label">Uptime guarantee</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">2-Second</p>
            <p className="stat-label">Live tracking updates</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">100k+</p>
            <p className="stat-label">Students served daily</p>
          </div>
        </div>

        <div className="image-column">
          <img
            src="/page1-2.jpeg"
            alt="Student boarding a bus"
            className="reliability-img"
          />
        </div>
      </div>
    </section>
  );
};

export default ReliabilitySection;
