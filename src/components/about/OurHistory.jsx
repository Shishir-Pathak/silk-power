import React, { useEffect, useState } from 'react';

const OurHistory = () => {
  const [milestones, setMilestones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(
          'http://127.0.0.1:8000/api/about/history/'
        );

        if (!response.ok) {
          throw new Error('Failed to load company history');
        }

        const data = await response.json();
        setMilestones(data);
      } catch (error) {
        console.error('Company history error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <section id="our-history" className="scroll-mt-24">
      <h2 className="text-3xl font-serif text-brand-maroon mb-8 inline-block border-b-2 border-brand-green pb-1">
        Our History
      </h2>

      {loading ? (
        <p className="text-sm text-gray-500">
          Loading company history...
        </p>
      ) : (
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute top-2 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {milestones.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col"
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute top-[-5px] left-0 w-3 h-3 rounded-full border-2 border-orange-400 bg-white z-10"></div>

                <div className="mt-6">
                  <div className="text-brand-maroon font-bold text-lg mb-1">
                    {item.year}
                  </div>

                  <div className="text-[10px] text-gray-500 font-medium mb-2">
                    {item.month}
                    {item.date && ` ${item.date}`}
                  </div>

                  <p className="text-xs text-gray-700 font-medium leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && milestones.length === 0 && (
        <p className="text-sm text-gray-500">
          No company history available.
        </p>
      )}
    </section>
  );
};

export default OurHistory;