import React from "react";

const HeroDemo = () => {
  return (
    <section className="hero-demo">
      <div className="container hero-demo-content">
        <h1>Book your demo</h1>
        <p className="hero-demo-subtitle">
          See ShuttleSmart transform your campus logistics in real time
        </p>
        <div className="hero-demo-buttons">
          <a
            href="/contact"
            className="btn btn-primary">
            Schedule
          </a>
          <a
            href="/about"
            className="btn btn-link">
            Learn
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroDemo;
