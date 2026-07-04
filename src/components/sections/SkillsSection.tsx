"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useEffects";
import {
  Brain,
  MessageSquare,
  Bot,
  Workflow,
  Zap,
  Layout,
  Code2,
  Palette,
  FileType,
  FileCode,
  Server,
  Plug,
  Database,
  Flame,
  Github,
  Cloud,
  Code,
  Container,
  GitBranch,
} from "lucide-react";

const skillCategories = [
  {
    name: "AI",
    color: "from-purple-600 to-purple-400",
    icon: Brain,
    skills: [
      { name: "AI Agents", icon: Bot },
      { name: "Prompt Engineering", icon: MessageSquare },
      { name: "LLM Integrations", icon: Brain },
      { name: "AI Automation", icon: Zap },
      { name: "Workflow Design", icon: Workflow },
    ],
  },
  {
    name: "Frontend",
    color: "from-blue-600 to-blue-400",
    icon: Layout,
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: FileCode },
      { name: "Tailwind CSS", icon: Palette },
      { name: "TypeScript", icon: FileType },
      { name: "JavaScript", icon: Code },
    ],
  },
  {
    name: "Backend",
    color: "from-cyan-600 to-cyan-400",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server },
      { name: "APIs", icon: Plug },
      { name: "Supabase", icon: Database },
      { name: "Firebase", icon: Flame },
    ],
  },
  {
    name: "Tools",
    color: "from-emerald-600 to-emerald-400",
    icon: GitBranch,
    skills: [
      { name: "GitHub", icon: Github },
      { name: "Vercel", icon: Cloud },
      { name: "VS Code", icon: Code2 },
      { name: "Docker", icon: Container },
      { name: "Git", icon: GitBranch },
    ],
  },
];

export function SkillsSection() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
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
              Skills & Expertise
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Tech Stack & <span className="text-gradient">Capabilities</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                className="glass rounded-2xl p-6 hover:bg-white/5 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + catIndex * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group/skill"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} opacity-80 flex items-center justify-center group-hover/skill:opacity-100 transition-opacity`}>
                        <skill.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
