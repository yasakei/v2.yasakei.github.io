import React from 'react';
import { repositories } from '../../data/portfolioData.jsx';
import { ThreeDCardDemo } from '../ui/3d-card.jsx';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      id="projects" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Repositories</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">Explore my recent work and contributions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {repositories.map((repo, index) => (
            <ThreeDCardDemo key={index} {...repo} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
