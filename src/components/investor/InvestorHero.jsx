import React from 'react';

const InvestorHero = () => {
  return (
    <section className="relative w-full h-[280px] overflow-hidden flex items-center bg-[#0A1929]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')" 
        }}
      ></div>
      
      {/* Dark Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1929] via-[#0A1929]/80 to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex justify-between items-center">
        <div className="max-w-2xl text-white flex flex-col justify-center h-full pt-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-gray-300 mb-4 font-medium tracking-wide">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <span className="text-gray-400">/</span>
            <span className="text-white">Investor Relations</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-3 tracking-tight">Investor Relations</h1>
          
          {/* Green Underline */}
          <div className="w-16 h-1 bg-[#91C73A] mb-4"></div>
          
          {/* Subtitle */}
          <p className="text-sm lg:text-base text-gray-200 max-w-md leading-relaxed font-light">
            Building long-term value<br />
            for a sustainable tomorrow.
          </p>
        </div>

        {/* Right Side Vertical Text */}
        <div className="hidden lg:flex flex-col items-end justify-center h-full text-white opacity-80">
          <div 
            className="flex flex-col gap-1 text-[10px] tracking-[0.2em] font-bold uppercase leading-tight" 
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span>Clean</span>
            <span>Energy</span>
            <span>Stronger</span>
            <span>Nepal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorHero;