"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 2.7 5 3.1 5 3.1a5.3 5.3 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 10.7c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const projects = [
  {
    title: "AI Customer Support Agent",
    description: "An autonomous agent built with LangChain and Next.js that integrates with Zendesk to resolve customer queries automatically, reducing support tickets by 40%.",
    tags: ["Next.js", "LangChain", "OpenAI", "TailwindCSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Enterprise Data Pipeline",
    description: "A robust ETL pipeline using Apache Airflow and Python to process millions of records daily, enabling real-time analytics for business intelligence dashboards.",
    tags: ["Python", "Airflow", "PostgreSQL", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "FinTech Dashboard",
    description: "A comprehensive financial dashboard featuring real-time market data, interactive charts, and secure user authentication.",
    tags: ["React", "TypeScript", "GSAP", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Automated Document Extraction",
    description: "An AI-powered OCR system that extracts and structures data from complex PDF invoices and receipts with 98% accuracy.",
    tags: ["FastAPI", "HuggingFace", "PyTorch", "AWS"],
    github: "#",
    live: "#",
  }
];

export const mobileApps = [
  { id: 1, name: "JAPABUDZ", icon: "https://ik.imagekit.io/shiga/portfolio-v3/logo.png" },
  { id: 2, name: "CUSTOVIA", icon: "https://ik.imagekit.io/shiga/portfolio-v3/custovia.png" },
  { id: 3, name: "MEETPIE", icon: "https://ik.imagekit.io/shiga/portfolio-v3/Untitled%20design.png" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-white transition-colors duration-300">
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16 md:mb-24 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border text-sm font-bold mb-6 bg-primary-50 border-primary-100 text-primary-600 shadow-sm">
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black leading-[1.15] text-slate-900 mb-4">
            Selected <span className="text-primary-500">Work</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-relaxed max-w-2xl mx-auto">
            A showcase of systems, applications, and AI integrations I've engineered to solve real-world problems.
          </p>
        </motion.div>

        {/* Mobile Apps Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold mb-8 text-slate-900 text-center md:text-left">Mobile Apps I've Worked On</h3>
          <div className="flex gap-6 sm:gap-8 overflow-x-auto pb-6 pt-4 -mt-4 px-1 scrollbar-hide">
            {mobileApps.map((app) => (
              <div key={app.id} className="flex flex-col items-center gap-3 shrink-0">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-[20px] sm:rounded-[24px] transition-all cursor-pointer overflow-hidden relative group border border-slate-200 bg-white"
                >
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <span className="text-slate-700 font-bold text-sm tracking-wide">{app.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold mb-8 text-slate-900 text-center md:text-left">Web Projects I've Built</h3>
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl sm:rounded-[2rem] overflow-hidden p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-16 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Left Side: Content */}
              <div className="w-full md:w-1/2 flex flex-col relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-slate-900 group-hover:text-primary-600 transition-colors">{project.title}</h3>
                
                <p className="text-slate-700 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs md:text-sm font-bold text-primary-600 px-4 py-1.5 bg-primary-50 rounded-full border border-primary-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-auto">
                  <Link href={project.live} className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg hover:shadow-primary-500/25 text-sm sm:text-base">
                    View Project
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link href={project.github} className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-bold">
                    <GithubIcon className="w-5 h-5" />
                    <span>Source Code</span>
                  </Link>
                </div>
              </div>

              {/* Right Side: Image Placeholder */}
              <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-[380px] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 group-hover:border-primary-200 transition-colors z-10">
                {/* 
                  When you have real images, uncomment and use this:
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /> 
                */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-4xl font-black">
                  IMAGE
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
