import React from 'react';
import { Trophy, Award, Briefcase } from 'lucide-react';

export default function Highlights() {
  const achievements = [
    'Google Cloud Study Jam — Completed Foundations Track',
    'Smart India Hackathon — Finalist (Team Leader)',
    'LeetCode 200+ Problems Solved',
    'Certifications: Python (NPTEL), Web Dev (FreeCodeCamp), Cybersecurity (Google)'
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-400" />
            <h2 className="text-2xl font-semibold">Achievements & Certifications</h2>
          </div>
          <ul className="mt-4 space-y-3 text-slate-300">
            {achievements.map((item) => (
              <li key={item} className="rounded-md border border-white/10 bg-white/5 p-3">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-emerald-400" />
            <h2 className="text-2xl font-semibold">Experience / Internships</h2>
          </div>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Web Developer Intern — ABC Tech Solutions</span>
                <span className="text-xs text-slate-400">June–Aug 2025</span>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
                <li>Built admin dashboards and API integrations using React + Node.js</li>
                <li>Improved loading time by 40% through optimized data fetching</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-sky-400" />
              <h3 className="text-xl font-medium">Highlights</h3>
            </div>
            <p className="mt-2 text-sm text-slate-300">Focused on building secure, scalable, and user-friendly applications with measurable impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
