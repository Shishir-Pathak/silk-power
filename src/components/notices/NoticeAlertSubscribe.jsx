import React, { useState } from 'react';

const NoticeAlertSubscribe = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-brand-lightGray rounded-2xl p-8 sm:p-12 border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Subscribe to Alerts (7 cols) */}
        <div className="lg:col-span-7">
          <span className="text-[10px] font-bold tracking-[0.2em] text-brand-olive uppercase block mb-1">
            Stay Updated
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-maroon mb-2">
            Notice & Regulatory Alert Service
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 max-w-xl leading-relaxed">
            Subscribe to receive automated statutory alerts whenever new Annual General Meeting notices, audited financial disclosures, or procurement tenders are officially gazetted.
          </p>

          {subscribed ? (
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-xs text-green-800 flex items-center gap-3">
              <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>
                Thank you! Your email has been registered for Silk Power Limited statutory notice alerts.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="bg-white border border-gray-200 rounded-full px-4 py-2.5 text-xs focus:outline-none focus:border-brand-maroon flex-grow"
                required
              />
              <button
                type="submit"
                className="bg-brand-maroon hover:bg-[#600000] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors shrink-0 shadow-xs cursor-pointer"
              >
                Subscribe Alerts
              </button>
            </form>
          )}

          <p className="text-[11px] text-gray-400 mt-3">
            We respect your privacy. Unsubscribe at any time with a single click.
          </p>
        </div>

        {/* Right Side: Compliance & Verification Desk (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-brand-maroon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-serif font-bold text-gray-900">Notice Verification Desk</h4>
              <p className="text-[11px] text-gray-500">Office of the Company Secretary</p>
            </div>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed mb-4">
            To verify the authenticity of any tender circular or shareholder notice issued under the seal of Silk Power Limited, contact compliance directly:
          </p>

          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold text-gray-500 w-16">Direct:</span>
              <a href="mailto:compliance@silkpower.com.np" className="text-brand-maroon hover:underline font-medium">
                compliance@silkpower.com.np
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold text-gray-500 w-16">Hotline:</span>
              <span className="font-medium">+977-1-6638120 (Ext. 104)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold text-gray-500 w-16">Location:</span>
              <span className="text-gray-600">Registered Office, Bhaktapur</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NoticeAlertSubscribe;
