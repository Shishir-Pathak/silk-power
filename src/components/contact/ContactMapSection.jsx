import React, { useState } from 'react';
import NepalMap from '../NepalMap';

const locationsData = [
  {
    id: 'bhaktapur',
    name: 'Corporate & Registered Office',
    district: 'Bhaktapur (Bagmati Province)',
    coords: '27.6788° N, 85.3995° E',
    elevation: '1,350 m above sea level',
    access: 'Accessible via Araniko Highway, 20 minutes east of Tribhuvan International Airport, Kathmandu.',
    visitingNotes: 'Visitors are welcomed between 10:00 AM – 4:00 PM on business days. Prior appointment recommended for executive meetings.'
  },
  {
    id: 'solukhumbu',
    name: 'Luja Khola Hydropower Site',
    district: 'Solukhumbu (Koshi Province)',
    coords: '27.7500° N, 86.7200° E',
    elevation: 'Headworks ~2,450 m | Powerhouse ~1,850 m',
    access: 'Flight from Kathmandu/Ramechhap to Phaplu or Lukla Airport, followed by mountain feeder roadway and project access trail.',
    visitingNotes: 'Entry to active construction zones requires mandatory PPE (hard hat, high-vis vest, safety boots) and site security authorization.'
  }
];

const ContactMapSection = () => {
  const [selectedLoc, setSelectedLoc] = useState('both');

  return (
    <section className="bg-brand-lightGray rounded-2xl p-8 sm:p-12 border border-gray-100 mb-16">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-8">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-brand-olive uppercase block mb-1">
            Geographical Presence
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-maroon">
            Find Us Across Nepal
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-xl">
            From our strategic corporate headquarters in the Kathmandu Valley to our pristine river project sites in the Himalayas of Solukhumbu.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 bg-white p-1 rounded-full border border-gray-200 shadow-sm shrink-0">
          <button
            onClick={() => setSelectedLoc('both')}
            className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all ${
              selectedLoc === 'both'
                ? 'bg-brand-maroon text-white shadow-xs'
                : 'text-gray-600 hover:text-brand-maroon'
            }`}
          >
            All Locations
          </button>
          <button
            onClick={() => setSelectedLoc('bhaktapur')}
            className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all ${
              selectedLoc === 'bhaktapur'
                ? 'bg-brand-green text-gray-900 shadow-xs'
                : 'text-gray-600 hover:text-brand-maroon'
            }`}
          >
            Bhaktapur HQ
          </button>
          <button
            onClick={() => setSelectedLoc('solukhumbu')}
            className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all ${
              selectedLoc === 'solukhumbu'
                ? 'bg-brand-maroon text-white shadow-xs'
                : 'text-gray-600 hover:text-brand-maroon'
            }`}
          >
            Solukhumbu Site
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Map Display */}
        <div className="lg:col-span-6 bg-white rounded-xl p-4 sm:p-6 border border-gray-200/80 shadow-xs flex flex-col items-center justify-center">
          <div className="w-full max-w-md">
            <NepalMap className="w-full h-auto" />
          </div>
          <div className="flex items-center justify-center gap-6 mt-4 pt-3 border-t border-gray-100 text-xs text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#4A7A2E]"></span>
              Registered Office (Bhaktapur)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#75162C]"></span>
              Luja Khola Project (Solukhumbu)
            </span>
          </div>
        </div>

        {/* Right: Location Details */}
        <div className="lg:col-span-6 space-y-4">
          {locationsData
            .filter((loc) => selectedLoc === 'both' || selectedLoc === loc.id)
            .map((loc) => (
              <div 
                key={loc.id} 
                className={`bg-white rounded-xl p-5 border transition-all ${
                  selectedLoc === loc.id ? 'border-brand-maroon shadow-md' : 'border-gray-200 shadow-xs'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base font-serif font-bold text-gray-900">{loc.name}</h3>
                    <p className="text-xs font-medium text-brand-olive">{loc.district}</p>
                  </div>
                  <span className="text-[10px] font-mono bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                    {loc.coords}
                  </span>
                </div>

                <div className="space-y-2 mt-3 text-xs text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-gray-700 shrink-0 w-24">Elevation:</span>
                    <span>{loc.elevation}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-gray-700 shrink-0 w-24">Access Route:</span>
                    <span className="leading-relaxed">{loc.access}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-gray-700 shrink-0 w-24">Visiting Note:</span>
                    <span className="leading-relaxed text-gray-500 italic">{loc.visitingNotes}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
