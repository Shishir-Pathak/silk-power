import React from 'react';

const MAROON = '#7A1230';
const GREEN_DARK = '#1F4A2A';

const Leaf = ({ className = '', style }) => (
  <svg viewBox="0 0 100 160" className={className} style={style} fill="#9CC79A">
    <path d="M50 0C90 40 100 100 50 160C0 100 10 40 50 0z" />
    <path d="M50 10V150" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
  </svg>
);

const Logo = () => (
  <div className="flex items-center gap-1.5">
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill={MAROON}>
      <path d="M24 22C14 20 6 12 8 4c9 0 16 6 16 18z" />
      <path d="M26 22c10-2 18-10 16-18-9 0-16 6-16 18z" />
      <path d="M24 26C14 28 6 36 8 44c9 0 16-6 16-18z" />
      <path d="M26 26c10 2 18 10 16 18-9 0-16-6-16-18z" />
    </svg>
    <div className="leading-none text-left">
      <div className="text-[18px] font-semibold tracking-wide" style={{ color: MAROON }}>SILK</div>
      <div className="text-[5px] tracking-wide font-semibold" style={{ color: MAROON }}>POWER LTD.</div>
    </div>
  </div>
);

const SustainabilityQuote = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E6F1E1] to-[#F4F9F1] px-8 py-6 text-center">
      {/* Smaller Background Leaves */}
      <Leaf className="absolute -left-4 bottom-0 w-16 opacity-30 rotate-[25deg]" />
      <Leaf className="absolute left-10 -bottom-4 w-12 opacity-20 -rotate-[20deg]" />
      <Leaf className="absolute -right-2 -top-4 w-14 opacity-30 rotate-[35deg]" />
      <Leaf className="absolute right-10 bottom-0 w-10 opacity-20 -rotate-[30deg]" />

      <blockquote
        className="relative font-serif italic text-xl md:text-2xl leading-snug max-w-lg mx-auto mb-3"
        style={{ color: GREEN_DARK }}
      >
        “Every project we build starts with the river it depends on.”
      </blockquote>
      <div className="relative flex justify-center">
        <Logo />
      </div>

      {/* Smaller Vertical Text */}
      <div className="hidden md:block absolute right-6 bottom-4 border-l border-gray-400 pl-2 text-left text-[8px] tracking-[0.2em] leading-[1.5] text-gray-500">
        RIVERS<br />PEOPLE<br />PROGRESS
      </div>
    </section>
  );
};

export default SustainabilityQuote;