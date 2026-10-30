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
    </div>
  );
};

export default AboutSidebar;