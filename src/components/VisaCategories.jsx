import React from 'react';
import { visaCategories } from '../data/destinations';

export default function VisaCategories() {
  return (
    <section id="services" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Visa Categories We Handle</span>
          <h2 className="section-title">Comprehensive Visa Services</h2>
          <p className="section-description">
            Whether you are traveling for business, education, work, or tourism, our experts have you fully covered.
          </p>
        </div>

        <div className="categories-grid">
          {visaCategories.map((cat) => (
            <div key={cat.id} className="category-card">
              <span className="category-icon">{cat.icon}</span>
              <h3 className="category-title">{cat.title}</h3>
              <p className="category-desc">{cat.description}</p>
              
              <ul style={{ 
                listStyle: 'none', 
                textAlign: 'left', 
                marginTop: '1.25rem', 
                fontSize: '0.8rem',
                color: '#64748b',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {cat.features.map((feat, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#d4af37' }}>✓</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
