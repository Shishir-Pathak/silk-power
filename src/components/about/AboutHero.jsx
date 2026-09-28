import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative w-full h-[350px] lg:h-[400px] overflow-hidden flex items-center bg-[#0A1929]">
      {/* Background Image with Overlay */}
        <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gQobULCpmFZOHjSK6_KXmkR707EqxFDI7Ar9smMOvh3yt1EY31_kFmk&s=10')" 
        }}
      ></div>
      
      {/* Dark Blue Gradient Overlay to match the screenshot */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1929] via-[#0A1929]/90 to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex flex-col justify-center">
        <div className="flex justify-between items-center h-full">
          
          {/* LEFT SIDE CONTENT */}
          <div className="max-w-2xl text-white flex flex-col justify-center h-full">
            
            {/* Top Tagline */}
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#91C73A] uppercase">Clean Energy</span>
              <span className="w-8 h-px bg-white/40"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">For a Brighter Nepal</span>
            </div>

            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 font-medium tracking-wide">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <span className="text-gray-500">/</span>
              <span className="text-white">About Us</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-4 tracking-tight">About Us</h1>
            
            {/* Subtitle */}
            <p className="text-sm lg:text-base text-gray-300 max-w-md leading-relaxed font-light">
              Harnessing Nepal's rivers for a cleaner,<br />
              stronger and brighter tomorrow.
            </p>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="hidden lg:flex flex-col items-end justify-between h-full py-10 text-white">
            
            {/* Vertical Text */}
            <div 
              className="flex gap-4 text-[10px] tracking-[0.2em] font-semibold text-gray-300 uppercase" 
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              <span>Rivers</span>
              <span>People</span>
              <span>Progress</span>
            </div>
            
            {/* Bottom Right Text */}
            <div className="text-right text-[10px] tracking-[0.15em] font-semibold text-gray-300 uppercase leading-relaxed">
              Luja Khola<br/>
              Hydropower Project<br/>
              Solukhumbu
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;