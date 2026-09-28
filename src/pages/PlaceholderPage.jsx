import React from 'react';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="container mx-auto px-4 py-32 text-center min-h-[50vh] flex flex-col justify-center items-center">
      <h1 className="text-5xl font-serif text-brand-maroon mb-6">{title}</h1>
      <p className="text-gray-500 max-w-md">
        This page is currently under construction. Please check back later.
      </p>
    </div>
  );
};

export default PlaceholderPage;