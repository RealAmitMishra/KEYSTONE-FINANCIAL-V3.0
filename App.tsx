import React, { useState, useCallback } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import ContactPage from './components/pages/ContactPage';
import ResourcesPage from './components/pages/ResourcesPage';
import FAQPage from './components/pages/FAQPage';
import LedgerDemoPage from './components/pages/LedgerDemoPage';
import BackToTopButton from './components/BackToTopButton';
import AnnouncementBar from './components/AnnouncementBar';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage navigateTo={navigateTo} />;
      case Page.About:
        return <AboutPage />;
      case Page.Services:
        return <ServicesPage />;
      case Page.Contact:
        return <ContactPage />;
      case Page.Resources:
        return <ResourcesPage navigateTo={navigateTo} />;
      case Page.FAQ:
        return <FAQPage />;
      case Page.LedgerDemo:
        return <LedgerDemoPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="text-brand-light">
      <AnnouncementBar />
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main>
        <div key={currentPage} className="animate-fade-in">
          {renderPage()}
        </div>
      </main>
      <Footer navigateTo={navigateTo} />
      <BackToTopButton />
    </div>
  );
}

export default App;