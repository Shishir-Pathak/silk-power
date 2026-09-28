import React from 'react';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import MainContent from '../components/MainContent';
import FindUs from '../components/FindUs';

const Home = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <MainContent />
      <FindUs />
    </>
  );
};

export default Home;