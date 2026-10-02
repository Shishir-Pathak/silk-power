import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const [company, setCompany] = useState(null);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeAboutData = async () => {
      try {
        const [companyResponse, projectResponse] = await Promise.all([
          fetch('http://127.0.0.1:8000/api/about/company/'),
          fetch(
            'http://127.0.0.1:8000/api/projects/luja-khola-hydropower-project/'
          ),
        ]);

        if (!companyResponse.ok || !projectResponse.ok) {
          throw new Error('Failed to load homepage About Us data');
        }

        const [companyData, projectData] = await Promise.all([
          companyResponse.json(),
          projectResponse.json(),
        ]);

        setCompany(companyData);
        setProject(projectData);
      } catch (error) {
        console.error('Homepage About Us error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeAboutData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col">
        <h2 className="text-3xl font-serif text-brand-maroon mb-6">
          About Us
        </h2>

        <p className="text-sm text-gray-500">
          Loading company information...
        </p>
      </div>
    );
  }

  if (!company) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-serif text-brand-maroon mb-6">
        About Us
      </h2>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {company.paragraph_one}
      </p>

      <Link
        to="/about"
        className="text-brand-olive font-semibold text-sm flex items-center gap-2 hover:text-brand-maroon transition-colors mt-auto"
      >
        Learn More

        <svg
          className="w-4 h-4"
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

      <div className="mt-8 rounded-xl overflow-hidden shadow-sm relative h-48">
        {company.image && (
          <img
            src={company.image}
            alt={project?.name || 'Luja Khola Hydropower Project'}
            className="w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-sm font-semibold">
            {project?.name || 'Luja Khola Hydropower Project'}
          </div>

          <div className="text-xs text-gray-300">
            {project?.location || 'Solukhumbu, Nepal'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;