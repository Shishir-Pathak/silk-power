import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RecentNotices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch(
          'http://127.0.0.1:8000/api/notices/'
        );

        if (!response.ok) {
          throw new Error('Failed to load recent notices');
        }

        const data = await response.json();

        // Show only the latest 3 notices on homepage
        setNotices(data.slice(0, 3));
      } catch (error) {
        console.error('Recent notices error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  const formatDate = (date) => {
    if (!date) {
      return {
        month: '',
        rest: '',
      };
    }

    const parsedDate = new Date(`${date}T00:00:00`);

    return {
      month: parsedDate
        .toLocaleDateString('en-US', {
          month: 'short',
        })
        .toUpperCase(),

      rest: parsedDate.toLocaleDateString('en-US', {
        day: 'numeric',
        year: 'numeric',
      }),
    };
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-serif text-brand-maroon">
          Recent Notices
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

      {loading ? (
        <p className="text-sm text-gray-500">
          Loading recent notices...
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {notices.map((notice) => {
            const date = formatDate(notice.published_date);

            return (
              <Link
                to="/notices"
                key={notice.id}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group border border-transparent hover:border-gray-100"
              >
                <div className="border-l-2 border-brand-green pl-3 py-1 flex-shrink-0 w-24">
                  <div className="text-xs font-bold text-gray-400 uppercase">
                    {date.month}
                  </div>

                  <div className="text-sm font-medium text-gray-500">
                    {date.rest}
                  </div>
                </div>

                <div className="flex-grow pt-1">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-brand-maroon transition-colors leading-snug">
                    {notice.title}
                  </p>
                </div>

                <div className="pt-2 flex-shrink-0">
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {!loading && notices.length === 0 && (
        <p className="text-sm text-gray-500">
          No notices available.
        </p>
      )}
    </div>
  );
};

export default RecentNotices;