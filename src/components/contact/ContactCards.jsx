import React from 'react';

const offices = [
  {
    type: 'Registered Corporate Office',
    badge: 'Headquarters',
    address: 'Madhyapur Thimi Municipality, Ward No. 3, Bhaktapur, Bagmati Province, Nepal',
    pobox: 'G.P.O. Box 11203, Kathmandu / Bhaktapur',
    phone: '+977-1-6638120 / 6638121',
    fax: '+977-1-6638122',
    email: 'info@silkpower.com.np',
    hours: 'Sunday – Friday: 9:00 AM – 5:00 PM (NPT)',
    icon: (
      <svg className="w-6 h-6 text-brand-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    type: 'Project Site Office',
    badge: 'Field Operations',
    address: 'Luja Khola Hydropower Project Site, Khumbu-Pasang Lhamu Rural Municipality, Solukhumbu District, Koshi Province, Nepal',
    pobox: 'Site Camp Office, Solukhumbu',
    phone: '+977-38-540112 / +977-98510XXXXX',
    fax: 'Via Central Dispatch',
    email: 'site.luja@silkpower.com.np',
    hours: '24/7 On-Site Engineering & Emergency Operations',
    icon: (
      <svg className="w-6 h-6 text-brand-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    type: 'Shareholder & Liaison Desk',
    badge: 'Capital Markets',
    address: 'Trade & Financial District, New Baneshwor, Kathmandu, Nepal',
    pobox: 'Designated Share Registry Partner',
    phone: '+977-1-4782290',
    fax: '+977-1-4782291',
    email: 'investor@silkpower.com.np',
    hours: 'Sunday – Friday: 10:00 AM – 4:00 PM (NPT)',
    icon: (
      <svg className="w-6 h-6 text-[#0A1929]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

const departments = [
  {
    name: 'Investor Relations & Shares',
    email: 'investor@silkpower.com.np',
    purpose: 'Shareholder inquiries, financial queries, corporate governance and AGM matters'
  },
  {
    name: 'Media & Communications',
    email: 'media@silkpower.com.np',
    purpose: 'Press inquiries, interview requests, brand assets, and public relations'
  },
  {
    name: 'Procurement & Tenders',
    email: 'procurement@silkpower.com.np',
    purpose: 'Vendor registration, RFP submissions, and electro-mechanical tenders'
  },
  {
    name: 'Community & ESG Desk',
    email: 'community@silkpower.com.np',
    purpose: 'Local community feedback, stakeholder engagement, and environmental compliance'
  },
  {
    name: 'Careers & Human Resources',
    email: 'careers@silkpower.com.np',
    purpose: 'Job applications, engineering internships, and talent acquisition'
  },
  {
    name: 'General Information',
    email: 'info@silkpower.com.np',
    purpose: 'General correspondence, partnerships, and visitor appointments'
  }
];

const ContactCards = () => {
  return (
    <section className="mb-16">
      {/* Office Locations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {offices.map((office, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                  {office.icon}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-lightGray text-brand-maroon border border-gray-200">
                  {office.badge}
                </span>
              </div>

              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                {office.type}
              </h3>

              <div className="space-y-3 text-xs text-gray-600">
                <p className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-brand-olive shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="leading-relaxed">{office.address}</span>
                </p>

                <p className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-brand-olive shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium text-gray-800">{office.phone}</span>
                </p>

                <p className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-brand-olive shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${office.email}`} className="text-brand-maroon hover:underline font-medium">
                    {office.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2 text-[11px] text-gray-500">
              <svg className="w-3.5 h-3.5 text-brand-olive shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{office.hours}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Direct Department Directory */}
      <div className="bg-[#F8FAF7] rounded-2xl p-6 sm:p-8 border border-[#E2EBE0]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
          <div>
            <h3 className="text-xl font-serif text-brand-maroon">Direct Department Directory</h3>
            <p className="text-xs text-gray-600 mt-1">Route your inquiry directly to the right desk for faster response.</p>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-olive bg-white px-3 py-1.5 rounded-full border border-gray-200">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            Avg. Response: 24–48 Business Hours
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {departments.map((dept, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 hover:border-brand-green transition-colors">
              <h4 className="text-sm font-semibold text-gray-800 mb-1">{dept.name}</h4>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">{dept.purpose}</p>
              <a 
                href={`mailto:${dept.email}`} 
                className="text-xs font-semibold text-brand-olive hover:text-brand-maroon flex items-center gap-1.5"
              >
                <span>{dept.email}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
