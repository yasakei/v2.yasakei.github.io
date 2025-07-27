import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

const FloatingNav = ({ navItems, theme, setTheme, className = "" }) => {
  const [activeItem, setActiveItem] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveItem(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 ${className}`}>
      <div className="relative rounded-full border border-black/[0.2] dark:border-white/[0.2] bg-white/80 dark:bg-black/20 backdrop-blur-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Yasakei
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className={`relative px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                  activeItem === item.name.toLowerCase()
                    ? 'text-black dark:text-white bg-neutral-200 dark:bg-white/10'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white'
                }`}
                onClick={() => setActiveItem(item.name.toLowerCase())}
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </nav>
          <button
            className="md:hidden text-black dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/80 dark:bg-black/80 backdrop-blur-lg rounded-2xl border border-black/[0.2] dark:border-white/[0.2] p-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="block px-4 py-3 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                onClick={() => {
                  setActiveItem(item.name.toLowerCase());
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4">
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingNav;