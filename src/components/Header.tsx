import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Su di noi', href: '#about' },
    { name: 'Spettacoli', href: '#shows' },
    { name: 'Team', href: '#team' },
    { name: 'Booking', href: '#booking' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pitch-black border-b-2 border-off-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="bg-neon-lime text-pitch-black font-bold p-2 border-2 border-off-white shadow-[4px_4px_0px_0px_#fff]">
            LS
          </div>
          <h1 className="text-2xl font-bold tracking-tighter uppercase font-display">La Scompagnia</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-mono font-bold uppercase text-sm hover:bg-neon-lime hover:text-pitch-black px-2 py-1 transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden border-2 border-off-white p-2 hover:bg-neon-lime hover:text-pitch-black transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden border-t-2 border-off-white bg-gray-900">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-gray-800 last:border-0">
                <a
                  href={item.href}
                  className="block py-4 px-6 font-mono font-bold uppercase hover:bg-neon-lime hover:text-pitch-black transition-colors"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
