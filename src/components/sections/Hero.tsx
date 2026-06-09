"use client";

import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "../ui/Spotlight";
import { AnimatedGrid } from "../ui/AnimatedGrid";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-20 px-6 bg-radial-gradient">
      {/* Background visual components */}
      <Spotlight fillColor="rgba(99, 102, 241, 0.14)" />
      <AnimatedGrid gridSize={50} highlightCount={15} />

      {/* Ambient background grid vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark/20 to-bg-dark z-0" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center select-none">
        {/* Luminous upper sub-tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-indigo/30 bg-accent-indigo/5 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-accent-indigo shadow-[0_0_15px_rgba(99,102,241,0.05)] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-indigo animate-pulse-slow" />
          Welcome to my digital space.
        </motion.div>

        {/* Large Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-gradient-primary mb-6"
        >
          Artaaaux
        </motion.h1>

        {/* Subtitle / Role description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl font-medium text-slate-400 tracking-wide max-w-2xl mb-12"
        >
          <span className="text-white">Frontend Developer</span> &{" "}
          <span className="text-accent-cyan font-semibold drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            Product Builder
          </span>
        </motion.p>

        {/* Call to Actions (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-accent-indigo shadow-lg hover:shadow-accent-indigo/35 overflow-hidden transition-all duration-300"
          >
            {/* Sliding lighting effect on hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-blue to-accent-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
            <span className="relative z-10 flex items-center justify-center gap-2 text-sm tracking-wide">
              Explore My Work
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="relative w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-slate-300 border border-white/[0.08] hover:border-slate-500 bg-white/[0.02] hover:bg-white/[0.06] backdrop-blur-sm transition-all duration-300 overflow-hidden"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Down arrow scroll helper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer z-10 flex flex-col items-center"
        onClick={() => scrollToSection("about")}
      >
        <span className="text-[10px] tracking-widest text-slate-500 uppercase mb-1">Scroll</span>
        <ChevronDown className="w-4 h-4 text-slate-500" />
      </motion.div>
    </section>
  );
}

export default Hero;
