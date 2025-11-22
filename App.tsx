import React from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <main className="min-h-screen w-full text-white selection:bg-indigo-500 selection:text-white">
      <ThreeBackground />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <ChatWidget />
    </main>
  );
}

export default App;
