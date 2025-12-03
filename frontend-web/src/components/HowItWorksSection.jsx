import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section">
      <div className="container">
        <h2>How it works</h2>
        <div className="works-cards-container">
          
          {/* Driver App Card */}
          <div className="works-card">
            <div className="app-info">
              <h3>Driver App</h3>
              <ul>
                <li>Driver Login</li>
                <li>Live GPS Broadcast</li>
                <li>Route Completion</li>
              </ul>
              <Link to="/demo" className="btn btn-link">Book a Demo &gt;</Link>
            </div>
            <div className="app-image-wrapper">
              {/* Driver Image */}
              <img src="/driver-app-image.jpg" alt="Bus driver using app" className="app-image" />
            </div>
          </div>
          
          {/* Student App Card */}
          <div className="works-card">
            <div className="app-image-wrapper">
              {/* Student Image */}
              <img src="/student-app-image.jpg" alt="Student using app on phone" className="app-image" />
            </div>
            <div className="app-info">
              <h3>Student App</h3>
              <ul>
                <li>Student ID Login</li>
                <li>Bus ETA/Live Route</li>
                <li>Filter by Destination</li>
                <li>Student Check-in/out</li>
                <li>Review Trip History</li>
              </ul>
              <Link to="/demo" className="btn btn-link">Book a Demo &gt;</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;