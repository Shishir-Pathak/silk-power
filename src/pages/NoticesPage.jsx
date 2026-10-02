import React, { useState } from 'react';
import NoticesHero from '../components/notices/NoticesHero';
import NoticesList from '../components/notices/NoticesList';
import NoticeDetailModal from '../components/notices/NoticeDetailModal';
import NoticeAlertSubscribe from '../components/notices/NoticeAlertSubscribe';
import { noticesData } from '../components/notices/noticesData';

const NoticesPage = () => {
  const [selectedNotice, setSelectedNotice] = useState(null);

  return (
    <div className="bg-white">
      <NoticesHero />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <NoticesList
          notices={noticesData}
          onSelectNotice={(notice) => setSelectedNotice(notice)}
        />

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
