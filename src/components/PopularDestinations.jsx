import React from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { allCountries } from '../data/destinations';
import { FaArrowRight, FaSearch } from 'react-icons/fa';

export default function PopularDestinations() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('q') || '';

  const handleApply = (countryId) => {
    navigate(`/apply?country=${countryId}`);
  };

  const filteredCountries = allCountries.filter((country) => 
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="popular-destinations" className="section pop-dest-section">
      <div className="container pop-dest-container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Top Travel Choices</span>
          <h2 className="section-title">Explore Popular Visa Destinations</h2>
          <p className="section-description">
            Choose from the most requested visa destinations and start your journey today.
          </p>
        </div>



        <div className="pop-dest-grid">
          {filteredCountries
            .map((country) => (
            <div
              key={country.id}
              className="pop-dest-card"
              onClick={() => handleApply(country.id)}
            >
              {/* Full Image Background */}
              <img
                src={country.image}
                alt={`${country.name} visa destination`}
                className="pop-card-img"
              />

              {/* Always visible: name at bottom */}
              <div className="pop-card-base-info">
                <h3 className="pop-card-name">{country.name}</h3>
              </div>

              {/* Hover overlay with details sliding up */}
              <div className="pop-card-hover-overlay">
                <div className="pop-card-hover-content">
                  <h3 className="pop-card-hover-name">{country.name}</h3>
                  <span className="pop-card-region-tag">{country.continent}</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleApply(country.id); }}
                    className="pop-card-apply-btn"
                  >
                    Apply Now <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredCountries.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 2rem', color: '#64748b', background: '#f8fafc', borderRadius: '20px' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '0.5rem' }}>No destinations found</h3>
              <p>We couldn't find any countries matching "{searchTerm}". Please try a different search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
