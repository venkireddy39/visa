import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAmericas, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <h2 className="logo" style={{ cursor: 'pointer', fontSize: '1.5rem', fontWeight: 'bold' }} onClick={handleScrollToTop}>
              <FaGlobeAmericas /> Holidays Navigator
            </h2>
            <p>
              Holidays Navigator is a premium global visa solution provider enabling hassle-free, secure, and fast visa application processing for tourist and business purposes across 100+ countries.
            </p>
            <div className="footer-social-row">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-circle-link">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-circle-link">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-circle-link">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle-link">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Visa Categories</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/services" onClick={handleScrollToTop}>Tourist Visa</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/services" onClick={handleScrollToTop}>Business Visa</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Popular Countries</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/apply?country=japan" onClick={handleScrollToTop}>Japan Visa</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/apply?country=china" onClick={handleScrollToTop}>China Visa</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/apply?country=dubai" onClick={handleScrollToTop}>Dubai (UAE) Visa</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/apply?country=singapore" onClick={handleScrollToTop}>Singapore Visa</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/apply?country=thailand" onClick={handleScrollToTop}>Thailand Visa</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/" onClick={handleScrollToTop}>Home</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/about" onClick={handleScrollToTop}>About Us</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/contact" onClick={handleScrollToTop}>Contact Support</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/track" onClick={handleScrollToTop}>Track Application</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/admin" onClick={handleScrollToTop}>Admin Area</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Holidays Navigator. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
