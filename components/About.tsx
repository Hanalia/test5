import React from 'react';
import { SKILLS, ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-neutral-900/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="text-lg text-gray-300 leading-relaxed space-y-6">
              <p>{ABOUT_TEXT}</p>
              <p>
                My philosophy is simple: 
                <span className="text-indigo-400 font-semibold"> Code is poetry, and the browser is my canvas. </span>
                Whether I'm optimizing a backend query or tweaking a shader, I strive for excellence.
              </p>
            </div>
          </motion.div>

          {/* Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8">Technical Arsenal</h3>
            <div className="space-y-6">
              {SKILLS.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm text-gray-300">{skill.name}</span>
                    <span className="font-mono text-xs text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-indigo-600 to-cyan-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
