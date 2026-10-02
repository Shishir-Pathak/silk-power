import React, { useEffect, useState } from "react";

const icons = {
  capacity: (
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

  location: (
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
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),

  ppa: (
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
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),

  status: (
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
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
};

const StatItem = ({ icon, value, label, isLast }) => (
  <div
    className={`flex items-center w-full gap-4 py-4 px-8 ${
      !isLast
        ? "border-b lg:border-b-0 lg:border-r border-gray-200"
        : ""
    }`}
  >
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-olive border-gray-100 shadow-sm">
      {icon}
    </div>

    <div className="w-full">
      <div className="text-brand-maroon font-bold text-center text-lg">
        {value}
      </div>

      <div className="text-gray-500 text-sm text-center">
        {label}
      </div>
    </div>
  </div>
);

const StatsBar = () => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/projects/luja-khola-hydropower-project/"
        );

        if (!response.ok) {
          throw new Error("Failed to load project statistics");
        }

        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error("Project statistics error:", error);
      }
    };

    fetchProject();
  }, []);

  if (!project) {
    return null;
  }

  const getSpecification = (parameter) => {
    const specification = project.specifications?.find(
      (item) =>
        item.parameter?.toLowerCase() === parameter.toLowerCase()
    );

    return specification?.details || "";
  };

  const offtaker =
    getSpecification("Offtaker") ||
    "Nepal Electricity Authority";

  return (
    <div className="bg-brand-lightGray border-b border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-200">

          <StatItem
            icon={icons.capacity}
            value={project.capacity || "24.8 MW"}
            label="Installed Capacity"
          />

          <StatItem
            icon={icons.location}
            value={project.location || "Solukhumbu"}
            label="Project Location"
          />

          <StatItem
            icon={icons.ppa}
            value="30-Year PPA"
            label={offtaker}
          />

          <StatItem
            icon={icons.status}
            value={project.status || "Under Construction"}
            label="Project Status"
            isLast={true}
          />

        </div>
      </div>
    </div>
  );
};

export default StatsBar;