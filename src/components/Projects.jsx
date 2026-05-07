import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="portfolio" className="py-24 px-6 max-w-6xl mx-auto flex flex-col items-center gap-16 overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h2 className="font-pixel text-3xl md:text-5xl text-retro-yellow">RECENT WORKS</h2>
        <p className="font-mono text-sm text-retro-yellow/60">Crafted with code, creativity, and problem-solving.</p>
      </motion.div>

      {/* Cards Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl">
        {projects.map((project, i) => (
          <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, zIndex: 50 }}
              className="w-full rounded-3xl border-[1px] border-retro-yellow/30 bg-retro-brown shadow-2xl overflow-hidden transition-all duration-300 relative group cursor-pointer"
            >
              {/* Browser Header UI */}
              <div className="w-full h-10 bg-retro-brown/90 backdrop-blur-md border-b border-retro-yellow/10 flex items-center px-4 gap-3 relative z-20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <div className="flex-1 bg-retro-beige/10 h-6 rounded-lg text-[10px] flex items-center px-3 text-retro-beige/40 font-mono overflow-hidden">
                  {project.link.replace('https://', '')}
                </div>
              </div>

              <div className="w-full aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-retro-brown to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="font-pixel text-retro-beige text-lg leading-tight">{project.title}</h3>
                <p className="text-[10px] text-retro-beige/60 mt-2 font-medium">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[8px] border border-retro-beige/30 px-1.5 py-0.5 rounded text-retro-beige">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>


    </section>
  );
};

export default Projects;
