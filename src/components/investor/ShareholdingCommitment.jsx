import React from 'react';

const ShareholdingCommitment = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      {/* LEFT: Shareholding Structure */}
      <div>
        <h2 className="text-2xl font-serif text-brand-maroon mb-6 inline-block border-b-2 border-brand-green pb-1">Shareholding Structure</h2>
        
        <div className="flex items-center gap-12">
          {/* Donut Chart using Conic Gradient */}
          <div className="relative w-40 h-40 flex-shrink-0">
            <div 
              className="w-full h-full rounded-full" 
              style={{ background: 'conic-gradient(#0A1929 0% 80%, #FBBF24 80% 100%)' }}
            ></div>
            <div className="absolute inset-0 m-auto w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-inner">
              <span className="text-[10px] font-bold text-[#0A1929] text-center leading-tight">
                Shareholding<br/>Structure
              </span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#0A1929]"></div>
              <div>
                <span className="text-lg font-bold text-gray-800">80%</span>
                <p className="text-xs text-gray-500">Promoter Group</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#FBBF24]"></div>
              <div>
                <span className="text-lg font-bold text-gray-800">20%</span>
                <p className="text-xs text-gray-500">Public</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Our Commitment */}
      <div className="relative">
        <h2 className="text-2xl font-serif text-brand-maroon mb-6 inline-block border-b-2 border-brand-green pb-1">Our Commitment</h2>
        
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          At Silk Power Limited, we are committed to transparent communication, strong corporate governance, and creating sustainable value for our shareholders. We strive to maintain the highest standards of disclosure and accountability as we develop and operate clean energy projects for a stronger Nepal.
        </p>

        {/* Quote Box */}
        <div className="bg-[#F4F9F0] p-6 rounded-lg relative overflow-hidden">
          <div className="absolute left-4 top-4 text-4xl text-[#91C73A] font-serif leading-none">“</div>
          <p className="text-sm italic text-[#1F4A2A] ml-8 relative z-10 font-medium">
            Reliable energy.<br />
            Responsible growth.<br />
            Enduring value.
          </p>
          <div className="absolute right-4 bottom-4 w-8 h-px bg-gray-400"></div>
        </div>

        {/* Faded Leaf Graphic */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none -z-10">
          <svg width="150" height="150" viewBox="0 0 100 100" fill="currentColor" className="text-brand-olive">
            <path d="M50 0 C75 25, 100 50, 100 75 C75 100, 50 75, 50 50 C50 75, 25 100, 0 75 C0 50, 25 25, 50 0 Z" />
          </svg>
        </div>

        {/* Vertical Text */}
        <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 text-[10px] tracking-widest uppercase font-bold text-gray-400" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Rivers<br/>People<br/>Progress
        </div>
      </div>

    </div>
  );
};

export default ShareholdingCommitment;