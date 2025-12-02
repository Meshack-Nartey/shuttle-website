import React from 'react';

const steps = [
  {
    step: 'Step one',
    title: 'Strategic Needs Assessment',
    description: "Our logistics experts will conduct a tailored strategy session to benchmark your school's current logistics needs and define a clear roadmap for achieving predictable outcomes.",
  },
  {
    step: 'Step two',
    title: 'Live platform demo',
    description: "Witness the ShuttleSmart engine in action. See real-time tracking, secure authentication, and data-driven route optimization systems working in harmony to solve your specific logistics pain points.",
  },
  {
    step: 'Step three',
    title: 'Custom implementation plan',
    description: "Receive a clear, phased roadmap detailing the complete integration of ShuttleSmart into your existing operations, ensuring zero disruption and maximum efficiency.",
  },
  {
    step: 'Step four',
    title: 'Ongoing support',
    description: "Our commitment extends beyond launch. We ensure your ongoing success with continuous support, training, and real-time guidance to maximize the long-term benefits.",
  },
  {
    step: 'Step five',
    title: 'Launch and scale',
    description: "Begin enjoying the benefits of smart campus logistics. Our new, optimized fleet, powered by ShuttleSmart's predictive technology, is ready for a seamless start.",
  },
];

const TimelineSection = () => {
  return (
    <section className="timeline-section">
      <div className="container timeline-container">
        
        {steps.map((item, index) => (
          <div className="timeline-item" key={index}>
            {/* The vertical connector line and step number/bullet */}
            <div className="timeline-dot">
              <span>{index + 1}</span>
            </div>
            
            <div className="timeline-content">
              <p className="timeline-step">{item.step}</p>
              <h3>{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
              <div className="timeline-actions">
                <a href="#" className="btn btn-link timeline-schedule">Schedule</a>
                <a href="#" className="btn btn-link timeline-learn">Learn More +</a>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default TimelineSection;
