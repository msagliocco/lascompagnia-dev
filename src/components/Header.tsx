import React, { useState, useEffect } from 'react';
import { TheaterIcon, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-chocolate-cosmos/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <TheaterIcon className="mr-2 text-selective-yellow" />
          <h1 className="text-2xl font-bold heading-gradient">La Scompagnia</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="hover:text-selective-yellow transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-selective-yellow transition duration-300"
              >
                Su di noi
              </a>
            </li>
            <li>
              <a
                href="#shows"
                className="hover:text-selective-yellow transition duration-300"
              >
                Spettacoli
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:text-selective-yellow transition duration-300"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#booking"
                className="hover:text-selective-yellow transition duration-300"
              >
                Booking
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:text-selective-yellow transition duration-300"
              >
                Gallery
              </a>
            </li>
          </ul>
        </nav>
        <button className="md:hidden text-selective-yellow" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4 bg-chocolate-cosmos/90 backdrop-blur-sm">
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li>
              <a
                href="#home"
                className="block py-2 hover:text-selective-yellow transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 hover:text-selective-yellow transition duration-300"
                onClick={toggleMenu}
              >
                Su di noi
              </a>
            </li>
            <li>
              <a
                href="#shows"
                className="block py-2 hover:text-selective-yellow transition duration-300"
                onClick={toggleMenu}
              >
                Spettacoli
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="block py-2 hover:text-selective-yellow transition duration-300"
                onClick={toggleMenu}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#booking"
                className="block py-2 hover:text-selective-yellow transition duration-300"
                onClick={toggleMenu}
              >
                Booking
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="block py-2 hover:text-selective-yellow transition duration-300"
                onClick={toggleMenu}
              >
                Gallery
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;