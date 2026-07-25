import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobeAmericas, FaCheckCircle, FaSearch, FaHome } from 'react-icons/fa';
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hideSearch, setHideSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const handleSearchChange = (e) => {
    const val = e.target.value;
    if (location.pathname !== '/') {
      navigate(`/?q=${val}`);
    } else {
      if (val) {
        setSearchParams({ q: val });
      } else {
        setSearchParams({});
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide search bar when "Get In Touch" / Contact section or Footer enters viewport
      const contactEl = document.getElementById('contact') || document.querySelector('.contact-section') || document.querySelector('footer');
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 80) {
          setHideSearch(true);
        } else {
          setHideSearch(false);
        }
      } else {
        setHideSearch(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.add('has-bottom-search');
    return () => {
      document.body.classList.remove('has-bottom-search');
    };
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">

        <div className="nav-brand-section">

          <div className="nav-guarantee-badge">
            <div className="badge-icon-wrapper">
              <FaCheckCircle className="badge-check" />
            </div>
            <div className="badge-text">
              <span className="badge-text-top">Visas On Time</span>
              <span className="badge-text-bottom">Guaranteed</span>
            </div>
          </div>
        </div>

        <nav className={mobileOpen ? 'mobile-active' : ''}>
          <div className={`nav-search-container ${mobileOpen ? 'mobile-open' : ''} ${hideSearch ? 'search-hidden' : ''}`}>
            <div className="nav-search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search destination country..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="nav-search-input"
                autoComplete="off"
              />
            </div>
          </div>
        </nav>

        <div className="nav-logo-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/" onClick={handleLinkClick} className="nav-home-link" title="Home">
            <FaHome className="nav-home-icon" />
          </Link>
          <Link to="/" onClick={handleLinkClick}>
            <img src="/images/logo.png" alt="Holidays Navigator Logo" className="nav-logo-img" />
          </Link>
        </div>

        <button className="nav-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
