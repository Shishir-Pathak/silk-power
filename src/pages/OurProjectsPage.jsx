import React from 'react';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectsSidebar from '../components/projects/ProjectsSidebar';
import ProjectDetails from '../components/projects/ProjectDetails';

const OurProjectsPage = () => {
  return (
    <div className="bg-white">
      <ProjectsHero />
      <div className="container mx-auto px-4 lg:px-8 py-16 flex flex-col lg:flex-row gap-12 relative">
        <ProjectsSidebar />
        <div className="flex-1">
          <ProjectDetails />
        </div>
      </div>
    </div>
  );
};

export default OurProjectsPage;