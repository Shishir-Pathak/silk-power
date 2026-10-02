import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

// Page Components
import Home from './pages/Home'; 
import AboutUsPage from './pages/AboutUsPage';
import OurBusinessPage from './pages/OurBusinessPage';
import OurProjectsPage from './pages/OurProjectsPage'; 
import SustainabilityPage from './pages/SustainabilityPage'; 
import InvestorRelationsPage from './pages/InvestorRelationsPage';
import ContactUsPage from './pages/ContactUsPage';
import MediaPage from './pages/MediaPage';
import NoticesPage from './pages/NoticesPage';
import PlaceholderPage from './pages/PlaceholderPage';

// ScrollToTop component for smooth navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// Layout component to conditionally render the Footer
const Layout = ({ children }) => {
  const location = useLocation();
  // 👇 Check if the current page is the Sustainability page
  const isSustainabilityPage = location.pathname === '/sustainability';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {/* 👇 Only render Footer if it's NOT the Sustainability page */}
      {!isSustainabilityPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/business" element={<OurBusinessPage />} />
            <Route path="/projects" element={<OurProjectsPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/investor-relations" element={<InvestorRelationsPage />} />
            
            {/* Core Feature Pages */}
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </ErrorBoundary>
      </Layout>
    </Router>
  );
}

export default App;