import React from 'react';

const BusinessHero = () => {
  return (
    <section className="relative w-full h-[350px] lg:h-[400px] overflow-hidden flex items-center bg-[#0A1929]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          // 👇 REPLACE THIS WITH YOUR EXACT IMAGE URL IF YOU HAVE IT
          backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')" 
        }}
      ></div>
      
      {/* Dark Blue Gradient Overlay - Darker on left, transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1929] via-[#0A1929]/70 to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex justify-between items-center">
        
        {/* LEFT SIDE CONTENT */}
        <div className="max-w-xl text-white flex flex-col justify-center h-full pt-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-gray-300 mb-6 font-medium tracking-wide">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <span className="text-gray-400">/</span>
            <span className="text-white">Our Business</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-4 tracking-tight">Our Business</h1>
          
          {/* Green Underline */}
          <div className="w-16 h-1.5 bg-[#91C73A] mb-6"></div>
          
          {/* Subtitle */}
          <p className="text-sm lg:text-base text-gray-200 max-w-md leading-relaxed font-light">
            Harnessing natural resources.<br />
            Generating lasting value.
          </p>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="hidden lg:flex flex-col items-end justify-center h-full text-white">
          {/* Vertical Text */}
          <div 
            className="flex flex-col gap-1 text-[10px] tracking-[0.2em] font-bold text-white uppercase leading-tight" 
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span>Clean</span>
            <span>Energy</span>
            <span>For a</span>
            <span>Brighter</span>
            <span>Nepal</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessHero;