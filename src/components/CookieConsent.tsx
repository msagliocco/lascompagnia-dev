import React from 'react'

interface CookieConsentProps {
  onConsent: (accepted: boolean) => void
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onConsent }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-chocolate-cosmos text-text-primary p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-4 sm:mb-0 text-sm sm:text-base">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => onConsent(true)}
            className="bg-engineering-orange hover:bg-selective-yellow hover:text-rich-black text-text-primary font-bold py-2 px-4 rounded transition duration-300 text-sm sm:text-base"
          >
            Accept
          </button>
          <button
            onClick={() => onConsent(false)}
            className="bg-rosewood hover:bg-penn-red text-text-primary font-bold py-2 px-4 rounded transition duration-300 text-sm sm:text-base"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent