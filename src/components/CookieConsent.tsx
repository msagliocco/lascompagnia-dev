import React from 'react';

interface CookieConsentProps {
  onConsent: (accepted: boolean) => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onConsent }) => {
  return (
    <div className="cookie-consent fixed bottom-0 left-0 right-0 p-4 z-50 flex justify-center pointer-events-none">
      <div className="poster-card pointer-events-auto max-w-4xl w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm text-pitch-black text-center sm:text-left">
            <span className="font-bold uppercase mr-2">Cookies?</span>
            Utilizziamo i cookie per migliorare la tua esperienza.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => onConsent(true)}
              className="brutal-btn brutal-btn-sm"
            >
              Accetta
            </button>
            <button
              onClick={() => onConsent(false)}
              className="font-mono font-bold uppercase bg-off-white text-pitch-black px-4 py-2 border-2 border-pitch-black hover:bg-neon-lime hover:text-pitch-black transition-colors shadow-[2px_2px_0px_0px_#15130f]"
            >
              Rifiuta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
