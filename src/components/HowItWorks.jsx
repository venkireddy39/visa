import React from 'react';
import { howItWorksSteps } from '../data/destinations';

export default function HowItWorks() {
  return (
    <section className="section how-it-works-bg">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle" style={{ color: '#d4af37' }}>Simple 5-Step Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-description" style={{ color: 'rgba(248, 250, 252, 0.7)' }}>
            Get your visa processed from the comfort of your home with our streamlined, secure digital portal.
          </p>
        </div>

        <div className="steps-container">
          <div className="steps-line"></div>
          {howItWorksSteps.map((step) => (
            <div key={step.step} className="step-card">
              <div className="step-number-circle">
                {step.step}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
