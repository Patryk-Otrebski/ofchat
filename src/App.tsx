import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { CookiesBanner } from './components/CookiesBanner';

const App: React.FC = () => {
  const [showCookiesBanner, setShowCookiesBanner] = useState(() => {
    const cookiesChoice = localStorage.getItem('cookiesChoice');
    return !cookiesChoice;
  });

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesChoice', 'accepted');
    setShowCookiesBanner(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookiesChoice', 'declined');
    setShowCookiesBanner(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </main>
      <Footer />
      
      {showCookiesBanner && (
        <CookiesBanner
          onAccept={handleAcceptCookies}
          onDecline={handleDeclineCookies}
        />
      )}
    </div>
  );
};

export default App;