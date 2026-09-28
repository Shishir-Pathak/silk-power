import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden flex items-center">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex justify-between items-center h-full pt-16">
        {/* Left Content */}
        <div className="max-w-2xl text-white">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-semibold tracking-widest text-brand-green uppercase">Clean Energy</span>
            <span className="w-16 h-px bg-white/50"></span>
            <span className="text-xs font-semibold tracking-widest text-white uppercase">For a Brighter Nepal</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6">
            Powering Nepal with Clean, Reliable Hydropower.
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-200 mb-10 max-w-xl font-light">
            Developing the 24.8 MW Luja Khola Hydropower Project in Solukhumbu, Nepal.
          </p>
          
          <button className="bg-brand-green text-black font-semibold px-8 py-4 rounded-full flex items-center gap-3 hover:bg-opacity-90 transition-all shadow-lg">
            Learn More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Right Side Graphics (Hidden on small screens) */}
        <div className="hidden lg:flex flex-col items-end justify-between h-full py-20 text-white relative">
          {/* Vertical Text */}
          <div className="flex gap-6 text-sm tracking-widest uppercase font-semibold opacity-80" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            <span>Rivers</span>
            <span>People</span>
            <span>Progress</span>
          </div>
          
          {/* Faint Leaf Graphic Placeholder */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 200 200" fill="currentColor">
               <path d="M100 0 C150 50, 200 100, 200 150 C150 200, 100 150, 100 100 C100 150, 50 200, 0 150 C0 100, 50 50, 100 0 Z" />
            </svg>
          </div>
          
          {/* Bottom Right Text */}
          <div className="text-right text-xs tracking-widest uppercase font-semibold opacity-80 mt-auto z-10 relative">
            <span className="text-brand-green">A Cleaner</span><br/>
            Brighter Nepal
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;