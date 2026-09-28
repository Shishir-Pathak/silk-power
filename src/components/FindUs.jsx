import React from 'react';
import NepalMap from './NepalMap'; // 👈 Import the new map component

const FindUs = () => {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16 border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side: Addresses */}
        <div>
          <h2 className="text-3xl font-serif text-brand-maroon mb-2">Find Us</h2>
          <p className="text-sm text-gray-500 mb-8">Our offices and project site are located in the heart of Nepal.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Registered Office */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-brand-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brand-maroon mb-1">Registered Office</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Madhyapur Thimi Municipality,<br />
                  Ward No. 3, Bhaktapur, Nepal
                </p>
              </div>
            </div>

            {/* Project Site */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-brand-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brand-maroon mb-1">Project Site</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Khumbu-Pasang Lhamu Rural Municipality,<br />
                  Solukhumbu District, Nepal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Map & Tagline */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          {/* 👇 Replaced old map with the new NepalMap component */}
          <div className="w-full md:w-3/5 flex justify-center items-center p-2">
            <NepalMap className="max-h-64 w-auto" />
          </div>
          
          {/* Tagline */}
          <div className="w-full md:w-2/5 flex flex-col items-end">
            <div className="w-16 h-px bg-brand-green mb-4"></div>
            <p className="text-right text-sm font-semibold tracking-widest text-brand-maroon uppercase leading-relaxed">
              Cleaner Energy<br />
              <span className="text-brand-olive">Stronger Nepal</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FindUs;