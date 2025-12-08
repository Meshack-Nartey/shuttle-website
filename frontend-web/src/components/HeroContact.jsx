// src/components/HeroContact.jsx

import React from "react";

const HeroContact = () => {
  return (
    // Change the class name to target the section for positioning
    <section className="hero-contact-video-container">
      {/* 1. THE VIDEO ELEMENT - Positioned first in the DOM for z-index */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline>
        {/* Use a proper <source> tag for better compatibility */}
        <source
          src="/page3.mp4"
          type="video/mp4"
        />
        {/* Fallback content */}
        Your browser does not support the video tag.
      </video>

      {/* 2. THE CONTENT OVERLAY - This must be positioned over the video */}
      <div className="container hero-contact-content">
        {/* The content that sits on top of the video */}
        <h1>Ready for smarter <br/>shuttles?</h1>
        <p className="hero-contact-subtitle">
          Let us transform your bus logistics today, starting on your campus.
        </p>
        <div className="hero-contact-buttons">
          <a
            href="/demo"
            className="btn btn-primary btn-connect">
            Connect
          </a>
          <a
            href="/demo"
            className="btn btn-primary btn-demo-light">
            Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
