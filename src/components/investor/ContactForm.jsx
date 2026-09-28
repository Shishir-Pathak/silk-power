import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-[#F4F7FA] py-16">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT: Contact Info */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-serif text-brand-maroon mb-4 inline-block border-b-2 border-brand-green pb-1 self-start">Contact Investor Relations</h2>
          
          <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-md">
            For any inquiries related to our financial performance, shareholding, or investment opportunities, please get in touch with our Investor Relations team.
          </p>

          <div className="flex flex-col gap-6">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0A1929] shadow-sm flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <a href="mailto:investor@silkpower.com" className="text-sm font-semibold text-gray-800 hover:text-brand-maroon transition-colors">investor@silkpower.com</a>
                <p className="text-xs text-gray-500 mt-1">We typically respond within 2 business days.</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0A1929] shadow-sm flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <a href="tel:+9771XXXXXXX" className="text-sm font-semibold text-gray-800 hover:text-brand-maroon transition-colors">+977-1-XXXXXXX</a>
                <p className="text-xs text-gray-500 mt-1">Sunday – Friday, 9:00 AM – 5:00 PM (NPT)</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Send Us a Message Form */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-serif text-[#0A1929] mb-6">Send Us a Message</h3>
          
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#0A1929] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Your Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#0A1929] transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Message</label>
              <textarea 
                rows="4" 
                placeholder="Type your message here..." 
                className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#0A1929] transition-colors resize-none"
              ></textarea>
            </div>

            <button className="bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0A1929] font-bold text-sm px-6 py-3 rounded-lg flex items-center justify-center gap-2 self-start transition-colors mt-2">
              Submit Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;