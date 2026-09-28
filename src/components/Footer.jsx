import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo'; // 👈 Import the new Logo component

const Footer = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <footer className={`${isAboutPage ? 'bg-[#1F4A2A]' : 'bg-[#7A1230]'} text-white py-10 px-4 lg:px-8 relative overflow-hidden transition-colors duration-300`}>
      {/* Faint Background Leaf Graphic */}
      <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none">
        <svg width="400" height="200" viewBox="0 0 200 100" fill="currentColor">
          <path d="M100 0 C150 50, 200 100, 200 150 C150 200, 100 150, 100 100 C100 150, 50 200, 0 150 C0 100, 50 50, 100 0 Z" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
          
          {/* 1. Logo & Tagline (Col span 4) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            {/* Replaced old SVG with Logo component */}
          {/* Replaced old SVG with Logo component */}
<Logo color="#FFFFFF" className="h-12 w-auto" />
            
            {/* Divider */}
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>

            {/* Tagline */}
            <p className="text-[10px] tracking-widest uppercase text-white/80 font-semibold leading-relaxed">
              Clean Energy<br />
              For a Brighter Nepal
            </p>
          </div>

          {/* 2. Quick Links (Col span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            <h4 className="text-xs font-bold mb-1">Quick Links</h4>
            <Link to="/" className="text-xs text-white/80 hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-xs text-white/80 hover:text-white transition-colors">About Us</Link>
            <Link to="/business" className="text-xs text-white/80 hover:text-white transition-colors">Our Business</Link>
            <Link to="/projects" className="text-xs text-white/80 hover:text-white transition-colors">Projects</Link>
          </div>

          {/* 3. Other Links (Col span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            <h4 className="text-xs font-bold mb-1 text-transparent select-none">&nbsp;</h4>
            <Link to="/sustainability" className="text-xs text-white/80 hover:text-white transition-colors">Sustainability</Link>
            <Link to="/notices" className="text-xs text-white/80 hover:text-white transition-colors">Notices</Link>
            <Link to="/media" className="text-xs text-white/80 hover:text-white transition-colors">Media</Link>
            <Link to="/investor-relations" className="text-xs text-white/80 hover:text-white transition-colors">Investor Relations</Link>
            <Link to="/contact" className="text-xs text-white/80 hover:text-white transition-colors">Contact Us</Link>
          </div>

          {/* 4. Connect With Us (Col span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold">Connect With Us</h4>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/silk-power-limited" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/silkpower" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@silkpower" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 5. Copyright (Col span 2) */}
          <div className="lg:col-span-2 flex items-center gap-4 text-xs text-white/80">
            <div className="hidden lg:block w-px h-10 bg-white/30"></div>
            <p>
              &copy; 2025 Silk Power Limited.<br />
              All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;