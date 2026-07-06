import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        PP
      </a>
      
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a 
          href="#work" 
          className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, 'work')}
        >
          <span className="nav-number">01</span> WORK
        </a>
        <a 
          href="#about" 
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, 'about')}
        >
          <span className="nav-number">02</span> ABOUT
        </a>
        <a 
          href="#skills" 
          className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, 'skills')}
        >
          <span className="nav-number">03</span> SKILLS
        </a>
        <a 
          href="#contact" 
          className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          <span className="nav-number">04</span> CONTACT
        </a>
      </div>

      <div className={`nav-status ${isMenuOpen ? 'open' : ''}`}>
        <span className="status-dot"></span>
        <span className="status-text">AVAILABLE FOR WORK</span>
      </div>
    </nav>
  );
};

export default Navbar;
