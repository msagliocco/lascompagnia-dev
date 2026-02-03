import React from 'react';

interface CookieConsentProps {
  onConsent: (accepted: boolean) => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onConsent }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 flex justify-center pointer-events-none">
      <div className="brutal-card bg-pitch-black border-2 border-off-white shadow-brutal pointer-events-auto max-w-4xl w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm text-off-white text-center sm:text-left">
            <span className="font-bold text-neon-lime uppercase mr-2">Cookies?</span>
            Utilizziamo i cookie per migliorare la tua esperienza.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => onConsent(true)}
              className="font-mono font-bold uppercase bg-neon-lime text-pitch-black px-4 py-2 border-2 border-transparent hover:bg-off-white hover:border-off-white transition-colors shadow-[2px_2px_0px_0px_#fff]"
            >
              Accetta
            </button>
            <button
              onClick={() => onConsent(false)}
              className="font-mono font-bold uppercase bg-transparent text-off-white px-4 py-2 border-2 border-off-white hover:bg-neon-pink hover:text-pitch-black hover:border-transparent transition-colors shadow-[2px_2px_0px_0px_#fff]"
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
