import React from 'react'

interface CookieConsentProps {
  onConsent: (accepted: boolean) => void
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onConsent }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-warm-brown text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-4 sm:mb-0">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => onConsent(true)}
            className="bg-warm-red hover:bg-warm-orange text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Accept
          </button>
          <button
            onClick={() => onConsent(false)}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent