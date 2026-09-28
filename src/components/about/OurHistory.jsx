import React from 'react';

const milestones = [
  { year: '2019', month: 'September', title: 'Silk Power Private Limited registered', date: '' },
  { year: '2019', month: 'January', title: 'Power Purchase Agreement signed with NEA', date: '' },
  { year: '2019', month: 'August', title: 'Converted to Limited company status', date: '2076/04/30' },
  { year: '2023', month: 'January', title: 'Construction license granted', date: '' },
  { year: '2024', month: 'May', title: 'CARE-NP BB- credit rating reaffirmed', date: '' },
  { year: '2026', month: 'February', title: 'Target Commercial Operation Date (RCOD)', date: '' },
];

const OurHistory = () => {
  return (
    <section id="our-history" className="scroll-mt-24">
      <h2 className="text-3xl font-serif text-brand-maroon mb-8 inline-block border-b-2 border-brand-green pb-1">Our History</h2>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-2 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {milestones.map((item, index) => (
            <div key={index} className="relative flex flex-col">
              {/* Dot */}
              <div className="hidden lg:block absolute top-[-5px] left-0 w-3 h-3 rounded-full border-2 border-orange-400 bg-white z-10"></div>
              
              <div className="mt-6">
                <div className="text-brand-maroon font-bold text-lg mb-1">{item.year}</div>
                <div className="text-[10px] text-gray-500 font-medium mb-2">{item.month} {item.date}</div>
                <p className="text-xs text-gray-700 font-medium leading-snug">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurHistory;