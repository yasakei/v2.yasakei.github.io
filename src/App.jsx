import React, { useState, useEffect } from 'react';
import FloatingNav from './components/aceternity-ui/FloatingNav';
import BackgroundBeams from './components/aceternity-ui/BackgroundBeams';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Footer from './components/sections/Footer';
import { navItems } from './data/portfolioData.jsx';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      <div className="fixed inset-0 bg-white dark:bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <BackgroundBeams />
      </div>
      
      <FloatingNav navItems={navItems} theme={theme} setTheme={setTheme} />

      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>

      <Footer />
    </div>
  );
}

export default App;