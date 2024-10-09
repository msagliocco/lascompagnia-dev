import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Shows from './components/Shows';
import Team from './components/Team';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import CookieConsent from './components/CookieConsent';
import OurStory from './components/OurStory';

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleCookieConsent = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted.toString());
    setShowCookieConsent(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Home />
        <OurStory />
        <Shows />
        <Team />
        <Booking />
        <Gallery />
      </main>
      <Footer />
      {showCookieConsent && <CookieConsent onConsent={handleCookieConsent} />}
    </div>
  );
}

export default App;