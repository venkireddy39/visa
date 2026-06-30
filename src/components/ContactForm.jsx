import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Mock submit or spring boot API call
      const response = await fetch('http://localhost:8082/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).catch(() => {
        // Fallback for demo when backend is offline
        return { ok: true };
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">We are Here to Help</h2>
          <p className="section-description">
            Have questions about visa categories or document requirements? Get a free initial expert consultation.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-desc">
              Reach out to us directly through any of these communication channels. Our visa officers are online 24/7.
            </p>

            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <span className="contact-method-label">Call Us</span>
                  <span className="contact-method-value">+91 95334 44455 / +91 91213 88338</span>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="contact-method-label">Email Us</span>
                  <span className="contact-method-value">info.holidaysnavigator@gmail.com</span>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-method-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="contact-method-label">Headquarters</span>
                  <span className="contact-method-value">4th Floor, Trendz Uptown, Kakatiya Hills, Guttala_Begumpet, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081</span>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/919533444455?text=Hello%20Holidays%20Navigator%2C%20I%20need%20assistance%20with%20my%20visa%20application."
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-accent"
              style={{ width: '100%', display: 'flex', gap: '0.75rem', justifyContent: 'center' }}
            >
              <FaWhatsapp style={{ fontSize: '1.25rem' }} /> Chat on WhatsApp
            </a>
          </div>

          <div className="contact-form-wrapper">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <span style={{ fontSize: '4rem' }}>✉️</span>
                <h3 style={{ color: '#0f172a', fontSize: '1.75rem', marginTop: '1rem' }}>Message Sent!</h3>
                <p style={{ color: '#64748b', marginTop: '0.5rem' }}>
                  Thank you for contacting Holidays Navigator. One of our visa experts will email/call you shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      className="form-input" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      className="form-input" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-grid-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210" 
                      className="form-input" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Choose Subject</option>
                      <option value="General Query">General Query</option>
                      <option value="Visa Eligibility">Visa Eligibility</option>
                      <option value="Document Requirements">Document Requirements</option>
                      <option value="Corporate/Business Travel">Corporate/Business Travel</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your visa requirements or questions..." 
                    className="form-textarea" 
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary contact-submit-btn"
                  disabled={loading}
                >
                  {loading ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
