import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'http://127.0.0.1:8000/api/media/articles/'
        );

        if (!response.ok) {
          throw new Error('Failed to load latest news');
        }

        const data = await response.json();

        // Show only the latest two articles on the homepage
        setNewsItems(data.slice(0, 2));
      } catch (error) {
        console.error('Latest news error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (date) => {
    if (!date) return '';

    return new Date(`${date}T00:00:00`)
      .toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
      .toUpperCase();
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-serif text-brand-maroon">
          Latest News
        </h2>

        <Link
          to="/media"
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

      {loading ? (
        <p className="text-sm text-gray-500">
          Loading latest news...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {newsItems.map((news) => (
            <Link
              to="/media"
              key={news.id}
              className="flex flex-col group cursor-pointer"
            >
              <div className="rounded-xl overflow-hidden h-32 mb-3 relative">
                {news.image && (
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>

              <h3 className="text-sm font-bold text-gray-800 leading-snug mb-2 group-hover:text-brand-maroon transition-colors line-clamp-2">
                {news.title}
              </h3>

              <div className="flex justify-between items-center mt-auto">
                <span className="text-xs text-gray-500 font-medium">
                  {formatDate(news.published_date)}
                </span>

                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-brand-maroon transition-colors"
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
              </div>
            </Link>
          ))}
        </div>
      )}

      {!loading && newsItems.length === 0 && (
        <p className="text-sm text-gray-500">
          No news available.
        </p>
      )}
    </div>
  );
};

export default LatestNews;