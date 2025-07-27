import React from 'react';
import { CardSpotlight } from './CardSpotlight';
import { ExternalLink, Star, GitFork } from 'lucide-react';

const HoverEffect = ({ items, className = "" }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {items.map((item, idx) => (
        <a href={item.url} target="_blank" rel="noopener noreferrer" key={idx}>
          <CardSpotlight className="group h-full cursor-pointer">
            <div className="relative h-full overflow-hidden flex flex-col">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-neutral-900/80 via-transparent to-transparent" />
              </div>
              <div className="relative p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-black dark:text-white group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </h3>
                  <ExternalLink size={20} className="text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4 line-clamp-3 flex-grow">
                  {item.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mt-auto">
                  <div className="flex items-center gap-1">
                    <Star size={16} />
                    <span>{item.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={16} />
                    <span>{item.forks}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardSpotlight>
        </a>
      ))}
    </div>
  );
};

export default HoverEffect;