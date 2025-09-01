import React from 'react';
import { Github, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 text-center mt-20 bg-white/10 dark:bg-black/10 backdrop-blur-sm">
      <div className="flex justify-center gap-8 mb-8">
        <a href="https://github.com/yasakei" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white rounded-full p-2 transition-all duration-300">
          <Github size={24} />
        </a>
        <a href="mailto:mdsiyam193.y@gmail.com" className="text-neutral-400 hover:text-white rounded-full p-2 transition-all duration-300">
          <Mail size={24} />
        </a>
        <a href="https://x.com/yasakei" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white rounded-full p-2 transition-all duration-300">
          <Twitter size={24} />
        </a>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400">© 2025 Yasakei. All rights reserved.</p>
    </footer>
  );
};

export default Footer;