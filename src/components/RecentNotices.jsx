import React from 'react';
import { Link } from 'react-router-dom';

const notices = [
  { date: 'AUG 28, 2025', title: 'Notice of Annual General Meeting' },
  { date: 'JUL 15, 2025', title: 'Publication of Unaudited Financial Results (Quarter Ended Ashadh 2082)' },
  { date: 'JUN 20, 2025', title: 'Book Closure Notice' },
];

const RecentNotices = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-serif text-brand-maroon">Recent Notices</h2>
        <Link to="/notices" className="text-brand-olive font-semibold text-sm flex items-center gap-1 hover:text-brand-maroon transition-colors">
          View All
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {notices.map((notice, index) => (
          <Link to="/notices" key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group border border-transparent hover:border-gray-100">
            <div className="border-l-2 border-brand-green pl-3 py-1 flex-shrink-0 w-24">
              <div className="text-xs font-bold text-gray-400 uppercase">{notice.date.split(' ')[0]}</div>
              <div className="text-sm font-medium text-gray-500">{notice.date.split(' ')[1]} {notice.date.split(' ')[2]}</div>
            </div>
            <div className="flex-grow pt-1">
              <p className="text-sm font-medium text-gray-700 group-hover:text-brand-maroon transition-colors leading-snug">
                {notice.title}
              </p>
            </div>
            <div className="pt-2 flex-shrink-0">
              <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-maroon transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentNotices;