"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Cpu, BrainCircuit } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text content
      gsap.fromTo(
        textRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate feature cards
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-white">

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div ref={textRef} className="space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold leading-[1.25] text-slate-900">
              Bridging the gap between <span className="text-primary-600">Software</span> and <span className="text-primary-500">Intelligence</span>
            </h2>
            <div className="space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-relaxed">
                With a strong foundation in full-stack development, I transitioned into the AI space to automate what's tedious and unlock what's impossible. I believe that the next generation of software isn't just written—it's trained, prompted, and orchestrated.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-relaxed">
                My approach combines robust engineering practices with modern machine learning models, allowing businesses to scale their operations efficiently through custom AI agents and intelligent pipelines.
              </p>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div ref={cardsRef} className="flex flex-col gap-6">
            <div className="bg-white/60 backdrop-blur-lg border border-white/40 p-5 sm:p-8 rounded-2xl sm:rounded-3xl flex items-start gap-4 sm:gap-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl shrink-0 overflow-hidden flex items-center justify-center">
                {/* Placeholder for Full-Stack Dev Image */}
                <img src="https://ik.imagekit.io/shiga/portfolio-v3/pngwing.com.png" alt="Full-Stack Dev" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Full-Stack Dev</h3>
                <p className="text-slate-700 font-medium text-sm leading-relaxed">Building scalable, responsive, and performant web applications using Next.js and modern ecosystems.</p>
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-lg border border-white/40 p-5 sm:p-8 rounded-2xl sm:rounded-3xl flex items-start gap-4 sm:gap-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl shrink-0 overflow-hidden flex items-center justify-center">
                {/* Placeholder for AI Automation Image */}
                <img src="https://ik.imagekit.io/shiga/portfolio-v3/Screenshot_2026-07-05_at_19.13.10-removebg-preview.png" alt="AI Automation" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">AI Automation</h3>
                <p className="text-slate-700 font-medium text-sm leading-relaxed">Integrating LLMs and designing autonomous agents to handle complex business workflows.</p>
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-lg border border-white/40 p-5 sm:p-8 rounded-2xl sm:rounded-3xl flex items-start gap-4 sm:gap-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl shrink-0 overflow-hidden flex items-center justify-center">
                {/* Placeholder for Systems Architecture Image */}
                <img src="https://ik.imagekit.io/shiga/portfolio-v3/pngwing.com%20(1).png" alt="Systems Architecture" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Systems Architecture</h3>
                <p className="text-slate-700 font-medium text-sm leading-relaxed">Designing resilient microservices and deploying infrastructure that supports heavy ML workloads.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
