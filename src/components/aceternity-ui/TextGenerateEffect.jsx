import React, { useState, useEffect } from 'react';

const TextGenerateEffect = ({ words, className = "" }) => {
    const [displayedWords, setDisplayedWords] = useState([]);

    useEffect(() => {
        const wordList = words.split(' ');
        let currentWords = [];
        wordList.forEach((word, index) => {
            setTimeout(() => {
                currentWords = [...currentWords, word];
                setDisplayedWords(currentWords);
            }, index * 200);
        });
    }, [words]);

    return (
        <div className={`text-black dark:text-white ${className}`}>
            {displayedWords.map((word, idx) => (
                <span
                    key={idx}
                    className={`opacity-0 animate-fadeIn inline-block`}
                    style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'forwards' }}
                >
                    {word}{'\u00A0'}
                </span>
            ))}
        </div>
    );
};

export default TextGenerateEffect;
