"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedGridProps {
  className?: string;
  gridSize?: number;
  highlightCount?: number;
}

export function AnimatedGrid({ className, gridSize = 45, highlightCount = 18 }: AnimatedGridProps) {
  const [blocks, setBlocks] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    // Generate random coordinates for highlighted blocks on mount
    const initialBlocks = Array.from({ length: highlightCount }, (_, i) => ({
      x: Math.floor(Math.random() * 30),
      y: Math.floor(Math.random() * 20),
      id: i,
    }));
    setBlocks(initialBlocks);

    // Periodically shift the active blocks to create a dynamic shifting network effect
    const interval = setInterval(() => {
      setBlocks((prev) =>
        prev.map((block) =>
          Math.random() > 0.35
            ? {
                x: Math.floor(Math.random() * 30),
                y: Math.floor(Math.random() * 20),
                id: block.id,
              }
            : block
        )
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [highlightCount]);

  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-none select-none ${className || ""}`}
      style={{
        maskImage: "radial-gradient(circle 500px at 50% 50%, black 20%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(circle 500px at 50% 50%, black 20%, transparent 100%)",
      }}
    >
      <svg className="absolute inset-0 w-full h-full stroke-white/[0.025] stroke-[1px]">
        <defs>
          <pattern
            id="animated-grid-pattern"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
            x="50%"
            y="-1"
          >
            <path d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`} fill="none" />
          </pattern>
          <linearGradient id="grid-cell-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.25)" />
            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.15)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
          </linearGradient>
        </defs>

        {/* Infinite Grid Background */}
        <rect width="100%" height="100%" fill="url(#animated-grid-pattern)" />

        {/* Pulsing Grid Cells */}
        {blocks.map((block) => (
          <motion.rect
            key={block.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0.5, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            x={`calc(50% + ${(block.x - 15) * gridSize}px)`}
            y={block.y * gridSize}
            width={gridSize}
            height={gridSize}
            fill="url(#grid-cell-gradient)"
          />
        ))}
      </svg>
    </div>
  );
}

export default AnimatedGrid;
