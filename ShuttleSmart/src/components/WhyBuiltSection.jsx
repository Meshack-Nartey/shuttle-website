import React from 'react';
import { Link } from 'react-router-dom';

const WhyBuiltSection = () => {
  return (
    <section className="why-built-section">
      <div className="container">
        <h2>Why we built ShuttleSmart</h2>
        
        <div className="reason-card">
          <div className="reason-icon icon-1">
            {/* Placeholder for the icon image (e.g., student at desk) */}
            <img src="/icon-student-desk.svg" alt="Student at desk icon" />
          </div>
          <div className="reason-text">
            <h4>1. For University & Higher Education Campuses (Student Focus: Safety)</h4>
            <ul>
              <li>The University administration is heavily burdened by the manual management of the daily bus delivery, safety, and security of Students.</li>
              <li>Students and parents are concerned about the security, safety, and late arrival of the bus. They want reliable, safe and predictable ride daily.</li>
              <li>Focus on Learning: By reducing wait times and travel uncertainty, students spend less time worrying about transport and more time focused on their academic lives, increasing productivity by an average of 10%.</li>
              <li>Safety & Security: The Campus can access our platform with real-time data, letting procedures, data attachments, and documentation comply with relevant sector requirements for student safety.</li>
            </ul>
          </div>
        </div>

        <div className="reason-card">
          <div className="reason-icon icon-2">
            {/* Placeholder for the icon image (e.g., teacher with kids) */}
            <img src="/icon-teacher-kids.svg" alt="Teacher with kids icon" />
          </div>
          <div className="reason-text">
            <h4>2. For Primary and Secondary Schools (Guardian Concern: Safety & Transparency)</h4>
            <ul>
              <li>The school administration is heavily burdened by the manual management of the daily bus delivery, safety, and security of students.</li>
              <li>Live Tracking for Parents: Parents can safely track the school bus of their children as the bus is moving, from departure to arrival at school and back home.</li>
              <li>Transparency & Accountability: The School administration can use our data platform to access reliable information about all students.</li>
              <li>Safe Pick-ups: Students and parents can trust to board the bus when it is immediately arriving, knowing children are safe and ready to board without long wait times.</li>
            </ul>
          </div>
        </div>

        <div className="demo-link">
          <Link to="/demo" className="btn btn-link">Book a Demo &gt;</Link>
        </div>
      </div>
    </section>
  );
};

export default WhyBuiltSection;