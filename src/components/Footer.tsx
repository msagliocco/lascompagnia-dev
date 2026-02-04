import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-off-white text-pitch-black py-8 z-50 border-t-2 border-pitch-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0 text-center md:text-left font-mono text-sm">
          &copy; 2026 <span className="font-bold text-pitch-black">LA SCOMPAGNIA</span>. TUTTI I DIRITTI RISERVATI.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://facebook.com/lascompagnia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pitch-black hover:text-neon-lime transition-colors duration-200 border-2 border-transparent hover:border-pitch-black p-1"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://instagram.com/lascompagnia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pitch-black hover:text-neon-lime transition-colors duration-200 border-2 border-transparent hover:border-pitch-black p-1"
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
