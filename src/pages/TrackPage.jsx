import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch, FaPassport, FaCheckCircle, FaFileSignature, FaPaperPlane, FaStamp } from 'react-icons/fa';

export default function TrackPage() {
  const [searchParams] = useSearchParams();
  const queryId = searchParams.get('id') || '';

  const [trackingId, setTrackingId] = useState(queryId);
  const [application, setApplication] = useState(null);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState(null);

  const fetchApplicationDetails = async (id) => {
    if (!id) return;
    setError(null);
    setSearched(true);

    try {
      // Fetch from Spring Boot or fallback to localStorage
      const response = await fetch(`http://localhost:8082/api/visa/track/${id}`).catch(() => {
        // Fallback for offline mode using localStorage
        return { ok: false };
      });

      if (response.ok) {
        const data = await response.json();
        setApplication(data);
      } else {
        // Fallback check from localStorage
        const apps = JSON.parse(localStorage.getItem('visa_applications') || '[]');
        const matched = apps.find(app => app.trackingId.toLowerCase() === id.toLowerCase());
        
        if (matched) {
          setApplication(matched);
        } else {
          // If no matching items in local storage, check if they typed a dummy one for demo
          if (id.startsWith('VV-')) {
            setApplication({
              trackingId: id,
              fullName: 'Demo Applicant',
              countryName: 'Japan',
              visaType: 'tourist',
              status: 'REVIEWING',
              submissionDate: new Date().toLocaleDateString(),
              passportNumber: 'Z8765432'
            });
          } else {
            setApplication(null);
            setError('Application reference number not found. Please verify the ID.');
          }
        }
      }
    } catch (err) {
      setError('An error occurred while tracking the application.');
    }
  };

  useEffect(() => {
    if (queryId) {
      setTrackingId(queryId);
      fetchApplicationDetails(queryId);
    }
  }, [queryId]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchApplicationDetails(trackingId.trim());
  };

  // Stepper calculations
  const getStepProgress = (status) => {
    switch (status.toUpperCase()) {
      case 'SUBMITTED': return 1;
      case 'REVIEWING': return 2;
      case 'EMBASSY_PROCESSING':
      case 'PROCESSING': return 3;
      case 'APPROVED':
      case 'ISSUED': return 4;
      default: return 1;
    }
  };

  const currentProgressStep = application ? getStepProgress(application.status) : 1;

  return (
    <div style={{ paddingTop: '8rem', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <section className="section" style={{ padding: '4rem 0' }}>
        <div className="container">
          
          <div className="section-title-wrapper" style={{ marginBottom: '3rem' }}>
            <span className="section-subtitle">Real-time Visa Status</span>
            <h2 className="section-title">Track Application</h2>
            <p className="section-description">
              Enter your unique tracking reference number (e.g. VV-123456) to monitor your visa application process.
            </p>
          </div>

          <div className="tracker-container">
            <form onSubmit={handleSearchSubmit} className="tracker-search-box">
              <input 
                type="text" 
                placeholder="Enter Tracking ID (e.g. VV-123456)" 
                className="tracker-input"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-accent">
                <FaSearch /> Track Status
              </button>
            </form>

            {searched && application && (
              <div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  paddingBottom: '1.5rem',
                  marginBottom: '2.5rem'
                }}>
                  <div>
                    <h3 style={{ color: '#ffffff', fontSize: '1.5rem', fontFamily: 'Outfit' }}>
                      Application for {application.fullName}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                      Passport No: <strong>{application.passportNumber}</strong> | Country: <strong>{application.countryName}</strong>
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className={`status-badge ${application.status.toLowerCase()}`}>
                      {application.status}
                    </span>
                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#d4af37', marginTop: '0.5rem' }}>
                      Submitted: {application.submissionDate}
                    </span>
                  </div>
                </div>

                {/* Status Stepper */}
                <div className="tracker-steps">
                  <div className="tracker-line"></div>
                  <div 
                    className="tracker-progress-line"
                    style={{ width: `${((currentProgressStep - 1) / 3) * 84}%` }}
                  ></div>

                  <div className={`tracker-step ${currentProgressStep >= 1 ? 'completed' : ''} ${currentProgressStep === 1 ? 'active' : ''}`}>
                    <div className="tracker-dot">
                      <FaPaperPlane />
                    </div>
                    <span className="tracker-label">Submitted</span>
                    <span className="tracker-date">{application.submissionDate}</span>
                  </div>

                  <div className={`tracker-step ${currentProgressStep >= 2 ? 'completed' : ''} ${currentProgressStep === 2 ? 'active' : ''}`}>
                    <div className="tracker-dot">
                      <FaFileSignature />
                    </div>
                    <span className="tracker-label">In Review</span>
                    {currentProgressStep >= 2 && <span className="tracker-date">Under Inspection</span>}
                  </div>

                  <div className={`tracker-step ${currentProgressStep >= 3 ? 'completed' : ''} ${currentProgressStep === 3 ? 'active' : ''}`}>
                    <div className="tracker-dot">
                      <FaStamp />
                    </div>
                    <span className="tracker-label">Embassy processing</span>
                    {currentProgressStep >= 3 && <span className="tracker-date">Sent to Consulate</span>}
                  </div>

                  <div className={`tracker-step ${currentProgressStep >= 4 ? 'completed' : ''} ${currentProgressStep === 4 ? 'active' : ''}`}>
                    <div className="tracker-dot">
                      <FaCheckCircle />
                    </div>
                    <span className="tracker-label">Approved & Issued</span>
                    {currentProgressStep >= 4 && <span className="tracker-date">e-Visa Sent</span>}
                  </div>
                </div>
              </div>
            )}

            {searched && error && (
              <div style={{ textAlign: 'center', padding: '2rem 0', color: '#ef4444' }}>
                <h3>⚠️ {error}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>
                  If you just submitted an application, try using status tracking code generated during completion.
                </p>
              </div>
            )}

            {!searched && (
              <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', padding: '2rem 0' }}>
                <span style={{ fontSize: '3rem' }}>🔍</span>
                <p style={{ marginTop: '1rem' }}>Enter a reference number above to check the real-time application timeline status.</p>
              </div>
            )}

          </div>

        </div>
      </section>
    </div>
  );
}
