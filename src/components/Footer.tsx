type SocialIconProps = {
  size?: number;
};

const FacebookIcon = ({ size = 24 }: SocialIconProps) => (
  <svg
    aria-hidden="true"
    fill="currentColor"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H8v3.1h2.3v8h3.2Z" />
  </svg>
);

const InstagramIcon = ({ size = 24 }: SocialIconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width={size}
  >
    <rect height="18" rx="5" width="18" x="3" y="3" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

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
            <FacebookIcon size={24} />
          </a>
          <a
            href="https://instagram.com/lascompagnia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pitch-black hover:text-neon-lime transition-colors duration-200 border-2 border-transparent hover:border-pitch-black p-1"
            aria-label="Instagram"
          >
            <InstagramIcon size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
