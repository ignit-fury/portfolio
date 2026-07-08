const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      type: 'WEB PLATFORM',
      title: 'Heart & Brew',
      description: 'Digital platform for a café featuring menu management, reservations, and admin dashboard.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/heart-brew-hero.webp'
    },
    {
      id: 2,
      type: 'FULL-STACK APP',
      title: 'FoodShareIt',
      description: 'Real-time food donation platform connecting donors with receivers, built with Node.js and MongoDB.',
      tags: ['Node.js', 'MongoDB', 'Express'],
      image: '/images/foodshare.svg'
    },
    {
      id: 3,
      type: 'REACT APP',
      title: 'Auth App',
      description: 'Secure authentication application with protected routes and session management.',
      tags: ['React', 'Node.js', 'JWT'],
      image: '/images/Ai-Faceless-Video-Generator.svg'
    },
    {
      id: 4,
      type: 'AI PROJECT',
      title: 'Diabetes Prediction',
      description: 'Machine learning model for predicting diabetes using Python and scikit-learn.',
      tags: ['Python', 'ML', 'scikit-learn'],
      image: '/images/work-diabetes.svg'
    }
  ];
  res.json(projects);
});

app.get('/api/skills', (req, res) => {
  const skills = [
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
  res.json(skills);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
