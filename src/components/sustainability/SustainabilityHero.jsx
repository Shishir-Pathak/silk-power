import React from 'react';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
};

const SustainabilityHero = () => {
  return (
    <section className="relative overflow-hidden min-h-[250px] bg-[#1c3a24]">
      <img src={IMG.hero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a17]/90 via-[#0f2a17]/45 to-transparent" />

      <div className="relative z-10 px-8 md:px-14 py-10 max-w-3xl">
        <div className="flex items-center gap-3 text-white/85 text-[10px] tracking-[0.22em] mb-5">
          <span>PEOPLE&nbsp; NATURE&nbsp; PROGRESS &amp;</span>
          <span className="w-10 h-px bg-[#9ADB6B]" />
        </div>
        <h1 className="font-serif text-white text-5xl md:text-[56px] leading-[1.05] font-semibold mb-4">
          Sustainability<br />at Silk Power.
        </h1>
        <p className="text-white text-[17px] leading-snug mb-5">
          Healthy rivers. Thriving communities.<br />A brighter Nepal.
        </p>
        <a
          href="#commitment"
          className="inline-flex items-center gap-2 bg-[#9ADB6B] hover:bg-[#8ad05a] text-[#123018] text-xs font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Our Commitment
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      <div className="hidden md:block absolute right-8 top-9 z-10 border-l border-white/60 pl-3 text-white text-[10px] tracking-[0.2em] leading-[1.7]">
        CLEAN<br />ENERGY<br />STRONGER<br />NEPAL
      </div>
    </section>
  );
};

export default SustainabilityHero;