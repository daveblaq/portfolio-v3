"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const features = [
  {
    icon: "https://ik.imagekit.io/shiga/portfolio-v3/Screenshot_2026-07-05_at_19.36.42-removebg-preview.png",
    title: "Intelligent Agents",
    description: "Designing autonomous AI agents capable of reasoning, planning, and executing complex, multi-step tasks across APIs and internal tools.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png",
    title: "Workflow Automation",
    description: "Replacing repetitive manual processes with robust, error-resistant pipelines using n8n, Make, or custom python-based orchestrators.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png",
    title: "RAG & Vector Search",
    description: "Implementing Retrieval-Augmented Generation to allow LLMs to accurately query and synthesize your proprietary enterprise data.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
    title: "API Integrations",
    description: "Seamlessly connecting disparate software systems to ensure smooth data flow and synchronized operations across your business.",
  },
];

export default function AIShowcase() {
  return (
    <section id="ai-showcase" className="py-16 sm:py-24 relative overflow-hidden bg-white transition-colors duration-300">

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="flex flex-col gap-10 sm:gap-16 md:gap-24">
          
          {/* Top: AI Canvas */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[450px] md:h-[600px] w-full rounded-2xl sm:rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 overflow-hidden flex items-center justify-center"
          >
            {/* Visual background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)]" />
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {/* Lines and animated pulses */}
              {[
                { name: "Zapier", x: "50%", y: "15%" },
                { name: "n8n", x: "85%", y: "35%" },
                { name: "Make", x: "75%", y: "80%" },
                { name: "OpenAI", x: "25%", y: "80%" },
                { name: "LangChain", x: "15%", y: "35%" },
              ].map((tool, i) => (
                <g key={`line-group-${i}`}>
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    x1="50%"
                    y1="50%"
                    x2={tool.x}
                    y2={tool.y}
                    stroke="currentColor"
                    className="text-slate-400"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                  />
                  <motion.circle
                    r="4"
                    fill="currentColor"
                    className="text-primary-500"
                    initial={{ cx: "50%", cy: "50%", opacity: 0 }}
                    animate={{ 
                      cx: ["50%", tool.x], 
                      cy: ["50%", tool.y],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      delay: i * 0.6,
                      ease: "linear"
                    }}
                  />
                </g>
              ))}
            </svg>

            {/* Tool Nodes */}
            {[
              { name: "Zapier", x: "50%", y: "15%", logo: "https://ik.imagekit.io/shiga/portfolio-v3/images.jpeg" },
              { name: "n8n", x: "85%", y: "35%", logo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-avatar/avatars/n8n.webp" },
              { name: "Make", x: "75%", y: "80%", logo: "https://ik.imagekit.io/shiga/portfolio-v3/make-ai-automation-icon.webp" },
              { name: "OpenAI", x: "25%", y: "80%", logo: "https://ik.imagekit.io/shiga/portfolio-v3/openai.svg" },
              { name: "LangChain", x: "15%", y: "35%", logo: "https://ik.imagekit.io/shiga/portfolio-v3/langchain-logo-png_seeklogo-528369.png" },
            ].map((tool, i) => (
              <div
                key={tool.name}
                className="absolute z-10"
                style={{ left: tool.x, top: tool.y, transform: "translate(-50%, -50%)" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.8 + i * 0.1 }}
                  className="backdrop-blur-md w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl cursor-pointer hover:scale-110 hover:border-primary-300 transition-all duration-300 group flex items-center justify-center overflow-hidden"
                >
                  <img 
                    src={tool.logo || `https://ui-avatars.com/api/?name=${tool.name}&background=f8fafc&color=94a3b8&font-size=0.33`} 
                    alt={tool.name} 
                    className="w-full h-full object-contain group-hover:opacity-80 transition-opacity"
                  />
                </motion.div>
              </div>
            ))}

            {/* Center Node */}
            <div
              className="absolute left-1/2 top-1/2 z-20"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-primary-400 to-primary-600 p-[3px] shadow-[0_0_40px_rgba(225,113,15,0.4)] relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-primary-500 rounded-[2rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
                <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300">
                  <Bot className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary-600" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom: Text & Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold leading-[1.15] mb-4 sm:mb-6 text-slate-900">
                Automate the <span className="text-primary-500">Mundane</span>, Unlock the <span className="text-primary-600">Future</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-relaxed">
                In today's fast-paced landscape, efficiency isn't just an advantage—it's a requirement. By leveraging cutting-edge LLMs and custom automation pipelines, I help businesses reduce operational overhead and focus on high-impact work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-3 sm:gap-4 group bg-white/60 backdrop-blur-lg p-4 sm:p-6 lg:p-6 rounded-2xl sm:rounded-[2rem] border border-white/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mt-1 group-hover:scale-105 transition-transform h-fit shrink-0">
                    <img src={feature.icon} alt={feature.title} className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h4>
                    <p className="text-slate-700 font-medium leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
