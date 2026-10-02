import React, { useEffect } from 'react';

const NoticeToast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-5 z-[9999] animate-slide-in">
      <div className="bg-white border border-gray-200 shadow-xl rounded-xl px-5 py-4 flex items-center gap-3 min-w-[300px] max-w-sm">

        <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
          <svg
            className="w-5 h-5 text-amber-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900">
            Document unavailable
          </p>

          <p className="text-xs text-gray-500 mt-0.5">
            {message}
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-700 cursor-pointer"
        >
          ✕
        </button>

      </div>
    </div>
  );
};

export default NoticeToast;