import React, { useEffect, useRef } from 'react';
import LazyImage from './LazyImage';
import TiltedCard from './TiltedCard';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import '../styles/Work.css';

const projectsData = [
  {
    id: 1,
    type: 'WEB PLATFORM',
    title: 'Heart & Brew',
    description: 'Digital platform for a café featuring menu management, reservations, and admin dashboard.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/heart-brew-hero.webp',
    url: 'https://cafe-kappa-jade.vercel.app/'
  },
  {
    id: 2,
    type: 'FULL-STACK APP',
    title: 'FoodShare',
    description: 'Real-time food donation platform connecting donors with receivers, built with Node.js and MongoDB.',
    tags: ['Node.js', 'MongoDB', 'Express'],
    image: '/images/foodshare.svg',
    url: 'https://foodshare-six.vercel.app/'
  },
  {
    id: 3,
    type: 'AI PROJECT',
    title: 'Ai Faceless Video Generator',
    description: 'AI-powered video generation tool for creating faceless videos.',
    tags: ['Python', 'ComfyUI', 'Piper TTS','FFmpeg','Ollama'],
    image: '/images/Ai-Faceless-Video-Generator.svg',
    url: 'https://github.com/ignit-fury/AiFaceless-vid.git'
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

      <ScrollStack
        useWindowScroll
        className="work-scroll-stack"
        itemDistance={80}
        stackPosition="25%"
        scaleEndPosition="8%"
        baseScale={0.9}
        itemScale={0.05}
      >
        {projectsData.map((project) => (
          <ScrollStackItem key={project.id}>
            <a 
              href={project.url} 
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
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};

export default Work;
