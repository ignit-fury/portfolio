import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-label">02</span>
        <h2 className="section-title">ABOUT ME</h2>
        <div className="section-line"></div>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p className="about-lead">
            I'm a passionate full-stack developer who loves building clean, functional web applications.
          </p>
          <p className="about-body">
            Currently pursuing my studies in Gujarat, I spend my time crafting digital experiences that solve real-world problems. From food donation platforms to café management systems, I focus on building tools that make a difference.
          </p>
          <p className="about-body">
            My approach combines modern frameworks with thoughtful design, ensuring every project is both performant and visually compelling.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">PROJECTS BUILT</span>
          </div>
          <div className="stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">YEARS CODING</span>
          </div>
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">TECHNOLOGIES</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
