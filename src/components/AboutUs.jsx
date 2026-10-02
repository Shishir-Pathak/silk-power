import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-serif text-brand-maroon mb-6">About Us</h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        Silk Power Limited is a Nepali hydropower and renewable energy company committed to harnessing the country's abundant water resources to generate clean, reliable, and affordable electricity.
      </p>
      <Link to="/about" className="text-brand-olive font-semibold text-sm flex items-center gap-2 hover:text-brand-maroon transition-colors mt-auto">
        Learn More
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
      
      {/* Image Placeholder */}
      <div className="mt-8 rounded-xl overflow-hidden shadow-sm relative h-48">
        <img 
          src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2070&auto=format&fit=crop" 
          alt="Luja Khola Hydropower Project" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-sm font-semibold">Luja Khola Hydropower Project</div>
          <div className="text-xs text-gray-300">Solukhumbu, Nepal</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;