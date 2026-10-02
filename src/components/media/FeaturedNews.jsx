import React from 'react';

const FeaturedNews = ({ article, onSelectArticle }) => {
  if (!article) return null;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-12 hover:shadow-md transition-shadow">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        
        {/* Left: Image (5 cols) */}
        <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full relative overflow-hidden group cursor-pointer" onClick={() => onSelectArticle(article)}>
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-brand-maroon text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
              Featured Milestone
            </span>
          </div>
        </div>

        {/* Right: Text & Details (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
              <span className="text-brand-olive font-semibold">{article.category}</span>
              <span>&bull;</span>
              <span>{article.date}</span>
              <span>&bull;</span>
              <span>{article.readTime}</span>
            </div>

            <h2 
              onClick={() => onSelectArticle(article)}
              className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4 hover:text-brand-maroon transition-colors cursor-pointer leading-tight"
            >
              {article.title}
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed mb-6 font-light">
              {article.excerpt}
            </p>

            {article.highlights && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {article.highlights.slice(0, 2).map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50 p-2 rounded-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"></span>
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => onSelectArticle(article)}
              className="bg-brand-maroon hover:bg-[#600000] text-white text-xs font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 transition-colors cursor-pointer"
            >
              Read Full Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <span className="text-xs text-gray-400">By {article.author}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturedNews;
