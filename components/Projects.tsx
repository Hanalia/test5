import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Selected Work</h2>
          <div className="h-1 w-20 bg-indigo-500" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-neutral-900/50 border border-white/5 overflow-hidden rounded-lg hover:border-indigo-500/50 transition-colors duration-500"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <a href={project.link} className="absolute inset-0 z-20" aria-label={`View ${project.title}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
