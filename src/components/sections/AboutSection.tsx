"use client";

import { motion } from "framer-motion";
import { MapPin, BookOpen, Rocket, Target, GraduationCap } from "lucide-react";
import { useInView } from "@/hooks/useEffects";

const stats = [
  { icon: BookOpen, label: "Currently Learning", value: "Full Stack & AI" },
  { icon: MapPin, label: "Location", value: "Baramati, Maharashtra" },
  { icon: GraduationCap, label: "Education", value: "TC College, Baramati" },
  { icon: Target, label: "Mission", value: "Build AI Startup" },
];

export function AboutSection() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
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
              About Me
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              The Story Behind the <span className="text-gradient">Builder</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="glass rounded-2xl p-8 space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  My journey into technology began with a fascination for how systems work. 
                  Starting with cybersecurity certifications in 2021, I developed a deep 
                  understanding of digital infrastructure and security principles that would 
                  later inform my approach to building robust, scalable applications.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Today, I am a 20-year-old builder based in Baramati, Maharashtra, studying 
                  Full Stack Development at TC College. But I am not just learning—I am 
                  creating. I have built <span className="text-purple-400 font-semibold">5+ websites</span>, developed an{" "}
                  <span className="text-blue-400 font-semibold">AI-powered Call Assistant</span>, and am actively 
                  exploring the frontier of AI agent orchestration and intelligent automation.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  What drives me is the potential of AI to transform how we work, create, 
                  and solve problems. My mission is clear: to launch an AI startup that builds 
                  practical products used by millions. Every project I undertake is a step 
                  toward that vision—combining strong engineering fundamentals with 
                  ambitious product thinking.
                </p>
                <div className="flex items-center gap-2 pt-4">
                  <Rocket className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-semibold">
                    Currently building AI products & learning every day
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass rounded-2xl p-6 hover:bg-white/5 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all">
                    <stat.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-white font-semibold text-lg">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
