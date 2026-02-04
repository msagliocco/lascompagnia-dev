import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Shows from './components/Shows';
import Team from './components/Team';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import CookieConsent from './components/CookieConsent';
import OurStory from './components/OurStory';
import BackgroundOrnaments from './components/BackgroundOrnaments';

const GA_MEASUREMENT_ID = 'G-9PSDYC1FLV';

function App() {
  const [cookieConsent, setCookieConsent] = useState<'accepted' | 'declined' | null>(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      return 'accepted';
    }
    if (consent === 'false') {
      return 'declined';
    }
    if (consent === 'accepted' || consent === 'declined') {
      return consent;
    }
    return null;
  });

  useEffect(() => {
    if (cookieConsent !== 'accepted') return;
    if (document.getElementById('gtag-js')) return;

    const script = document.createElement('script');
    script.id = 'gtag-js';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    const gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };
    window.gtag = window.gtag || gtag;
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);
  }, [cookieConsent]);

  const handleCookieConsent = (accepted: boolean) => {
    const value = accepted ? 'accepted' : 'declined';
    localStorage.setItem('cookieConsent', value);
    setCookieConsent(value);
  };

  return (
    <div className="min-h-screen flex flex-col relative text-pitch-black bg-brutalist-wall">
      <BackgroundOrnaments />
      <Header />
      <main className="flex-grow z-10 pt-14 pb-12 px-4 max-w-7xl mx-auto w-full">
        <Home />
        <OurStory />
        <Shows />
        <Team />
        <Booking />
        <Gallery
          canLoadMedia={cookieConsent === 'accepted'}
          onEnableMedia={() => handleCookieConsent(true)}
        />
      </main>
      <Footer />
      {cookieConsent === null && <CookieConsent onConsent={handleCookieConsent} />}
    </div>
  );
}

export default App;
