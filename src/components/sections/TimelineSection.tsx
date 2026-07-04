"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useEffects";
import { Shield, GraduationCap, Code2, Rocket, Sparkles } from "lucide-react";

const timeline = [
  {
    year: "2021",
    title: "Cyber Security Certification",
    description: "Completed foundational cybersecurity certification, building understanding of digital security, network protocols, and threat analysis.",
    icon: Shield,
    color: "from-purple-600 to-purple-400",
    status: "completed",
  },
  {
    year: "2022",
    title: "Advanced Cyber Security",
    description: "Earned advanced cybersecurity certification, deepening knowledge of ethical hacking, penetration testing, and security architecture.",
    icon: Shield,
    color: "from-blue-600 to-blue-400",
    status: "completed",
  },
  {
    year: "2026",
    title: "Started Full Stack Development",
    description: "Began studying Full Stack Development at TC College, Baramati. Focused on React, Next.js, Node.js, and modern web technologies.",
    icon: Code2,
    color: "from-cyan-600 to-cyan-400",
    status: "completed",
  },
  {
    year: "Present",
    title: "Building AI Products",
    description: "Actively developing AI-powered applications including AI Call Assistant, AI Workspace, and AI OS. Building 5+ websites and exploring AI agent orchestration.",
    icon: Rocket,
    color: "from-emerald-600 to-emerald-400",
    status: "active",
  },
  {
    year: "Future",
    title: "Launch AI Startup",
    description: "The ultimate goal: launch an AI startup creating practical AI products used by millions. Combining engineering skills with product vision to build impactful technology.",
    icon: Sparkles,
    color: "from-pink-600 to-purple-400",
    status: "upcoming",
  },
];

export function TimelineSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="timeline" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              className="inline-block text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Journey & Roadmap
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              My <span className="text-gradient">Timeline</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-500 to-cyan-400 md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 z-10">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.color} p-0.5`}>
                      <div className="w-full h-full rounded-full bg-[#101010] flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}>
                    <motion.div
                      className="glass rounded-2xl p-6 hover:bg-white/5 transition-colors"
                      whileHover={{ scale: 1.02, y: -3 }}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                      }`}>
                        <span className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.year}
                        </span>
                        {item.status === "active" && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                            Active
                          </span>
                        )}
                        {item.status === "upcoming" && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400">
                            Next
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
