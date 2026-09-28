import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo'; // 👈 Import the new Logo component

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Business', path: '/business' },
    { name: 'Projects', path: '/projects' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Notices', path: '/notices' },
    { name: 'Media', path: '/media' },
    { name: 'Investor Relations', path: '/investor-relations' },
  ];

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-[100] w-full">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Section */}
       <Link to="/" className="cursor-pointer" onClick={handleMobileLinkClick}>
  <Logo className="h-10 md:h-12 w-auto" />
</Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;
            
            return (
              <Link key={index} to={link.path} className="relative group cursor-pointer py-2">
                <span className={`text-sm font-medium ${isActive ? 'text-brand-maroon' : 'text-gray-600'} hover:text-brand-maroon transition-colors`}>
                  {link.name}
                </span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-green"></div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4 lg:gap-6">
          <Link to="/contact" className="hidden sm:flex bg-brand-olive text-white px-5 py-2 rounded-full text-sm font-medium items-center gap-2 hover:bg-opacity-90 transition-all">
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          
          <button className="text-brand-maroon hover:text-brand-green hidden sm:block">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button 
            className="xl:hidden text-gray-700 hover:text-brand-maroon focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col py-4 px-6 gap-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={index} 
                to={link.path} 
                onClick={handleMobileLinkClick}
                className={`text-sm font-medium py-2 border-b border-gray-50 flex justify-between items-center ${isActive ? 'text-brand-maroon' : 'text-gray-600'}`}
              >
                {link.name}
                {isActive && <div className="w-2 h-2 rounded-full bg-brand-green"></div>}
              </Link>
            );
          })}
          <Link 
            to="/contact" 
            onClick={handleMobileLinkClick}
            className="bg-brand-olive text-white text-center px-5 py-3 rounded-full text-sm font-medium mt-2 hover:bg-opacity-90 transition-all"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;