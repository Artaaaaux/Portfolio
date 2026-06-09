import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-grow bg-bg-dark text-slate-100 overflow-hidden">
      {/* Sticky glassmorphic navigation bar */}
      <Navbar />

      {/* Decorative top ambient radial light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[350px] bg-accent-indigo/10 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <main className="flex-grow pt-16">
        {/* Hero Section with Interactive Lighting & Grid */}
        <Hero />

        {/* Tech Stack Marquee (Infinite Loop) */}
        <section id="tech-stack">
          <InfiniteMarquee />
        </section>

        {/* About Section (Journey, Philosophy & Core Values) */}
        <About />

        {/* Bento Grid Projects Section (FINUSA & Website OSIS) */}
        <Projects />
      </main>

      {/* Footer Section with Call to Action Contact Form & Email Copy */}
      <Footer />
    </div>
  );
}
