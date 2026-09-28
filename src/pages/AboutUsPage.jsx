import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutSidebar from '../components/about/AboutSidebar';
import WhoWeAre from '../components/about/WhoWeAre';
import FoundingPrinciples from '../components/about/FoundingPrinciples';
import OurHistory from '../components/about/OurHistory';
import BoardOfDirectors from '../components/about/BoardOfDirectors';
const AboutUsPage = () => {
  return (
    <div className="bg-white">
      {/* 👇 The Hero matches the screenshot */}
      <AboutHero />

      {/* Main Content Area */}
      <div className="container mx-auto px-4 lg:px-8 py-16 flex flex-col lg:flex-row gap-12 relative">
        <AboutSidebar />
        <div className="flex-1 flex flex-col gap-16">
          <WhoWeAre />
          <FoundingPrinciples />
          <OurHistory />
          <BoardOfDirectors />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;