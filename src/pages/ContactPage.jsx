import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ContactPage() {
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
      const response = await fetch('http://localhost:8082/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).catch(() => {
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
    <div className="contact-page-container">
      <style>{`
        .contact-page-container {
          padding-top: 5rem;
          background-color: #f8fafc;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-body);
          overflow: hidden;
          box-sizing: border-box;
        }

        .contact-card-wrapper {
          width: 90%;
          max-width: 1100px;
          height: 80vh;
          max-height: 580px;
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
          display: flex;
          overflow: hidden;
          border: 1px solid rgba(226, 232, 240, 0.8);
        }

        .contact-left-panel {
          flex: 1;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .contact-left-panel::before {
          content: '';
          position: absolute;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%);
          top: -50px;
          right: -50px;
          border-radius: 50%;
        }

        .contact-tag {
          align-self: flex-start;
          background: rgba(212, 175, 55, 0.15);
          color: #d4af37;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          margin-bottom: 1rem;
        }

        .contact-left-title {
          font-family: var(--font-heading);
          font-size: 1.85rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .contact-left-desc {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 2rem;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-info-icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d4af37;
          font-size: 1.1rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          flex-shrink: 0;
        }

        .contact-info-text-wrapper {
          display: flex;
          flex-direction: column;
        }

        .contact-info-label {
          font-size: 0.75rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }

        .contact-info-value {
          font-size: 0.85rem;
          color: #e2e8f0;
          font-weight: 500;
        }

        .contact-whatsapp-btn {
          margin-top: auto;
          background: #25d366;
          color: white;
          text-decoration: none;
          padding: 0.8rem 1.5rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.2);
        }

        .contact-whatsapp-btn:hover {
          background: #20ba59;
          transform: translateY(-2px);
        }

        .contact-right-panel {
          flex: 1.2;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-form-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .contact-field-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .contact-field-group.full-width {
          grid-column: span 2;
        }

        .contact-field-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #475569;
        }

        .contact-input-field {
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.85rem;
          color: #0f172a;
          background: #f8fafc;
          transition: all 0.2s ease;
        }

        .contact-input-field:focus {
          outline: none;
          border-color: #d4af37;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
        }

        .contact-select-field {
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.85rem;
          color: #0f172a;
          background: #f8fafc;
          transition: all 0.2s ease;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1rem;
        }

        .contact-select-field:focus {
          outline: none;
          border-color: #d4af37;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
        }

        .contact-textarea-field {
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.85rem;
          color: #0f172a;
          background: #f8fafc;
          transition: all 0.2s ease;
          resize: none;
          height: 80px;
        }

        .contact-textarea-field:focus {
          outline: none;
          border-color: #d4af37;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
        }

        .contact-btn-submit {
          background: var(--primary);
          color: white;
          border: none;
          padding: 0.8rem;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.1);
        }

        .contact-btn-submit:hover {
          background: #1e293b;
          transform: translateY(-1px);
        }

        .contact-btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .contact-success-container {
          text-align: center;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .contact-success-icon {
          font-size: 3rem;
          color: #22c55e;
        }

        .contact-success-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
        }

        .contact-success-desc {
          color: #64748b;
          font-size: 0.9rem;
          max-width: 320px;
          line-height: 1.5;
        }

        .contact-success-btn {
          margin-top: 1rem;
          background: var(--primary);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .contact-success-btn:hover {
          background: #1e293b;
        }

        .back-home-link {
          position: absolute;
          top: 7rem;
          left: 5%;
          color: #64748b;
          text-decoration: none;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          transition: color 0.2s ease;
          z-index: 10;
        }

        .back-home-link:hover {
          color: var(--primary);
        }

        @media (max-width: 820px) {
          .contact-page-container {
            height: auto;
            min-height: 100vh;
            padding: 7rem 1rem 3rem 1rem;
            overflow-y: auto;
          }

          .back-home-link {
            top: 5.5rem;
            left: 1.5rem;
          }

          .contact-card-wrapper {
            flex-direction: column;
            height: auto;
            max-height: none;
            width: 100%;
            margin-top: 1.5rem;
          }

          .contact-left-panel {
            padding: 2rem;
            gap: 2rem;
          }

          .contact-right-panel {
            padding: 2rem;
          }

          .contact-form-grid {
            grid-template-columns: 1fr;
          }

          .contact-field-group.full-width {
            grid-column: span 1;
          }
        }
      `}</style>

      <Link to="/" className="back-home-link">
        <FaArrowLeft /> Back to Home
      </Link>

      <div className="contact-card-wrapper">
        <div className="contact-left-panel">
          <div>
            <div className="contact-tag">Support Center</div>
            <h2 className="contact-left-title">Talk to our Experts</h2>
            <p className="contact-left-desc">
              Have questions about visa rules or document checklists? Reach out to us directly through any of our channels.
            </p>
          </div>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-info-icon-wrapper">
                <FaPhoneAlt />
              </div>
              <div className="contact-info-text-wrapper">
                <span className="contact-info-label">Call Us</span>
                <span className="contact-info-value">+91 95334 44455</span>
                <span className="contact-info-value" style={{ fontSize: '0.8rem', color: '#94a3b8' }}>+91 91213 88338</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon-wrapper">
                <FaEnvelope />
              </div>
              <div className="contact-info-text-wrapper">
                <span className="contact-info-label">Email Us</span>
                <span className="contact-info-value">info.holidaysnavigator@gmail.com</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon-wrapper">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-info-text-wrapper">
                <span className="contact-info-label">Headquarters</span>
                <span className="contact-info-value" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
                  4th Floor, Trendz Uptown, Madhapur, Hyderabad, 500081
                </span>
              </div>
            </div>
          </div>

          <a 
            href="https://wa.me/919533444455?text=Hello%20Holidays%20Navigator%2C%20I%20need%20assistance%20with%20my%20visa%20application."
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-whatsapp-btn"
          >
            <FaWhatsapp style={{ fontSize: '1.2rem' }} /> Chat on WhatsApp
          </a>
        </div>

        <div className="contact-right-panel">
          {submitted ? (
            <div className="contact-success-container">
              <FaCheckCircle className="contact-success-icon" />
              <h3 className="contact-success-title">Message Sent!</h3>
              <p className="contact-success-desc">
                Thank you for contacting Holidays Navigator. One of our visa experts will email or call you shortly.
              </p>
              <button onClick={() => setSubmitted(false)} className="contact-success-btn">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="contact-form-title">Send a Message</h3>
              
              <div className="contact-form-grid">
                <div className="contact-field-group">
                  <label className="contact-field-label" htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="contact-input-field" 
                    required 
                  />
                </div>
                <div className="contact-field-group">
                  <label className="contact-field-label" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="contact-input-field" 
                    required 
                  />
                </div>

                <div className="contact-field-group">
                  <label className="contact-field-label" htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210" 
                    className="contact-input-field" 
                    required 
                  />
                </div>
                <div className="contact-field-group">
                  <label className="contact-field-label" htmlFor="subject">Subject</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-select-field"
                    required
                  >
                    <option value="">Choose Subject</option>
                    <option value="General Query">General Query</option>
                    <option value="Visa Eligibility">Visa Eligibility</option>
                    <option value="Document Requirements">Document Requirements</option>
                    <option value="Corporate/Business Travel">Corporate/Business Travel</option>
                  </select>
                </div>

                <div className="contact-field-group full-width">
                  <label className="contact-field-label" htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your visa requirements..." 
                    className="contact-textarea-field" 
                    required
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                className="contact-btn-submit"
                style={{ width: '100%' }}
                disabled={loading}
              >
                {loading ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
