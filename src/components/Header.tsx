import React, { useState } from 'react';
import { TheaterIcon, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-dark-surface text-text-primary p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <TheaterIcon className="mr-2 text-spotlight" />
          <h1 className="text-2xl font-bold gradient-text-primary">La Scompagnia</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="hover:text-spotlight transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-spotlight transition duration-300"
              >
                Su di noi
              </a>
            </li>
            <li>
              <a
                href="#shows"
                className="hover:text-spotlight transition duration-300"
              >
                Spettacoli
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:text-spotlight transition duration-300"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#booking"
                className="hover:text-spotlight transition duration-300"
              >
                Booking
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:text-spotlight transition duration-300"
              >
                Gallery
              </a>
            </li>
          </ul>
        </nav>
        <button className="md:hidden text-spotlight" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <a
                href="#home"
                className="block py-2 hover:text-spotlight transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 hover:text-spotlight transition duration-300"
                onClick={toggleMenu}
              >
                Su di noi
              </a>
            </li>
            <li>
              <a
                href="#shows"
                className="block py-2 hover:text-spotlight transition duration-300"
                onClick={toggleMenu}
              >
                Spettacoli
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="block py-2 hover:text-spotlight transition duration-300"
                onClick={toggleMenu}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#booking"
                className="block py-2 hover:text-spotlight transition duration-300"
                onClick={toggleMenu}
              >
                Booking
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="block py-2 hover:text-spotlight transition duration-300"
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