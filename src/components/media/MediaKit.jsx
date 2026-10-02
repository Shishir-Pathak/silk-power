import React, { useState } from 'react';
import Logo from '../Logo';

const downloadItems = [
  {
    title: 'Official Logo & Brand Asset Package',
    format: 'ZIP (SVG, PNG, EPS)',
    size: '4.8 MB',
    description: 'High-resolution full color maroon, white reverse, and monochrome logo variations for print and digital publications.'
  },
  {
    title: 'Silk Power Corporate Factsheet 2025',
    format: 'PDF Document',
    size: '1.2 MB',
    description: 'Concise executive summary of project specifications, financial metrics, board overview, and ESG benchmarks.'
  },
  {
    title: 'Brand Visual Identity Guidelines',
    format: 'PDF Document',
    size: '2.5 MB',
    description: 'Official typography rules, color swatches, logo spacing guidelines, and digital usage standards.'
  },
  {
    title: 'Board of Directors & Executive Profiles',
    format: 'ZIP (High-Res Photos + Bio)',
    size: '6.4 MB',
    description: 'Editorial portraits and certified professional biographies for accredited journalists and reporters.'
  }
];

const MediaKit = () => {
  const [downloadSuccess, setDownloadSuccess] = useState('');

  const handleDownload = (title) => {
    setDownloadSuccess(title);
    setTimeout(() => setDownloadSuccess(''), 3000);
  };

  return (
    <section className="bg-brand-lightGray rounded-2xl p-8 sm:p-12 border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Media Kit Downloads (7 cols) */}
        <div className="lg:col-span-7">
          <span className="text-[10px] font-bold tracking-[0.2em] text-brand-olive uppercase block mb-1">
            Brand Resources
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-maroon mb-2">
            Media Kit & Digital Assets
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
            Download authorized visual assets, fact sheets, and brand materials for press reporting and partner publications.
          </p>

          {downloadSuccess && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800 text-xs rounded-lg flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Download initiated for: <strong>{downloadSuccess}</strong></span>
            </div>
          )}

          <div className="space-y-3">
            {downloadItems.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-4 rounded-xl border border-gray-200/80 hover:border-brand-maroon transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-brand-maroon shrink-0 group-hover:bg-brand-lightGray">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 group-hover:text-brand-maroon transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-1 font-mono">
                      <span>{item.format}</span>
                      <span>&bull;</span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleDownload(item.title)}
                  className="shrink-0 text-xs font-semibold text-brand-maroon hover:text-white hover:bg-brand-maroon border border-brand-maroon px-4 py-1.5 rounded-full transition-all cursor-pointer"
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Press Contact Card (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
              <Logo className="w-32 h-auto" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-olive bg-brand-lightGray px-2.5 py-1 rounded-full border border-gray-200">
                Press Desk
              </span>
            </div>

            <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
              Media & Press Inquiries
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-6">
              For journalist interviews, site access credentials, high-resolution footage, or verified corporate statements, contact our corporate communications department.
            </p>

            <div className="space-y-3 text-xs text-gray-700 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-brand-lightGray flex items-center justify-center text-brand-maroon">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Email Contact</span>
                  <a href="mailto:media@silkpower.com.np" className="font-semibold text-brand-maroon hover:underline">
                    media@silkpower.com.np
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-brand-lightGray flex items-center justify-center text-brand-maroon">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Press Hotline</span>
                  <span className="font-semibold text-gray-800">+977-1-6638122</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-brand-lightGray flex items-center justify-center text-brand-maroon">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Operating Hours</span>
                  <span className="font-medium text-gray-700">Sunday – Friday, 9:00 AM – 5:00 PM (NPT)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-[#F4F7FA] rounded-xl text-[11px] text-gray-600 border border-gray-100 leading-relaxed">
            <strong className="text-gray-800">Media Policy:</strong> Silk Power Limited permits non-commercial educational use of provided media kit assets with appropriate source citation.
          </div>
        </div>

      </div>
    </section>
  );
};

export default MediaKit;
