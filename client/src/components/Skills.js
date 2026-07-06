import React from 'react';
import '../styles/Skills.css';

const skillsData = [
  {
    category: 'FRONTEND',
    items: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Responsive Design']
  },
  {
    category: 'BACKEND',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication']
  },
  {
    category: 'DATABASES',
    items: ['MongoDB', 'MySQL', 'Redis']
  },
  {
    category: 'TOOLS',
    items: ['Git & GitHub', 'VS Code', 'Linux', 'Python']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="section-header">
        <span className="section-label">03</span>
        <h2 className="section-title" id="skills-title">SKILLS</h2>
        <div className="section-line"></div>
      </div>

      <div className="skills-grid" role="list">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index} role="listitem">
            <h3 className="skill-title">{skill.category}</h3>
            <ul className="skill-list">
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
