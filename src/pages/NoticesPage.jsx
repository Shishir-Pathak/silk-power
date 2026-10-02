import React, { useEffect, useState } from 'react';
import NoticesHero from '../components/notices/NoticesHero';
import NoticesList from '../components/notices/NoticesList';
import NoticeDetailModal from '../components/notices/NoticeDetailModal';
import NoticeAlertSubscribe from '../components/notices/NoticeAlertSubscribe';

const API_URL = 'http://127.0.0.1:8000/api/notices/';

const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('Failed to load notices.');
        }

        const data = await response.json();

        const formattedNotices = data.map((notice) => {
          const date = new Date(`${notice.published_date}T00:00:00`);

          return {
            id: notice.id,
            slug: notice.slug,

            title: notice.title,
            category: notice.category,

            date: date.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }),

            dateMonth: date
              .toLocaleDateString('en-US', { month: 'short' })
              .toUpperCase(),

            dateDay: String(date.getDate()).padStart(2, '0'),

            dateYear: String(date.getFullYear()),

            refNo: notice.reference_number,
            status: notice.status,
            urgent: notice.urgent,

            fileSize: notice.file_size || null,

            summary: notice.summary,

            documentUrl: notice.document_url,

            details: {
              meetingTime: notice.meeting_time,
              venue: notice.venue,

              agendas: notice.agendas.map(
                (agenda) => agenda.text
              ),

              signatory: notice.signatory,
              officer: notice.officer,
              bookClosureNote: notice.book_closure_note,
            },
          };
        });

        setNotices(formattedNotices);
      } catch (err) {
        console.error(err);
        setError(
          'Unable to load notices. Please try again later.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="bg-white">
      <NoticesHero />

      <div className="container mx-auto px-4 lg:px-8 py-16">

        {loading && (
          <div className="py-12 text-center text-sm text-gray-500">
            Loading notices...
          </div>
        )}

        {error && (
          <div className="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && (
          <NoticesList
            notices={notices}
            onSelectNotice={(notice) =>
              setSelectedNotice(notice)
            }
          />
        )}

        <NoticeAlertSubscribe />
      </div>

      {selectedNotice && (
        <NoticeDetailModal
          notice={selectedNotice}
          onClose={() => setSelectedNotice(null)}
        />
      )}
    </div>
  );
};

export default NoticesPage;