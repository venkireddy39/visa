import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/919533444455?text=Hello%20Holidays%20Navigator%2C%20I%20have%20questions%20regarding%20my%20visa%20application."
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      aria-label="Chat with Holidays Navigator on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
