import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { destinations, allCountries } from '../data/destinations';
import { FaPassport, FaUser, FaFolderOpen, FaCreditCard, FaCheckCircle, FaTrashAlt, FaCloudUploadAlt } from 'react-icons/fa';
import FaqSection from '../components/FaqSection';

export default function ApplyPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const queryCountry = searchParams.get('country') || '';
  const queryType = searchParams.get('type') || 'tourist';

  const [currentStep, setCurrentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form states
  const [application, setApplication] = useState({
    countryId: queryCountry,
    visaType: queryType,
    fullName: '',
    email: '',
    phone: '',
    passportNumber: '',
    passportExpiry: '',
    travelDate: '',
    durationDays: '30',
    additionalDetails: ''
  });

  const [uploadedDocs, setUploadedDocs] = useState([]);

  useEffect(() => {
    if (queryCountry) {
      setApplication(prev => ({ ...prev, countryId: queryCountry }));
    }
  }, [queryCountry]);

  const selectedCountry = destinations.find(d => d.id === application.countryId);
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
      alert('Please upload at least one supporting document (e.g. passport copy).');
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const trackingId = 'VV-' + Math.floor(100000 + Math.random() * 900000);
    const finalData = {
      ...application,
      trackingId,
      status: 'SUBMITTED',
      submissionDate: new Date().toLocaleDateString(),
      countryName: countryDisplayName
    };

    try {
      // Mock submit or spring boot API call
      const response = await fetch('http://localhost:8082/api/visa/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      }).catch(() => {
        // Fallback for demo when backend is offline
        return { ok: true, json: async () => finalData };
      });

      if (response.ok) {
        // Store in localStorage so tracking works in fallback mode
        const existingApps = JSON.parse(localStorage.getItem('visa_applications') || '[]');
        existingApps.push(finalData);
        localStorage.setItem('visa_applications', JSON.stringify(existingApps));

        setSuccessData(finalData);
        setCurrentStep(5);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const visaFee = selectedCountry ? selectedCountry.startingPrice : 3500;
  const countryDisplayName = selectedCountry ? selectedCountry.name : (selectedCountryBasic ? selectedCountryBasic.name : application.countryId.toUpperCase());
  const serviceFee = 950;
  const gst = Math.round((visaFee + serviceFee) * 0.18);
  const totalAmount = visaFee + serviceFee + gst;

  return (
    <div className="apply-page-container">
      <div className="container">
        
        <div className="wizard-card">
          <div className="wizard-header">
            <h2 style={{ color: '#ffffff', fontFamily: 'Outfit' }}>Visa Application</h2>
            
            <div className="wizard-steps-indicator">
              <span className={`wizard-step-bullet ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>1</span>
              <span className={`wizard-step-bullet ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>2</span>
              <span className={`wizard-step-bullet ${currentStep === 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}>3</span>
              <span className={`wizard-step-bullet ${currentStep === 4 ? 'active' : ''} ${currentStep > 4 ? 'completed' : ''}`}>4</span>
            </div>
          </div>

          <div className="wizard-body">
            
            {/* STEP 1: Select Country & Visa */}
            {currentStep === 1 && (
              <div>
                <h3 style={{ marginBottom: '1.5rem', color: '#0f172a' }}>
                  <FaPassport style={{ color: '#d4af37', marginRight: '8px' }} /> Select Visa Destination
                </h3>
                
                <div className="form-group">
                  <label>Destination Country</label>
                  <select 
                    name="countryId" 
                    value={application.countryId} 
                    onChange={handleTextChange} 
                    className="form-select"
                    required
                  >
                    <option value="">Choose Country</option>
                    {allCountries.map(c => (
                      <option key={c.id} value={c.id}>{c.name} {c.flag}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Visa Category</label>
                  <select 
                    name="visaType" 
                    value={application.visaType} 
                    onChange={handleTextChange} 
                    className="form-select"
                  >
                    <option value="tourist">Tourist Visa</option>
                    <option value="business">Business Visa</option>
                  </select>
                </div>

                {(selectedCountry || selectedCountryBasic) && (
                  <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', marginTop: '2rem' }}>
                    <h4 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Processing Details:</h4>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>⏱ <strong>Processing Time:</strong> {selectedCountry ? selectedCountry.processingTime : '7-15 Business Days'}</p>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>🛡 <strong>Success Rate:</strong> {selectedCountry ? selectedCountry.successRate : 95}% Approval Rate</p>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>🌍 <strong>Region:</strong> {selectedCountryBasic ? selectedCountryBasic.continent : ''}</p>
                    {selectedCountry && <p style={{ color: '#64748b', fontSize: '0.9rem' }}>🏷 <strong>Visa Embassy Fee:</strong> ₹{selectedCountry.startingPrice.toLocaleString('en-IN')}</p>}
                  </div>
                )}
              </div>
            )}

            {/* STEP 2: Personal Details */}
            {currentStep === 2 && (
              <div>
                <h3 style={{ marginBottom: '1.5rem', color: '#0f172a' }}>
                  <FaUser style={{ color: '#d4af37', marginRight: '8px' }} /> Personal & Passport Details
                </h3>

                <div className="form-grid-row">
                  <div className="form-group">
                    <label>Full Name (As in Passport)</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      value={application.fullName} 
                      onChange={handleTextChange} 
                      placeholder="John Doe" 
                      className="form-input" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={application.email} 
                      onChange={handleTextChange} 
                      placeholder="john@example.com" 
                      className="form-input" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-grid-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={application.phone} 
                      onChange={handleTextChange} 
                      placeholder="+91 9876543210" 
                      className="form-input" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Passport Number</label>
                    <input 
                      type="text" 
                      name="passportNumber" 
                      value={application.passportNumber} 
                      onChange={handleTextChange} 
                      placeholder="A1234567" 
                      className="form-input" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-grid-row">
                  <div className="form-group">
                    <label>Passport Expiry Date</label>
                    <input 
                      type="date" 
                      name="passportExpiry" 
                      value={application.passportExpiry} 
                      onChange={handleTextChange} 
                      className="form-input" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Planned Date of Travel</label>
                    <input 
                      type="date" 
                      name="travelDate" 
                      value={application.travelDate} 
                      onChange={handleTextChange} 
                      className="form-input" 
                      required 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Upload Documents */}
            {currentStep === 3 && (
              <div>
                <h3 style={{ marginBottom: '1.5rem', color: '#0f172a' }}>
                  <FaFolderOpen style={{ color: '#d4af37', marginRight: '8px' }} /> Upload Required Documents
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Please upload copies of: <strong>Passport Front Page</strong>, <strong>Passport Back Page</strong>, and <strong>Recent Passport Photograph</strong>.
                </p>

                <div className="doc-upload-box" onClick={() => document.getElementById('file-upload-input').click()}>
                  <FaCloudUploadAlt className="doc-upload-icon" />
                  <h4 style={{ color: '#0f172a' }}>Drag and Drop Files Here</h4>
                  <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.25rem' }}>or click to browse from files (Max 5MB per file)</p>
                  <input 
                    type="file" 
                    id="file-upload-input" 
                    style={{ display: 'none' }} 
                    multiple 
                    onChange={handleDocUpload} 
                  />
                </div>

                {uploadedDocs.length > 0 && (
                  <div className="uploaded-docs-list">
                    <h4 style={{ color: '#0f172a', marginBottom: '1rem' }}>Uploaded Documents ({uploadedDocs.length}):</h4>
                    {uploadedDocs.map((doc, idx) => (
                      <div key={idx} className="uploaded-doc-item">
                        <span>📄 <strong>{doc.name}</strong> ({doc.size})</span>
                        <button type="button" onClick={() => removeDoc(idx)} className="remove-doc-btn">
                          <FaTrashAlt /> Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* STEP 4: Review & Payment */}
            {currentStep === 4 && (
              <div>
                <h3 style={{ marginBottom: '1.5rem', color: '#0f172a' }}>
                  <FaCreditCard style={{ color: '#d4af37', marginRight: '8px' }} /> Review & Secure Payment
                </h3>

                <div className="payment-summary">
                  <h4 style={{ color: '#0f172a', marginBottom: '1rem' }}>Pricing Summary:</h4>
                  <div className="summary-row">
                    <span>{countryDisplayName} Embassy Fee</span>
                    <span>₹{visaFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="summary-row">
                    <span>Holidays Navigator Service Fee</span>
                    <span>₹{serviceFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="summary-row">
                    <span>GST (18%)</span>
                    <span>₹{gst.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total Amount Payable</span>
                    <span>₹{totalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Secure Checkout Portal</h4>
                  <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                    Payments are encrypted using secure 256-bit SSL connection. We accept all major cards, Netbanking, UPI, and wallets.
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button 
                    onClick={handleFormSubmit} 
                    className="btn btn-accent" 
                    style={{ width: '100%', padding: '1rem 2rem', fontSize: '1.1rem' }}
                    disabled={submitting}
                  >
                    {submitting ? 'Processing Payment & Submitting...' : `Pay ₹${totalAmount.toLocaleString('en-IN')} & Submit`}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: Success Screen */}
            {currentStep === 5 && successData && (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <span style={{ fontSize: '4.5rem', color: '#16a34a', display: 'block', marginBottom: '1.5rem' }}><FaCheckCircle /></span>
                <h2 style={{ color: '#0f172a', fontSize: '2.25rem', fontFamily: 'Outfit' }}>Application Submitted!</h2>
                <p style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '0.5rem', marginBottom: '2.5rem' }}>
                  Thank you! Your application for <strong>{successData.countryName}</strong> Visa has been received successfully.
                </p>

                <div style={{ 
                  background: '#f8fafc', 
                  maxWidth: '500px', 
                  margin: '0 auto 2.5rem auto', 
                  padding: '1.5rem 2.5rem', 
                  borderRadius: '16px',
                  textAlign: 'left'
                }}>
                  <p style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #e2e8f0' }}>
                    <span>Tracking ID:</span>
                    <strong style={{ color: '#d4af37', fontSize: '1.1rem' }}>{successData.trackingId}</strong>
                  </p>
                  <p style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #e2e8f0' }}>
                    <span>Applicant Name:</span>
                    <strong>{successData.fullName}</strong>
                  </p>
                  <p style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                    <span>Status:</span>
                    <span className="status-badge submitted">SUBMITTED</span>
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button onClick={() => navigate(`/track?id=${successData.trackingId}`)} className="btn btn-primary">
                    Track Application Status
                  </button>
                  <button onClick={() => navigate('/')} className="btn btn-outline-dark">
                    Back to Home
                  </button>
                </div>
              </div>
            )}

          </div>

          {currentStep < 5 && (
            <div className="wizard-footer">
              <button 
                type="button" 
                onClick={handlePrevStep} 
                className="btn btn-outline-dark"
                disabled={currentStep === 1}
                style={{ visibility: currentStep === 1 ? 'hidden' : 'visible' }}
              >
                Previous Step
              </button>
              
              <button 
                type="button" 
                onClick={handleNextStep} 
                className="btn btn-primary"
                style={{ display: currentStep === 4 ? 'none' : 'block' }}
              >
                Next Step
              </button>
            </div>
          )}
        </div>

      </div>
      <FaqSection />
    </div>
  );
}
