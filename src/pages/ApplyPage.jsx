import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { destinations, allCountries } from '../data/destinations';
import {
  FaPassport, FaUser, FaFolderOpen, FaCreditCard, FaCheckCircle,
  FaTrashAlt, FaCloudUploadAlt, FaGlobe, FaShieldAlt, FaClock,
  FaArrowRight, FaArrowLeft, FaLock, FaFileAlt
} from 'react-icons/fa';
import FaqSection from '../components/FaqSection';

const STEPS = [
  { id: 1, icon: FaGlobe,       label: 'Destination' },
  { id: 2, icon: FaUser,        label: 'Personal Info' },
  { id: 3, icon: FaFolderOpen,  label: 'Documents' },
  { id: 4, icon: FaCreditCard,  label: 'Payment' },
];

export default function ApplyPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const queryCountry = searchParams.get('country') || '';
  const queryType    = searchParams.get('type') || 'tourist';

  const [currentStep, setCurrentStep] = useState(1);
  const [submitting,  setSubmitting]  = useState(false);
  const [successData, setSuccessData] = useState(null);

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

  const [uploadedDocs, setUploadedDocs] = useState([]);

  useEffect(() => {
    if (queryCountry) setApplication(prev => ({ ...prev, countryId: queryCountry }));
  }, [queryCountry]);

  const selectedCountry      = destinations.find(d => d.id === application.countryId);
  const selectedCountryBasic = allCountries.find(c => c.id === application.countryId);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setApplication(prev => ({ ...prev, [name]: value }));
  };

  const handleDocUpload = (e) => {
    const files = Array.from(e.target.files);
    const mockFiles = files.map(file => ({
      name: file.name,
      size: (file.size / 1024).toFixed(1) + ' KB',
      type: file.type
    }));
    setUploadedDocs(prev => [...prev, ...mockFiles]);
  };

  const removeDoc = (index) => {
    setUploadedDocs(prev => prev.filter((_, i) => i !== index));
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !application.countryId) {
      alert('Please select a destination country.');
      return;
    }
    if (currentStep === 2 && (!application.fullName || !application.email || !application.phone || !application.passportNumber)) {
      alert('Please fill out all required fields.');
      return;
    }
    if (currentStep === 3 && uploadedDocs.length === 0) {
      alert('Please upload at least one supporting document.');
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => setCurrentStep(prev => prev - 1);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const trackingId = 'VV-' + Math.floor(100000 + Math.random() * 900000);
    const finalData  = {
      ...application,
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
        setCurrentStep(5);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const visaFee          = selectedCountry ? selectedCountry.startingPrice : 3500;
  const countryDisplayName = selectedCountry
    ? selectedCountry.name
    : selectedCountryBasic
      ? selectedCountryBasic.name
      : application.countryId.toUpperCase();
  const serviceFee = 950;
  const gst        = Math.round((visaFee + serviceFee) * 0.18);
  const totalAmount = visaFee + serviceFee + gst;

  /* ── Success Screen ── */
  if (currentStep === 5 && successData) {
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

  /* ── Main Wizard ── */
  return (
    <div className="apply-page-container">
      <div className="apply-page-inner">

        {/* ── Left Sidebar ── */}
        <aside className="apply-sidebar">
          <div className="apply-sidebar-brand">
            <img src="/images/logo.png" alt="Holidays Navigator" className="apply-sidebar-logo" />
          </div>

          <div className="apply-sidebar-steps">
            {STEPS.map(step => {
              const Icon = step.icon;
              const isActive    = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              return (
                <div
                  key={step.id}
                  className={`apply-sidebar-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                >
                  <div className="apply-sidebar-step-icon">
                    {isCompleted ? <FaCheckCircle /> : <Icon />}
                  </div>
                  <div className="apply-sidebar-step-info">
                    <span className="step-num">Step {step.id}</span>
                    <span className="step-label">{step.label}</span>
                  </div>
                  {step.id < STEPS.length && <div className="apply-sidebar-connector" />}
                </div>
              );
            })}
          </div>

          {/* Country summary panel */}
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
                  <div className="summary-price-badge">
                    ₹{visaFee.toLocaleString('en-IN')} <span>Embassy Fee</span>
                  </div>
                </>
              )}
            </div>
          )}

          <div className="apply-sidebar-trust">
            <FaLock className="trust-icon" /> SSL Secured &amp; 100% Confidential
          </div>
        </aside>

        {/* ── Right Form Panel ── */}
        <main className="apply-form-panel">

          {/* Step Header */}
          <div className="apply-form-header">
            <div className="apply-step-label-row">
              <span className="apply-step-chip">Step {currentStep} of 4</span>
              <div className="apply-progress-bar">
                <div
                  className="apply-progress-fill"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                />
              </div>
            </div>
            <h2 className="apply-form-title">
              {currentStep === 1 && 'Select Your Destination'}
              {currentStep === 2 && 'Personal & Passport Details'}
              {currentStep === 3 && 'Upload Documents'}
              {currentStep === 4 && 'Review & Confirm Payment'}
            </h2>
            <p className="apply-form-subtitle">
              {currentStep === 1 && 'Choose the country you wish to visit and the type of visa required.'}
              {currentStep === 2 && 'Provide your personal details exactly as they appear on your passport.'}
              {currentStep === 3 && 'Upload clear scanned copies of your passport and photographs.'}
              {currentStep === 4 && 'Review your details and complete the secure payment to submit.'}
            </p>
          </div>

          {/* ── STEP 1 ── */}
          {currentStep === 1 && (
            <div className="apply-step-content">
              <div className="apply-form-group">
                <label className="apply-form-label">
                  <FaGlobe className="label-icon" /> Destination Country <span className="required">*</span>
                </label>
                <select
                  name="countryId"
                  value={application.countryId}
                  onChange={handleTextChange}
                  className="apply-form-select"
                  required
                >
                  <option value="">— Choose a Country —</option>
                  {allCountries.map(c => (
                    <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
                  ))}
                </select>
              </div>

              <div className="apply-form-group">
                <label className="apply-form-label">
                  <FaPassport className="label-icon" /> Visa Category <span className="required">*</span>
                </label>
                <div className="apply-visa-type-grid">
                  {['tourist', 'business'].map(type => (
                    <label
                      key={type}
                      className={`visa-type-card ${application.visaType === type ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="visaType"
                        value={type}
                        checked={application.visaType === type}
                        onChange={handleTextChange}
                        style={{ display: 'none' }}
                      />
                      <span className="visa-type-icon">{type === 'tourist' ? '🏖️' : '💼'}</span>
                      <span className="visa-type-name">
                        {type === 'tourist' ? 'Tourist Visa' : 'Business Visa'}
                      </span>
                      <span className="visa-type-desc">
                        {type === 'tourist'
                          ? 'Leisure, tourism & family visits'
                          : 'Meetings, conferences & trade'}
                      </span>
                      {application.visaType === type && (
                        <FaCheckCircle className="visa-type-check" />
                      )}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 2 ── */}
          {currentStep === 2 && (
            <div className="apply-step-content">
              <div className="apply-form-row">
                <div className="apply-form-group">
                  <label className="apply-form-label">Full Name (as in passport) <span className="required">*</span></label>
                  <input
                    type="text" name="fullName" value={application.fullName}
                    onChange={handleTextChange} placeholder="e.g. Rahul Sharma"
                    className="apply-form-input" autoComplete="off" required
                  />
                </div>
                <div className="apply-form-group">
                  <label className="apply-form-label">Email Address <span className="required">*</span></label>
                  <input
                    type="email" name="email" value={application.email}
                    onChange={handleTextChange} placeholder="rahul@example.com"
                    className="apply-form-input" autoComplete="off" required
                  />
                </div>
              </div>

              <div className="apply-form-row">
                <div className="apply-form-group">
                  <label className="apply-form-label">Phone Number <span className="required">*</span></label>
                  <input
                    type="text" name="applicant_phone" value={application.phone}
                    onChange={(e) => setApplication(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+91 98765 43210"
                    className="apply-form-input" autoComplete="off" required
                  />
                </div>
                <div className="apply-form-group">
                  <label className="apply-form-label">Passport Number <span className="required">*</span></label>
                  <input
                    type="text" name="passportNumber" value={application.passportNumber}
                    onChange={handleTextChange} placeholder="A1234567"
                    className="apply-form-input" autoComplete="off" required
                  />
                </div>
              </div>

              <div className="apply-form-row">
                <div className="apply-form-group">
                  <label className="apply-form-label">Passport Expiry Date <span className="required">*</span></label>
                  <input
                    type="date" name="passportExpiry" value={application.passportExpiry}
                    onChange={handleTextChange} className="apply-form-input" required
                  />
                </div>
                <div className="apply-form-group">
                  <label className="apply-form-label">Planned Travel Date <span className="required">*</span></label>
                  <input
                    type="date" name="travelDate" value={application.travelDate}
                    onChange={handleTextChange} className="apply-form-input" required
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 3 ── */}
          {currentStep === 3 && (
            <div className="apply-step-content">
              <div className="apply-doc-checklist">
                {['Passport Front Page', 'Passport Back Page', 'Recent Passport Photo'].map((item, i) => (
                  <div key={i} className="doc-checklist-item">
                    <FaFileAlt className="doc-checklist-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div
                className="apply-upload-zone"
                onClick={() => document.getElementById('file-upload-input').click()}
              >
                <FaCloudUploadAlt className="upload-zone-icon" />
                <h4>Drag &amp; Drop or Click to Upload</h4>
                <p>PDF, JPG, PNG accepted · Max 5MB per file</p>
                <input
                  type="file" id="file-upload-input"
                  style={{ display: 'none' }} multiple onChange={handleDocUpload}
                />
                <button type="button" className="upload-zone-btn">Browse Files</button>
              </div>

              {uploadedDocs.length > 0 && (
                <div className="apply-uploaded-list">
                  <h4>Uploaded ({uploadedDocs.length})</h4>
                  {uploadedDocs.map((doc, idx) => (
                    <div key={idx} className="apply-uploaded-item">
                      <div className="uploaded-item-info">
                        <FaFileAlt className="uploaded-file-icon" />
                        <div>
                          <strong>{doc.name}</strong>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                      <button type="button" onClick={() => removeDoc(idx)} className="uploaded-remove-btn">
                        <FaTrashAlt />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── STEP 4 ── */}
          {currentStep === 4 && (
            <div className="apply-step-content">
              <div className="apply-review-grid">
                {/* Left: Applicant Summary */}
                <div className="review-info-card">
                  <h4>Applicant Details</h4>
                  <div className="review-detail-row"><span>Name</span><strong>{application.fullName || '—'}</strong></div>
                  <div className="review-detail-row"><span>Email</span><strong>{application.email || '—'}</strong></div>
                  <div className="review-detail-row"><span>Phone</span><strong>{application.phone || '—'}</strong></div>
                  <div className="review-detail-row"><span>Passport No.</span><strong>{application.passportNumber || '—'}</strong></div>
                  <div className="review-detail-row"><span>Travel Date</span><strong>{application.travelDate || '—'}</strong></div>
                  <div className="review-detail-row"><span>Destination</span><strong>{countryDisplayName}</strong></div>
                  <div className="review-detail-row"><span>Visa Type</span><strong style={{ textTransform: 'capitalize' }}>{application.visaType}</strong></div>
                </div>

                {/* Right: Payment Summary */}
                <div className="review-payment-card">
                  <h4>Fee Breakdown</h4>
                  <div className="payment-fee-row">
                    <span>{countryDisplayName} Embassy Fee</span>
                    <span>₹{visaFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="payment-fee-row">
                    <span>Service Fee</span>
                    <span>₹{serviceFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="payment-fee-row">
                    <span>GST (18%)</span>
                    <span>₹{gst.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="payment-fee-total">
                    <span>Total Payable</span>
                    <strong>₹{totalAmount.toLocaleString('en-IN')}</strong>
                  </div>

                  <div className="payment-secure-notice">
                    <FaLock className="secure-lock-icon" />
                    <p>256-bit SSL encrypted · All major cards, UPI &amp; Netbanking accepted</p>
                  </div>

                  <button
                    onClick={handleFormSubmit}
                    className="apply-pay-btn"
                    disabled={submitting}
                  >
                    {submitting ? 'Processing…' : `Pay ₹${totalAmount.toLocaleString('en-IN')} & Submit`}
                    {!submitting && <FaArrowRight style={{ marginLeft: '8px' }} />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── Footer Nav ── */}
          {currentStep < 5 && (
            <div className="apply-form-footer">
              <button
                type="button" onClick={handlePrevStep}
                className="apply-nav-btn prev"
                style={{ visibility: currentStep === 1 ? 'hidden' : 'visible' }}
              >
                <FaArrowLeft style={{ marginRight: '6px' }} /> Previous
              </button>
              {currentStep < 4 && (
                <button type="button" onClick={handleNextStep} className="apply-nav-btn next">
                  Continue <FaArrowRight style={{ marginLeft: '6px' }} />
                </button>
              )}
            </div>
          )}
        </main>
      </div>
      <FaqSection />
    </div>
  );
}
