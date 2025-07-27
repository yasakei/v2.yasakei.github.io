import React from 'react';
import { repositories } from '../../data/portfolioData.jsx';
import { ThreeDCardDemo } from '../ui/3d-card.jsx';

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Repositories</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">Explore my recent work and contributions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {repositories.map((repo, index) => (
            <ThreeDCardDemo key={index} {...repo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
