import React from 'react';
import Logo from '../Logo';

const NoticeDetailModal = ({ notice, onClose }) => {
  if (!notice) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Action Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-lightGray text-brand-maroon border border-gray-200">
              {notice.category}
            </span>
            {notice.urgent && (
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-red-100 text-red-700 animate-pulse">
                Important / Urgent
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:flex text-xs font-semibold text-gray-700 hover:text-brand-maroon px-3 py-1.5 rounded-lg border border-gray-200 items-center gap-1.5 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Notice
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
              aria-label="Close notice modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Official Notice Document Page */}
        <div className="p-6 sm:p-10 font-sans text-gray-800">
          
          {/* Document Header Letterhead */}
          <div className="border-b-2 border-brand-maroon pb-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Logo className="w-40 h-auto" />
              <div className="text-left sm:text-right text-[11px] text-gray-500 space-y-0.5">
                <p className="font-bold text-gray-800 uppercase tracking-wider">Silk Power Limited</p>
                <p>Madhyapur Thimi Municipality - 3, Bhaktapur, Nepal</p>
                <p>Reg. No: 284192/078/079 | PAN: 610283912</p>
                <p>Email: info@silkpower.com.np &bull; Tel: +977-1-6638120</p>
              </div>
            </div>
          </div>

          {/* Reference & Date Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-semibold text-gray-600 mb-6 bg-gray-50 p-3 rounded-lg border border-gray-100">
            <div>
              <span className="text-gray-400 font-normal">Dispatch Ref: </span>
              <span className="font-mono text-brand-maroon">{notice.refNo}</span>
            </div>
            <div>
              <span className="text-gray-400 font-normal">Date of Issuance: </span>
              <span>{notice.date}</span>
            </div>
          </div>

          {/* Subject Heading */}
          <div className="text-center mb-6">
            <span className="text-[10px] font-bold tracking-[0.2em] text-brand-olive uppercase block mb-1">
              Official Corporate Notice
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 max-w-xl mx-auto leading-snug">
              {notice.title}
            </h2>
          </div>

          {/* Summary / Preamble */}
          <div className="bg-[#FAFBF9] border-l-4 border-brand-green p-4 rounded-r-lg mb-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
            {notice.summary}
          </div>

          {/* Notice Agendas / Details */}
          {notice.details && (
            <div className="space-y-4 mb-8 text-xs sm:text-sm text-gray-700">
              {notice.details.venue && (
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 border-b border-gray-100 pb-3">
                  <span className="font-bold text-gray-900 sm:col-span-1">Venue / Channel:</span>
                  <span className="sm:col-span-3 text-gray-600">{notice.details.venue}</span>
                </div>
              )}

              {notice.details.meetingTime && (
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 border-b border-gray-100 pb-3">
                  <span className="font-bold text-gray-900 sm:col-span-1">Date & Time / Window:</span>
                  <span className="sm:col-span-3 text-gray-600">{notice.details.meetingTime}</span>
                </div>
              )}

              {notice.details.agendas && notice.details.agendas.length > 0 && (
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Subject Matter / Key Terms of Notice:</h4>
                  <ol className="list-decimal list-inside space-y-2 pl-1 leading-relaxed text-gray-700">
                    {notice.details.agendas.map((agenda, i) => (
                      <li key={i} className="pl-1">
                        <span className="font-medium text-gray-800">{agenda}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {notice.details.bookClosureNote && (
                <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg text-amber-900 text-xs mt-4">
                  <strong>Notice Note: </strong>
                  {notice.details.bookClosureNote}
                </div>
              )}
            </div>
          )}

          {/* Signatory & Official Stamp Block */}
          <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            
            {/* Digital Stamp Simulation */}
            <div className="flex items-center gap-3">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-brand-maroon/60 flex flex-col items-center justify-center text-center p-1 text-[8px] text-brand-maroon font-bold uppercase tracking-tight rotate-[-6deg] select-none">
                <span>Silk Power Ltd.</span>
                <span className="text-[7px] text-brand-olive font-mono">SEAL</span>
                <span>Bhaktapur, Nepal</span>
              </div>
              <div className="text-[11px] text-gray-500">
                <span className="block font-semibold text-gray-700">Digitally Certified</span>
                <span>Authorized for Public Notice</span>
              </div>
            </div>

            {/* Officer Signature */}
            <div className="text-left sm:text-right text-xs">
              <p className="text-gray-500">{notice.details?.signatory || 'By Order of the Board'}</p>
              <div className="h-8 flex items-center justify-end font-serif italic text-lg text-brand-maroon">
                {notice.details?.officer || 'Silk Power Limited'}
              </div>
              <p className="font-bold text-gray-800">{notice.details?.officer || 'Company Secretary'}</p>
              <p className="text-[10px] text-gray-400">Silk Power Limited</p>
            </div>

          </div>

          {/* Bottom Actions */}
          <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3">
            <span className="text-xs text-gray-400">
              Official Document Size: {notice.fileSize}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => alert(`Simulated download for official PDF: ${notice.title} (${notice.fileSize})`)}
                className="bg-brand-maroon hover:bg-[#600000] text-white text-xs font-semibold px-5 py-2 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Official PDF ({notice.fileSize})
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NoticeDetailModal;
