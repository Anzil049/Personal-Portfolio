import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;

  return (
    <footer className="py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-retro-brown bg-retro-yellow flex items-center justify-center font-pixel text-xl text-retro-brown shadow-retro">
          {personal.name.charAt(0)}
        </div>
        <p className="font-pixel text-[10px] text-retro-beige/40 uppercase tracking-widest">
          © {new Date().getFullYear()} {personal.name} • {personal.role}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
