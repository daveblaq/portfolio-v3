"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

// Placeholder data for the dock icons
// You can replace these with your actual image paths once you have them
const TRAY_ICONS = [
  { id: "nj", name: "Nextjs", image: "https://ik.imagekit.io/shiga/portfolio-v3/nextjs.png" },
  { id: "ts", name: "Typescript", image: "https://ik.imagekit.io/shiga/portfolio-v3/typescript.png" },
  { id: "ta", name: "Tailwind CSS", image: "https://ik.imagekit.io/shiga/portfolio-v3/tailwind.png" },
  { id: "rn", name: "React Native", image: "https://ik.imagekit.io/shiga/portfolio-v3/react.png" },
  { id: "ns", name: "Nodejs", image: "https://ik.imagekit.io/shiga/portfolio-v3/nodejs.png" },
  { id: "mdb", name: "Mongodb", image: "https://ik.imagekit.io/shiga/portfolio-v3/mongo-db.png" },
  { id: "gemini", name: "Gemini", image: "https://ik.imagekit.io/shiga/portfolio-v3/gemini.png" },
  { id: "claude", name: "Claude", image: "https://ik.imagekit.io/shiga/portfolio-v3/claude.png" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the background image sliding in
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.1, x: 20 },
          { opacity: 1, scale: 1, x: 0, duration: 1.5, ease: "power3.out" }
        );
      }

      // Animate the tray sliding up
      if (trayRef.current) {
        gsap.fromTo(
          trayRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "back.out(1.5)", delay: 0.2 }
        );
        
        // Animate icons popping in
        gsap.fromTo(
          trayRef.current.children,
          { scale: 0, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(2)", delay: 0.5 }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] md:min-h-[1000px] lg:min-h-[1000px] md:h-auto flex flex-col overflow-hidden pt-20"
    >
      {/* Background Image Container - Paste your image link in the url('') below */}
      <div 
        className="absolute inset-0 z-0 bg-white bg-cover bg-center bg-no-repeat"
         
      />

      {/* Main Content Area - Headshot Background */}
      <div className="hidden md:block absolute top-0 right-0 w-full h-full md:w-1/2 z-10 overflow-hidden pointer-events-none">
        {/* Gradient fade to blend the image with the white background smoothly */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10" />
        
        {/* Replace this src with your actual headshot image URL or import */}
        <img 
          ref={imageRef}
          src="https://ik.imagekit.io/shiga/portfolio-v3/1782234595366%20(2).png" 
          alt="My Headshot" 
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Foreground Text Content */}
      <div className="relative z-[18] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col md:flex-row items-center justify-center md:justify-start pt-12 pb-44 md:pb-32">
        {/* Left Side Text */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col justify-center md:pr-8 lg:pr-16 md:pt-10 lg:pt-14 pt-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
          }}
        >
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="text-sm sm:text-lg md:text-xl font-extrabold tracking-widest uppercase mb-3 sm:mb-4 text-slate-600"
          >
            Software Engineer
          </motion.h2>
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold leading-[1.25] mb-4 sm:mb-6 text-slate-900"
          >
            Crafting exceptional digital experiences with modern technologies
          </motion.h1>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-relaxed max-w-xl"
          >
            Software Engineer, Designer, Indie Hacker and everything in between with 8+ years of experience building scalable web applications. Specialised in modern JavaScript ecosystems, design systems, and performance-focused engineering. I care about clean architecture, maintainable code, and thoughtful product execution.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors text-sm sm:text-base"
            >
              View My Work
            </a>
            <a
              href="https://docs.google.com/document/d/1XWX47CVGRfzvwBI0PRL5QIVeXgakfwbxg1QhBlCkw98/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-colors text-sm sm:text-base"
            >
              View Resume
            </a>
          </motion.div>
        </motion.div>
        
        {/* Right Side spacer */}
        <div className="hidden md:block w-full md:w-1/2"></div>
      </div>

      {/* Bottom Tray / Dock (Desktop) */}
      <div className="hidden md:flex absolute bottom-8 left-0 right-0 justify-center px-4 w-full z-20">
        <div 
          ref={trayRef}
          className="flex items-center gap-4 p-3 rounded-[32px] bg-black/10 backdrop-blur-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-visible"
        >
          {TRAY_ICONS.map((icon) => (
            <div 
              key={icon.id}
              className="group relative cursor-pointer"
            >
              {/* Mac-like Tooltip on hover */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-neutral-800 text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                {icon.name}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 rotate-45"></div>
              </div>
              
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-110">
                <img src={icon.image} alt={icon.name} className="w-full h-full object-contain drop-shadow-md" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Marquee (Mobile) */}
      <div className="block md:hidden absolute bottom-0 left-0 right-0 w-full z-20 overflow-hidden bg-black/15 backdrop-blur-[30px] border-t border-white/5 py-4">
        <div className="flex w-max gap-8 animate-marquee">
          {/* Double list of icons for infinite seamless scroll loop */}
          {[...TRAY_ICONS, ...TRAY_ICONS].map((icon, index) => (
            <div 
              key={`${icon.id}-marquee-${index}`}
              className="w-10 h-10 flex-shrink-0"
            >
              <img src={icon.image} alt={icon.name} className="w-full h-full object-contain" />
-            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
