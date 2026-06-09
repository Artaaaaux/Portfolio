"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Mail, Compass, ArrowUpCircle, ArrowUpRight } from "lucide-react";

const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const FigmaIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C8.71 0 6 2.71 6 6v3c0 3.29 2.71 6 6 6s6-2.71 6-6V6c0-3.29-2.71-6-6-6zM6 18c0-3.29 2.71-6 6-6v6c0 3.29-2.71 6-6 6s-6-2.71-6-6 2.71-6 6-6zm6 6c3.29 0 6-2.71 6-6v-6c0 3.29-2.71 6-6 6s-6-2.71-6-6"/>
  </svg>
);



export function Footer() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "azadirachta.perwira@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  return (
    <footer id="contact" className="relative pt-24 pb-12 px-6 overflow-hidden z-10 border-t border-white/[0.04]">
      {/* Background ambient bottom light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] h-[180px] bg-accent-indigo/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Contact/CTA container */}
        <div className="w-full max-w-2xl text-center mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-accent-indigo"
          >
            Get In Touch
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white tracking-tight"
          >
            Let's Collaborate.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-md mx-auto"
          >
            Have an exciting idea or need a senior-tier interface built? Reach out directly via email.
          </motion.p>

          {/* Contact Cards Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-6 flex flex-col gap-4 items-center w-full max-w-[460px] mx-auto"
          >
            {/* Email Card */}
            <button
              onClick={copyEmail}
              className="group w-full flex items-center justify-between px-6 py-4 rounded-xl border border-white/[0.06] bg-card-dark/40 backdrop-blur-md text-slate-300 hover:text-white hover:border-accent-indigo/45 transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-cyan group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold text-sm select-all">{emailAddress}</span>
              </div>
              
              <div className="p-1.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.7, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Check className="w-4 h-4 text-emerald-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.7, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Copy className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Toast message inside the button */}
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-accent-indigo border border-accent-indigo text-white text-[10px] font-bold py-1 px-3.5 rounded-full shadow-lg"
                  >
                    Copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* GitHub Card */}
            <a
              href="https://github.com/Artaaaaux"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-between px-6 py-4 rounded-xl border border-white/[0.06] bg-card-dark/40 backdrop-blur-md text-slate-300 hover:text-white hover:border-accent-indigo/45 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-3">
                <div className="text-accent-violet group-hover:scale-110 transition-transform duration-300">
                  <GithubIcon />
                </div>
                <span className="font-semibold text-sm">github.com/Artaaaaux</span>
              </div>
              <div className="p-1.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>


          </motion.div>
        </div>

        {/* Navigation & Social Row */}
        <div className="w-full border-t border-white/[0.04] pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo brand label */}
          <div className="flex flex-col items-center md:items-start select-none">
            <span className="text-xl font-black tracking-tight text-white">Artaaaux</span>
            <span className="text-[10px] tracking-wider uppercase text-slate-500 font-bold mt-1">
              Frontend Developer & Product Builder
            </span>
          </div>



          {/* Back to top helper */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-300 transition-colors duration-300"
          >
            Back to Top
            <ArrowUpCircle className="w-4 h-4" />
          </button>
        </div>

        {/* Glowing Grand Footer Branding */}
        <div className="w-full text-center mt-20 select-none">
          <h2 className="text-7xl sm:text-8xl md:text-[140px] font-black tracking-tighter text-slate-900/40 relative inline-block">
            ARTAAAUX
            {/* Glowing grand signature mask effect */}
            <span className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent z-10 pointer-events-none" />
          </h2>
          <div className="text-[10px] text-slate-600 font-mono mt-2 uppercase tracking-widest">
            © {new Date().getFullYear()} Artaaaux. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
