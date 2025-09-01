import React from 'react';
import { BentoGrid, BentoGridItem } from '../aceternity-ui/BentoGrid';
import { skillsData } from '../../data/portfolioData.jsx';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      id="skills" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">Technologies and tools I work with</p>
        </div>
        
        <BentoGrid className="max-w-4xl mx-auto">
          {skillsData.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className || ''}
            />
          ))}
        </BentoGrid>
      </div>
    </motion.section>
  );
};

export default Skills;