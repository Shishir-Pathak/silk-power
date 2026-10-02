import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactCards from '../components/contact/ContactCards';
import ContactFormSection from '../components/contact/ContactFormSection';
import ContactMapSection from '../components/contact/ContactMapSection';
import ContactFAQ from '../components/contact/ContactFAQ';

const ContactUsPage = () => {
  return (
    <div className="bg-white">
      <ContactHero />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <ContactCards />
        <ContactFormSection />
        <ContactMapSection />
        <ContactFAQ />
      </div>
    </div>
  );
};

export default ContactUsPage;
