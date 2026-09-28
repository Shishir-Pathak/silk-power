import React from 'react';

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="scroll-mt-24">
      <h2 className="text-3xl font-serif text-brand-maroon mb-6 inline-block border-b-2 border-brand-green pb-1">Who We Are</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="text-gray-600 text-sm leading-relaxed space-y-4">
          <p>
            Silk Power Limited is a Nepali hydropower and renewable energy company committed to harnessing the country's abundant water resources to generate clean, reliable, and affordable electricity.
          </p>
          <p>
            Headquartered in Madhyapur Thimi, Bhaktapur, we are currently developing the 24.8 MW Luja Khola Hydropower Project in Solukhumbu — a run-of-the-river scheme that will deliver power to the national grid under a long-term agreement with the Nepal Electricity Authority.
          </p>
          <p>
            Born from a promoter group with deep, multi-project experience in Nepal's power sector, we believe that Nepal's rivers, if developed responsibly, can power the nation's homes and industries for generations while creating lasting value for local communities and shareholders alike.
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-end items-center gap-2 mb-2">
            <span className="text-[10px] text-brand-olive tracking-widest uppercase font-semibold">Our Commitment</span>
            <div className="w-12 h-px bg-brand-olive"></div>
          </div>
          <div className="rounded-lg overflow-hidden relative h-64 shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2070&auto=format&fit=crop" 
              alt="Hydropower Construction" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white text-sm font-semibold tracking-wide">
              BUILDING<br/>
              <span className="text-gray-300 font-normal">A SUSTAINABLE</span><br/>
              TOMORROW
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;