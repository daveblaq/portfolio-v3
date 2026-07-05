"use client";

import React from "react";
import { motion } from "framer-motion";

export const work = [
  {
    id: 1,
    company: "Protis Studios, Nigeria",
    role: "Engineering Lead - Full Time",
    image: "https://ik.imagekit.io/shiga/portfolio-v3/ps-logo.jpg",
    start: "OCT, 20 2023",
    end: "JUNE, 25 2025",
    status: 0,
    growth: "85%",
    description:
      "Led technical strategy and engineering team of 3 developers, driving 85% growth in project delivery efficiency. Implemented modern development practices that reduced deployment time by 60% and increased client satisfaction scores by 40%. Spearheaded migration to cloud infrastructure, resulting in 70% cost reduction and 99.9% uptime. Mentored junior developers and established coding standards that improved code quality by 50%.",
  },
  {
    id: 2,
    company: "Wfunded.io, Nigeria",
    role: "Backend Developer - Contract",
    image: "https://ik.imagekit.io/shiga/portfolio-v3/wfunded.jpg",
    start: "OCT, 13 2024",
    end: "FEB, 21 2025",
    status: 0,
    growth: "70%",
    description:
      "Drove 70% improvement in platform security and transaction efficiency through robust backend development. Designed and implemented secure authentication workflows using Node.js and TypeScript, including JWT-based login, role-based access control, and email verification, reducing security incidents by 85% and improving user onboarding success rate by 60%. Built and optimized core financial features such as funding, withdrawals, and trade execution, leveraging MongoDB for high-performance data storage and retrieval, achieving 90% faster transaction processing and 99.9% data consistency. Collaborated cross-functionally with frontend and product teams to deliver scalable backend APIs and services that powered real-time trading activities, improving platform reliability by 75% and reducing API response times by 50%.",
  },
  {
    id: 3,
    company: "Maalexi, UAE",
    role: "Frontend Developer - Contract",
    image: "https://ik.imagekit.io/shiga/portfolio-v3/maalexi.jpg",
    start: "JAN, 15 2023",
    end: "JUL, 25 2023",
    status: 0,
    growth: "65%",
    description:
      "Delivered 65% improvement in user interface performance through React/Next.js optimization. Reduced page load times by 45% and increased mobile responsiveness scores by 80%. Implemented TypeScript across the codebase, reducing runtime errors by 70% and improving development velocity by 35%. Collaborated with design team to enhance UX, resulting in 50% increase in user engagement metrics.",
  },
  {
    id: 4,
    company: "Lambabros Deals, Nigeria",
    role: "Frontend Developer - Full Time",
    image: "https://ik.imagekit.io/shiga/portfolio-v3/lambatoken.jpg",
    start: "NOV, 05 2021",
    end: "APR, 25 2023",
    status: 0,
    growth: "70%",
    description:
      "Drove 70% increase in platform user base through React/React Native development. Optimized mobile app performance, achieving 90% crash-free rate and 3x faster load times. Implemented automated testing that reduced bug reports by 75% and improved app store rating from 3.2 to 4.6 stars. Streamlined development workflow, reducing feature deployment time by 60% and increasing team productivity by 40%.",
  },
];

interface DataItem {
  id: number;
  company: string;
  role: string;
  image: any;
  start: string;
  end: string;
  description: string;
  status: number;
  growth: string;
}

interface ItemProps {
  item: DataItem;
  index: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Item: React.FC<ItemProps> = ({ item, index }) => {
  return (
    <motion.div variants={itemVariants} className="relative group">
      {/* Timeline Line */}
      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-transparent"></div>

      <div className="relative flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Company Logo */}
        <div className="relative flex-shrink-0 flex justify-center sm:justify-start z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-16 h-16 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center overflow-hidden group-hover:border-primary-400 transition-all duration-300 bg-white/80 backdrop-blur-lg border border-slate-200"
          >
            <img
              src={item?.image?.src || item?.image}
              alt={item?.company}
              className="w-10 h-10 sm:w-8 sm:h-8 object-cover rounded-lg"
            />
          </motion.div>
          {item?.status === 1 && (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-5 h-5 sm:w-4 sm:h-4 bg-primary-500 rounded-full border-2 border-white"
            ></motion.div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 z-10">
          <motion.div
            whileHover={{
              y: -5,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transition-all duration-300 group-hover:border-primary-300 bg-white/60 backdrop-blur-lg border border-white/40"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-3 sm:space-y-0">
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 text-slate-900">
                  {item?.company}
                </h3>
                <p className="text-base sm:text-lg font-medium mb-2 text-slate-600">
                  {item?.role}
                </p>
              </div>
              <div className="text-center sm:text-right">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  {item?.start} - {item?.end}
                </div>
              </div>
            </div>

            {/* Growth Percentage */}
            <div className="mb-6 flex justify-center sm:justify-start">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-primary-50 text-primary-600 border border-primary-100">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                {item?.growth} Growth Impact
              </div>
            </div>

            {/* Key Achievements */}
            <div className="space-y-4">
              {item?.description.split(". ").map(
                (achievement, index) =>
                  achievement.trim() && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 mt-2">
                        <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                      </div>
                      <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                        {achievement.trim()}
                      </p>
                    </motion.div>
                  )
              )}
            </div>

            {/* Status Badge */}
            {item?.status === 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-primary-50 text-primary-600 border border-primary-100"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></div>
                Current Position
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-white">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16 md:mb-24"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border text-sm font-bold mb-6 bg-primary-50 border-primary-100 text-primary-600 shadow-sm">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
              />
            </svg>
            Professional Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black leading-[1.15] text-slate-900 mb-4 sm:mb-6">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-relaxed max-w-3xl mx-auto">
            A journey through my professional growth, from internships to
            leadership roles, each experience shaping my expertise in software
            development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 sm:space-y-16"
          >
            {work.map((item: DataItem, index) => (
              <Item key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 sm:mt-24 text-center"
        >
          <div className="rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-12 lg:p-16 bg-white/60 backdrop-blur-lg border border-white/40 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-slate-900">
                Ready to work together?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and exciting
                projects. Let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:o.davecodes@gmail.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg hover:shadow-primary-500/25"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Get in Touch
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/about-me"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 font-bold rounded-xl transition-colors border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                >
                  Learn More About Me
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;