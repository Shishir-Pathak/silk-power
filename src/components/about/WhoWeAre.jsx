import React, { useEffect, useState } from 'react';

const WhoWeAre = () => {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await fetch(
          'http://127.0.0.1:8000/api/about/company/'
        );

        if (!response.ok) {
          throw new Error('Failed to load company information');
        }

        const data = await response.json();
        setCompany(data);
      } catch (error) {
        console.error('About company error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, []);

  if (loading) {
    return (
      <section id="who-we-are" className="scroll-mt-24">
        <p className="text-sm text-gray-500">
          Loading company information...
        </p>
      </section>
    );
  }

  if (!company) {
    return null;
  }

  return (
    <section id="who-we-are" className="scroll-mt-24">
      <h2 className="text-3xl font-serif text-brand-maroon mb-6 inline-block border-b-2 border-brand-green pb-1">
        {company.title}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* Company Description */}
        <div className="text-gray-600 text-sm leading-relaxed space-y-4">
          {company.paragraph_one && (
            <p>{company.paragraph_one}</p>
          )}

          {company.paragraph_two && (
            <p>{company.paragraph_two}</p>
          )}

          {company.paragraph_three && (
            <p>{company.paragraph_three}</p>
          )}
        </div>

        {/* Commitment */}
        <div className="relative">
          <div className="flex justify-end items-center gap-2 mb-2">
            <span className="text-[10px] text-brand-olive tracking-widest uppercase font-semibold">
              {company.commitment_label}
            </span>

            <div className="w-12 h-px bg-brand-olive"></div>
          </div>

          {company.image && (
            <div className="rounded-lg overflow-hidden relative h-64 shadow-md">
              <img
                src={company.image}
                alt="Hydropower Construction"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-6 left-6 text-white text-sm font-semibold tracking-wide">
                {company.commitment_line_one}
                <br />

                <span className="text-gray-300 font-normal">
                  {company.commitment_line_two}
                </span>

                <br />
                {company.commitment_line_three}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;