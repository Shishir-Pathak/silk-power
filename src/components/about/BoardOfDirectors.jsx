import React from 'react';

const directors = [
  { name: 'Mr. Kumar Kharel', role: 'Chairman' },
  { name: 'Mr. Kunal Kayal', role: 'Director' },
  { name: 'Mr. Mukti Bodh Neupane', role: 'Director' },
];

const BoardOfDirectors = () => {
  return (
    <section id="board-of-directors" className="scroll-mt-24 pb-16">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-serif text-brand-maroon inline-block border-b-2 border-brand-green pb-1">Board of Directors</h2>
        <div className="flex items-center gap-2">
          <div className="w-12 h-px bg-brand-olive"></div>
          <span className="text-[10px] text-brand-olive tracking-widest uppercase font-semibold">Our Guidance</span>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
        {directors.map((director, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Avatar Placeholder */}
            <div className="w-24 h-24 rounded-full bg-gray-900 flex items-center justify-center mb-4 relative overflow-hidden">
              <svg className="w-16 h-16 text-gray-400 absolute bottom-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">{director.name}</h3>
            <p className="text-xs text-gray-500">{director.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoardOfDirectors;