import React from 'react';
import { Link } from 'react-router-dom';

const MediaHero = () => {
  return (
    <section className="relative w-full h-[320px] lg:h-[380px] overflow-hidden flex items-center bg-[#0A1929]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop')" 
        }}
      ></div>
      
      {/* Deep Blue / Forest Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1929] via-[#0A1929]/85 to-[#1F4A2A]/40"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex justify-between items-center">
        
        {/* LEFT SIDE CONTENT */}
        <div className="max-w-2xl text-white flex flex-col justify-center h-full pt-6">
          
          {/* Top Tagline */}
          <div className="flex items-center gap-4 mb-2">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#91C73A] uppercase">News & Publications</span>
            <span className="w-8 h-px bg-white/40"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">Silk Power Limited</span>
          </div>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-gray-300 mb-4 font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Media</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-3 tracking-tight">
            Media & Press Room
          </h1>
          
          {/* Green Underline */}
          <div className="w-16 h-1 bg-[#91C73A] mb-4"></div>
          
          {/* Subtitle */}
          <p className="text-sm lg:text-base text-gray-200 max-w-lg leading-relaxed font-light">
            Stay informed with the latest milestones, official press releases, field stories, and multimedia resources from Silk Power Limited.
          </p>
        </div>

        {/* RIGHT SIDE VERTICAL TEXT */}
        <div className="hidden lg:flex flex-col items-end justify-center h-full text-white opacity-80">
          <div 
            className="flex flex-col gap-1 text-[10px] tracking-[0.25em] font-bold uppercase leading-tight" 
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span>Stories</span>
            <span>Milestones</span>
            <span>Impact</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MediaHero;
