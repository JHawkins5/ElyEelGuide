import React from 'react';
import './TTSButton.css';

const TTSButton = ({ text }) => {
    const handleSpeak = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        } else {
            console.error('Text-to-Speech is not supported in this browser.');
        }
    };

    return (
        <button className="tts" onClick={handleSpeak} aria-label="Speak text">
            Speak
        </button>
    );
};

export default TTSButton;