import React from 'react';
import { MapPin, GraduationCap, Target, Mail, Github, Linkedin, Link as LinkIcon, FileText } from 'lucide-react';

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">About Me</h2>
          <p className="mt-4 text-slate-300">
            I'm Boopathi V, a passionate developer with a strong foundation in Computer Science and a keen eye for innovation.
            From crafting interactive web apps to building data-driven backend systems, I love transforming complex problems into elegant,
            user-friendly solutions.
          </p>
          <p className="mt-3 text-slate-300">
            Beyond code, I’m curious about how technology shapes everyday life — from cybersecurity to scalable cloud systems — and I aim
            to create software that truly impacts people.
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Chennai, India</div>
            <div className="flex items-center gap-3"><GraduationCap className="h-4 w-4" /> B.E. CSE · SRM Institute of Science and Technology, Kattankulathur (2022–2026)</div>
            <div className="flex items-center gap-3"><Target className="h-4 w-4" /> Career Objective: Build secure, intelligent systems that make technology delightful and accessible.</div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="mailto:boopathiv@gmail.com" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 hover:bg-white/10"><Mail className="h-4 w-4" /> Email</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 hover:bg-white/10"><Github className="h-4 w-4" /> GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 hover:bg-white/10"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 hover:bg-white/10"><LinkIcon className="h-4 w-4" /> Portfolio</a>
            <a href="/BoopathiV_Resume.pdf" download className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 hover:bg-white/10"><FileText className="h-4 w-4" /> Resume</a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium">Skills & Tech</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
            {[
              'Python','C','C++','JavaScript','React','Node.js','Express','MongoDB','Git','Docker','Linux','REST APIs','DSA','OOP','Networking','Operating Systems','Firebase','Postman'
            ].map((skill) => (
              <div key={skill} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                {skill}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-sm text-slate-300">Currently learning: Next.js, TypeScript, and AI frameworks.</p>
          </div>

          <div className="mt-8">
            <h4 className="font-medium">Education</h4>
            <div className="mt-3 space-y-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">2022–2026</span>
                  <span className="text-xs text-slate-400">CGPA: 9.1/10</span>
                </div>
                <div className="mt-1 text-slate-200">B.E. Computer Science and Engineering — SRM Institute of Science and Technology, Kattankulathur, Chennai</div>
                <div className="text-xs text-slate-400">Core Areas: AI, Web, Cybersecurity</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">2020–2022</span>
                  <span className="text-xs text-slate-400">94%</span>
                </div>
                <div className="mt-1 text-slate-200">Higher Secondary — Army Public School (Computer Science)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
