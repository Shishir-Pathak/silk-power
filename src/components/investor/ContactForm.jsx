import React, { useState } from 'react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setSuccess('');
    setError('');
    const email = formData.email.trim();

if (!isValidEmail(email)) {
  setError('Please enter a valid email address.');
  setSubmitting(false);
  return;
}

if (!formData.name.trim()) {
  setError('Please enter your name.');
  setSubmitting(false);
  return;
}

if (!formData.message.trim()) {
  setError('Please enter your message.');
  setSubmitting(false);
  return;
}

    try {
      const response = await fetch(
        'http://127.0.0.1:8000/api/contact/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            first_name: formData.name,
            last_name: '',
            email: email,
            phone: '',
            department: 'Investor Relations',
            subject: 'Investor Relations Inquiry',
            message: formData.message,
            agreed_to_terms: true,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail ||
          data.message ||
          'Unable to submit your message.'
        );
      }

      setSuccess(
        `Message submitted successfully. Reference: ${data.reference_number}`
      );

      setFormData({
        name: '',
        email: '',
        message: '',
      });

    } catch (err) {
      console.error('Investor contact error:', err);

      setError(
        err.message ||
        'Something went wrong. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <div className="bg-[#F4F7FA] py-16">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT: Contact Info */}
        <div className="flex flex-col">

          <h2 className="text-3xl font-serif text-brand-maroon mb-4 inline-block border-b-2 border-brand-green pb-1 self-start">
            Contact Investor Relations
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-md">
            For any inquiries related to our financial performance,
            shareholding, or investment opportunities, please get in touch
            with our Investor Relations team.
          </p>

          <div className="flex flex-col gap-6">

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0A1929] shadow-sm flex-shrink-0">

                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

              </div>

              <div>
                <a
                  href="mailto:investor@silkpower.com"
                  className="text-sm font-semibold text-gray-800 hover:text-brand-maroon transition-colors"
                >
                  investor@silkpower.com
                </a>

                <p className="text-xs text-gray-500 mt-1">
                  We typically respond within 2 business days.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0A1929] shadow-sm flex-shrink-0">

                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

              </div>

              <div>
                <a
                  href="tel:+9771XXXXXXX"
                  className="text-sm font-semibold text-gray-800 hover:text-brand-maroon transition-colors"
                >
                  +977-1-XXXXXXX
                </a>

                <p className="text-xs text-gray-500 mt-1">
                  Sunday – Friday, 9:00 AM – 5:00 PM (NPT)
                </p>
              </div>
            </div>

          </div>
        </div>


        {/* RIGHT: Form */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">

          <h3 className="text-xl font-serif text-[#0A1929] mb-6">
            Send Us a Message
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#0A1929] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Your Email
                </label>

                <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  required
  autoComplete="email"
  placeholder="Enter your email"
  className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#0A1929] transition-colors"
/>
              </div>

            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Message
              </label>

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here..."
                className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#0A1929] transition-colors resize-none"
              />
            </div>


            {success && (
              <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                {success}
              </div>
            )}

            {error && (
              <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
                {error}
              </div>
            )}


            <button
              type="submit"
              disabled={submitting}
              className="bg-[#FBBF24] hover:bg-[#F59E0B] disabled:opacity-60 disabled:cursor-not-allowed text-[#0A1929] font-bold text-sm px-6 py-3 rounded-lg flex items-center justify-center gap-2 self-start transition-colors mt-2"
            >
              {submitting ? 'Submitting...' : 'Submit Message'}

              {!submitting && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              )}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;