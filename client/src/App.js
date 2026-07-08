import React, { useEffect, useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AnimatedContent from './components/AnimatedContent';
import SplashCursor from './components/SplashCursor';
import './styles/App.css';

function App() {
  const [ready, setReady] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mq.matches);
    const handler = (e) => setIsDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <ErrorBoundary>
      <LoadingScreen onComplete={() => setReady(true)} />
      {ready && (
        <div className="App">
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
          {isDark && <SplashCursor />}
        </div>
      )}
    </ErrorBoundary>
  );
}

export default App;
