import React from 'react';
import { Github, Mail } from 'lucide-react';
import TextGenerateEffect from '../aceternity-ui/TextGenerateEffect';

const Hero = () => {
return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center z-10">
            <div className="mb-8">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    やさけい
                </h1>
                <div className="text-2xl md:text-3xl font-medium text-neutral-700 dark:text-neutral-300 mb-8 h-10">
                    <TextGenerateEffect 
                        words={"Developer @ YAS Studios"} 
                        className="inline-block"
                    />
                </div>
            </div>
            
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                I'm a developer who enjoys turning caffeine into code. I love starting new projects, 
                learning new technologies, and occasionally giving up halfway. This is my corner of 
                the internet to showcase my work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="https://github.com/yasakei"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                    <Github size={20} />
                    View on GitHub
                </a>
                <a
                    href="mailto:mdsiyam193.y@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-200 dark:border-neutral-700 rounded-full font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300"
                >
                    <Mail size={20} />
                    Contact Me
                </a>
            </div>
        </div>
    </section>
);
};

export default Hero;