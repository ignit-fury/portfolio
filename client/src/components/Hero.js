import React from 'react';
import SplitText from './SplitText';
import Aurora from './Aurora';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" aria-label="Hero section">
      <Aurora />
      <div className="grid-overlay" aria-hidden="true"></div>
      <div className="hero-content">
        <h1 className="hero-line">
          <SplitText
            text="I BUILD"
            tag="span"
            className="hero-line-text"
            splitType="chars"
            delay={50}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="left"
          />
          <SplitText
            text="DIGITAL"
            tag="span"
            className="hero-line-text"
            splitType="chars"
            delay={50}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="left"
          />
          <SplitText
            text="EXPERIENCES."
            tag="span"
            className="hero-line-text hero-outline"
            splitType="chars"
            delay={50}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="left"
          />
        </h1>
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
