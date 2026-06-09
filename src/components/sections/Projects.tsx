"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle, Database, Award, Vote, ShieldCheck, TrendingUp, DollarSign } from "lucide-react";
import confetti from "canvas-confetti";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  projectUrl: string;
  className?: string;
  children?: React.ReactNode;
}

function ProjectCard({ title, category, description, tags, projectUrl, className = "", children }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`glass group rounded-2xl border border-white/[0.06] overflow-hidden flex flex-col justify-between hover:border-white/[0.12] transition-all duration-500 shadow-xl ${className}`}
    >
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />

      {/* Card Header & Content */}
      <div className="p-8 pb-4 relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-indigo">
          {category}
        </span>
        <div className="flex items-center justify-between mt-2 mb-3">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group/title"
          >
            <h3 className="text-2xl font-extrabold text-white group-hover/title:text-accent-indigo transition-colors duration-300">
              {title}
            </h3>
          </a>
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] group-hover:bg-accent-indigo/15 group-hover:border-accent-indigo/40 group-hover:text-white transition-all duration-300"
            aria-label={`Visit ${title} live website`}
          >
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-300" />
          </a>
        </div>
        <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-6">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md text-xs font-semibold bg-white/[0.02] border border-white/[0.05] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* App Mock Interface/Graphic Area */}
      <div className="relative px-6 pb-6 w-full flex-grow overflow-hidden flex items-end">
        <div className="w-full glass rounded-xl border border-white/[0.05] bg-bg-navy/40 overflow-hidden shadow-inner flex flex-col">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  // Website OSIS local vote state for interactive demo
  const [osisVotes, setOsisVotes] = useState(1324);
  const [hasVoted, setHasVoted] = useState(false);

  const handleOsisVote = () => {
    if (hasVoted) return;
    setOsisVotes((prev) => prev + 1);
    setHasVoted(true);
    
    // Premium confetti burst!
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#6366f1", "#06b6d4", "#8b5cf6"],
    });
  };

  return (
    <section id="projects" className="py-24 px-6 relative z-10 bg-gradient-to-b from-transparent to-bg-dark/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-indigo mb-3"
          >
            <Award className="w-3.5 h-3.5" />
            Selected Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Featured Engineering.
          </motion.h2>
        </div>

        {/* Bento Grid Layout (Featured FINUSA is 2/3, Website OSIS is 1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: FINUSA (Featured - 2/3 Width) */}
          <ProjectCard
            title="FINUSA"
            category="Featured Project"
            description="A premium financial management dashboard offering users real-time asset analytics, budget forecasts, and transaction classifications."
            tags={["Next.js", "TypeScript", "TailwindCSS", "Supabase", "Framer Motion"]}
            projectUrl="https://finusa.vercel.app"
            className="lg:col-span-2 min-h-[500px]"
          >
            {/* FINUSA Mockup Content */}
            <div className="p-4 bg-slate-950/65 backdrop-blur-md flex flex-col h-full text-xs font-mono text-slate-400 select-none">
              
              {/* Mockup Dashboard Header */}
              <div className="flex items-center justify-between border-b border-white/[0.05] pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[10px] text-slate-500 ml-2">finusa.vercel.app</span>
                </div>
                <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.05] px-2.5 py-1 rounded text-[10px] text-slate-400">
                  <Database className="w-3.5 h-3.5 text-accent-cyan" />
                  Supabase Connected
                </div>
              </div>

              {/* Mockup Metrics Cards */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-white/[0.02] border border-white/[0.05] p-3 rounded-lg flex flex-col justify-between">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wide">Total Balance</span>
                  <span className="text-sm font-bold text-white mt-1">$48,259.00</span>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] p-3 rounded-lg flex flex-col justify-between">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wide">Monthly Savings</span>
                  <span className="text-sm font-bold text-emerald-400 mt-1">+$5,830.40</span>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] p-3 rounded-lg flex flex-col justify-between">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wide">Investment Yield</span>
                  <span className="text-sm font-bold text-accent-indigo mt-1">+14.2%</span>
                </div>
              </div>

              {/* Graphic area: SVG financial curve */}
              <div className="flex-grow min-h-[140px] relative border border-white/[0.04] rounded-lg bg-white/[0.01] p-3 overflow-hidden flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="flex items-center gap-1 font-semibold text-slate-400">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    Asset Projections
                  </span>
                  <span className="text-slate-500">June 2026</span>
                </div>

                {/* Animated Line Chart Path */}
                <svg className="w-full h-24 overflow-visible" viewBox="0 0 400 100">
                  <defs>
                    <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(99, 102, 241, 0.4)" />
                      <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                    </linearGradient>
                  </defs>
                  {/* Fill Area */}
                  <path
                    d="M0,80 Q50,45 100,55 T200,35 T300,15 T400,2 L400,100 L0,100 Z"
                    fill="url(#chart-glow)"
                  />
                  {/* Glowing Stroke */}
                  <motion.path
                    d="M0,80 Q50,45 100,55 T200,35 T300,15 T400,2"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                  />
                  {/* Glowing Pulse Node */}
                  <circle cx="400" cy="2" r="4" fill="#6366f1" />
                  <circle cx="400" cy="2" r="8" fill="none" stroke="#6366f1" className="animate-ping" />
                </svg>

                <div className="flex justify-between items-center text-[9px] text-slate-500 border-t border-white/[0.04] pt-2">
                  <span>Week 1</span>
                  <span>Week 2</span>
                  <span>Week 3</span>
                  <span>Week 4</span>
                </div>
              </div>
            </div>
          </ProjectCard>

          {/* Card 2: Website OSIS (Secondary - 1/3 Width) */}
          <ProjectCard
            title="Website OSIS"
            category="Secondary Project"
            description="A secure and transparent e-voting platform for school student council elections, built with real-time sync systems."
            tags={["React", "TailwindCSS", "Firebase", "Framer Motion"]}
            projectUrl="https://osis.shabi.web.id"
            className="lg:col-span-1 min-h-[500px]"
          >
            {/* Website OSIS mockup & interactive vote box */}
            <div className="p-5 bg-slate-950/70 h-full flex flex-col justify-between text-xs font-mono text-slate-400 select-none">
              
              <div className="flex items-center justify-between border-b border-white/[0.05] pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="text-[10px] text-slate-500 ml-1">osis.shabi.web.id</span>
                </div>
                <div className="flex items-center gap-1 text-[9px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Secure
                </div>
              </div>

              {/* Candidates list preview */}
              <div className="space-y-3 flex-grow">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                  Active Ballot
                </div>
                
                {/* Candidate 1 */}
                <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-accent-indigo/20 border border-accent-indigo/40 flex items-center justify-center font-bold text-accent-indigo text-xs">
                      01
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white">Aditya & Budi</div>
                      <div className="text-[9px] text-slate-500">Vision: Digital Literacy</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold">42.5%</span>
                </div>

                {/* Candidate 2 (Interactive selection) */}
                <div className="p-3 bg-accent-indigo/5 border border-accent-indigo/35 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-accent-indigo/30 border border-accent-indigo/55 flex items-center justify-center font-bold text-accent-indigo text-xs">
                      02
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white">Citra & Dian</div>
                      <div className="text-[9px] text-slate-400">Vision: Art & Community</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-accent-indigo font-bold">57.5%</span>
                </div>
              </div>

              {/* Click to Vote Interactive Component */}
              <div className="mt-5 border-t border-white/[0.05] pt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-slate-500">Interactive Vote Simulator</span>
                  <span className="text-[11px] font-extrabold text-white">{osisVotes.toLocaleString()} Votes</span>
                </div>

                <button
                  onClick={handleOsisVote}
                  disabled={hasVoted}
                  className={`w-full py-3 rounded-lg font-bold text-[11px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                    hasVoted
                      ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 cursor-default"
                      : "bg-white/[0.03] hover:bg-accent-indigo border border-white/[0.06] hover:border-accent-indigo text-slate-300 hover:text-white"
                  }`}
                >
                  {hasVoted ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Vote Registered
                    </>
                  ) : (
                    <>
                      <Vote className="w-4 h-4" />
                      Submit Sample Vote
                    </>
                  )}
                </button>
              </div>

            </div>
          </ProjectCard>

        </div>
      </div>
    </section>
  );
}

export default Projects;
