import React, { useState, useMemo } from 'react';
import NoticeToast from './NoticeToast';

const categories = [
  'All Notices',
  'Corporate & AGM',
  'Financial Results',
  'Procurement & Tenders',
  'Public & Shareholder'
];

const NoticesList = ({ notices, onSelectNotice }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Notices');
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState('');

  const handleDownload = (notice) => {
  if (notice.documentUrl) {
    window.open(
      notice.documentUrl,
      '_blank',
      'noopener,noreferrer'
    );
  } else {
    setToast('The official PDF has not been uploaded yet.');
  }
};

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const matchesCategory =
        selectedCategory === 'All Notices' || notice.category === selectedCategory;
      const matchesStatus =
        statusFilter === 'All' || notice.status === statusFilter;
      const matchesSearch =
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.refNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [notices, selectedCategory, statusFilter, searchQuery]);

  return (
    <section className="mb-16">
      {/* Search & Filter Bar */}
      <div className="bg-[#FAFBF9] rounded-2xl p-6 border border-gray-100 mb-8 shadow-xs">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${selectedCategory === cat
                    ? 'bg-brand-maroon text-white shadow-xs'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-maroon hover:text-brand-maroon'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right Filters: Status & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">

            {/* Status Select */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-white border border-gray-200 text-xs font-semibold rounded-full px-3 py-2 text-gray-700 focus:outline-none focus:border-brand-maroon"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active Only</option>
              <option value="Archived">Archived</option>
            </select>

            {/* Keyword Search */}
            <div className="relative w-full sm:w-60">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ref no. or title..."
                className="w-full bg-white border border-gray-200 rounded-full pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-brand-maroon transition-colors"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

          </div>

        </div>
      </div>

      {/* Notices Count Header */}
      <div className="flex justify-between items-center mb-4 px-1 text-xs text-gray-500">
        <span>Showing <strong>{filteredNotices.length}</strong> official notice{filteredNotices.length === 1 ? '' : 's'}</span>
        {(selectedCategory !== 'All Notices' || statusFilter !== 'All' || searchQuery) && (
          <button
            onClick={() => { setSelectedCategory('All Notices'); setStatusFilter('All'); setSearchQuery(''); }}
            className="text-brand-maroon font-semibold hover:underline"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Notices List */}
      {filteredNotices.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border border-gray-100 shadow-xs">
          <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-gray-600 text-sm font-medium">No notices match your selected filters.</p>
          <p className="text-gray-400 text-xs mt-1">Try adjusting your keyword or category selection.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
            >

              {/* Left Side: Date Block & Content */}
              <div className="flex items-start gap-5 flex-grow">

                {/* Date Block (Matching the home RecentNotices design style with green left border) */}
                <div className="border-l-3 border-brand-green pl-3 py-1 shrink-0 w-24">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {notice.dateMonth}
                  </div>
                  <div className="text-xl font-bold text-gray-800 leading-tight">
                    {notice.dateDay}
                  </div>
                  <div className="text-[11px] font-medium text-gray-500">
                    {notice.dateYear}
                  </div>
                </div>

                {/* Details */}
                <div className="flex-grow">
                  {/* Badges Bar */}
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-lightGray text-brand-maroon border border-gray-200">
                      {notice.category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
                      Ref: {notice.refNo}
                    </span>
                    {notice.urgent && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
                        Urgent
                      </span>
                    )}
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${notice.status === 'Active'
                        ? 'bg-green-50 text-brand-olive'
                        : 'bg-gray-100 text-gray-500'
                      }`}>
                      {notice.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectNotice(notice)}
                    className="text-base sm:text-lg font-serif font-bold text-gray-900 group-hover:text-brand-maroon transition-colors cursor-pointer leading-snug mb-2"
                  >
                    {notice.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed max-w-2xl font-light">
                    {notice.summary}
                  </p>
                </div>

              </div>

              {/* Right Side: Action Buttons */}
              <div className="flex items-center gap-2 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0 border-gray-100 shrink-0">
                <button
                  onClick={() => onSelectNotice(notice)}
                  className="bg-brand-maroon hover:bg-[#600000] text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>View Notice</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>

                <button
                  onClick={() => handleDownload(notice)}
                  className="border border-gray-200 text-gray-600 hover:text-brand-maroon hover:border-brand-maroon text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  title={
                    notice.documentUrl
                      ? `Download PDF (${notice.fileSize})`
                      : 'PDF not available'
                  }>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  <span className="hidden sm:inline">PDF</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
      {toast && (
  <NoticeToast
    message={toast}
    onClose={() => setToast('')}
  />
)}
    </section>
  );
};

export default NoticesList;
