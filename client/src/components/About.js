import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-label">02</span>
        <h2 className="section-title">ABOUT US</h2>
        <div className="section-line"></div>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p className="about-lead">
            We're a team of full-stack developers passionate about building well-functioning, clean web applications.
          </p>
          <p className="about-body">
            Headquartered in Gujarat, our team works diligently to develop digital products that solve practical problems in society — such as our recently developed food donation portal and the café management system.
          </p>
          <p className="about-body">
            The blend of the latest technologies, design-oriented approach, and a team spirit ensures high-performing, scalable, and aesthetically appealing web solutions.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">PROJECTS BUILT</span>
          </div>
          <div className="stat">
            <span className="stat-number">2+</span>
            <span className="stat-label">YEARS CODING</span>
          </div>
          <div className="stat">
            <span className="stat-number">8+</span>
            <span className="stat-label">TOOLS &amp; FRAMEWORKS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
