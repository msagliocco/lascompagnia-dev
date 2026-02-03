import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-off-white py-8 z-50 border-t-2 border-off-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0 text-center md:text-left font-mono text-sm">
          &copy; 2025 <span className="font-bold text-neon-lime">LA SCOMPAGNIA</span>. TUTTI I DIRITTI RISERVATI.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://facebook.com/lascompagnia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-off-white hover:text-neon-lime transition-colors duration-200 border-2 border-transparent hover:border-neon-lime p-1"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://instagram.com/lascompagnia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-off-white hover:text-neon-pink transition-colors duration-200 border-2 border-transparent hover:border-neon-pink p-1"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
