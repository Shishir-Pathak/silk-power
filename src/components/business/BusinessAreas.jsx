import React, { useEffect, useState } from "react";

const areaIcons = {
  hydropower: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  ),

  renewable: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),

  infrastructure: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),

  community: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),
};

const BusinessAreas = () => {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusinessAreas = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/business/areas/"
        );

        if (!response.ok) {
          throw new Error("Failed to load business areas");
        }

        const data = await response.json();
        setAreas(data);
      } catch (error) {
        console.error("Business areas error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessAreas();
  }, []);

  return (
    <section className="border-t border-gray-100 pt-16">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
        <div>
          <span className="text-[10px] text-brand-olive tracking-widest uppercase font-semibold block mb-2">
            Our Business Areas
          </span>

          <h2 className="text-4xl font-serif text-brand-maroon">
            A Diversified and Sustainable Future
          </h2>
        </div>

        <p className="text-sm text-gray-500 max-w-md lg:text-right">
          While our current focus is on hydropower, we continue to explore
          opportunities in renewable energy and related infrastructure to
          contribute to Nepal&apos;s long-term energy security.
        </p>
      </div>

      {loading ? (
        <p className="text-sm text-gray-500">
          Loading business areas...
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group"
            >
              <div className="h-40 overflow-hidden">
                {area.image && (
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              <div className="p-6 pt-8 relative flex-grow">
                <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-[#F0F7EA] text-brand-olive flex items-center justify-center border-4 border-white shadow-sm">
                  {areaIcons[area.icon] || areaIcons.hydropower}
                </div>

                <h3 className="text-brand-maroon font-bold text-sm mb-2">
                  {area.title}
                </h3>

                <p className="text-xs text-gray-500 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && areas.length === 0 && (
        <p className="text-sm text-gray-500">
          No business areas available.
        </p>
      )}
    </section>
  );
};

export default BusinessAreas;