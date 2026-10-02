import React, { useEffect, useState } from 'react';


const icons = {
  shield: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),

  security: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),

  community: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ),

  growth: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  ),
};


const FoundingPrinciples = () => {
  const [principles, setPrinciples] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrinciples = async () => {
      try {
        const response = await fetch(
          'http://127.0.0.1:8000/api/about/principles/'
        );

        if (!response.ok) {
          throw new Error('Failed to load founding principles');
        }

        const data = await response.json();
        setPrinciples(data);
      } catch (error) {
        console.error('Founding principles error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrinciples();
  }, []);

  return (
    <section
      id="founding-principles"
      className="scroll-mt-24"
    >
      <h2 className="text-3xl font-serif text-brand-maroon mb-6 inline-block border-b-2 border-brand-green pb-1">
        Founding Principles
      </h2>

      {loading ? (
        <p className="text-sm text-gray-500">
          Loading founding principles...
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((item) => (
            <div
              key={item.id}
              className="bg-brand-lightGray p-6 rounded-lg flex flex-col gap-4"
            >
              <div className="text-brand-olive">
                {icons[item.icon] || icons.shield}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2 leading-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && principles.length === 0 && (
        <p className="text-sm text-gray-500 mt-4">
          No founding principles available.
        </p>
      )}
    </section>
  );
};

export default FoundingPrinciples;