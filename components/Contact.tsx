import React from 'react';
import { CONTACT_EMAIL } from '../constants';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Let's Create Together</h2>
          <p className="text-xl text-gray-400 mb-12">
            Have a project in mind? Or just want to talk about the latest in AI and WebGL?
          </p>
          
          <a 
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>

          <div className="mt-20 flex justify-center gap-8">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                className="p-3 border border-white/10 rounded-full hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 text-gray-400 hover:text-white"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          
          <div className="mt-32 text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Lumina Portfolio. Built with React, Three.js & Gemini.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
