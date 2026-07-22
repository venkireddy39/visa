import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

import ApplyPage from './pages/ApplyPage';
import TrackPage from './pages/TrackPage';
import AdminPage from './pages/AdminPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import Blog from './pages/Blog';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Router>
      <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />

        <main style={{ flex: '1 0 auto' }}>
          <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/track" element={<TrackPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/Blog" element={<Blog />} />
          </Routes>
        </main>

        <Footer />

        {/* Additional Features */}
        <WhatsAppButton />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
