import React from 'react';

export default function Loader({ text = 'Holidays Navigator' }) {
  return (
    <div className="loader-overlay">
      <div className="loader-spinner"></div>
      <div className="loader-text">{text}</div>
    </div>
  );
}
