import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Download } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full h-[80vh] md:h-[90vh]">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-slate-200 backdrop-blur">
          <Rocket className="h-4 w-4" /> Passionate Developer · Problem Solver
        </span>

        <h1 className="mt-6 bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
          Hi, I'm Boopathi V
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-200/90 md:text-lg">
          I design and build intelligent, user-centric digital experiences that blend creativity and logic.
          Focusing on AI-driven systems, modern web development, and secure software engineering.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            View My Work
          </a>
          <a
            href="/BoopathiV_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-slate-100 backdrop-blur transition hover:bg-white/10"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
