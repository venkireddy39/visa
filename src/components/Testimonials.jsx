import React from 'react';
import { testimonials } from '../data/destinations';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Real Success Stories</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-description">
            Over 10,000+ visas processed successfully. Read feedback from some of our recent travelers.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} style={{ color: i < t.rating ? '#d4af37' : '#e2e8f0' }} />
                  ))}
                </div>
                <p className="testimonial-text">
                  {t.text}
                </p>
              </div>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="author-name">{t.name}</h4>
                  <span className="author-location">{t.location}</span>
                </div>
                <span className="testimonial-country-tag">{t.country}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
