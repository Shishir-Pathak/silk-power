import React from 'react';

const newsItems = [
  {
    image: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2070&auto=format&fit=crop',
    title: 'Construction Progress at Luja Khola Hydropower Project',
    date: 'AUGUST 12, 2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop',
    title: 'Silk Power Reaffirms Commitment to Sustainable Energy Development',
    date: 'JUNE 5, 2025'
  }
];

const LatestNews = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-serif text-brand-maroon">Latest News</h2>
        <a href="#" className="text-brand-olive font-semibold text-sm flex items-center gap-1 hover:text-brand-maroon">
          View All
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {newsItems.map((news, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            <div className="rounded-xl overflow-hidden h-32 mb-3 relative">
              <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="text-sm font-bold text-gray-800 leading-snug mb-2 group-hover:text-brand-maroon transition-colors line-clamp-2">
              {news.title}
            </h3>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-xs text-gray-500 font-medium">{news.date}</span>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-maroon transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;