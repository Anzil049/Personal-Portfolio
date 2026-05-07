import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const links = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-6 md:gap-10 bg-retro-beige/40 backdrop-blur-md border-2 border-retro-brown/10 px-8 py-3 rounded-full shadow-sm"
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="font-pixel text-[10px] md:text-xs text-retro-brown/60 hover:text-retro-brown transition-colors tracking-widest uppercase font-bold"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
