import React from "react";
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <section className="hero-home">
      <div className="hero-content container">
        <div className="text-block">
          <h1>
            ShuttleSmart: <br /> Enjoy Predictable Rides
          </h1>
          <p>
            No more wasting time waiting at stops for a shuttle that might never
            come. At ShuttleSmart, we eliminate that frustration by allowing you
            track your school shuttle in real-time. Our app lets you select
            where you are going and shows you only the relevant buses around you
            that are headed to your location. You can set timely alerts to be
            notified when a bus is approaching.
          </p>
          <div className="hero-buttons">
            <Link
              to="/demo"
              className="btn btn-secondary">
              Book a strategy call
            </Link>
            <Link
              to="/about"
              className="btn btn-link">
              Download app
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
