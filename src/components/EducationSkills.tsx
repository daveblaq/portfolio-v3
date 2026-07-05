"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2 } from "lucide-react";

export const educationData = [
  {
    id: 1,
    degree: "B.Sc.(Ed.) Computer and Robotics Education",
    institution: "University of Uyo, Nigeria",
    period: "March 2018 - August 2023",
    // We'll use a placeholder for the image since you might not have the URL yet. 
    // You can replace it with the actual URL.
    imageFallback: "U",
  },
];

export const skillsData = [
  {
    title: "Attention to Detail",
    description: "I am meticulous when it comes to deliverables, ensuring every pixel and line of code meets the highest standards.",
  },
  {
    title: "Communication",
    description: "I facilitate regular team meetings, provide project updates to stakeholders, and serve as a central point of contact for project-related matters.",
  },
  {
    title: "Problem Solving",
    description: "I approach complex challenges with analytical thinking and creative solutions, always focusing on the user experience.",
  },
];



export default function EducationSkills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-white transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-6 bg-primary-50 border-primary-200 text-primary-700">
            Background & Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900">
            Education & Skills
          </h2>
        </motion.div>

        {/* Stacked Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-16"
        >
          {/* Row 1: Education */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-primary-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Education</h3>
            </div>
            <div className="space-y-8">
              {educationData.map((edu) => (
                <div key={edu.id} className="flex gap-4 items-start">
                  {/* Icon/Logo container */}
                  <div className="w-14 h-14 shrink-0 flex items-center justify-center relative overflow-hidden">
                    <img src="https://ik.imagekit.io/shiga/portfolio-v3/images__1_-removebg-preview.png" alt={edu.institution} className="w-full h-full object-contain p-1" />
                  </div>
                  {/* Text details */}
                  <div className="flex flex-col">
                    <h4 className="text-[17px] font-bold text-slate-900 leading-snug mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-slate-600 font-medium text-[15px] mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-slate-500 text-[14px]">
                      {edu.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>



          {/* Bottom Row: Skills */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-primary-600">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillsData.map((skill, index) => (
                <div key={index} className="flex flex-col">
                  <h4 className="text-[17px] font-bold text-slate-900 mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
