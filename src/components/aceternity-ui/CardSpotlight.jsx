import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const CardSpotlight = ({
  children,
  className,
  ...props
}) => {
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newOpacity = 1 - Math.sqrt(Math.pow(x - rect.width / 2, 2) + Math.pow(y - rect.height / 2, 2)) / Math.max(rect.width, rect.height);
    setOpacity(newOpacity > 0 ? newOpacity : 0);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative w-full h-full overflow-hidden rounded-xl border border-black/[0.2] dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xl",
        className
      )}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0, 0, 0, 0.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};
