"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface SpotlightProps {
  className?: string;
  fillColor?: string;
}

export function Spotlight({ className, fillColor = "rgba(99, 102, 241, 0.12)" }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 150, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      // Center the 450px wide glow
      mouseX.set(x - 225);
      mouseY.set(y - 225);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Use window listener for smooth boundary entering
    window.addEventListener("mousemove", handleMouseMove);
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className || ""}`}
    >
      {/* Dynamic Mouse-Following Glow (Cyan/Indigo) */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full pointer-events-none mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isHovered ? 1 : 0.2,
          background: `radial-gradient(circle, ${fillColor} 0%, rgba(6, 182, 212, 0.04) 40%, transparent 70%)`,
          transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      
      {/* Ambient background light spheres (static depth) */}
      <div 
        className="absolute top-[-10%] left-[10%] w-[60vw] h-[60vw] max-w-[800px] opacity-45 mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(5, 5, 20, 0) 70%)",
        }}
      />
      <div 
        className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] opacity-40 mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(5, 5, 20, 0) 75%)",
        }}
      />
    </div>
  );
}
export default Spotlight;
