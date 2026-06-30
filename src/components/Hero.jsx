import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { FaPassport, FaCheckCircle, FaHeadphonesAlt, FaGlobe, FaSearch } from 'react-icons/fa';

export default function Hero({ onCheckEligibility }) {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [nationality, setNationality] = useState('Indian');
  const [visaType, setVisaType] = useState('tourist');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (destination) {
      navigate(`/apply?country=${destination}&type=${visaType}`);
    } else {
      navigate('/apply');
    }
  };

  const handleCheckEligibility = (e) => {
    e.preventDefault();
    if (destination) {
      const selectedDest = destinations.find(d => d.id === destination || d.name.toLowerCase() === destination.toLowerCase());
      onCheckEligibility({
        country: selectedDest ? selectedDest.name : destination,
        nationality,
        visaType,
        eligible: true,
        fee: selectedDest ? selectedDest.startingPrice : 3500,
        time: selectedDest ? selectedDest.processingTime : '3-5 Business Days'
      });
    } else {
      alert('Please select a destination country first.');
    }
  };

  return (
    <section className="hero-section">
      {/* Video Background */}
      <div className="hero-video-container">
        <video 
          className="hero-video"
          src="https://assets.mixkit.co/videos/preview/mixkit-taking-photos-at-the-airport-43283-large.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-grid">
          <div className="hero-text-content">
            <span className="badge-tag">
              <FaPassport /> Instant e-Visa Platform
            </span>
            <h1 className="hero-title">
              Your Gateway to <span>Global Travel</span>
            </h1>
            <p className="hero-subtitle">
              Fast, Reliable & Expert Visa Assistance for 100+ Countries. Submit your application online in just 5 minutes.
            </p>

            <div className="hero-ctas">
              <button onClick={() => navigate('/apply')} className="btn btn-accent">
                Apply Now
              </button>
              <a href="#contact" className="btn btn-outline-dark">
                Free Consultation
              </a>
            </div>

            <div className="hero-stats-row">
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Visas Processed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Countries Covered</span>
              </div>
            </div>
          </div>

          <div className="hero-widget-container">
            <div className="glass-widget">
              <h3 className="widget-title">Check Visa Eligibility</h3>
              
              <form onSubmit={handleCheckEligibility}>
                <div className="widget-form-group">
                  <label>Where are you going?</label>
                  <select 
                    className="widget-select" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  >
                    <option value="">Select Destination Country</option>
                    {destinations.map(d => (
                      <option key={d.id} value={d.id}>{d.name}</option>
                    ))}
                  </select>
                </div>

                <div className="widget-form-group">
                  <label>Your Nationality</label>
                  <select 
                    className="widget-select"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                  >
                    <option value="Indian">India (Indian Citizen)</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>

                <div className="widget-form-group">
                  <label>Visa Purpose</label>
                  <select 
                    className="widget-select"
                    value={visaType}
                    onChange={(e) => setVisaType(e.target.value)}
                  >
                    <option value="tourist">Tourist / Leisure Travel</option>
                    <option value="business">Business / Conference</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-accent widget-submit-btn">
                  Check Eligibility & Price
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
