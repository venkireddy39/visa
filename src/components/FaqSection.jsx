import React, { useState } from 'react';
import { faqData } from '../data/destinations';
import { FaPlus } from 'react-icons/fa';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Everything you need to know about global visa requirements, processing timelines, fees, and tracking.
          </p>
        </div>

        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question-btn" 
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <FaPlus className="faq-icon" />
              </button>
              
              <div className="faq-answer">
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
