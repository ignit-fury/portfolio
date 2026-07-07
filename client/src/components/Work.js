import React, { useEffect, useRef } from 'react';
import LazyImage from './LazyImage';
import TiltedCard from './TiltedCard';
import '../styles/Work.css';

const projectsData = [
  {
    id: 1,
    type: 'WEB PLATFORM',
    title: 'Heart & Brew',
    description: 'Digital platform for a café featuring menu management, reservations, and admin dashboard.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/heart-brew-hero.webp',
    url: 'https://heartandbrew.com'
  },
  {
    id: 2,
    type: 'FULL-STACK APP',
    title: 'FoodShareIt',
    description: 'Real-time food donation platform connecting donors with receivers, built with Node.js and MongoDB.',
    tags: ['Node.js', 'MongoDB', 'Express'],
    image: '/images/work-foodshareit.svg',
    url: 'https://foodshareit.com'
  },
  {
    id: 3,
    type: 'REACT APP',
    title: 'Auth App',
    description: 'Secure authentication application with protected routes and session management.',
    tags: ['React', 'Node.js', 'JWT'],
    image: '/images/work-authapp.svg',
    url: 'https://github.com/ignit-fury'
  },
  {
    id: 4,
    type: 'AI PROJECT',
    title: 'Diabetes Prediction',
    description: 'Machine learning model for predicting diabetes using Python and scikit-learn.',
    tags: ['Python', 'ML', 'scikit-learn'],
    image: '/images/work-diabetes.svg',
    url: 'https://github.com/ignit-fury/diabetes-prediction'
  }
];

const Work = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const cards = sectionRef.current?.querySelectorAll('.project-card');
    cards?.forEach(card => {
      card.classList.add('fade-in');
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="section" ref={sectionRef} aria-labelledby="work-title">
      <div className="section-header">
        <span className="section-label">01</span>
        <h2 className="section-title" id="work-title">SELECTED WORK</h2>
        <div className="section-line"></div>
      </div>

      <div className="projects-grid" role="list">
        {projectsData.map((project) => (
          <a 
            href={project.url} 
            key={project.id} 
            className="project-card" 
            role="listitem" 
            aria-label={`Project: ${project.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-image">
              <TiltedCard className="project-tilt">
                <LazyImage
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="project-image-fill"
                />
              </TiltedCard>
            </div>
            <div className="project-info">
              <span className="project-type">{project.type}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span className="tag" key={index}>{tag}</span>
                ))}
              </div>
              <div className="project-cta" aria-hidden="true">VIEW PROJECT →</div>
            </div>
            <div className="project-arrow" aria-hidden="true">→</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
