import React from 'react';
import { BentoGrid, BentoGridItem } from '../aceternity-ui/BentoGrid';
import { skillsData } from '../../data/portfolioData.jsx';

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
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
    </section>
  );
};

export default Skills;