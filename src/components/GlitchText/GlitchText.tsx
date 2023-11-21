'use client';
import React from 'react';
import './GlitchTest.css';

const GlitchText: React.FC<GlitchTextProps> = (props: GlitchTextProps) => {
    return (
        <div className="hero-container font w-4/5">
            <h2 className="hero glitch layers" data-text={props.text}>
                <span>{props.text}</span>
            </h2>
        </div>
    );
};

export default GlitchText;
