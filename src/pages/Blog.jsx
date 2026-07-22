import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
    FaCalendarAlt,
    FaClock,
    FaUser,
    FaArrowLeft,
    FaSearch,
    FaCheckCircle,
    FaTimesCircle,
    FaInfoCircle,
    FaShareAlt,
    FaFileAlt,
    FaPassport,
    FaGlobe,
    FaPlaneDeparture,
    FaQuestionCircle
} from 'react-icons/fa';

// Mock Blog Posts Data
const BLOG_POSTS = [
    {
        id: 'tourist-visa-requirements',
        title: 'Tourist Visa Requirements: The Ultimate Global Guide for 2026',
        subtitle: 'Planning your next international getaway? Avoid common visa hurdles with our comprehensive guide to global tourist visa requirements, essential documentation, and success tips.',
        excerpt: 'Avoid visa rejections by understanding the complete documentation checklist, Schengen-specific rules, US visa interviews, and seamless digital e-Visas.',
        category: 'Visa Guide',
        readTime: '8 min read',
        date: 'July 15, 2026',

        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        featured: true,
        tags: ['Tourist Visa', 'Requirements', 'Travel Guide']
    },
    {
        id: 'visa-cover-letter-guide',
        title: 'How to Write a Perfect Cover Letter for Your Visa Application',
        subtitle: 'A cover letter is your personal pitch to the visa officer. Learn how to draft one that guarantees success, complete with downloadable samples.',
        excerpt: 'Your cover letter acts as the narrative glue for your visa application. We explain how to structure your itinerary, explain financial proof, and assure the officer of your timely return.',
        category: 'Tips & Tricks',
        readTime: '5 min read',
        date: 'June 28, 2026',
        author: 'Tirumala reddy',
        authorRole: 'Travel Documentation Analyst',
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
        featured: false,
        tags: ['Cover Letter', 'Tips', 'Application Success']
    },
    {
        id: 'visa-free-destinations-2026',
        title: 'Top 10 Visa-Free Destinations for Indian Passport Holders in 2026',
        subtitle: 'Skip the paperwork and board your flight! Explore the most stunning countries offering visa-free or visa-on-arrival entry this year.',
        excerpt: 'From the white-sand beaches of Thailand to the cultural marvels of Kazakhstan, find out where your passport can take you instantly without pre-visa stress.',
        category: 'Destinations',
        readTime: '6 min read',
        date: 'May 14, 2026',
        author: 'Marcus Vance',
        authorRole: 'Travel Blogger & Explorer',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
        featured: false,
        tags: ['Visa Free', 'Indian Passport', 'Travel Inspiration']
    }
];

export default function Blog() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    // State
    const [selectedPostId, setSelectedPostId] = useState(searchParams.get('post') || null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [copied, setCopied] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState(null);

    // Sync state with URL parameter for post
    useEffect(() => {
        const postParam = searchParams.get('post');
        setSelectedPostId(postParam);
        if (postParam) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [searchParams]);

    const handlePostClick = (postId) => {
        setSearchParams({ post: postId });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBackToList = () => {
        setSearchParams({});
        setSelectedPostId(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const toggleFaq = (index) => {
        if (expandedFaq === index) {
            setExpandedFaq(null);
        } else {
            setExpandedFaq(index);
        }
    };

    // Filter posts
    const filteredPosts = BLOG_POSTS.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const currentPost = BLOG_POSTS.find(post => post.id === selectedPostId);

    // Categories list
    const categories = ['All', 'Visa Guide', 'Tips & Tricks', 'Destinations'];

    return (
        <div style={{ paddingTop: '8.5rem', backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
            {/* Scope-specific Stylesheet injected */}
            <style>{`
        .blog-header-banner {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          padding: 5rem 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          margin-bottom: 3rem;
          border-radius: 24px;
          margin-left: 1.5rem;
          margin-right: 1.5rem;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.1);
        }
        .blog-video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0.35;
          pointer-events: none;
        }
        .blog-header-bg-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
          top: -100px;
          right: -100px;
          border-radius: 50%;
          z-index: 1;
        }
        .blog-header-banner h1 {
          font-size: 3rem;
          color: white;
          margin-bottom: 1rem;
          font-family: var(--font-heading);
          font-weight: 800;
          position: relative;
          z-index: 1;
        }
        .blog-header-banner p {
          color: #94a3b8;
          font-size: 1.15rem;
          max-width: 600px;
          position: relative;
          z-index: 1;
          margin: 0 auto;
        }
        .blog-controls {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .category-tabs {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .category-tab {
          padding: 0.6rem 1.25rem;
          border-radius: 50px;
          border: 1px solid #e2e8f0;
          background: white;
          color: #64748b;
          font-weight: 500;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        .category-tab:hover {
          border-color: var(--accent);
          color: var(--accent-dark);
          transform: translateY(-1px);
        }
        .category-tab.active {
          background: var(--accent);
          color: var(--primary);
          border-color: var(--accent);
          font-weight: 600;
        }
        .blog-search-box {
          position: relative;
          width: 320px;
          max-width: 100%;
        }
        .blog-search-box input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 50px;
          font-size: 0.9rem;
          background: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
          transition: all 0.3s ease;
        }
        .blog-search-box input:focus {
          border-color: var(--accent);
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.12);
        }
        .blog-search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }
        .featured-card {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          background: white;
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 3.5rem;
          box-shadow: 0 12px 35px rgba(15, 23, 42, 0.04);
          border: 1px solid rgba(15, 23, 42, 0.03);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .featured-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.08);
        }
        .featured-img-wrapper {
          position: relative;
          height: 420px;
          overflow: hidden;
        }
        .featured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .featured-card:hover .featured-img {
          transform: scale(1.03);
        }
        .featured-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          background: var(--accent);
          color: var(--primary);
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .featured-content {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .post-cat-badge {
          color: var(--accent-dark);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
          margin-bottom: 0.8rem;
        }
        .featured-title {
          font-size: 2.2rem;
          color: var(--primary);
          line-height: 1.2;
          margin-bottom: 1.2rem;
          font-weight: 800;
        }
        .featured-excerpt {
          color: #64748b;
          font-size: 1.05rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .post-meta-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          color: #94a3b8;
          font-size: 0.875rem;
          border-top: 1px solid #f1f5f9;
          padding-top: 1.5rem;
          margin-top: auto;
        }
        .post-meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 2.5rem;
          margin-bottom: 4rem;
        }
        .blog-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(15, 23, 42, 0.03);
          border: 1px solid rgba(15, 23, 42, 0.03);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.06);
        }
        .card-img-wrapper {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .blog-card:hover .card-img {
          transform: scale(1.05);
        }
        .card-content {
          padding: 2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .card-title {
          font-size: 1.35rem;
          color: var(--primary);
          line-height: 1.35;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }
        .card-excerpt {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }
        .newsletter-section {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border-radius: 24px;
          padding: 4rem 3rem;
          color: white;
          text-align: center;
          margin-bottom: 5rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.15);
        }
        .newsletter-section h2 {
          color: white;
          font-size: 2.2rem;
          margin-bottom: 0.75rem;
          font-family: var(--font-heading);
          font-weight: 800;
        }
        .newsletter-section p {
          color: #94a3b8;
          max-width: 500px;
          margin: 0 auto 2rem auto;
          font-size: 1.05rem;
        }
        .newsletter-form {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
          gap: 0.75rem;
        }
        .newsletter-form input {
          flex-grow: 1;
          padding: 0.9rem 1.5rem;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          color: white;
          outline: none;
          font-size: 0.95rem;
        }
        .newsletter-form input:focus {
          border-color: var(--accent);
          background: rgba(255,255,255,0.1);
        }
        .newsletter-form button {
          white-space: nowrap;
        }
        
        /* Reading View Styles */
        .read-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 2rem;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          background: white;
          border: 1px solid #e2e8f0;
          font-size: 0.9rem;
        }
        .read-back-btn:hover {
          color: var(--accent-dark);
          border-color: var(--accent);
          transform: translateX(-4px);
        }
        .read-post-header {
          margin-bottom: 2.5rem;
        }
        .read-post-category {
          display: inline-block;
          background: rgba(212, 175, 55, 0.15);
          color: var(--accent-dark);
          padding: 0.4rem 1.25rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.25rem;
        }
        .read-post-title {
          font-size: 3rem;
          line-height: 1.15;
          color: var(--primary);
          margin-bottom: 1.25rem;
          font-weight: 800;
          font-family: var(--font-heading);
        }
        .read-post-subtitle {
          font-size: 1.3rem;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 2.5rem;
          font-weight: 400;
        }
        .author-card-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 1.5rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .author-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .author-avatar {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          border: 2px solid white;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }
        .author-name {
          font-weight: 700;
          color: var(--primary);
          font-size: 1rem;
        }
        .author-role {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .read-share-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
          border-radius: 50px;
          background: white;
          border: 1px solid #e2e8f0;
          color: #475569;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .read-share-btn:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }
        .read-hero-image-wrapper {
          width: 100%;
          height: 520px;
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 3.5rem;
          box-shadow: 0 15px 35px rgba(0,0,0,0.06);
        }
        .read-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .read-post-layout {
          display: grid;
          grid-template-columns: 2.2fr 0.8fr;
          gap: 4rem;
          align-items: start;
        }
        .read-body-content {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #334155;
        }
        .read-body-content p {
          margin-bottom: 1.8rem;
        }
        .read-body-content h2 {
          font-size: 1.85rem;
          color: var(--primary);
          margin-top: 3rem;
          margin-bottom: 1.2rem;
          font-family: var(--font-heading);
          font-weight: 700;
        }
        .read-body-content h3 {
          font-size: 1.4rem;
          color: var(--primary);
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-family: var(--font-heading);
          font-weight: 700;
        }
        .custom-checklist {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .custom-checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: white;
          padding: 1rem 1.25rem;
          border-radius: 12px;
          border-left: 4px solid var(--accent);
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }
        .custom-checklist-item strong {
          color: var(--primary);
        }
        .checklist-icon {
          color: #10b981;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }
        
        .alert-box {
          background: #fef3c7;
          border-left: 4px solid #d97706;
          padding: 1.25rem 1.5rem;
          border-radius: 0 12px 12px 0;
          color: #92400e;
          font-size: 1.05rem;
          margin: 2rem 0;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .alert-icon {
          color: #d97706;
          font-size: 1.25rem;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }
        
        .comparison-table-wrapper {
          overflow-x: auto;
          margin: 2rem 0;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.95rem;
        }
        .comparison-table th {
          background: #f8fafc;
          padding: 1rem 1.25rem;
          font-weight: 700;
          color: var(--primary);
          border-bottom: 1px solid #e2e8f0;
          font-family: var(--font-heading);
        }
        .comparison-table td {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid #e2e8f0;
          color: #475569;
        }
        .comparison-table tr:last-child td {
          border-bottom: none;
        }
        
        .faq-section {
          margin-top: 4rem;
          border-top: 1px solid #e2e8f0;
          padding-top: 3rem;
        }
        .faq-title {
          font-size: 1.75rem;
          color: var(--primary);
          margin-bottom: 1.5rem;
          font-family: var(--font-heading);
          font-weight: 700;
        }
        .faq-item {
          border-bottom: 1px solid #e2e8f0;
          padding: 1.25rem 0;
        }
        .faq-question-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-weight: 700;
          color: var(--primary);
          font-size: 1.1rem;
        }
        .faq-question-row:hover {
          color: var(--accent-dark);
        }
        .faq-toggle-icon {
          color: #94a3b8;
          transition: transform 0.2s ease;
        }
        .faq-toggle-icon.active {
          transform: rotate(180deg);
          color: var(--accent);
        }
        .faq-answer {
          margin-top: 0.75rem;
          color: #475569;
          font-size: 1rem;
          line-height: 1.6;
        }
        
        /* Sticky Sidebar Widgets */
        .sidebar-sticky-col {
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .sidebar-widget {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 8px 25px rgba(15, 23, 42, 0.03);
          border: 1px solid rgba(15, 23, 42, 0.03);
        }
        .cta-widget {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .cta-widget::before {
          content: '';
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
          bottom: -50px;
          right: -50px;
          border-radius: 50%;
        }
        .cta-widget h4 {
          color: white;
          font-size: 1.3rem;
          margin-bottom: 0.75rem;
          font-family: var(--font-heading);
          font-weight: 700;
        }
        .cta-widget p {
          color: #94a3b8;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        .cta-widget-btn {
          width: 100%;
          text-align: center;
        }
        .widget-title-small {
          font-size: 1.1rem;
          color: var(--primary);
          margin-bottom: 1.2rem;
          border-left: 3px solid var(--accent);
          padding-left: 0.75rem;
          font-weight: 700;
          font-family: var(--font-heading);
        }
        .checklist-bullet {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.8rem;
          font-size: 0.9rem;
          color: #475569;
        }
        .checklist-bullet svg {
          color: #10b981;
          flex-shrink: 0;
        }
        
        .related-post-item {
          display: flex;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
          cursor: pointer;
        }
        .related-post-item:last-child {
          margin-bottom: 0;
        }
        .related-img {
          width: 70px;
          height: 70px;
          border-radius: 8px;
          object-fit: cover;
          flex-shrink: 0;
        }
        .related-post-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .related-post-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--primary);
          line-height: 1.35;
          margin-bottom: 0.25rem;
        }
        .related-post-title:hover {
          color: var(--accent-dark);
        }
        .related-post-date {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .featured-card {
            grid-template-columns: 1fr;
          }
          .featured-img-wrapper {
            height: 300px;
          }
          .read-post-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .sidebar-sticky-col {
            position: static;
          }
        }
        @media (max-width: 768px) {
          .blog-header-banner h1 {
            font-size: 2.25rem;
          }
          .blog-controls {
            flex-direction: column;
            align-items: stretch;
          }
          .blog-search-box {
            width: 100%;
          }
          .featured-content {
            padding: 2rem;
          }
          .featured-title {
            font-size: 1.75rem;
          }
          .read-post-title {
            font-size: 2.2rem;
          }
          .read-hero-image-wrapper {
            height: 300px;
            margin-bottom: 2rem;
          }
          .newsletter-section {
            padding: 2.5rem 1.5rem;
          }
          .newsletter-section h2 {
            font-size: 1.85rem;
          }
          .newsletter-form {
            flex-direction: column;
          }
        }
      `}</style>

            <div className="container">
                {selectedPostId && currentPost ? (
                    /* ========================================================================= */
                    /*                       DETAILED SINGLE POST VIEW                           */
                    /* ========================================================================= */
                    <article style={{ paddingBottom: '5rem' }}>
                        {/* Back Button */}
                        <button className="read-back-btn" onClick={handleBackToList}>
                            <FaArrowLeft /> Back to Blog Listing
                        </button>

                        {/* Post Header */}
                        <header className="read-post-header">
                            <span className="read-post-category">{currentPost.category}</span>
                            <h1 className="read-post-title">{currentPost.title}</h1>
                            <p className="read-post-subtitle">{currentPost.subtitle}</p>

                            {/* Author & Info Bar */}
                            <div className="author-card-row">
                                <div className="author-info">
                                    <div className="author-avatar">
                                        {currentPost.author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <div className="author-name">{currentPost.author}</div>
                                        <div className="author-role">{currentPost.authorRole}</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                                    <div className="post-meta-item">
                                        <FaCalendarAlt /> {currentPost.date}
                                    </div>
                                    <div className="post-meta-item">
                                        <FaClock /> {currentPost.readTime}
                                    </div>
                                    <button className="read-share-btn" onClick={handleShare}>
                                        <FaShareAlt /> {copied ? 'Link Copied!' : 'Share'}
                                    </button>
                                </div>
                            </div>
                        </header>

                        {/* Big Featured Image */}
                        <div className="read-hero-image-wrapper">
                            <img src={currentPost.image} alt={currentPost.title} className="read-hero-image" />
                        </div>

                        {/* Main Layout Grid */}
                        <div className="read-post-layout">

                            {/* Left Column: Post Contents */}
                            <div className="read-body-content">
                                {currentPost.id === 'tourist-visa-requirements' ? (
                                    <>
                                        <p>
                                            Traveling internationally is one of the most enriching experiences life has to offer. However, before you can set foot on foreign soil and start taking in the sights, there is a crucial administrative hurdle you must clear: obtaining a <strong>tourist visa</strong>.
                                        </p>

                                        <p>
                                            While visa processes can seem complex and intimidating, they are highly systematic. Knowing exactly what visa officers are looking for and preparing an air-tight, error-free documentation pack is the secret to getting your stamp on the very first attempt. In this ultimate guide, we lay out the core tourist visa requirements, highlight country-specific rules, and outline common pitfalls to avoid.
                                        </p>

                                        <h2>1. The Global Tourist Visa Document Checklist</h2>
                                        <p>
                                            Regardless of which country you plan to visit, almost all embassies share a common baseline for documentation. Make sure you have these key items in order before applying:
                                        </p>

                                        <ul className="custom-checklist">
                                            <li className="custom-checklist-item">
                                                <div>
                                                    <FaCheckCircle className="checklist-icon" />
                                                </div>
                                                <div>
                                                    <strong>Valid Passport:</strong> Your passport must be valid for at least <strong>six months</strong> beyond your planned return date and must contain at least <strong>two blank pages</strong> for visa stamps.
                                                </div>
                                            </li>
                                            <li className="custom-checklist-item">
                                                <div>
                                                    <FaCheckCircle className="checklist-icon" />
                                                </div>
                                                <div>
                                                    <strong>Completed Visa Application Form:</strong> Fill out every single field accurately. Discrepancies between your application form and supporting documents are the #1 trigger for delays.
                                                </div>
                                            </li>
                                            <li className="custom-checklist-item">
                                                <div>
                                                    <FaCheckCircle className="checklist-icon" />
                                                </div>
                                                <div>
                                                    <strong>Recent Biometric Photos:</strong> Most embassies require two recent color photographs. These must adhere to strict dimensions (often 35x45mm or 2x2 inches) with a matte finish, white background, and no smiling.
                                                </div>
                                            </li>
                                            <li className="custom-checklist-item">
                                                <div>
                                                    <FaCheckCircle className="checklist-icon" />
                                                </div>
                                                <div>
                                                    <strong>Proof of Financial Sufficiency:</strong> You must prove you can comfortably support yourself during the trip. This is typically shown through <strong>3 to 6 months of bank statements</strong>, payslips, and Income Tax Returns (ITR).
                                                </div>
                                            </li>
                                            <li className="custom-checklist-item">
                                                <div>
                                                    <FaCheckCircle className="checklist-icon" />
                                                </div>
                                                <div>
                                                    <strong>Detailed Travel Itinerary:</strong> A day-by-day plan of your trip, including reserved round-trip flight tickets. <em>Tip: Do not buy fully non-refundable tickets until your visa is approved; hold reservation codes instead.</em>
                                                </div>
                                            </li>
                                            <li className="custom-checklist-item">
                                                <div>
                                                    <FaCheckCircle className="checklist-icon" />
                                                </div>
                                                <div>
                                                    <strong>Accommodation Details:</strong> Confirmed hotel bookings or, if staying with friends or relatives, an official invitation letter along with their passport copy and proof of local residence.
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="alert-box">
                                            <FaInfoCircle className="alert-icon" />
                                            <div>
                                                <strong>Important Note:</strong> Never submit fake or photoshopped documents. Embassies carry out verification checks with banks, hotels, and airlines. If caught, you risk an immediate rejection and a multi-year ban from entering the territory.
                                            </div>
                                        </div>

                                        <h2>2. Country-Specific Requirements Compared</h2>
                                        <p>
                                            Depending on your holiday destination, the visa rules, fees, and processing methods vary significantly. Here is an overview of requirements for major travel corridors:
                                        </p>

                                        <div className="comparison-table-wrapper">
                                            <table className="comparison-table">
                                                <thead>
                                                    <tr>
                                                        <th>Destination</th>
                                                        <th>Visa Type</th>
                                                        <th>Avg. Processing</th>
                                                        <th>Key Unique Requirement</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><strong>Schengen Zone (Europe)</strong></td>
                                                        <td>Short-stay Visa (C-Type)</td>
                                                        <td>15 - 30 Days</td>
                                                        <td>Travel Medical Insurance covering minimum 30,000 EUR with repatriation.</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>United States</strong></td>
                                                        <td>B1/B2 Visitor Visa</td>
                                                        <td>Varies (Interview wait times)</td>
                                                        <td>DS-160 Form submission and mandatory in-person consular interview.</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>United Kingdom</strong></td>
                                                        <td>Standard Visitor Visa</td>
                                                        <td>15 - 21 Days</td>
                                                        <td>Heavy focus on showing strong ties to home country (job contract, property).</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Dubai / UAE</strong></td>
                                                        <td>e-Visa (Tourist)</td>
                                                        <td>3 - 5 Days</td>
                                                        <td>Paperless. Only requires high-res passport copy, photo, and return flights.</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Singapore</strong></td>
                                                        <td>Paper-based e-Visa</td>
                                                        <td>4 - 6 Days</td>
                                                        <td>Must be filed through an authorized visa agent (Form 14A and Letter V39A).</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Thailand</strong></td>
                                                        <td>e-Visa / VoA</td>
                                                        <td>3 - 7 Days</td>
                                                        <td>Declaration of cash funds on arrival (minimum 10,000 THB per traveler).</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <h2>3. The Visa Application Workflow</h2>
                                        <p>
                                            To ensure you do not miss deadlines, it is best to follow a structured roadmap:
                                        </p>
                                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                            <li><strong>Research:</strong> Check the visa requirements of your destination country at least 2-3 months in advance.</li>
                                            <li><strong>Book an Appointment:</strong> For countries like Schengen states or the US, appointment slots fill up fast. Secure a slot early.</li>
                                            <li><strong>Gather Documents:</strong> Follow the checklist meticulously. Prepare drafts of your cover letter and day-to-day plan.</li>
                                            <li><strong>Submit & Pay:</strong> Pay the required visa fee and submit your passport along with the paperwork either digitally, via a visa application center (VFS/BLS), or at the embassy.</li>
                                            <li><strong>Attend Interview / Biometrics:</strong> If required, visit the center to provide fingerprints/photos or answer basic questions about your travel plans.</li>
                                        </ol>

                                        <h2>4. Top Reasons for Tourist Visa Rejection</h2>
                                        <p>
                                            Understanding why visas get rejected helps you bulletproof your own application:
                                        </p>
                                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '3rem' }}>
                                            <li style={{ background: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '1rem', borderRadius: '0 8px 8px 0', color: '#991b1b' }}>
                                                <strong>1. Insufficient Proof of Funds:</strong> If your bank statement shows a sudden, large deposit of money right before applying, it raises red flags. The funds must be stable and reflect regular income.
                                            </li>
                                            <li style={{ background: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '1rem', borderRadius: '0 8px 8px 0', color: '#991b1b' }}>
                                                <strong>2. Unclear Travel Intent:</strong> If your itinerary makes no sense, or you have booked a flight to one country but hotel stays in an entirely different region, visa officers will doubt your plans.
                                            </li>
                                            <li style={{ background: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '1rem', borderRadius: '0 8px 8px 0', color: '#991b1b' }}>
                                                <strong>3. Weak Ties to Home Country:</strong> The visa officer's primary objective is to verify that you will return home. If you are unemployed, have no assets, or have no family members in your home country, the rejection risk increases. A solid employment contract or proof of business ownership is vital.
                                            </li>
                                        </ul>

                                        {/* FAQ Section */}
                                        <div className="faq-section">
                                            <h3 className="faq-title"><FaQuestionCircle style={{ color: 'var(--accent)', marginRight: '8px' }} /> Frequently Asked Questions</h3>

                                            <div className="faq-item">
                                                <div className="faq-question-row" onClick={() => toggleFaq(0)}>
                                                    <span>How early should I apply for my tourist visa?</span>
                                                    <span className={`faq-toggle-icon ${expandedFaq === 0 ? 'active' : ''}`}>▼</span>
                                                </div>
                                                {expandedFaq === 0 && (
                                                    <div className="faq-answer">
                                                        It is recommended to apply between 30 to 90 days before your intended travel date. Most embassies do not accept applications earlier than 180 days in advance, but leaving it to the last month can cause extreme stress in case of processing delays.
                                                    </div>
                                                )}
                                            </div>

                                            <div className="faq-item">
                                                <div className="faq-question-row" onClick={() => toggleFaq(1)}>
                                                    <span>Do I need to buy flight tickets before applying?</span>
                                                    <span className={`faq-toggle-icon ${expandedFaq === 1 ? 'active' : ''}`}>▼</span>
                                                </div>
                                                {expandedFaq === 1 && (
                                                    <div className="faq-answer">
                                                        No. Most embassies explicitly state that you should not purchase non-refundable flight tickets. Instead, obtain a flight itinerary or flight reservation (often called a flight dummy ticket) which holds a seat configuration code. You can purchase the actual ticket once your visa is in hand.
                                                    </div>
                                                )}
                                            </div>

                                            <div className="faq-item">
                                                <div className="faq-question-row" onClick={() => toggleFaq(2)}>
                                                    <span>Can I work on a tourist visa?</span>
                                                    <span className={`faq-toggle-icon ${expandedFaq === 2 ? 'active' : ''}`}>▼</span>
                                                </div>
                                                {expandedFaq === 2 && (
                                                    <div className="faq-answer">
                                                        Absolutely not. Working, studying, or looking for local jobs on a standard tourist visa is strictly illegal in almost all countries. Doing so can lead to immediate deportation, detention, and permanent bans from the country.
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                ) : currentPost.id === 'visa-cover-letter-guide' ? (
                                    <>
                                        <p>
                                            When a visa officer reviews your folder, they are presented with a stack of bank statements, hotel receipts, and passport copies. On their own, these documents are dry and open to interpretation.
                                        </p>
                                        <p>
                                            This is where your <strong>cover letter</strong> comes in. It is your only opportunity to directly address the visa officer, tie your documents together, explain the narrative of your journey, and assure them of your intent to return home.
                                        </p>

                                        <h2>Key Components of a Winning Cover Letter</h2>
                                        <ul className="custom-checklist">
                                            <li className="custom-checklist-item">
                                                <div><FaCheckCircle className="checklist-icon" /></div>
                                                <div><strong>Introduction:</strong> State your name, passport number, current employment status, and the purpose of your trip.</div>
                                            </li>
                                            <li className="custom-checklist-item">
                                                <div><FaCheckCircle className="checklist-icon" /></div>
                                                <div><strong>Travel Dates & Destination:</strong> Clear outline of when you will arrive, which cities you will visit, and when you will depart.</div>
                                            </li>
                                            <li className="custom-checklist-item">
                                                <div><FaCheckCircle className="checklist-icon" /></div>
                                                <div><strong>Funding Explanation:</strong> Clearly describe who is paying for the trip. If you are self-funding, point to the bank balance that matches your budget.</div>
                                            </li>
                                            <li className="custom-checklist-item">
                                                <div><FaCheckCircle className="checklist-icon" /></div>
                                                <div><strong>Document Index:</strong> List every supporting document you are attaching so the officer can navigate your file easily.</div>
                                            </li>
                                            <li className="custom-checklist-item">
                                                <div><FaCheckCircle className="checklist-icon" /></div>
                                                <div><strong>Ties to Home Country:</strong> Explain why you must return. Mention your job responsibilities, family obligations, or real estate assets.</div>
                                            </li>
                                        </ul>

                                        <h2>A Quick Template Outline</h2>
                                        <div style={{ background: '#f1f5f9', padding: '1.5rem', borderRadius: '12px', fontFamily: 'monospace', fontSize: '0.9rem', color: '#334155', margin: '2rem 0', overflowX: 'auto' }}>
                                            To,<br />
                                            The Visa Officer,<br />
                                            [Embassy Name], [City]<br /><br />
                                            Subject: Application for Tourist Visa - [Your Name] - Passport No: [Number]<br /><br />
                                            Dear Sir/Madam,<br />
                                            I am writing to submit my tourist visa application to visit [Country] from [Start Date] to [End Date]...<br />
                                            [Explain purpose of holiday]<br />
                                            [Provide day-by-day travel plan brief]<br />
                                            [Detail financial arrangements]<br />
                                            [List attached documents]<br />
                                            [Reinforce return ties - e.g., my leave approval from employer is attached]<br /><br />
                                            Sincerely,<br />
                                            [Your Name]<br />
                                            [Signature]
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <p>
                                            Traveling the world is a dream, but waiting weeks for visa slots and filling out endless pages of documentation can quickly drain the excitement from your holiday plans.
                                        </p>
                                        <p>
                                            Fortunately, passport power is evolving. In 2026, many stunning nations have waived visa requirements entirely or introduced easy Visa on Arrival (VoA) mechanisms for travelers, allowing you to buy a ticket, pack your bags, and go.
                                        </p>

                                        <h2>Top Destinations to Visit Instantly</h2>
                                        <ul className="custom-checklist">
                                            <li className="custom-checklist-item">
                                                <div><FaCheckCircle className="checklist-icon" /></div>
                                                <div><strong>Thailand:</strong> Known for its pristine beaches, delicious street food, and ornate temples. Offering visa-free entry, making it the perfect last-minute trip.</div>
                                            </li>
                                            <li className="custom-checklist-item">
                                                <div><FaCheckCircle className="checklist-icon" /></div>
                                                <div><strong>Mauritius:</strong> A gorgeous island nation in the Indian Ocean. Perfect for honeymoons and luxury beach escapes, visa-free for up to 60 days.</div>
                                            </li>
                                            <li className="custom-checklist-item">
                                                <div><FaCheckCircle className="checklist-icon" /></div>
                                                <div><strong>Kazakhstan:</strong> A hidden gem boasting rugged mountains, futuristic architecture, and beautiful lakes. Visa-free for up to 14 days.</div>
                                            </li>
                                            <li className="custom-checklist-item">
                                                <div><FaCheckCircle className="checklist-icon" /></div>
                                                <div><strong>Sri Lanka:</strong> Explore tea plantations, ancient ruins, and rich wildlife sanctuaries with quick online ETA or Visa on Arrival.</div>
                                            </li>
                                        </ul>

                                        <p style={{ marginTop: '2rem' }}>
                                            Always verify the entry rules before you fly, as policy waivers can change based on bilateral diplomatic agreements. Ensure you carry your return flight reservation and proof of hotel stay, as immigration officers may still request them at the border.
                                        </p>
                                    </>
                                )}
                            </div>

                            {/* Right Column: Sidebar Widgets */}
                            <aside className="sidebar-sticky-col">
                                {/* Apply Visa Widget */}
                                <div className="sidebar-widget cta-widget">
                                    <h4>Ready to Apply?</h4>
                                    <p>Let the experts at Holidays Navigator handle the entire document review, filing, and tracking process for you.</p>
                                    <Link to="/apply" className="btn btn-accent cta-widget-btn">
                                        Start Application
                                    </Link>
                                </div>

                                {/* Requirements Summary Checklist */}
                                {currentPost.id === 'tourist-visa-requirements' && (
                                    <div className="sidebar-widget">
                                        <h5 className="widget-title-small">Essential Summary</h5>
                                        <div className="checklist-bullet">
                                            <FaPassport /> <span>6-Month Valid Passport</span>
                                        </div>
                                        <div className="checklist-bullet">
                                            <FaFileAlt /> <span>Application Forms</span>
                                        </div>
                                        <div className="checklist-bullet">
                                            <FaGlobe /> <span>Proof of Stable Funds</span>
                                        </div>
                                        <div className="checklist-bullet">
                                            <FaPlaneDeparture /> <span>Flight & Hotel Booking</span>
                                        </div>
                                    </div>
                                )}

                                {/* Related Posts */}
                                <div className="sidebar-widget">
                                    <h5 className="widget-title-small">Related Articles</h5>
                                    {BLOG_POSTS.filter(post => post.id !== currentPost.id).map(post => (
                                        <div className="related-post-item" key={post.id} onClick={() => handlePostClick(post.id)}>
                                            <img src={post.image} alt={post.title} className="related-img" />
                                            <div className="related-post-info">
                                                <span className="related-post-title">{post.title}</span>
                                                <span className="related-post-date">{post.date}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </aside>

                        </div>
                    </article>
                ) : (
                    /* ========================================================================= */
                    /*                           BLOG LISTINGS VIEW                              */
                    /* ========================================================================= */
                    <>
                        {/* Header Banner */}
                        <div className="blog-header-banner">
                            <video
                                className="blog-video-bg"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src="/images/bg.mp4" type="video/mp4" />
                                <source src="/images-bg.mp4" type="video/mp4" />
                                <source src="/public/images-bg.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="blog-header-bg-glow"></div>
                            <h1>Holidays Navigator Blog</h1>
                            <p>Your premium resource for travel guides, visa rules, document checklists, and global destination updates.</p>
                        </div>

                        {/* Controls Bar */}
                        <div className="blog-controls">
                            <div className="category-tabs">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(cat)}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            <div className="blog-search-box">
                                <FaSearch className="blog-search-icon" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Featured Post (only shown if search is empty/all categories, and fits filter) */}
                        {filteredPosts.some(p => p.featured) && searchQuery === '' && activeCategory === 'All' && (
                            (() => {
                                const featuredPost = BLOG_POSTS.find(p => p.featured);
                                return (
                                    <div className="featured-card" onClick={() => handlePostClick(featuredPost.id)}>
                                        <div className="featured-img-wrapper">
                                            <span className="featured-badge">Featured</span>
                                            <img src={featuredPost.image} alt={featuredPost.title} className="featured-img" />
                                        </div>
                                        <div className="featured-content">
                                            <span className="post-cat-badge">{featuredPost.category}</span>
                                            <h2 className="featured-title">{featuredPost.title}</h2>
                                            <p className="featured-excerpt">{featuredPost.excerpt}</p>
                                            <div className="post-meta-row">
                                                <div className="post-meta-item">
                                                    <FaUser /> {featuredPost.author}
                                                </div>
                                                <div className="post-meta-item">
                                                    <FaCalendarAlt /> {featuredPost.date}
                                                </div>
                                                <div className="post-meta-item">
                                                    <FaClock /> {featuredPost.readTime}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()
                        )}

                        {/* Articles Grid */}
                        <div className="blog-grid">
                            {filteredPosts.filter(p => searchQuery !== '' || activeCategory !== 'All' ? true : !p.featured).map(post => (
                                <div className="blog-card" key={post.id} onClick={() => handlePostClick(post.id)}>
                                    <div className="card-img-wrapper">
                                        <img src={post.image} alt={post.title} className="card-img" />
                                    </div>
                                    <div className="card-content">
                                        <span className="post-cat-badge">{post.category}</span>
                                        <h3 className="card-title">{post.title}</h3>
                                        <p className="card-excerpt">{post.excerpt}</p>
                                        <div className="post-meta-row">
                                            <div className="post-meta-item">
                                                <FaCalendarAlt /> {post.date}
                                            </div>
                                            <div className="post-meta-item">
                                                <FaClock /> {post.readTime}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Empty Search State */}
                        {filteredPosts.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '5rem 0', color: '#64748b' }}>
                                <FaTimesCircle style={{ fontSize: '3rem', color: '#cbd5e1', marginBottom: '1.5rem' }} />
                                <h3>No articles found</h3>
                                <p style={{ marginTop: '0.5rem' }}>Try adjusting your search query or filter tags.</p>
                            </div>
                        )}

                        {/* Newsletter Subscription Box */}
                        <section className="newsletter-section">
                            <h2>Never Miss a Travel Update</h2>
                            <p>Subscribe to our newsletter to receive the latest travel visa updates, special offers, and holiday guides directly in your inbox.</p>
                            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
                                <input type="email" placeholder="Enter your email address" required />
                                <button type="submit" className="btn btn-accent">Subscribe Now</button>
                            </form>
                        </section>
                    </>
                )}
            </div>
        </div>
    );
}
