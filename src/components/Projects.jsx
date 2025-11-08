import React from 'react';
import { Shield, Bot, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'InvestGuard — Scam Detection Platform',
    description:
      'A web app that helps users verify investment websites and prevent fraud. Detects fake financial sites in real-time with domain & SSL analysis. Used by 100+ test users.',
    tech: ['React', 'Node.js', 'Google Safe Browsing API'],
    icon: Shield,
    live: '#',
    github: '#',
  },
  {
    title: 'ChatBuddy — AI Chat Assistant',
    description:
      'Personalized assistant built using OpenAI API for productivity. Offers smart suggestions and context-aware responses.',
    tech: ['Python', 'Flask', 'OpenAI API'],
    icon: Bot,
    live: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <p className="mt-2 max-w-2xl text-slate-300">Each project solves a real problem with a clear impact. Problem → Solution → Outcome.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tech, icon: Icon, live, github }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(56,189,248,0.15), transparent 40%)' }} />
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-sky-500/20 p-2 text-sky-300"><Icon className="h-5 w-5" /></div>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        <p className="mt-3 text-slate-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-200">{t}</span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-4 text-sm">
          <a href={live} className="inline-flex items-center gap-1 text-sky-300 hover:text-sky-200"><ExternalLink className="h-4 w-4" /> Live</a>
          <a href={github} className="inline-flex items-center gap-1 text-slate-300 hover:text-slate-200"><ExternalLink className="h-4 w-4" /> GitHub</a>
        </div>
      </div>
    </div>
  );
}
