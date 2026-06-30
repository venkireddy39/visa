import React from 'react';
import { whyChooseUs } from '../data/destinations';

export default function WhyChooseUs() {
  return (
    <section className="section" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title">The Holidays Navigator Advantage</h2>
          <p className="section-description">
            We combine cutting-edge technology with visa consultancy experience to provide an unmatched success rate.
          </p>
        </div>

        <div className="features-grid">
          {whyChooseUs.map((feat, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                {feat.icon}
              </div>
              <div className="feature-content">
                <h3>{feat.title}</h3>
                <p>{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
