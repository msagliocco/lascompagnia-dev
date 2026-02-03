import { useState } from 'react';
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
  const [showCookieConsent, setShowCookieConsent] = useState(() => {
    const consent = localStorage.getItem('cookieConsent');
    return consent === null;
  });

  const handleCookieConsent = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted.toString());
    setShowCookieConsent(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-pitch-black text-off-white bg-grid-pattern">
      <Header />
      <main className="flex-grow z-10 pt-24 pb-12 px-4 max-w-7xl mx-auto w-full">
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