import React from 'react';
import logo from '../../../public/Loader.png';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] flex items-center justify-center">
      <motion.img
        src={logo}
        alt="AmanaDesk Logo"
        className="w-32 h-32"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default Loader;