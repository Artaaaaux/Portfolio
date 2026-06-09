"use client";

import React from "react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  color: string; // Tailwind tint or glow color
  icon: React.ReactNode;
}

// Custom inline SVG icons for zero external dependencies and maximum fidelity
const techIcons: Record<string, React.ReactNode> = {
  HTML: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625 11.201-.001.244-2.625H5.414l.72 8.125h9.375l-.328 3.535-3.181.875-3.193-.875-.205-2.25H6.152l.41 4.5 5.438 1.5 5.426-1.5.738-8.125H8.531z"/>
    </svg>
  ),
  CSS: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm5.03 5.625l.39 4.5h9.376l-.326 3.535-3.195.875-3.18-.875-.206-2.25H6.151l.411 4.5 5.426 1.5 5.438-1.5.738-8.125H6.53z"/>
    </svg>
  ),
  JavaScript: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.5c-.007-1.442-.708-2.241-2.107-3.109-.925-.572-1.637-.88-1.637-1.396 0-.398.318-.621.848-.621.597 0 .974.246 1.259.734l2.062-1.28c-.59-.995-1.564-1.743-3.195-1.743-2.193 0-3.64 1.153-3.64 2.94 0 1.954 1.43 2.658 2.955 3.541.97.56 1.39.948 1.39 1.523 0 .488-.398.815-1.127.815-.89 0-1.425-.411-1.79-1.127l-2.075 1.25c.504.995 1.57 1.84 3.756 1.84 2.502 0 4.108-1.201 4.116-3.294zm-11.455-.783c-.026-.822-.43-1.378-1.218-1.378-.73 0-1.107.458-1.128 1.218h2.346zm-5.46-3.41h2.518c.073-1.61 1.054-2.585 2.81-2.585 1.802 0 2.76.994 2.76 2.71v7.625c0 .643.106.948.517.948.205 0 .397-.04.597-.106v1.948c-.484.218-1.1.325-1.657.325-1.577 0-2.213-.888-2.213-2.32v-5.26c0-.987-.417-1.411-1.146-1.411-.742 0-1.18.444-1.18 1.444v5.227H5.119v-9zm0 0"/>
    </svg>
  ),
  TypeScript: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm19.29 18.577c.07-.63.093-1.517-.184-2.148-.28-.636-.88-.958-1.603-1.104-.645-.13-1.53-.177-1.89-.66-.184-.246-.14-.646.108-.8.362-.225 1.085-.145 1.425.105.285.21.36.563.42.923l2.096-.864c-.158-.75-.548-1.38-1.155-1.748-1.173-.709-2.926-.537-3.75.563-.532.709-.43 1.838.256 2.415.848.712 2.387.674 3.016 1.072.262.165.292.548.067.758-.337.315-1.192.255-1.6.015-.39-.23-.533-.675-.63-1.125l-2.072.846c.158.825.668 1.53 1.343 1.868 1.095.548 2.828.405 3.563-.548.405-.525.337-1.208.067-1.673zm-11.455.783c-.026-.822-.43-1.378-1.218-1.378-.73 0-1.107.458-1.128 1.218h2.346zm-5.46-3.41h2.518c.073-1.61 1.054-2.585 2.81-2.585 1.802 0 2.76.994 2.76 2.71v7.625c0 .643.106.948.517.948.205 0 .397-.04.597-.106v1.948c-.484.218-1.1.325-1.657.325-1.577 0-2.213-.888-2.213-2.32v-5.26c0-.987-.417-1.411-1.146-1.411-.742 0-1.18.444-1.18 1.444v5.227H4.374v-9zm0 0"/>
    </svg>
  ),
  React: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 11.4c0 1.25-.97 2.47-2.6 3.48-1.63 1.01-3.75 1.76-6.02 2.12-.52.92-1.07 1.83-1.64 2.72.63.15 1.25.26 1.86.32 1.95.18 3.8.02 5.17-.46 1.38-.49 2.15-1.37 2.15-2.5 0-1.08-.7-1.95-1.92-2.56l-1.02.83c.96.48 1.42 1.06 1.42 1.73 0 .54-.42 1.03-1.36 1.36-1.13.4-2.73.54-4.52.38-.34-.03-.68-.08-1.02-.15.42-.71.82-1.43 1.21-2.17 2.05-.28 3.93-.9 5.37-1.74 1.44-.84 2.22-1.83 2.22-2.9 0-1.01-.73-1.94-2.07-2.73l-1.02.83c1.07.62 1.62 1.26 1.62 1.9zm-8.87 2.82c-.8-1.73-1.71-3.66-2.67-5.65-.96 1.99-1.87 3.92-2.67 5.65 1.8 1.03 3.54 1.03 5.34 0zm-7.66-1.1c.39.74.79 1.46 1.21 2.17-.34.07-.68.12-1.02.15-1.79.16-3.39.02-4.52-.38-.94-.33-1.36-.82-1.36-1.36 0-.67.46-1.25 1.42-1.73l-1.02-.83C.7 9.45 0 10.32 0 11.4c0 1.13.77 2.01 2.15 2.5 1.37.48 3.22.64 5.17.46.61-.06 1.23-.17 1.86-.32-.57-.89-1.12-1.8-1.64-2.72-2.27-.36-4.39-1.11-6.02-2.12C1.97 8.21 1 6.99 1 5.74c0-1.08.73-1.94 2.07-2.73l1.02.83C2.75 4.46 2.02 5.39 2.02 6.4c0 1.07.78 2.06 2.22 2.9 1.44.84 3.32 1.46 5.37 1.74.08-.15.17-.3.25-.45.69-1.26 1.42-2.6 2.14-3.98-2-.27-3.83-.87-5.23-1.67C5.37 4.14 4.54 3.19 4.54 2.1c0-1.08.77-1.94 2.15-2.43 1.38-.48 3.23-.59 5.2-.28.32-.82.63-1.63.92-2.41-.85-.05-1.72-.05-2.58 0-2.09.13-4.04.53-5.46 1.17-1.42.64-2.21 1.54-2.21 2.62 0 1.02.7 1.88 1.87 2.45l1.02-.83C4.42 2 4.02 1.48 4.02.9c0-.49.38-.9 1.21-1.27 1.18-.54 2.87-.89 4.77-1.01.69-.04 1.39-.03 2.08.03.11-.29.22-.58.33-.87C11.58-2.61 10.74-3 9.77-3c-1.08 0-1.95.73-2.56 1.92l.83 1.02c.48-.96 1.06-1.42 1.73-1.42.54 0 1.03.42 1.36 1.36.4 1.13.54 2.73.38 4.52-.03.34-.08.68-.15 1.02-.71-.42-1.43-.82-2.17-1.21-.28-2.05-.9-3.93-1.74-5.37-.84-1.44-1.83-2.22-2.9-2.22-1.01 0-1.94.73-2.73 2.07l.83 1.02c.62-1.07 1.26-1.62 1.9-1.62 1.25 0 2.47.97 3.48 2.6 1.01 1.63 1.76 3.75 2.12 6.02-.92.52-1.83 1.07-2.72 1.64.15-.63.26-1.25.32-1.86.18-1.95.02-3.8-.46-5.17-.49-1.38-1.37-2.15-2.5-2.15-1.08 0-1.95.7-2.56 1.92l.83 1.02c.48-.96 1.06-1.42 1.73-1.42.54 0 1.03.42 1.36 1.36.4 1.13.54 2.73.38 4.52-.03.34-.08.68-.15 1.02-.71-.42-1.43-.82-2.17-1.21-.28-2.05-.9-3.93-1.74-5.37z"/>
    </svg>
  ),
  NextJS: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.88 18.064l-5.69-7.34v5.418H10.42V7.818h1.498l5.228 6.784V7.818h1.77v10.246h-1.036z"/>
    </svg>
  ),
  TailwindCSS: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  Firebase: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.89 15.672L6.255 1.002c.083-.515.642-.746.992-.387l3.859 3.844-4.896 9.697-2.32-1.003-.001.12zM20.01 15.66l-2.022-12.76a.541.541 0 0 0-.917-.333l-5.698 5.688 3.992 7.914 4.646-.508h-.001zM11.968 9.011l-3.328-3.32-.081-.081a.573.573 0 0 0-.853.02L2.006 17.755l9.962 5.589c.358.201.789.201 1.147 0l8.975-5.59-1.229-7.794L11.968 9.01zm0 0"/>
    </svg>
  ),
  Supabase: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.366 12.634a1 1 0 00-1-1H13.5v-8a1 1 0 00-1.745-.668l-9.5 10.5a1 1 0 00.745 1.668H10.5v8a1 1 0 001.745.668l9.5-10.5a1 1 0 00.121-1.168z"/>
    </svg>
  ),
  Git: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.384 11.233L12.766.616a1.08 1.08 0 0 0-1.53 0L9.467 2.384l2.946 2.947c.758-.258 1.642-.078 2.239.52a2.158 2.158 0 0 1 .15 2.895l2.9 2.9c.772-.192 1.637.042 2.213.62a2.162 2.162 0 0 1-3.056 3.056c-.578-.577-.812-1.442-.62-2.213l-2.9-2.9a2.153 2.153 0 0 1-2.894-.15c-.6-.598-.78-1.482-.52-2.24L9.833 7.37l-1.99 1.99a2.148 2.148 0 0 1-.152 2.893 2.162 2.162 0 0 1-3.056-3.056c.578-.578 1.442-.812 2.213-.62l1.99-1.99L7.382 5.13a1.08 1.08 0 0 0-1.53 0L.616 11.233a1.08 1.08 0 0 0 0 1.53l10.618 10.617a1.08 1.08 0 0 0 1.53 0l10.62-10.618a1.08 1.08 0 0 0 0-1.53z"/>
    </svg>
  ),
  GitHub: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  Figma: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C8.71 0 6 2.71 6 6v3c0 3.29 2.71 6 6 6s6-2.71 6-6V6c0-3.29-2.71-6-6-6zM6 18c0-3.29 2.71-6 6-6v6c0 3.29-2.71 6-6 6s-6-2.71-6-6 2.71-6 6-6zm6 6c3.29 0 6-2.71 6-6v-6c0 3.29-2.71 6-6 6s-6-2.71-6-6"/>
    </svg>
  ),
};

const techItems: TechItem[] = [
  { name: "HTML", color: "hover:border-orange-500/35 hover:text-orange-400 hover:shadow-orange-500/10", icon: techIcons.HTML },
  { name: "CSS", color: "hover:border-blue-500/35 hover:text-blue-400 hover:shadow-blue-500/10", icon: techIcons.CSS },
  { name: "JavaScript", color: "hover:border-yellow-500/35 hover:text-yellow-400 hover:shadow-yellow-500/10", icon: techIcons.JavaScript },
  { name: "TypeScript", color: "hover:border-sky-500/35 hover:text-sky-400 hover:shadow-sky-500/10", icon: techIcons.TypeScript },
  { name: "React", color: "hover:border-cyan-400/35 hover:text-cyan-300 hover:shadow-cyan-400/10", icon: techIcons.React },
  { name: "Next.js", color: "hover:border-white/35 hover:text-white hover:shadow-white/10", icon: techIcons.NextJS },
  { name: "TailwindCSS", color: "hover:border-emerald-400/35 hover:text-emerald-300 hover:shadow-emerald-400/10", icon: techIcons.TailwindCSS },
  { name: "Firebase", color: "hover:border-amber-500/35 hover:text-amber-400 hover:shadow-amber-500/10", icon: techIcons.Firebase },
  { name: "Supabase", color: "hover:border-green-500/35 hover:text-green-400 hover:shadow-green-500/10", icon: techIcons.Supabase },
  { name: "Git", color: "hover:border-red-500/35 hover:text-red-400 hover:shadow-red-500/10", icon: techIcons.Git },
  { name: "GitHub", color: "hover:border-violet-500/35 hover:text-violet-400 hover:shadow-violet-500/10", icon: techIcons.GitHub },
  { name: "Figma", color: "hover:border-pink-500/35 hover:text-pink-400 hover:shadow-pink-500/10", icon: techIcons.Figma },
];

export function InfiniteMarquee() {
  // We duplicate the items to make the horizontal scroll infinite without gaps
  const doubledItems = [...techItems, ...techItems, ...techItems];

  return (
    <div className="relative w-full overflow-hidden py-10 bg-gradient-to-b from-transparent via-bg-navy/10 to-transparent">
      {/* Soft overlay gradients on edges for fadeout */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

      {/* Marquee Row */}
      <div className="flex w-full">
        <motion.div
          className="flex gap-6 shrink-0 px-3"
          animate={{
            x: [0, -1400], // Smooth shifting based on items spacing
          }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          style={{ "--marquee-duration": "35s" } as React.CSSProperties}
        >
          {doubledItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border border-white/[0.05] bg-card-dark/40 backdrop-blur-md text-slate-400 transition-all duration-300 ${item.color} shadow-sm group hover:scale-[1.03] cursor-default`}
            >
              <div className="transition-transform duration-300 group-hover:rotate-6">
                {item.icon}
              </div>
              <span className="font-semibold tracking-wide text-sm md:text-base">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default InfiniteMarquee;
