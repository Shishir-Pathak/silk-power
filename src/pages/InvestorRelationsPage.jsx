import React from 'react';
import InvestorHero from '../components/investor/InvestorHero';
import ShareholdingCommitment from '../components/investor/ShareholdingCommitment';
import InvestorStats from '../components/investor/InvestorStats';
import DocumentsFAQ from '../components/investor/DocumentsFAQ';
import ContactForm from '../components/investor/ContactForm';

const InvestorRelationsPage = () => {
  return (
    <div className="bg-white">
      <InvestorHero />
      
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <ShareholdingCommitment />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pb-16">
        <InvestorStats />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pb-16">
        <DocumentsFAQ />
      </div>

      <ContactForm />
    </div>
  );
};

export default InvestorRelationsPage;