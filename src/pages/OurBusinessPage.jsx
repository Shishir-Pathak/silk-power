import React from 'react';
import BusinessHero from '../components/business/BusinessHero'; // 👈 1. Import the Hero
import BusinessOverview from '../components/business/BusinessOverview';
import BusinessAreas from '../components/business/BusinessAreas';

const OurBusinessPage = () => {
  return (
    <div className="bg-white">
      {/* 👈 2. Add the Hero right here */}
      <BusinessHero />

      {/* Main Content Area */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <BusinessOverview />
        <BusinessAreas />
      </div>
    </div>
  );
};

export default OurBusinessPage;