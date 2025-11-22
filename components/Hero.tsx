import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative px-6">
      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-indigo-400 font-mono text-sm mb-4 tracking-widest uppercase">
            Creative Developer & UI Engineer
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8 mix-blend-difference">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">digital realities</span> that inspire.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            I craft high-performance web experiences using modern technologies like React, Three.js, and Generative AI. Minimalist design, maximalist impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12"
        >
          <a 
            href="#work" 
            className="inline-flex items-center gap-2 border border-white/20 px-8 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 group"
          >
            View Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
