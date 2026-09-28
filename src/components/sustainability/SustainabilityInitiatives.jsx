import React from 'react';

const MAROON = '#7A1230';

/* ---------- Icons (Kept exactly as you provided) ---------- */
const LeafIcon = () => (
  <svg viewBox="0 0 48 48" className="w-11 h-11" fill="none">
    <path d="M10 38C8 22 20 8 40 8c0 20-12 32-28 30z" fill="#3F7A45" />
    <path d="M10 38C18 28 26 20 34 14" stroke="#E4F0DF" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const DropIcon = () => (
  <svg viewBox="0 0 48 48" className="w-11 h-11" fill="none">
    <path d="M24 5C24 5 10 21 10 31a14 14 0 0028 0C38 21 24 5 24 5z" fill="#1F6FA8" />
    <path d="M17 32a7 7 0 004 6" stroke="#CFE6F5" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const CommunityIcon = () => (
  <svg viewBox="0 0 48 48" className="w-11 h-11" fill="none" stroke="#9A5B3C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="14" r="5" />
    <path d="M14 30c0-5 4-8 10-8s10 3 10 8v4H14z" />
    <circle cx="10" cy="20" r="3.5" />
    <path d="M3 32c0-3.5 2.5-6 7-6" />
    <circle cx="38" cy="20" r="3.5" />
    <path d="M45 32c0-3.5-2.5-6-7-6" />
  </svg>
);
const EnergyIcon = () => (
  <svg viewBox="0 0 48 48" className="w-11 h-11" fill="none" stroke="#3F7A45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="16" r="5" />
    {[[14, 5, 14, 8], [14, 24, 14, 27], [3, 16, 6, 16], [22, 16, 25, 16], [6, 8, 8, 10], [20, 22, 22, 24], [22, 8, 20, 10], [6, 24, 8, 22]].map(([a, b, c, d], i) => (
      <line key={i} x1={a} y1={b} x2={c} y2={d} />
    ))}
    <line x1="34" y1="44" x2="34" y2="22" strokeWidth="2.6" />
    <circle cx="34" cy="21" r="2" fill="#3F7A45" />
    <path d="M34 21C34 14 36 10 38 8c1 6-1 10-4 13z" fill="#3F7A45" />
    <path d="M34 21c-6-2-9-1-12 1 5 3 9 3 12-1z" fill="#3F7A45" />
    <path d="M34 21c4 5 5 9 4 13-4-2-6-6-4-13z" fill="#3F7A45" />
  </svg>
);

const Initiative = ({ icon, bg, title, children }) => (
  <div className="flex items-start gap-6">
    <div className="w-[88px] h-[88px] rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: bg }}>
      {icon}
    </div>
    <div>
      <h3 className="font-serif text-[22px] font-semibold leading-tight mb-2" style={{ color: MAROON }}>{title}</h3>
      <p className="text-[13.5px] leading-[1.55] text-gray-600">{children}</p>
    </div>
  </div>
);

const SustainabilityInitiatives = () => {
  return (
    <section id="commitment" className="px-8 md:px-14 py-10 bg-white">
      <div className="grid md:grid-cols-2 gap-y-8">
        <div className="md:pr-12 pb-8 border-b border-gray-200 md:border-b md:border-r">
          <Initiative icon={<LeafIcon />} bg="#E3EEDC" title="Environmental Initiatives">
            We are committed to minimizing our environmental footprint through responsible project design, compliance with national regulations, and continuous monitoring of environmental impacts. Our goal is to protect Nepal’s unique biodiversity for future generations.
          </Initiative>
        </div>
        <div className="md:pl-12 pb-8 border-b border-gray-200">
          <Initiative icon={<DropIcon />} bg="#D2E6F3" title="Water Resource Management">
            We develop run-of-the-river projects that utilize water responsibly while maintaining environmental flows. We work to ensure the sustainable use of water resources, balancing clean energy generation with the health of our rivers and ecosystems.
          </Initiative>
        </div>
        <div className="md:pr-12 md:border-r border-gray-200">
          <Initiative icon={<CommunityIcon />} bg="#F3E1D3" title="Community Benefits">
            We believe in shared progress. Our projects create local employment, support infrastructure development, and contribute to the social and economic well-being of project-affected communities through inclusive and transparent engagement.
          </Initiative>
        </div>
        <div className="md:pl-12">
          <Initiative icon={<EnergyIcon />} bg="#DDEBD6" title="Renewable Energy Focus">
            Hydropower is at the core of a clean and resilient energy future for Nepal. We are committed to expanding renewable energy generation, supporting the country’s transition to a low-carbon economy, and helping build a more energy-secure tomorrow.
          </Initiative>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityInitiatives;