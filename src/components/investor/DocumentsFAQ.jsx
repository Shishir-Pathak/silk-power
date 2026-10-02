import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const DocumentsFAQ = () => {
  const [documents, setDocuments] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchInvestorData = async () => {
      try {
        const [documentsResponse, faqsResponse] = await Promise.all([
          fetch('http://127.0.0.1:8000/api/investor/documents/'),
          fetch('http://127.0.0.1:8000/api/investor/faqs/'),
        ]);

        if (!documentsResponse.ok || !faqsResponse.ok) {
          throw new Error('Failed to load investor data');
        }

        const documentsData = await documentsResponse.json();
        const faqsData = await faqsResponse.json();

        setDocuments(documentsData);
        setFaqs(faqsData);
      } catch (error) {
        console.error('Investor documents/FAQ error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestorData();
  }, []);

  const handleDocument = (doc) => {
    if (doc.document_url) {
      window.open(doc.document_url, '_blank', 'noopener,noreferrer');
    }
  };

  if (loading) {
    return (
      <div className="text-center text-sm text-gray-500 py-10">
        Loading investor documents...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

      {/* LEFT: Key Investor Documents */}
      <div>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-serif text-brand-maroon inline-block border-b-2 border-brand-green pb-1">
            Key Investor Documents
          </h2>

          <Link
            to="/notices"
            className="text-brand-olive font-semibold text-sm flex items-center gap-1 hover:text-brand-maroon transition-colors"
          >
            View All

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
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-4">

                {/* PDF Icon */}
                <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-brand-maroon transition-colors">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {doc.display_date || doc.published_date}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleDocument(doc)}
                disabled={!doc.document_url}
                title={
                  doc.document_url
                    ? 'Open document'
                    : 'Document not uploaded yet'
                }
                className={`transition-colors ${
                  doc.document_url
                    ? 'text-gray-400 hover:text-blue-600 cursor-pointer'
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
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
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </button>
            </div>
          ))}

          {documents.length === 0 && (
            <p className="text-sm text-gray-500">
              No investor documents available.
            </p>
          )}
        </div>
      </div>

      {/* RIGHT: Frequently Asked Questions */}
      <div>
        <h2 className="text-2xl font-serif text-brand-maroon mb-6 inline-block border-b-2 border-brand-green pb-1">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="border-b border-gray-200"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center py-4 text-left group"
              >
                <span className="text-sm font-semibold text-gray-800 group-hover:text-brand-maroon transition-colors">
                  {faq.question}
                </span>

                <span className="text-gray-400 text-xl font-light">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

          {faqs.length === 0 && (
            <p className="text-sm text-gray-500 py-4">
              No FAQs available.
            </p>
          )}
        </div>
      </div>

    </div>
  );
};

export default DocumentsFAQ;