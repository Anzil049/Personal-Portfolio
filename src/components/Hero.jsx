import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-20 pb-20 px-6">
      {/* Character Image */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-56 h-56 md:w-72 md:h-72 mb-[-4rem]"
      >
        <div className="absolute inset-0 rounded-[2.5rem] border-4 border-retro-yellow/30 bg-retro-brown/40 backdrop-blur-md shadow-2xl overflow-hidden ring-4 ring-retro-yellow/10">
          <img src={personal.avatar} alt={personal.name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute -inset-4 border-2 border-retro-yellow/20 rounded-[2rem] animate-pulse pointer-events-none" />
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl modern-container p-8 md:p-12 pt-20 text-center space-y-8"
      >
        <div className="absolute top-8 left-8 w-12 h-12 border-l-4 border-t-4 border-retro-yellow/20" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-r-4 border-b-4 border-retro-yellow/20" />

        <div className="space-y-4">
          

          <div className="relative inline-block">
            <h1 className="text-6xl md:text-9xl font-display text-retro-yellow leading-none flex items-center justify-center">
              Port<span className="font-pixel text-4xl md:text-6xl not-italic ml-2 mt-2">folio</span>
            </h1>
            <p className="font-pixel text-sm md:text-lg text-retro-beige mt-2">
              {personal.name} <span className="ml-2 text-retro-yellow">←</span>
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-retro-beige/70 leading-relaxed font-medium">
            {personal.bio}
          </p>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6">
          <button className="bg-retro-yellow text-retro-brown px-8 py-3 rounded-full border-2 border-retro-yellow shadow-lg shadow-retro-yellow/20 font-bold text-lg hover:scale-105 active:scale-95 transition-all">
            {personal.cta}
          </button>
          
          <div className="flex gap-4">
             <div className="w-3 h-3 rounded-full bg-retro-beige shadow-sm" />
             <div className="w-3 h-3 rounded-full bg-retro-beige shadow-sm" />
             <div className="w-3 h-3 rounded-full bg-retro-beige shadow-sm" />
          </div>
        </div>

        <div className="absolute top-10 right-10 hidden md:block text-right">
          <p className="font-pixel text-[10px] text-retro-yellow/40 leading-tight uppercase tracking-tighter">
            EST. 2024<br />READY FOR DEPLOYMENT
          </p>
        </div>
      </motion.div>

     
    </section>
  );
};

export default Hero;
