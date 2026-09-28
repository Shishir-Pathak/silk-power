import React from 'react';

const AboutSidebar = () => {
  const links = [
    { name: 'Who We Are', active: true },
    { name: 'Founding Principles' },
    { name: 'Vision & Mission' },
    { name: 'Our History' },
    { name: 'Board of Directors' },
    { name: 'Leadership' },
    { name: 'Ownership' },
    { name: 'Governance' },
    { name: 'Our Presence' },
  ];

  return (
    <div className="w-full lg:w-64 flex-shrink-0 flex flex-col justify-between">
      <ul className="flex flex-col space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={`#${link.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              className={`block px-4 py-3 text-sm transition-colors border-l-2 ${
                link.active 
                  ? 'border-brand-maroon bg-brand-lightGray text-brand-maroon font-semibold' 
                  : 'border-transparent text-gray-600 hover:text-brand-maroon hover:bg-gray-50'
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Bottom Leaf Graphic & Text */}
      <div className="mt-16 hidden lg:flex flex-col items-end opacity-40">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-olive mb-4">
           <path d="M50 0 C75 25, 100 50, 100 75 C75 100, 50 75, 50 50 C50 75, 25 100, 0 75 C0 50, 25 25, 50 0 Z" fill="currentColor" opacity="0.3"/>
           <path d="M50 20 C60 40, 80 60, 80 80 C60 80, 50 60, 50 40 C50 60, 40 80, 20 80 C20 60, 40 40, 50 20 Z" fill="currentColor" opacity="0.6"/>
        </svg>
        <div className="text-right text-[10px] tracking-widest text-brand-maroon uppercase font-semibold">
          Clean Energy<br/>
          For a Brighter Nepal
        </div>
      </div>
    </div>
  );
};

export default AboutSidebar;