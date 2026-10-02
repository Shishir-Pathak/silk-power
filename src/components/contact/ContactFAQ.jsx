import React, { useState } from 'react';

const contactFaqs = [
  {
    q: 'How can shareholders or investors schedule an in-person meeting with management?',
    a: 'Shareholders and institutional investors may request an appointment by emailing investor@silkpower.com.np or contacting our liaison desk at +977-1-4782290 at least three business days in advance.'
  },
  {
    q: 'How does the local community in Solukhumbu submit feedback or formal grievances?',
    a: 'We maintain a dedicated Community Liaison Officer (CLO) stationed at the Luja Khola Site Camp, as well as a formal Grievance Redressal Mechanism (GRM). Written submissions can be handed to the Site Office or emailed to community@silkpower.com.np.'
  },
  {
    q: 'Where do vendors and contractors submit tender bids and expressions of interest?',
    a: 'Official tender documents and instructions are published on our Notices page. Physical sealed submissions are accepted at our Registered Corporate Office in Madhyapur Thimi, Bhaktapur, while pre-bid queries can be sent to procurement@silkpower.com.np.'
  },
  {
    q: 'Are site visits allowed for researchers, students, and media journalists?',
    a: 'Due to safety protocols at high-altitude mountain hydro construction sites, all external visits require prior clearance from the Corporate Communications Department and mandatory on-site occupational health & safety induction.'
  }
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-12">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-[10px] font-bold tracking-[0.2em] text-brand-olive uppercase block mb-1">
          Quick Inquiries
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-brand-maroon">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Common answers regarding communications, visits, and stakeholder engagement.
        </p>
      </div>

      <div className="max-w-3xl mx-auto border-t border-gray-200">
        {contactFaqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-200">
            <button
              onClick={() => toggleFaq(idx)}
              className="w-full flex justify-between items-center py-4 text-left group"
            >
              <span className="text-sm font-semibold text-gray-800 group-hover:text-brand-maroon transition-colors pr-4">
                {faq.q}
              </span>
              <span className="text-brand-olive text-xl font-light shrink-0">
                {openIndex === idx ? '−' : '+'}
              </span>
            </button>
            {openIndex === idx && (
              <div className="pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed pl-1">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactFAQ;
