import React from 'react';

const BackgroundBeams = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-20 animate-pulse"></div>
                <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
        </div>
    );
};

export default BackgroundBeams;