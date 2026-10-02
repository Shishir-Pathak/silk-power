import React, { useState } from 'react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: 'General Inquiries',
    subject: '',
    message: '',
    agreeTerms: false,
  });

  const [status, setStatus] = useState({
  submitted: false,
  loading: false,
  error: '',
  referenceNumber: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.firstName || !formData.email || !formData.message) {
    setStatus({
      submitted: false,
      loading: false,
      error: 'Please fill in all required fields.',
      referenceNumber: '',
    });
    return;
  }

  if (!formData.agreeTerms) {
    setStatus({
      submitted: false,
      loading: false,
      error: 'Please accept the privacy policy agreement.',
      referenceNumber: '',
    });
    return;
  }

  setStatus({
    submitted: false,
    loading: true,
    error: '',
    referenceNumber: '',
  });

  try {
    const response = await fetch(
      'http://127.0.0.1:8000/api/contact/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          department: formData.department,
          subject: formData.subject,
          message: formData.message,
          agreed_to_terms: formData.agreeTerms,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Contact API error:', data);

      throw new Error(
        data.detail ||
        data.email?.[0] ||
        data.message?.[0] ||
        data.agreed_to_terms?.[0] ||
        'Unable to submit your inquiry.'
      );
    }

    setStatus({
      submitted: true,
      loading: false,
      error: '',
      referenceNumber: data.reference_number,
    });

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      department: 'General Inquiries',
      subject: '',
      message: '',
      agreeTerms: false,
    });

  } catch (error) {
    console.error('Contact submission error:', error);

    setStatus({
      submitted: false,
      loading: false,
      error: error.message || 'Unable to submit your inquiry. Please try again.',
      referenceNumber: '',
    });
  }
};

  return (
    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side: Context & Direct Info */}
        <div className="lg:col-span-5 bg-[#0A1929] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle decorative background water ripple */}
          <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none">
            <svg width="300" height="300" viewBox="0 0 200 200" fill="currentColor">
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="relative z-10">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#91C73A] uppercase block mb-2">
              Send an Official Inquiry
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
              We Value Your Feedback & Collaboration
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Whether you are an institutional investor, local stakeholder in Solukhumbu, journalist, or renewable energy partner, our dedicated communication desks are prepared to assist you.
            </p>

            <div className="space-y-6 text-xs text-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#91C73A]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Prompt Official Feedback</h4>
                  <p className="text-gray-400 mt-0.5">Every inquiry is assigned a tracking reference number and routed directly to the competent officer.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#91C73A]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Confidentiality Assured</h4>
                  <p className="text-gray-400 mt-0.5">Community grievances and investor queries are handled with strict regulatory confidentiality.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#91C73A]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Direct Line</h4>
                  <p className="text-gray-400 mt-0.5">+977-1-6638120 / info@silkpower.com.np</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-white/70 text-[11px] flex items-center justify-between">
            <span>Silk Power Limited &bull; Reg. No: 284192/078/079</span>
            <span className="text-[#91C73A] font-semibold">Nepal</span>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="lg:col-span-7 p-8 sm:p-12">
          {status.submitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 text-brand-olive flex items-center justify-center mb-5">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-brand-maroon mb-2">Thank You for Reaching Out</h3>
              <p className="text-gray-600 text-sm max-w-md mb-6 leading-relaxed">
                Your message has been successfully received by the Silk Power communications team. An acknowledgment has been recorded and an officer will get back to you shortly.
              </p>
              {status.referenceNumber && (
  <div className="mb-6 px-5 py-3 rounded-xl bg-gray-50 border border-gray-200">
    <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
      Inquiry Reference Number
    </span>

    <span className="font-mono text-sm font-bold text-brand-maroon">
      {status.referenceNumber}
    </span>
  </div>
)}
              <button 
                onClick={() =>
  setStatus({
    submitted: false,
    loading: false,
    error: '',
    referenceNumber: '',
  })
}
                className="bg-brand-olive hover:bg-brand-maroon text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-gray-100 pb-3 mb-4">
                <h3 className="text-xl font-serif text-gray-900">Message Transmission Form</h3>
                <p className="text-xs text-gray-500">Please provide accurate information so we can attend to your request efficiently.</p>
              </div>

              {status.error && (
                <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                  {status.error}
                </div>
              )}

              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh"
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-brand-maroon transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="e.g. Shrestha"
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-brand-maroon transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-brand-maroon transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone / Mobile
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+977-98XXXXXXXX"
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-brand-maroon transition-colors"
                  />
                </div>
              </div>

              {/* Department & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Inquiry Department
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-brand-maroon transition-colors bg-white text-gray-700"
                  >
                    <option value="General Inquiries">General Inquiries</option>
                    <option value="Investor Relations">Investor Relations & Shares</option>
                    <option value="Media & Press">Media & Press Communications</option>
                    <option value="Local Community & CSR">Local Community & Solukhumbu CSR</option>
                    <option value="Tenders & Procurement">Procurement & Tenders</option>
                    <option value="Careers">Careers & Engineering Internships</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Summary of your inquiry"
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-brand-maroon transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your questions, comments, or requirements..."
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors resize-none"
                  required
                ></textarea>
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-maroon focus:ring-brand-maroon"
                />
                <label htmlFor="agreeTerms" className="text-xs text-gray-600 leading-snug">
                  I agree that Silk Power Limited may store and process my contact details for the sole purpose of responding to this communication.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="bg-brand-maroon hover:bg-[#600000] text-white font-medium text-sm px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow"
                >
                  {status.loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      Transmitting...
                    </>
                  ) : (
                    <>
                      Submit Official Inquiry
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;
