"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Eye, Sparkles } from "lucide-react";

export function About() {
  const stats = [
    { label: "Performance Focus", value: "98%", desc: "Average PageSpeed score achieved." },
    { label: "Products Launched", value: "12+", desc: "Responsive client & side projects." },
    { label: "Project Success", value: "100%", desc: "Client & stakeholder satisfaction rate." },
  ];

  const coreValues = [
    {
      icon: <Code2 className="w-6 h-6 text-accent-indigo" />,
      title: "Clean Semantic Code",
      description:
        "Writing robust, self-documenting, and maintainable TypeScript that scales effortlessly under pressure.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-accent-cyan" />,
      title: "Product Engineering",
      description:
        "Translating complex product requirements into beautiful, performant, and scale-ready user interfaces.",
    },
    {
      icon: <Eye className="w-6 h-6 text-accent-violet" />,
      title: "Pixel Perfect UI/UX",
      description:
        "Bridging the gap between beautiful aesthetics and engineering fidelity. Details are not the detail; they make the design.",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden z-10">
      {/* Background glow vignette */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-accent-indigo/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-indigo mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            The Developer
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Engineering Premium Interfaces.
          </motion.h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Long Description and Stats */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-card-dark/20 text-slate-300 leading-relaxed text-base md:text-lg space-y-6"
            >
              <p>
                Hi, I'm <strong className="text-white">Artaaaux</strong>, a passionate frontend developer, web developer, and product builder committed to building elegant, high-performance web spaces. I design and engineer responsive web applications that unite clean, semantic architecture with state-of-the-art user experience.
              </p>
              <p>
                My philosophy is simple: <span className="text-white italic">"Simplicity is the ultimate sophistication."</span> Every line of code I author is crafted with strict attention to performance, modern standards, and fluid interactions. I leverage cutting-edge tools to elevate simple components into premium digital statements.
              </p>
            </motion.div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="glass p-6 rounded-xl border border-white/[0.05] text-center hover:border-white/[0.1] transition-all duration-300"
                >
                  <div className="text-3xl font-extrabold text-gradient-primary mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">{stat.label}</div>
                  <div className="text-xs text-slate-500 leading-tight">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Core Values / Competencies */}
          <div className="lg:col-span-5 space-y-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="group glass p-6 rounded-xl border border-white/[0.05] bg-card-dark/20 flex gap-5 transition-all duration-300 hover:translate-x-1 hover:border-white/[0.1]"
              >
                <div className="flex-shrink-0 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05] group-hover:bg-accent-indigo/10 group-hover:border-accent-indigo/35 transition-colors duration-300 h-fit">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-md font-bold text-white mb-2 tracking-wide group-hover:text-accent-indigo transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
