import React, { useState } from 'react';

const documents = [
  { title: 'Annual Report 2024', date: 'April 30, 2025' },
  { title: 'Financial Statements (Q4 FY 2080/81)', date: 'January 15, 2025' },
  { title: 'Notice of Annual General Meeting', date: 'August 28, 2025' },
  { title: 'Corporate Governance Report', date: 'April 30, 2025' },
  { title: 'Credit Rating Report (CARE-NP)', date: 'May 2024' },
];

const faqs = [
  { q: 'What is the current shareholding structure of Silk Power Limited?', a: 'The shareholding structure consists of 80% Promoter Group and 20% Public.' },
  { q: 'How can I invest in Silk Power Limited?', a: 'Please contact our investor relations team for detailed information on investment opportunities.' },
  { q: 'What is the credit rating of the company?', a: 'Silk Power Limited has a CARE-NP BB- credit rating from CARE Ratings Nepal.' },
  { q: 'Where is the project located?', a: 'The Luja Khola Hydropower Project is located in Solukhumbu District, Nepal.' },
  { q: 'Who is the offtaker for the project?', a: 'Nepal Electricity Authority (NEA) is the sole offtaker under a long-term PPA.' },
];

const DocumentsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      {/* LEFT: Key Investor Documents */}
      <div>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-serif text-brand-maroon inline-block border-b-2 border-brand-green pb-1">Key Investor Documents</h2>
          <a href="#" className="text-brand-olive font-semibold text-sm flex items-center gap-1 hover:text-brand-maroon">
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col gap-3">
          {documents.map((doc, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="flex items-center gap-4">
                {/* Red PDF Icon */}
                <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-brand-maroon transition-colors">{doc.title}</h3>
                  <p className="text-xs text-gray-500">{doc.date}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Frequently Asked Questions */}
      <div>
        <h2 className="text-2xl font-serif text-brand-maroon mb-6 inline-block border-b-2 border-brand-green pb-1">Frequently Asked Questions</h2>
        
        <div className="flex flex-col border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center py-4 text-left group"
              >
                <span className="text-sm font-semibold text-gray-800 group-hover:text-brand-maroon transition-colors">{faq.q}</span>
                <span className="text-gray-400 text-xl font-light">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DocumentsFAQ;