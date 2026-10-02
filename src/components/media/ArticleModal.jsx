import React from 'react';

const ArticleModal = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-lightGray text-brand-maroon border border-gray-200">
              {article.category}
            </span>
            <span className="text-xs text-gray-400 font-medium">{article.date}</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
            aria-label="Close article modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight mb-4">
            {article.title}
          </h2>

          <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 pb-4 border-b border-gray-100">
            <span>By <strong className="text-gray-800">{article.author || 'Silk Power Desk'}</strong></span>
            <span>&bull;</span>
            <span>{article.readTime}</span>
          </div>

          {/* Article Hero Image */}
          <div className="rounded-xl overflow-hidden mb-6 h-64 sm:h-80 relative shadow-sm">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded">
              Photo: Silk Power Media Library
            </div>
          </div>

          {/* Key Highlights Box */}
          {article.highlights && article.highlights.length > 0 && (
            <div className="bg-[#F8FAF7] border-l-4 border-brand-green p-4 rounded-r-xl mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-maroon mb-2">
                Key Story Takeaways
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                {article.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brand-olive font-bold mt-0.5">&bull;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
            {article.content ? (
              article.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))
            ) : (
              <p>{article.excerpt}</p>
            )}
          </div>

          {/* Tagline / Watermark */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-xs text-gray-500">
              Published by <span className="font-semibold text-brand-maroon">Silk Power Limited</span> &bull; Solukhumbu, Nepal
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => window.print()}
                className="text-xs text-gray-600 hover:text-brand-maroon px-3 py-1.5 rounded-md border border-gray-200 flex items-center gap-1.5 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print Story
              </button>
              <button
                onClick={onClose}
                className="bg-brand-maroon text-white text-xs font-semibold px-4 py-1.5 rounded-md hover:bg-[#600000] transition-colors"
              >
                Close Story
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
