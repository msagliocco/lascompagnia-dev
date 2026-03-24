import { useEffect, useSyncExternalStore } from 'react';
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
import CoppiaApertaSection from './components/CoppiaApertaSection';
import NewsletterSection from './components/NewsletterSection';
import StructuredData from './components/StructuredData';

const GA_MEASUREMENT_ID = 'G-9PSDYC1FLV';
const COOKIE_CONSENT_KEY = 'cookieConsent';
const COOKIE_CONSENT_EVENT = 'cookie-consent-change';

const readCookieConsent = (): 'accepted' | 'declined' | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const consent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  if (consent === 'true' || consent === 'accepted') {
    return 'accepted';
  }
  if (consent === 'false' || consent === 'declined') {
    return 'declined';
  }
  return null;
};

const subscribeToCookieConsent = (onStoreChange: () => void) => {
  if (typeof window === 'undefined') {
    return () => undefined;
  }

  const handleChange = () => onStoreChange();
  window.addEventListener('storage', handleChange);
  window.addEventListener(COOKIE_CONSENT_EVENT, handleChange);

  return () => {
    window.removeEventListener('storage', handleChange);
    window.removeEventListener(COOKIE_CONSENT_EVENT, handleChange);
  };
};

function App() {
  const cookieConsent = useSyncExternalStore(
    subscribeToCookieConsent,
    readCookieConsent,
    () => null,
  );

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
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
  };

  return (
    <div className="min-h-screen flex flex-col relative text-pitch-black bg-brutalist-wall">
      <StructuredData />
      <BackgroundOrnaments />
      <Header />
      <main className="flex-grow z-10 pt-14 pb-12 px-4 max-w-7xl mx-auto w-full">
        <Home />
        <OurStory />
        <Shows />
        <CoppiaApertaSection />
        <NewsletterSection />
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
