import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Highlights from './components/Highlights.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100 antialiased">
      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About + Skills + Contact */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      {/* Education + Achievements + Experience */}
      <section id="highlights" className="scroll-mt-24">
        <Highlights />
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <footer className="py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Boopathi V · Built with love, React & Tailwind
      </footer>
    </div>
  );
}
