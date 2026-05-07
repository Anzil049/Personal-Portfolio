import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const technologies = [
    "HTML & CSS",
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "Express",
    "MongoDB"
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-pixel text-3xl md:text-5xl text-retro-yellow">ABOUT ME</h2>
        <div className="h-1 w-24 bg-retro-yellow/30 mx-auto mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Narrative Text */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-retro-beige/80 font-medium leading-relaxed"
        >
          <p>
            Hello! My name is Anzil and I enjoy creating things that live on the internet. 
            I am a passionate <span className="text-retro-yellow">MERN Stack Developer</span> with a Bachelor's degree in 
            Computer Science from the University of Calicut.
          </p>
          <p>
            My interest in web development started when I decided to try building my own applications — 
            turns out hacking together code was quite fun! Fast-forward to today, and I've had the privilege 
            of working on various interesting projects. My main focus these days is building 
            <span className="text-retro-yellow"> accessible, inclusive products</span>.
          </p>
          
          <div>
            <p className="text-retro-yellow mb-4 font-pixel text-sm uppercase tracking-widest">Recent Technologies:</p>
            <ul className="grid grid-cols-2 gap-2 font-mono text-xs">
              {technologies.map((tech, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-retro-yellow">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Visual Card */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-retro-yellow rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10" />
          <div className="modern-container p-8 md:p-12 aspect-square flex flex-col justify-center items-center text-center gap-6 relative z-10 border-2 border-retro-yellow/20">
             <div className="w-32 h-32 rounded-full border-4 border-retro-yellow/30 p-2 overflow-hidden bg-retro-brown/40">
                <div className="w-full h-full rounded-full bg-retro-yellow/10 flex items-center justify-center">
                   <span className="font-pixel text-4xl text-retro-yellow">A</span>
                </div>
             </div>
             <div className="space-y-2">
                <p className="font-pixel text-lg text-retro-yellow uppercase">Anzil K.</p>
                <p className="font-mono text-[10px] text-retro-yellow/60 tracking-[0.2em]">CRAFTSMANSHIP • CODE • DESIGN</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
