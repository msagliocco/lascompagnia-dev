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
    <header className="fixed top-0 left-0 right-0 z-50 bg-off-white text-pitch-black border-b-2 border-pitch-black">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="stamp-mark w-10 h-10 text-lg">
            LS
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-black uppercase font-display tracking-tight">La Scompagnia</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                <a
                  href={item.href}
                  className="font-mono font-bold uppercase text-xs tracking-widest px-2 py-1 transition-colors duration-200 hover:text-neon-lime"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden border-2 border-pitch-black p-2 hover:bg-neon-lime hover:text-pitch-black transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden border-t-2 border-pitch-black bg-off-white text-pitch-black">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-pitch-black/20 last:border-0">
                <a
                  href={item.href}
                  className="block py-4 px-6 font-mono font-bold uppercase tracking-widest hover:bg-neon-lime hover:text-pitch-black transition-colors"
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
