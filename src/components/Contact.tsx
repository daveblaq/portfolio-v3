"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-white transition-colors duration-300">

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/60 backdrop-blur-lg border border-white/40 p-6 sm:p-8 md:p-16 rounded-2xl sm:rounded-[2.5rem] text-center relative overflow-hidden transition-all duration-500 group"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-black leading-[1.15] tracking-tight mb-4 sm:mb-6 text-slate-900">
            Ready to build something <span className="text-primary-500">extraordinary?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need a robust full-stack application, an intelligent AI automation pipeline, or a consultation on system architecture, I'm here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:o.davecodes@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg hover:shadow-primary-500/25 text-sm sm:text-base"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 font-bold rounded-xl transition-colors border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 text-sm sm:text-base"
            >
              <MessageSquare className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
