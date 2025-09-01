import React from 'react';
import { CardSpotlight } from './CardSpotlight';

export const BentoGrid = ({ className = "", children }) => {
  return (
    <div className={`grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className = "", title, description, header, icon }) => {
  return (
    <div className={`relative group row-span-1 transition duration-200 shadow-input p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm flex flex-col justify-between rounded-xl ${className}`}>
      <div className="flex-1 relative">
        {header}
        <div className="absolute inset-0 flex items-center justify-center">
          {React.cloneElement(icon, { className: "h-12 w-12 text-neutral-700 dark:text-white" })}
        </div>
        
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 mt-2">
        <div className="font-sans font-bold text-neutral-800 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 dark:text-neutral-400 text-xs mt-2">
          {description}
        </div>
      </div>
    </div>
  );
};