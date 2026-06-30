import React, { useState, useEffect } from 'react';
import { FaPassport, FaList, FaUserCheck, FaTimesCircle, FaChartBar, FaUserLock } from 'react-icons/fa';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState('applications');
  const [applications, setApplications] = useState([]);
  const [contacts, setContacts] = useState([]);

  // Load applications and submissions
  const loadDashboardData = async () => {
    // Attempt Spring Boot fetch or fallback to localStorage
    try {
      const response = await fetch('http://localhost:8082/api/admin/applications', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
        }
      }).catch(() => null);

      if (response && response.ok) {
        const data = await response.json();
        setApplications(data);
      } else {
        const localApps = JSON.parse(localStorage.getItem('visa_applications') || '[]');
        if (localApps.length === 0) {
          // Mock data for initial loading
          const mockApps = [
            {
              trackingId: 'VV-981042',
              fullName: 'Johnathan Doe',
              countryName: 'Japan',
              visaType: 'tourist',
              status: 'SUBMITTED',
              submissionDate: '15/06/2026',
              passportNumber: 'A9810245',
              email: 'johnathan.doe@example.com',
              phone: '+91 9876543210'
            },
            {
              trackingId: 'VV-190472',
              fullName: 'Rohan Sharma',
              countryName: 'Dubai (UAE)',
              visaType: 'business',
              status: 'REVIEWING',
              submissionDate: '14/06/2026',
              passportNumber: 'Z1892043',
              email: 'rohan.sharma@example.com',
              phone: '+91 9911223344'
            },
            {
              trackingId: 'VV-887410',
              fullName: 'Emma Watson',
              countryName: 'Singapore',
              visaType: 'tourist',
              status: 'APPROVED',
              submissionDate: '12/06/2026',
              passportNumber: 'T2049182',
              email: 'emma.watson@example.com',
              phone: '+1 405 289 1204'
            }
          ];
          localStorage.setItem('visa_applications', JSON.stringify(mockApps));
          setApplications(mockApps);
        } else {
          setApplications(localApps);
        }
      }

      // Load contact submissions
      const localContacts = [
        {
          name: 'Sarah Connor',
          email: 'sarah@sky.net',
          phone: '+1 800 555 0199',
          subject: 'Visa Eligibility',
          message: 'Can I apply for a tourist visa if my passport expires in 7 months?',
          date: '16/06/2026'
        },
        {
          name: 'Vijay Mallya',
          email: 'vijay@kingfisher.com',
          phone: '+91 90000 00007',
          subject: 'Corporate/Business Travel',
          message: 'Interested in bulk visas for my executive team traveling to Dubai next month.',
          date: '15/06/2026'
        }
      ];
      setContacts(localContacts);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadDashboardData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      setLoginError('');
      localStorage.setItem('admin_token', 'mock-jwt-token-xyz');
    } else {
      setLoginError('Invalid Username or Password. Try admin / admin123.');
    }
  };

  const handleStatusChange = (trackingId, newStatus) => {
    const updatedApps = applications.map(app => {
      if (app.trackingId === trackingId) {
        return { ...app, status: newStatus };
      }
      return app;
    });

    setApplications(updatedApps);
    localStorage.setItem('visa_applications', JSON.stringify(updatedApps));

    // Optional spring boot update
    fetch(`http://localhost:8082/api/admin/applications/${trackingId}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
      },
      body: JSON.stringify({ status: newStatus })
    }).catch(() => null);
  };

  // Metrics summary
  const metrics = {
    total: applications.length,
    pending: applications.filter(a => a.status === 'SUBMITTED' || a.status === 'REVIEWING').length,
    approved: applications.filter(a => a.status === 'APPROVED' || a.status === 'ISSUED').length,
    rejected: applications.filter(a => a.status === 'REJECTED').length
  };

  if (!isAuthenticated) {
    return (
      <div style={{ paddingTop: '8rem', backgroundColor: '#f8fafc', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ 
          maxWidth: '450px', 
          width: '90%', 
          margin: '0 auto', 
          background: '#ffffff', 
          padding: '3rem', 
          borderRadius: '24px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '3rem', color: '#d4af37' }}><FaUserLock /></span>
            <h2 style={{ fontSize: '1.75rem', color: '#0f172a', marginTop: '1rem', fontFamily: 'Outfit' }}>Admin Portal Login</h2>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.25rem' }}>Please sign in to access administration controls.</p>
          </div>

          {loginError && (
            <div style={{ 
              background: '#fee2e2', 
              color: '#b91c1c', 
              padding: '0.75rem 1.25rem', 
              borderRadius: '8px', 
              fontSize: '0.85rem', 
              marginBottom: '1.5rem' 
            }}>
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin" 
                className="form-input" 
                required 
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="form-input" 
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              Sign In
            </button>
          </form>
          
          <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', color: '#64748b' }}>
            Hint: Use <strong>admin</strong> / <strong>admin123</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="container">
        
        <div className="admin-grid">
          
          {/* Sidebar */}
          <aside className="admin-sidebar">
            <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>
              Control Panel
            </h3>
            
            <ul className="admin-menu">
              <li 
                className={`admin-menu-item ${activeTab === 'applications' ? 'active' : ''}`}
                onClick={() => setActiveTab('applications')}
              >
                📁 Visa Applications
              </li>
              <li 
                className={`admin-menu-item ${activeTab === 'contacts' ? 'active' : ''}`}
                onClick={() => setActiveTab('contacts')}
              >
                ✉️ Contact Queries
              </li>
              <li 
                className="admin-menu-item"
                style={{ color: '#ef4444', marginTop: '4rem' }}
                onClick={() => setIsAuthenticated(false)}
              >
                🚪 Log Out
              </li>
            </ul>
          </aside>

          {/* Main Dashboard Panel */}
          <main>
            
            {/* Metrics Row */}
            <div className="admin-stats-summary">
              <div className="admin-stat-card">
                <div className="admin-stat-icon"><FaPassport /></div>
                <div>
                  <span className="admin-stat-value">{metrics.total}</span>
                  <span className="admin-stat-label">Total Applications</span>
                </div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-icon" style={{ backgroundColor: '#fef3c7', color: '#d97706' }}><FaList /></div>
                <div>
                  <span className="admin-stat-value">{metrics.pending}</span>
                  <span className="admin-stat-label">Pending Review</span>
                </div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-icon" style={{ backgroundColor: '#dcfce7', color: '#15803d' }}><FaUserCheck /></div>
                <div>
                  <span className="admin-stat-value">{metrics.approved}</span>
                  <span className="admin-stat-label">Visas Approved</span>
                </div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-icon" style={{ backgroundColor: '#fee2e2', color: '#b91c1c' }}><FaTimesCircle /></div>
                <div>
                  <span className="admin-stat-value">{metrics.rejected}</span>
                  <span className="admin-stat-label">Rejected Visas</span>
                </div>
              </div>
            </div>

            {/* Content Table Card */}
            <div className="admin-table-card">
              
              {activeTab === 'applications' ? (
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>
                    Visa Applications Management
                  </h3>
                  
                  <div style={{ overflowX: 'auto' }}>
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>Tracking ID</th>
                          <th>Applicant</th>
                          <th>Destination</th>
                          <th>Visa Type</th>
                          <th>Sub Date</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map(app => (
                          <tr key={app.trackingId}>
                            <td><strong>{app.trackingId}</strong></td>
                            <td>
                              <div><strong>{app.fullName}</strong></div>
                              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{app.email}</span>
                            </td>
                            <td>{app.countryName}</td>
                            <td>{app.visaType.toUpperCase()}</td>
                            <td>{app.submissionDate}</td>
                            <td>
                              <span className={`status-badge ${app.status.toLowerCase()}`}>
                                {app.status}
                              </span>
                            </td>
                            <td>
                              <select 
                                value={app.status} 
                                onChange={(e) => handleStatusChange(app.trackingId, e.target.value)}
                                className="form-select"
                                style={{ padding: '0.35rem 0.5rem', fontSize: '0.85rem', width: 'auto', borderRadius: '6px' }}
                              >
                                <option value="SUBMITTED">Submitted</option>
                                <option value="REVIEWING">Reviewing</option>
                                <option value="EMBASSY_PROCESSING">Embassy processing</option>
                                <option value="APPROVED">Approved</option>
                                <option value="REJECTED">Rejected</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>
                    Contact Form Messages
                  </h3>

                  <div style={{ overflowX: 'auto' }}>
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Sender Details</th>
                          <th>Subject</th>
                          <th>Message</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contacts.map((c, idx) => (
                          <tr key={idx}>
                            <td>{c.date}</td>
                            <td>
                              <div><strong>{c.name}</strong></div>
                              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{c.email}</span>
                              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{c.phone}</div>
                            </td>
                            <td><span style={{ fontWeight: '600', color: '#0f172a' }}>{c.subject}</span></td>
                            <td style={{ maxWidth: '300px', fontSize: '0.9rem' }}>{c.message}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>

          </main>

        </div>

      </div>
    </div>
  );
}
