import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0806] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-retro-yellow/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo/Symbol */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-10 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-display text-retro-yellow leading-none flex items-center justify-center">
            <span className="font-pixel text-3xl md:text-4xl ml-2 mt-2">ANZIL K.</span>
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-retro-yellow/30 to-transparent mt-4" />
        </motion.div>

        {/* Loading Progress */}
        <div className="w-48 md:w-64">
          <div className="flex justify-between items-end mb-2">
            <span className="font-pixel text-[10px] text-retro-yellow/60 uppercase">System Initializing</span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="font-pixel text-[10px] text-retro-yellow"
            >
              RUNNING
            </motion.span>
          </div>
          
          <div className="h-1 w-full bg-retro-yellow/10 rounded-full overflow-hidden border border-white/5">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="h-full bg-retro-yellow shadow-[0_0_10px_rgba(217,164,43,0.5)]"
            />
          </div>

          <div className="mt-4 flex flex-col gap-1">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-[8px] text-white/40 uppercase tracking-widest text-center"
            >
              Establishing Secure Connection
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="font-mono text-[8px] text-white/40 uppercase tracking-widest text-center"
            >
              Loading Visual Assets
            </motion.p>
          </div>
        </div>
      </div>

      {/* Decorative Corner Lines */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-retro-yellow/20" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-retro-yellow/20" />
    </motion.div>
  );
};

export default LoadingScreen;
