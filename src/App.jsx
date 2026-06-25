import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useTheme from './hooks/useTheme';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Scroll Progress Bar at the Top */}
      <ScrollProgress />

      {/* Interactive Neural Network Particles */}
      <ParticleBackground theme={theme} />

      {/* Loading Sequence */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Content Assembly */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-screen z-10 select-none"
        >
          {/* Header Navigation */}
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* Page Sections */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Education />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </>
  );
}

