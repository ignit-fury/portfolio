import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './styles/App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <div className="grid-overlay" aria-hidden="true"></div>
        <Navbar />
        <Hero />
        <Work />
        <About />
        <Skills />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}

export default App;
