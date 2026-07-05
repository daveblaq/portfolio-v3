"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const words = [
  "SOFTWARE ENGINEER",
  "DESIGN",
  "AI AGENTS",
  "WORKFLOW AUTOMATION",
  "RAG SYSTEMS",
  "DAVID OLADELE"
];

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable body scroll
    document.body.style.overflow = "hidden";
    
    // Word transition interval
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev < words.length - 1 ? prev + 1 : prev));
    }, 450);

    // Counter animation
    const counterObj = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        // Animate out
        const exitTl = gsap.timeline({
          onComplete: () => {
            // Restore body scroll and notify parent
            document.body.style.overflow = "";
            onComplete();
          }
        });

        // Sliding animations for exit
        exitTl.to(lineRef.current, {
          scaleX: 0,
          duration: 0.5,
          ease: "power3.inOut"
        })
        .to([textContainerRef.current, counterRef.current], {
          y: -50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.in"
        })
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut"
        }, "-=0.2");
      }
    });

    tl.to(counterObj, {
      value: 100,
      duration: 3,
      ease: "power2.out",
      onUpdate: () => {
        setCount(Math.floor(counterObj.value));
      }
    });

    // Animate progress line growth
    gsap.fromTo(lineRef.current, 
      { scaleX: 0 }, 
      { scaleX: 1, duration: 3, ease: "power2.out" }
    );

    return () => {
      clearInterval(wordInterval);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#080808] p-8 sm:p-16 select-none pointer-events-auto"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center">
        <span className="text-xs tracking-[0.2em] font-bold text-slate-500 uppercase">
          Portfolio v3 / Intro
        </span>
        <span className="text-xs tracking-[0.2em] font-bold text-slate-500 uppercase">
          © {new Date().getFullYear()}
        </span>
      </div>

      {/* Center Word & Custom Layout */}
      <div className="flex flex-col gap-4">
        {/* Word Reveal */}
        <div ref={textContainerRef} className="overflow-hidden h-14 sm:h-20 flex items-center">
          <span 
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white transition-all duration-300 ease-out"
          >
            {words[currentWordIndex]}
          </span>
        </div>
        
        {/* Progress Line */}
        <div className="w-full h-[2px] bg-slate-800 relative overflow-hidden">
          <div 
            ref={lineRef} 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-500 to-primary-600 origin-left"
          />
        </div>
      </div>

      {/* Bottom Counter */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-xs tracking-[0.1em] font-semibold text-slate-600 uppercase mb-1">
            Status
          </span>
          <span className="text-sm font-bold text-primary-500 uppercase tracking-widest animate-pulse">
            {count === 100 ? "Ready" : "Loading"}
          </span>
        </div>
        
        {/* Visual Counter */}
        <div ref={counterRef} className="overflow-hidden">
          <span className="text-[12vw] sm:text-[8vw] font-black leading-none text-white font-mono tracking-tighter block">
            {count.toString().padStart(3, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
