import React from 'react';
import SustainabilityHero from '../components/sustainability/SustainabilityHero';
import SustainabilityInitiatives from '../components/sustainability/SustainabilityInitiatives';
import SustainabilityGallery from '../components/sustainability/SustainabilityGallery';
import SustainabilityQuote from '../components/sustainability/SustainabilityQuote';

const SustainabilityPage = () => {
  return (
    <div className="bg-white">
      <SustainabilityHero />
      <SustainabilityInitiatives />
      <SustainabilityGallery />
      <SustainabilityQuote />
    </div>
  );
};

export default SustainabilityPage;