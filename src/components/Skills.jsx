import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto flex flex-col items-center gap-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h2 className="font-pixel text-3xl md:text-5xl text-retro-yellow">TECHNICAL STACK</h2>
        <p className="font-mono text-sm text-retro-yellow/60">Expertise in the MERN ecosystem & modern development tools.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="retro-container !p-8 !rounded-3xl"
          >
            <h3 className="font-pixel text-lg text-retro-brown mb-6 border-b-2 border-retro-brown/10 pb-2">
              {skill.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skill.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-retro-beige/50 border-2 border-retro-brown rounded-xl font-bold text-xs text-retro-brown hover:bg-retro-accent transition-colors cursor-default shadow-retro"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

     
    </section>
  );
};

export default Skills;
