import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BookingPage from './pages/BookingPage.jsx';

const SITE_SUFFIX = ' — Mustafa Öner | MK Digital Systems';

const PAGE_TITLES = {
  '/': `Mavi Güzellik | Web Design Demo${SITE_SUFFIX}`,
  '/hizmetler': `Hizmetler | Mavi Güzellik${SITE_SUFFIX}`,
  '/hakkimizda': `Biz Kimiz | Mavi Güzellik${SITE_SUFFIX}`,
  '/randevu': `Randevu | Mavi Güzellik${SITE_SUFFIX}`,
};

function DocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const title = PAGE_TITLES[pathname] || `Mavi Güzellik${SITE_SUFFIX}`;
    document.title = title;
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <DocumentTitle />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hizmetler" element={<ServicesPage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/randevu" element={<BookingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center bg-slate-50 py-20">
      <div className="text-center px-4">
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Sayfa bulunamadı
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen ana sayfaya dönerek tekrar deneyin.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-white hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] shadow-lg"
        >
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
}

export default App;
