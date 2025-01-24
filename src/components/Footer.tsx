import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chocolate-cosmos opacity-50 backdrop-blur-sm' text-text-primary py-8 z-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0 text-center md:text-left">
          &copy; 2025 La Scompagnia. Tutti i diritti riservati.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://facebook.com/lascompagnia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-selective-yellow transition duration-300"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://instagram.com/lascompagnia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-selective-yellow transition duration-300"
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
