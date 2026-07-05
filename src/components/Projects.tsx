"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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

// Branded ImageKit assets mapping (Edit these strings if your file names/extensions differ)
const orchid = "https://ik.imagekit.io/shiga/portfolio-v3/Screenshot%202026-07-05%20at%2021.38.14.png";
const landlord = "https://ik.imagekit.io/shiga/portfolio-v3/Screenshot%202026-07-05%20at%2021.45.13.png";
const credvia = "https://ik.imagekit.io/shiga/portfolio-v3/credvia.png";
const protix = "https://ik.imagekit.io/shiga/portfolio-v3/protix.png";
const ywb = "https://ik.imagekit.io/shiga/portfolio-v3/ywb.png";
const zenya = "https://ik.imagekit.io/shiga/portfolio-v3/zenya.png";
const wfunded = "https://ik.imagekit.io/shiga/portfolio-v3/wfunded.png";
const pluginent = "https://ik.imagekit.io/shiga/portfolio-v3/pluginent.png";
const mysubby = "https://ik.imagekit.io/shiga/portfolio-v3/mysubby.png";
const shiga = "https://ik.imagekit.io/shiga/portfolio-v3/shiga.png";
const gau = "https://ik.imagekit.io/shiga/portfolio-v3/gau.png";
const portfolio = "https://ik.imagekit.io/shiga/portfolio-v3/Screenshot%202026-07-05%20at%2021.40.47.png";
const protishome = "https://ik.imagekit.io/shiga/portfolio-v3/protis-home.png";

export const webprojects = [
  {
    id: 1,
    text: "Landlord2Landlord",
    url: "https://www.landlord2landlord.co.uk/",
    image: landlord,
    description: "The UK's leading marketplace for buying and selling tenanted residential investment properties, enabling landlords to trade active portfolios and investors to purchase immediate, income-producing rental properties.",
    stack: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Framer Motion",
    ],
    github: null,
  },
  {
    id: 2,
    text: "Credvia AI",
    url: "https://www.credvia.app/",
    image: credvia,
    description: "An AI-powered conversational finance assistant on WhatsApp that enables users to beat inflation with multi-currency wallets, execute secure transactions, and receive real-time financial insights.",
    stack: ["Next.js", "Typescript", "Tailwind CSS", "Shadcn UI", "Framer Motion", "GSAP", "WebGL"],
    github: null,
  },
  {
    id: 3,
    text: "Protix Africa",
    url: "https://www.protix.africa/",
    image: protix,
    description: "A premium event ticketing and venue experience platform designed to redefine nightlife, enabling organizers to publish, manage, and sell tickets for high-energy concerts and intimate social gatherings.",
    stack: ["Next.js", "Typescript", "Tailwind CSS", "Shadcn UI", "Node.js", "Express", "MongoDB", "Framer Motion", "Paystack"],
    github: null,
  },
  {
    id: 4,
    text: "Your Work Buddy",
    url: "https://yourworkbuddy.com/",
    image: ywb,
    description: "A professional freelancer marketplace and talent matching platform that connects clients with vetted tech professionals, featuring instant chat, smart matching recommendations, and milestone-based project collaboration.",
    stack: ["Next.js", "Typescript", "Tailwind CSS", "Socket.io", "Shadcn UI", "Node.js", "Express", "MongoDB", "Framer Motion"],
    github: null,
  },
  {
    id: 5,
    text: "Zenya",
    url: "https://usezenya.xyz/",
    image: zenya,
    description: "A decentralized saving and staking application on the Base network, allowing users to earn yield through flexible stablecoin vaults and native BASE token staking without onboarding friction.",
    stack: ["Next.js", "Typescript", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
    github: null,
  },
  {
    id: 6,
    text: "Wfunded.io",
    url: "https://www.wfunded.io/en",
    image: wfunded,
    description: "A professional prop trading and capital backing platform, offering advanced metric checking and account automation dashboards.",
    stack: ["Node.js", "Express", "MongoDB", "Typescript"],
    github: null,
  },
  {
    id: 7,
    text: "Plugin Entertainment Limited",
    url: "https://pluginent.com/",
    image: pluginent,
    description: "A centralized booking and catalog platform for entertainment venues, events, and ticket purchasing infrastructure.",
    stack: ["Next.js", "Typescript", "Tailwind CSS", "Shadcn UI", "Node.js", "Express", "MongoDB"],
    github: null,
  },
  {
    id: 8,
    text: "My Subby App",
    url: "https://www.mysubbyapp.com/",
    image: mysubby,
    description: "A sub-contractor scheduling and task assignment tool built with a Vue front-end to streamline physical worker logistics.",
    stack: ["Vue.js", "Typescript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: null,
  },
  {
    id: 9,
    text: "Shiga.io",
    url: "https://shiga-website-hasv.vercel.app/",
    image: shiga,
    description: "A fast, robust fiat-to-crypto payments bridge built with beautiful glassmorphism and real-time exchange rates integration.",
    stack: ["Next.js", "Typescript", "Tailwind CSS", "Shadcn UI"],
    github: null,
  },
  {
    id: 10,
    text: "Global Asset University",
    url: "https://www.globalassetuniversity.com/",
    image: gau,
    description: "An online education portal providing comprehensive courses on decentralized finance, smart contract structures, and global assets management.",
    stack: ["Next.js", "Typescript", "Tailwind CSS", "Ether.js"],
    github: null,
  },
  {
    id: 11,
    text: "Portfolio V3",
    url: "https://oladeledavid.xyz",
    image: portfolio,
    description: "A highly immersive, texturized interactive portfolio designed with GSAP smooth scrolling to feature software engineering and AI capabilities.",
    stack: ["React", "Typescript", "Tailwind CSS"],
    github: null,
  },
  {
    id: 12,
    text: "Protis Studios",
    url: "https://protishq.com",
    image: protishome,
    description: "The official agency landing page for Protis, detailing custom products design, digital engineering, and brand building case studies.",
    stack: ["React", "Tailwind CSS", "CSS", "Framer Motion"],
    github: null,
  },
  {
    id: 13,
    text: "Orchiddigital Consulting",
    url: "https://www.orchiddigitalconsulting.com/",
    image: orchid,
    description: "The corporate digital consulting platform for Orchiddigital Consulting, built to showcase enterprise technology solutions, corporate training strategies, and digital transformation services designed for global growth.",
    stack: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: null,
  },
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold leading-[1.25] text-slate-900 mb-4">
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
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </motion.div>
                <span className="text-slate-700 font-bold text-sm tracking-wide">{app.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold mb-8 text-slate-900 text-center md:text-left">Web Projects I've Built</h3>
        <div className="flex flex-col gap-12">
          {webprojects.map((project, index) => (
            <motion.div
              key={project.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl sm:rounded-[2rem] overflow-hidden p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-16 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Left Side: Content */}
              <div className="w-full md:w-1/2 flex flex-col relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-slate-900 group-hover:text-primary-600 transition-colors">{project.text}</h3>

                <p className="text-slate-700 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tag) => (
                    <span key={tag} className="text-xs md:text-sm font-bold text-slate-600 px-4 py-1.5 bg-slate-100 rounded-full border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-auto">
                  <Link href={project.url} target="_blank" className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg hover:shadow-primary-500/25 text-sm sm:text-base">
                    View Project
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Link>
                  {project.github && (
                    <Link href={project.github} target="_blank" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-bold">
                      <GithubIcon className="w-5 h-5" />
                      <span>Source Code</span>
                    </Link>
                  )}
                </div>
              </div>

              {/* Right Side: Image */}
              <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-[380px] overflow-hidden transition-colors z-10 flex items-center justify-center p-6">
                <img
                  src={project.image}
                  alt={project.text}
                  className="max-w-full max-h-full object-contain group-hover:scale-102 transition-transform duration-700 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
