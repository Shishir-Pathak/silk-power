import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const pillarIcons = {
  develop: (
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

  build: (
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
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),

  operate: (
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

  value: (
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
};

const BusinessOverview = () => {
  const [overview, setOverview] = useState(null);
  const [pillars, setPillars] = useState([]);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        const [overviewResponse, pillarsResponse, projectResponse] =
          await Promise.all([
            fetch("http://127.0.0.1:8000/api/business/overview/"),
            fetch("http://127.0.0.1:8000/api/business/pillars/"),
            fetch(
              "http://127.0.0.1:8000/api/projects/luja-khola-hydropower-project/"
            ),
          ]);

        if (
          !overviewResponse.ok ||
          !pillarsResponse.ok ||
          !projectResponse.ok
        ) {
          throw new Error("Failed to load business data");
        }

        const [overviewData, pillarsData, projectData] =
          await Promise.all([
            overviewResponse.json(),
            pillarsResponse.json(),
            projectResponse.json(),
          ]);

        setOverview(overviewData);
        setPillars(pillarsData);
        setProject(projectData);
      } catch (error) {
        console.error("Business overview error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessData();
  }, []);

  if (loading) {
    return (
      <section className="mb-20">
        <p className="text-sm text-gray-500">
          Loading business information...
        </p>
      </section>
    );
  }

  if (!overview) {
    return null;
  }

  return (
    <section className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Left Column */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-serif text-brand-maroon leading-tight mb-6">
              {overview.title}
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              {overview.description}
            </p>
          </div>

          <div className="mt-12 hidden lg:flex flex-col gap-1 text-xs tracking-widest uppercase font-semibold text-brand-olive">
            <span>Rivers</span>
            <span>People</span>
            <span>Progress</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 flex flex-col gap-12">

          {/* Business Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {pillars.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#F0F7EA] text-brand-olive flex items-center justify-center mb-4">
                  {pillarIcons[item.icon] || pillarIcons.develop}
                </div>

                <h3 className="text-brand-maroon font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Core Business Block */}
          <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-sm border border-gray-100">

            {/* Image */}
            <div className="md:w-1/2 relative h-64 md:h-auto">
              {overview.image && (
                <img
                  src={overview.image}
                  alt={project?.name || "Hydropower Project"}
                  className="w-full h-full object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-xs font-semibold">
                  {project?.name || "Luja Khola Hydropower Project"}
                </div>

                <div className="text-[10px] text-gray-300">
                  {project?.location || "Solukhumbu, Nepal"}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-1/2 bg-[#F2F7EE] p-8 flex flex-col justify-center relative">
              <span className="text-[10px] text-brand-olive tracking-widest uppercase font-semibold mb-2">
                {overview.core_business_label}
              </span>

              <h3 className="text-2xl font-serif text-brand-maroon leading-tight mb-4">
                {overview.core_business_title}
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed mb-6">
                {overview.core_business_description}
              </p>

              <Link
                to="/projects"
                className="bg-brand-olive text-white text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 self-start hover:bg-opacity-90 transition-all"
              >
                View Our Projects

                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>

              {/* Existing decorative leaf */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <svg
                  width="150"
                  height="150"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  className="text-brand-olive"
                >
                  <path d="M50 0 C75 25, 100 50, 100 75 C75 100, 50 75, 50 50 C50 75, 25 100, 0 75 C0 50, 25 25, 50 0 Z" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOverview;