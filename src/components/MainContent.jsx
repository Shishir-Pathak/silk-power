import React from 'react';
import AboutUs from './AboutUs';
import RecentNotices from './RecentNotices';
import LatestNews from './LatestNews';

const MainContent = () => {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <AboutUs />
        <RecentNotices />
        <LatestNews />
      </div>
    </section>
  );
};

export default MainContent;