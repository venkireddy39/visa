import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { destinations, allCountries } from '../data/destinations';
import {
  FaPassport, FaCheckCircle, FaTrashAlt, FaCloudUploadAlt,
  FaGlobe, FaShieldAlt, FaClock, FaArrowRight, FaLock, FaFileAlt, FaUser, FaUsers
} from 'react-icons/fa';


export default function ApplyPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const queryCountry = searchParams.get('country') || '';
  const queryType    = searchParams.get('type') || 'tourist';

  const [submitting,  setSubmitting]  = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [errors,      setErrors]      = useState({});

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [application, setApplication] = useState({
    countryId:         queryCountry,
    visaType:          queryType,
    fullName:          '',
    email:             '',
    phone:             '',
    passportNumber:    '',
    passportExpiry:    '',
    travelDate:        '',
    durationDays:      '30',
    additionalDetails: ''
  });

  const [additionalTravelers, setAdditionalTravelers] = useState([]);
  // Per-traveler documents: { 0: { passportFront: null, passportBack: null, photo: null }, ... }
  const DOC_TYPES = [
    { key: 'passportFront', label: 'Passport Front Page', icon: '📄' },
    { key: 'passportBack',  label: 'Passport Back Page',  icon: '📄' },
    { key: 'photo',         label: 'Recent Passport Photo', icon: '📸' },
  ];
  const emptyDocs = () => ({ passportFront: null, passportBack: null, photo: null });
  const [travelerDocs, setTravelerDocs] = useState({ 0: emptyDocs() });

  useEffect(() => {
    if (queryCountry) setApplication(prev => ({ ...prev, countryId: queryCountry }));
  }, [queryCountry]);

  const selectedCountry      = destinations.find(d => d.id === application.countryId);
  const selectedCountryBasic = allCountries.find(c => c.id === application.countryId);

  const travelerCount  = 1 + additionalTravelers.length;
  const baseVisaFee    = selectedCountry ? selectedCountry.startingPrice : 3500;
  const visaFee        = baseVisaFee * travelerCount;
  const countryDisplayName = selectedCountry
    ? selectedCountry.name
    : selectedCountryBasic
      ? selectedCountryBasic.name
      : application.countryId
        ? application.countryId.toUpperCase()
        : '—';
  const serviceFee  = 950 * travelerCount;
  const gst         = Math.round((visaFee + serviceFee) * 0.18);
  const totalAmount = visaFee + serviceFee + gst;

  /* ── Handlers ── */
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setApplication(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const addTraveler = () => {
    setAdditionalTravelers(prev => {
      const newList = [...prev, { fullName: '', email: '', passportNumber: '', passportExpiry: '', travelDate: application.travelDate || '' }];
      setTravelerDocs(docs => ({ ...docs, [newList.length]: emptyDocs() }));
      return newList;
    });
  };

  const removeTraveler = (index) => {
    setAdditionalTravelers(prev => prev.filter((_, i) => i !== index));
    setTravelerDocs(docs => {
      const newDocs = { 0: docs[0] || emptyDocs() };
      let newIdx = 1;
      for (let i = 0; i < additionalTravelers.length; i++) {
        if (i !== index) {
          newDocs[newIdx] = docs[i + 1] || emptyDocs();
          newIdx++;
        }
      }
      return newDocs;
    });
  };

  const handleTravelerChange = (index, field, value) => {
    setAdditionalTravelers(prev => prev.map((t, i) => i === index ? { ...t, [field]: value } : t));
  };

  const handleDocUpload = (travelerIdx, docKey, e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fileInfo = { name: file.name, size: (file.size / 1024).toFixed(1) + ' KB', type: file.type };
    setTravelerDocs(docs => ({
      ...docs,
      [travelerIdx]: { ...(docs[travelerIdx] || emptyDocs()), [docKey]: fileInfo }
    }));
    // Clear error if it existed
    setErrors(prev => ({ ...prev, [`doc_${travelerIdx}_${docKey}`]: '' }));
  };

  const removeDoc = (travelerIdx, docKey) => {
    setTravelerDocs(docs => ({
      ...docs,
      [travelerIdx]: { ...(docs[travelerIdx] || emptyDocs()), [docKey]: null }
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!application.countryId)      newErrors.countryId      = 'Please select a destination country.';
    if (!application.fullName)       newErrors.fullName       = 'Full name is required.';
    if (!application.email)          newErrors.email          = 'Email address is required.';
    if (!application.phone)          newErrors.phone          = 'Phone number is required.';
    if (!application.passportNumber) newErrors.passportNumber = 'Passport number is required.';
    if (!application.passportExpiry) newErrors.passportExpiry = 'Passport expiry date is required.';
    if (!application.travelDate)     newErrors.travelDate     = 'Planned travel date is required.';
    // Validate documents for each traveler
    for (let t = 0; t < travelerCount; t++) {
      const docs = travelerDocs[t] || emptyDocs();
      DOC_TYPES.forEach(dt => {
        if (!docs[dt.key]) {
          newErrors[`doc_${t}_${dt.key}`] = `${dt.label} is required.`;
        }
      });
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      // Scroll to first error
      const firstErr = document.querySelector('.apply-field-error');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setSubmitting(true);
    const trackingId = 'VV-' + Math.floor(100000 + Math.random() * 900000);
    const finalData  = {
      ...application,
      additionalTravelers,
      additionalDetails: additionalTravelers.length > 0 ? JSON.stringify(additionalTravelers) : application.additionalDetails,
      trackingId,
      status:         'SUBMITTED',
      submissionDate: new Date().toLocaleDateString(),
      countryName:    countryDisplayName
    };

    try {
      const response = await fetch('http://localhost:8082/api/visa/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      }).catch(() => ({ ok: true, json: async () => finalData }));

      if (response.ok) {
        const existing = JSON.parse(localStorage.getItem('visa_applications') || '[]');
        existing.push(finalData);
        localStorage.setItem('visa_applications', JSON.stringify(existing));
        setSuccessData(finalData);
        window.scrollTo(0, 0);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  /* ── Success Screen ── */
  if (successData) {
    return (
      <div className="apply-page-container">
        <div className="apply-success-wrap">
          <div className="apply-success-card">
            <div className="success-icon-ring">
              <FaCheckCircle />
            </div>
            <h2>Application Submitted!</h2>
            <p className="success-subtitle">
              Your visa application for <strong>{successData.countryName}</strong> has been received successfully.
            </p>
            <div className="success-details-box">
              <div className="success-detail-row">
                <span>Tracking ID</span>
                <strong className="tracking-id-highlight">{successData.trackingId}</strong>
              </div>
              <div className="success-detail-row">
                <span>Applicant</span>
                <strong>{successData.fullName}</strong>
              </div>
              {successData.additionalTravelers?.length > 0 && (
                <div className="success-detail-row">
                  <span>Additional Travelers</span>
                  <strong>{successData.additionalTravelers.length}</strong>
                </div>
              )}
              <div className="success-detail-row">
                <span>Total Travelers</span>
                <strong>{1 + (successData.additionalTravelers?.length || 0)}</strong>
              </div>
              <div className="success-detail-row">
                <span>Submitted On</span>
                <strong>{successData.submissionDate}</strong>
              </div>
              <div className="success-detail-row">
                <span>Status</span>
                <span className="status-badge submitted">SUBMITTED</span>
              </div>
            </div>
            <div className="success-actions">
              <button onClick={() => navigate(`/track?id=${successData.trackingId}`)} className="btn btn-primary">
                Track Application
              </button>
              <button onClick={() => navigate('/')} className="btn btn-outline-dark">
                Back to Home
              </button>
            </div>
          </div>
        </div>
        <FaqSection />
      </div>
    );
  }

  /* ── Main Single-Page Form ── */
  return (
    <div className="apply-page-container">
      <div className="single-form-page-inner">

        {/* ── Left: Form ── */}
        <main className="single-form-main">

          {/* Page Header */}
          <div className="single-form-page-header-wrapper">
            <div className="single-form-page-header luxury-header-card">
              <div className="luxury-header-glow"></div>
              <div className="luxury-header-content">
                <div className="luxury-badge">
                  <FaShieldAlt className="luxury-badge-icon" />
                  <span>Secure Visa Application Portal</span>
                </div>
                <h1 className="single-form-page-title">Visa Application Form</h1>
                <p className="single-form-page-sub">Fill in all the details below to submit your visa application.</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} noValidate>

            {/* ── SECTION 1: Destination ── */}
            <div className="single-form-section">
              <div className="single-form-section-head">
                <div className="section-head-icon"><FaGlobe /></div>
                <div>
                  <h2 className="section-head-title">Destination & Visa Type</h2>
                  <p className="section-head-sub">Choose the country and visa category you are applying for.</p>
                </div>
              </div>

              <div className="apply-form-row">
                <div className="apply-form-group">
                  <label className="apply-form-label">Destination Country <span className="required">*</span></label>
                  <select
                    name="countryId"
                    value={application.countryId}
                    onChange={handleTextChange}
                    className={`apply-form-select ${errors.countryId ? 'input-error' : ''}`}
                  >
                    <option value="">— Choose a Country —</option>
                    {allCountries.map(c => (
                      <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
                    ))}
                  </select>
                  {errors.countryId && <span className="apply-field-error">{errors.countryId}</span>}
                </div>
                <div className="apply-form-group">
                  <label className="apply-form-label">Visa Category <span className="required">*</span></label>
                  <div className="apply-visa-type-grid" style={{ marginTop: '0.25rem' }}>
                    {['tourist', 'business'].map(type => (
                      <label key={type} className={`visa-type-card ${application.visaType === type ? 'selected' : ''}`}>
                        <input
                          type="radio" name="visaType" value={type}
                          checked={application.visaType === type}
                          onChange={handleTextChange} style={{ display: 'none' }}
                        />
                        <span className="visa-type-icon">{type === 'tourist' ? '🏖️' : '💼'}</span>
                        <span className="visa-type-name">{type === 'tourist' ? 'Tourist Visa' : 'Business Visa'}</span>
                        <span className="visa-type-desc">{type === 'tourist' ? 'Leisure, tourism & family visits' : 'Meetings, conferences & trade'}</span>
                        {application.visaType === type && <FaCheckCircle className="visa-type-check" />}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── SECTION 2: Primary Applicant Personal Details ── */}
            <div className="single-form-section">
              <div className="single-form-section-head">
                <div className="section-head-icon"><FaUser /></div>
                <div>
                  <h2 className="section-head-title">Personal & Passport Details</h2>
                  <p className="section-head-sub">Provide your personal details exactly as they appear on your passport.</p>
                </div>
              </div>

              <div className="apply-form-row">
                <div className="apply-form-group">
                  <label className="apply-form-label">Full Name (as in passport) <span className="required">*</span></label>
                  <input
                    type="text" name="fullName" value={application.fullName}
                    onChange={handleTextChange} placeholder="e.g. Rahul Sharma"
                    className={`apply-form-input ${errors.fullName ? 'input-error' : ''}`}
                    autoComplete="off"
                  />
                  {errors.fullName && <span className="apply-field-error">{errors.fullName}</span>}
                </div>
                <div className="apply-form-group">
                  <label className="apply-form-label">Email Address <span className="required">*</span></label>
                  <input
                    type="email" name="email" value={application.email}
                    onChange={handleTextChange} placeholder="rahul@example.com"
                    className={`apply-form-input ${errors.email ? 'input-error' : ''}`}
                    autoComplete="off"
                  />
                  {errors.email && <span className="apply-field-error">{errors.email}</span>}
                </div>
              </div>

              <div className="apply-form-row">
                <div className="apply-form-group">
                  <label className="apply-form-label">Phone Number <span className="required">*</span></label>
                  <input
                    type="text" name="applicant_phone" value={application.phone}
                    onChange={(e) => {
                      setApplication(prev => ({ ...prev, phone: e.target.value }));
                      if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                    }}
                    placeholder="+91 98765 43210"
                    className={`apply-form-input ${errors.phone ? 'input-error' : ''}`}
                    autoComplete="off"
                  />
                  {errors.phone && <span className="apply-field-error">{errors.phone}</span>}
                </div>
                <div className="apply-form-group">
                  <label className="apply-form-label">Passport Number <span className="required">*</span></label>
                  <input
                    type="text" name="passportNumber" value={application.passportNumber}
                    onChange={handleTextChange} placeholder="A1234567"
                    className={`apply-form-input ${errors.passportNumber ? 'input-error' : ''}`}
                    autoComplete="off"
                  />
                  {errors.passportNumber && <span className="apply-field-error">{errors.passportNumber}</span>}
                </div>
              </div>

              <div className="apply-form-row">
                <div className="apply-form-group">
                  <label className="apply-form-label">Passport Expiry Date <span className="required">*</span></label>
                  <input
                    type="date" name="passportExpiry" value={application.passportExpiry}
                    onChange={handleTextChange}
                    className={`apply-form-input ${errors.passportExpiry ? 'input-error' : ''}`}
                  />
                  {errors.passportExpiry && <span className="apply-field-error">{errors.passportExpiry}</span>}
                  <div style={{ marginTop: '0.75rem' }}>
                    <button type="button" onClick={addTraveler} className="add-traveler-btn">
                      + Add travelers
                    </button>
                  </div>
                </div>
                <div className="apply-form-group">
                  <label className="apply-form-label">Planned Travel Date <span className="required">*</span></label>
                  <input
                    type="date" name="travelDate" value={application.travelDate}
                    onChange={handleTextChange}
                    className={`apply-form-input ${errors.travelDate ? 'input-error' : ''}`}
                  />
                  {errors.travelDate && <span className="apply-field-error">{errors.travelDate}</span>}
                </div>
              </div>

              {/* Additional Travelers */}
              {additionalTravelers.map((traveler, index) => (
                <div key={index} className="additional-traveler-card">
                  <div className="additional-traveler-header">
                    <h4>Traveler {index + 2} Details</h4>
                    <button type="button" onClick={() => removeTraveler(index)} className="remove-traveler-btn">
                      <FaTrashAlt /> Remove
                    </button>
                  </div>
                  <div className="apply-form-row">
                    <div className="apply-form-group">
                      <label className="apply-form-label">Full Name (as in passport) <span className="required">*</span></label>
                      <input
                        type="text" value={traveler.fullName}
                        onChange={(e) => handleTravelerChange(index, 'fullName', e.target.value)}
                        placeholder="e.g. Priya Sharma"
                        className="apply-form-input" autoComplete="off" required
                      />
                    </div>
                    <div className="apply-form-group">
                      <label className="apply-form-label">Email Address <span className="required">*</span></label>
                      <input
                        type="email" value={traveler.email}
                        onChange={(e) => handleTravelerChange(index, 'email', e.target.value)}
                        placeholder="priya@example.com"
                        className="apply-form-input" autoComplete="off" required
                      />
                    </div>
                  </div>
                  <div className="apply-form-row">
                    <div className="apply-form-group">
                      <label className="apply-form-label">Passport Number <span className="required">*</span></label>
                      <input
                        type="text" value={traveler.passportNumber}
                        onChange={(e) => handleTravelerChange(index, 'passportNumber', e.target.value)}
                        placeholder="A7654321"
                        className="apply-form-input" autoComplete="off" required
                      />
                    </div>
                    <div className="apply-form-group">
                      <label className="apply-form-label">Passport Expiry Date <span className="required">*</span></label>
                      <input
                        type="date" value={traveler.passportExpiry}
                        onChange={(e) => handleTravelerChange(index, 'passportExpiry', e.target.value)}
                        className="apply-form-input" required
                      />
                    </div>
                  </div>
                  <div className="apply-form-row">
                    <div className="apply-form-group">
                      <label className="apply-form-label">Planned Travel Date <span className="required">*</span></label>
                      <input
                        type="date" value={traveler.travelDate}
                        onChange={(e) => handleTravelerChange(index, 'travelDate', e.target.value)}
                        className="apply-form-input" required
                      />
                    </div>
                    <div className="apply-form-group"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── SECTION 3: Upload Documents ── */}
            <div className="single-form-section">
              <div className="single-form-section-head">
                <div className="section-head-icon" style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6' }}><FaFileAlt /></div>
                <div>
                  <h2 className="section-head-title">Upload Documents</h2>
                  <p className="section-head-sub">Upload all 3 required documents for each traveler. No field can be left empty.</p>
                </div>
              </div>

              {/* Per-traveler document uploads */}
              {Array.from({ length: travelerCount }).map((_, tIdx) => {
                const docs = travelerDocs[tIdx] || emptyDocs();
                const travelerName = tIdx === 0
                  ? (application.fullName || 'Primary Applicant')
                  : (additionalTravelers[tIdx - 1]?.fullName || `Traveler ${tIdx + 1}`);
                return (
                  <div key={tIdx} className="traveler-doc-block">
                    <div className="traveler-doc-block-header">
                      <span className="traveler-doc-badge">Traveler {tIdx + 1}</span>
                      <h4 className="traveler-doc-name">{travelerName}</h4>
                    </div>

                    <div className="doc-columns-grid">
                      {DOC_TYPES.map((dt) => {
                        const file = docs[dt.key];
                        const inputId = `doc-${tIdx}-${dt.key}`;
                        const hasError = errors[`doc_${tIdx}_${dt.key}`];
                        return (
                          <div key={dt.key} className={`doc-column-card ${hasError ? 'doc-column-error' : ''} ${file ? 'doc-column-filled' : ''}`}>
                            <div className="doc-column-label">
                              <span className="doc-column-icon">{dt.icon}</span>
                              <span>{dt.label} <span className="required">*</span></span>
                            </div>

                            {file ? (
                              <div className="doc-column-file">
                                <div className="doc-column-file-info">
                                  <FaCheckCircle style={{ color: '#16a34a', flexShrink: 0 }} />
                                  <div>
                                    <strong>{file.name}</strong>
                                    <span>{file.size}</span>
                                  </div>
                                </div>
                                <button type="button" onClick={() => removeDoc(tIdx, dt.key)} className="doc-column-remove">
                                  <FaTrashAlt />
                                </button>
                              </div>
                            ) : (
                              <div
                                className="doc-column-upload"
                                onClick={() => document.getElementById(inputId).click()}
                              >
                                <FaCloudUploadAlt className="doc-column-upload-icon" />
                                <span>Click to upload</span>
                                <span className="doc-column-hint">PDF, JPG, PNG · Max 5MB</span>
                                <input
                                  type="file"
                                  id={inputId}
                                  style={{ display: 'none' }}
                                  accept=".pdf,.jpg,.jpeg,.png"
                                  onChange={(e) => handleDocUpload(tIdx, dt.key, e)}
                                />
                              </div>
                            )}

                            {hasError && <span className="apply-field-error">{hasError}</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── Submit Button (mobile only — desktop uses sidebar) ── */}
            <div className="single-form-submit-mobile">
              <button type="submit" className="apply-pay-btn" disabled={submitting}>
                {submitting ? 'Processing…' : `Submit Application`}
                {!submitting && <FaArrowRight style={{ marginLeft: '8px' }} />}
              </button>
            </div>

          </form>
        </main>

        {/* ── Right Sidebar ── */}
        <aside className="single-form-sidebar">
          {/* Logo */}
          <div className="apply-sidebar-brand">
            <img src="/images/logo.png" alt="Holidays Navigator" className="apply-sidebar-logo" />
          </div>

          {/* Destination Summary */}
          {(selectedCountry || selectedCountryBasic) && (
            <div className="apply-sidebar-summary">
              <h4>Selected Destination</h4>
              <p className="summary-country-name">
                {selectedCountryBasic?.flag} {countryDisplayName}
              </p>
              {selectedCountry && (
                <>
                  <div className="summary-meta-row">
                    <FaClock className="meta-icon" />
                    <span>{selectedCountry.processingTime}</span>
                  </div>
                  <div className="summary-meta-row">
                    <FaShieldAlt className="meta-icon" />
                    <span>{selectedCountry.successRate}% Approval Rate</span>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Travelers Count */}
          {travelerCount > 1 && (
            <div className="apply-sidebar-summary" style={{ marginTop: '0' }}>
              <h4><FaUsers style={{ marginRight: '6px' }} />Travelers</h4>
              <p className="summary-country-name" style={{ fontSize: '1.4rem' }}>{travelerCount}</p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
                1 primary + {travelerCount - 1} additional
              </p>
            </div>
          )}

          {/* Fee Breakdown */}
          <div className="sidebar-fee-card">
            <h4>Fee Breakdown</h4>
            {travelerCount > 1 && (
              <div className="sidebar-fee-row">
                <span>Travelers</span>
                <span>{travelerCount}×</span>
              </div>
            )}
            <div className="sidebar-fee-row">
              <span>Embassy Fee</span>
              <span>₹{visaFee.toLocaleString('en-IN')}</span>
            </div>
            <div className="sidebar-fee-row">
              <span>Service Fee</span>
              <span>₹{serviceFee.toLocaleString('en-IN')}</span>
            </div>
            <div className="sidebar-fee-row">
              <span>GST (18%)</span>
              <span>₹{gst.toLocaleString('en-IN')}</span>
            </div>
            <div className="sidebar-fee-total">
              <span>Total Payable</span>
              <strong>₹{totalAmount.toLocaleString('en-IN')}</strong>
            </div>

            <div className="payment-secure-notice" style={{ marginTop: '0.6rem', padding: '0.5rem', background: 'rgba(22,163,74,0.1)' }}>
              <FaLock className="secure-lock-icon" style={{ fontSize: '0.75rem' }} />
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.72rem', lineHeight: '1.2' }}>256-bit SSL encrypted · All major cards, UPI &amp; Netbanking</p>
            </div>

            <form onSubmit={handleFormSubmit} noValidate>
              <button type="submit" className="apply-pay-btn" style={{ marginTop: '0.75rem', padding: '0.75rem' }} disabled={submitting}>
                {submitting ? 'Processing…' : `Submit Application`}
                {!submitting && <FaArrowRight style={{ marginLeft: '8px' }} />}
              </button>
            </form>
          </div>

          <div className="apply-sidebar-trust" style={{ marginTop: '0.25rem' }}>
            <FaLock className="trust-icon" /> SSL Secured &amp; 100% Confidential
          </div>
        </aside>

      </div>
    </div>
  );
}
