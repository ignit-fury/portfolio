import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero-content">
        <h1 className="hero-line" aria-label="I build digital experiences">I BUILD</h1>
        <h1 className="hero-line" aria-hidden="true">DIGITAL</h1>
        <h1 className="hero-line hero-outline" aria-hidden="true">EXPERIENCES.</h1>
      </div>
      <div className="hero-sub">
        <p className="hero-subtitle">Full-Stack Developer & UI Designer</p>
        <p className="hero-location">Gujarat, India</p>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span className="scroll-label">SCROLL</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
