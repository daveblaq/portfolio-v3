"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["TypeScript", "Python", "Rust", "Go", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB"] },
  { category: "AI & ML", items: ["OpenAI API", "LangChain", "Vector DBs", "HuggingFace", "PyTorch"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Vercel"] },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-16 sm:py-24 relative overflow-hidden bg-white transition-colors duration-300">
      {/* Vintage Warmth Overlay */}
      <div className="absolute inset-0 z-[0] pointer-events-none bg-[#f3e9d2] mix-blend-multiply opacity-40" />
      
      {/* Crispy Noise Overlay */}
      <div 
        className="absolute inset-0 z-[0] pointer-events-none opacity-[0.3] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
            Technical <span className="text-primary-500">Arsenal</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto">
            A comprehensive overview of the tools, languages, and frameworks I use to build scalable systems and AI-driven automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-lg border border-white/40 p-5 sm:p-8 rounded-2xl sm:rounded-3xl"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-slate-900">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-50 hover:bg-primary-100 transition-colors border border-primary-100 rounded-full text-xs sm:text-sm text-slate-700 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

