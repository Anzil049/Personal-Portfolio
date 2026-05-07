import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BackgroundBoxesDemo } from './components/BackgroundBoxesDemo';
import { EntropyDemo } from './components/EntropyDemo';
import { Entropy } from './components/ui/entropy';
import { Boxes } from './components/ui/background-boxes';
import bgVideo from './assets/video.mp4';
import LoadingScreen from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loader" />
      ) : (
        <motion.div 
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen"
        >
          {/* Local Video Background Layer */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="fixed inset-0 w-full h-full object-cover z-0 opacity-40 grayscale-[0.2]"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>

          <div className="fixed inset-0 w-full h-full z-10 bg-black/40 pointer-events-none" />

          {/* Liquid Filter Definition */}
          <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
            <filter id="liquid-filter">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2">
                <animate attributeName="baseFrequency" dur="60s" values="0.01;0.015;0.01" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="30" />
            </filter>
          </svg>
          
          {/* Cinematic Background Layers */}
          <div className="orb-layer">
            <div className="orb w-[500px] h-[500px] bg-retro-yellow/10 -top-20 -left-20" />
            <div className="orb w-[400px] h-[400px] bg-purple-500/5 top-1/2 -right-20" style={{ animationDelay: '-5s' }} />
            <div className="orb w-[300px] h-[300px] bg-retro-yellow/5 bottom-0 left-1/4" style={{ animationDelay: '-12s' }} />
          </div>

          {/* Animated Glow Particles */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-[2]">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -150, 0],
                  x: [0, Math.random() * 100 - 50, 0],
                  opacity: [0, 0.3, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 15 + Math.random() * 15,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 3
                }}
                className="absolute w-1 h-1 bg-retro-yellow/30 rounded-full blur-[2px]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <Navbar />

          <main className="relative z-10 scroll-smooth">
            <Hero />
            <About />
            <Skills />

            <Projects />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
