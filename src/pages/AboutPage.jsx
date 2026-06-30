import React from 'react';
import { FaUsers, FaGlobe, FaCertificate, FaShieldAlt } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '8rem', backgroundColor: '#f8fafc' }}>
      
      {/* Intro Section */}
      <section className="section" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '3rem' }}>
            <span className="section-subtitle">Who We Are</span>
            <h2 className="section-title">Simplifying Global Travel</h2>
            <p className="section-description">
              Holidays Navigator is built by passionate tech innovators and certified visa consultants to offer quick and reliable travel documents processing for travelers worldwide.
            </p>
          </div>

          <div className="contact-grid">
            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f172a' }}>Our Core Mission</h3>
              <p style={{ color: '#64748b', marginBottom: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
                We believe that borders shouldn't be barriers. Preparing travel applications can be tedious, confusing, and stressful. That's why we built Holidays Navigator—to combine digital optimization with elite customer service, rendering visa applications seamless, simple, and lightning fast.
              </p>
              <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.7' }}>
                With direct embassy integrations, automated checklists, AI doc check validation, and expert support, we ensure over 98% of applications succeed on their first attempt.
              </p>
            </div>
            <div style={{ 
              background: 'linear-gradient(135deg, #0f172a, #1e293b)', 
              borderRadius: '24px', 
              padding: '3rem', 
              color: '#ffffff',
              border: '1px solid rgba(212,175,55,0.2)'
            }}>
              <h4 style={{ color: '#d4af37', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Our History in Numbers</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
                  <span>Founded Year</span>
                  <strong style={{ color: '#d4af37' }}>2021</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
                  <span>Active Countries Served</span>
                  <strong style={{ color: '#d4af37' }}>100+ Countries</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
                  <span>Approved Applications</span>
                  <strong style={{ color: '#d4af37' }}>10,000+ Visas</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.25rem' }}>
                  <span>Client Rating Score</span>
                  <strong style={{ color: '#d4af37' }}>4.9/5.0</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">What Guides Us</span>
            <h2 className="section-title">Our Value Pillars</h2>
            <p className="section-description">
              Our core values form the foundation of our work, driving us to provide the best possible visa support.
            </p>
          </div>

          <div className="destinations-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            
            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: '#d4af37', marginBottom: '1rem' }}><FaShieldAlt /></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Absolute Trust</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>We operate with complete data privacy compliance and transparent fees.</p>
            </div>

            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: '#d4af37', marginBottom: '1rem' }}><FaGlobe /></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Global Reach</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Comprehensive visa operations for 100+ countries under one platform.</p>
            </div>

            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: '#d4af37', marginBottom: '1rem' }}><FaUsers /></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Expert Team</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>A select group of visa counselors with decades of consular experience.</p>
            </div>

            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: '#d4af37', marginBottom: '1rem' }}><FaCertificate /></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Proven Success</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>98% application approval rate with double review policy.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
