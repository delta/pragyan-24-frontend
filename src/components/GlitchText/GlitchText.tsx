'use client';
import React from 'react';
import './GlitchTest.css';

interface GlitchTextProps {
  text: string;
}

const GlitchText = (props: GlitchTextProps) => {
  return (
    <div className="hero-container font w-4/5">
      <h2 className="hero glitch layers" data-text={props.text}>
        <span>{props.text}</span>
      </h2>
    </div>
  );
};

export default GlitchText;
