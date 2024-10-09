import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-warm-brown text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0 text-center md:text-left">&copy; 2024 LaCompagnia. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-warm-yellow transition duration-300"><Facebook size={24} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-warm-yellow transition duration-300"><Instagram size={24} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-warm-yellow transition duration-300"><Twitter size={24} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer