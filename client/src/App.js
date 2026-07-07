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
import AnimatedContent from './components/AnimatedContent';
import './styles/App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <div className="grid-overlay" aria-hidden="true"></div>
        <Navbar />
        <Hero />
        <AnimatedContent>
          <Work />
        </AnimatedContent>
        <AnimatedContent>
          <About />
        </AnimatedContent>
        <AnimatedContent>
          <Skills />
        </AnimatedContent>
        <AnimatedContent>
          <Contact />
        </AnimatedContent>
        <AnimatedContent>
          <Footer />
        </AnimatedContent>
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}

export default App;
