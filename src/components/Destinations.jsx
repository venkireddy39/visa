import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { FaClock, FaTag, FaSearch, FaArrowRight } from 'react-icons/fa';

export default function Destinations() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDestinations = destinations.filter(dest => 
    dest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApply = (countryId) => {
    navigate(`/apply?country=${countryId}`);
  };

  return (
    <section id="destinations" className="section">
      <div className="container">
        
        {/* Search Bar Container */}
        <div className="search-container">
          <div className="search-wrapper">
            <input 
              type="text" 
              placeholder="Search visa destination country (e.g. Japan, Singapore...)" 
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary search-btn">
              <FaSearch /> Search
            </button>
          </div>
        </div>

        <div className="section-title-wrapper">
          <span className="section-subtitle">Top Travel Choices</span>
          <h2 className="section-title">Popular Visa Destinations</h2>
          <p className="section-description">
            Quick online visa processing for our most frequented global hotspots. Select a destination to see details and apply.
          </p>
        </div>

        {filteredDestinations.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
            <h3>No destinations matched your search.</h3>
            <p>Try searching for countries like Japan, China, Dubai, Singapore, Thailand, or Malaysia.</p>
          </div>
        ) : (
          <div className="destinations-grid">
            {filteredDestinations.map((dest) => (
              <div key={dest.id} className="destination-card">
                <div className="card-img-wrapper">
                  <img src={dest.image} alt={dest.name} className="destination-img" />
                  <span className="card-badge">{dest.successRate}% Success Rate</span>
                </div>
                
                <div className="card-content">
                  <div className="card-header-row">
                    <h3 className="destination-name">{dest.name}</h3>
                  </div>

                  <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                    {dest.description}
                  </p>
                  
                  <div className="card-details-row">
                    <div>
                      <span className="detail-label">Processing Time</span>
                      <span className="detail-value"><FaClock style={{ marginRight: '4px', verticalAlign: 'middle', color: '#d4af37' }} /> {dest.processingTime}</span>
                    </div>
                    <div>
                      <span className="detail-label">Starting Price</span>
                      <span className="detail-value price-value"><FaTag style={{ marginRight: '4px', verticalAlign: 'middle' }} /> {dest.currency}{dest.startingPrice.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleApply(dest.id)} 
                    className="btn btn-primary card-btn"
                  >
                    Apply Now <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
