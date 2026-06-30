import React from 'react';
import VisaCategories from '../components/VisaCategories';
import { FaCheckCircle } from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '8rem', backgroundColor: '#f8fafc' }}>
      <VisaCategories />

      {/* Services breakdown details */}
      <section className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-title">Visa Consultancy & Filing</h2>
            <p className="section-description">
              Our end-to-end service covers everything required for your successful application submission.
            </p>
          </div>

          <div className="destinations-grid">
            <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a' }}>1. Document Advisory</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1rem' }}>
                We provide customizable, easy-to-follow document checklists tailored specifically to your nationality, destination, visa type, and personal profiles.
              </p>
              <ul style={{ listStyle: 'none', color: '#64748b', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><FaCheckCircle style={{ color: '#d4af37', marginRight: '6px' }} /> Automated Checklist Builders</li>
                <li><FaCheckCircle style={{ color: '#d4af37', marginRight: '6px' }} /> Photo Resizer & Format Checkers</li>
                <li><FaCheckCircle style={{ color: '#d4af37', marginRight: '6px' }} /> Sample Invitation/Cover Letters</li>
              </ul>
            </div>

            <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a' }}>2. Application Review</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1rem' }}>
                Our expert visa officers perform complete validation checks on your application forms and support documentation to weed out spelling errors or missing data.
              </p>
              <ul style={{ listStyle: 'none', color: '#64748b', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><FaCheckCircle style={{ color: '#d4af37', marginRight: '6px' }} /> Consular Officer Review</li>
                <li><FaCheckCircle style={{ color: '#d4af37', marginRight: '6px' }} /> Error Rectification Assistance</li>
                <li><FaCheckCircle style={{ color: '#d4af37', marginRight: '6px' }} /> Format Standard Compliance</li>
              </ul>
            </div>

            <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a' }}>3. Submission & Tracking</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1rem' }}>
                We submit documents to embassies/consulates, track status, handle appointments (if required), and mail/email passports and visas securely.
              </p>
              <ul style={{ listStyle: 'none', color: '#64748b', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><FaCheckCircle style={{ color: '#d4af37', marginRight: '6px' }} /> Quick Delivery & Collection</li>
                <li><FaCheckCircle style={{ color: '#d4af37', marginRight: '6px' }} /> Real-time tracking status alerts</li>
                <li><FaCheckCircle style={{ color: '#d4af37', marginRight: '6px' }} /> Secure Digital copies storage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
