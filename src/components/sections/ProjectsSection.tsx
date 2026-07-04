"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useEffects";
import { ExternalLink, Github, Cpu, MessageSquare, Monitor, ShoppingCart } from "lucide-react";

const projects = [
  {
    name: "hiDeva AI Call Assistant",
    description: "An AI-powered voice assistant that handles calls intelligently. Built with modern AI technologies to provide natural conversation capabilities and automated task handling.",
    icon: MessageSquare,
    color: "from-purple-600 to-blue-600",
    technologies: ["AI/ML", "Voice API", "Node.js", "React"],
    github: "https://github.com/yamrale306-crypto",
    demo: "#",
    challenges: "Implementing real-time voice processing and natural language understanding in a responsive interface.",
    solution: "Utilized modern AI APIs with efficient state management and optimized audio streaming pipelines.",
    results: "Successfully created a functional AI call assistant with real-time voice interaction capabilities.",
  },
  {
    name: "AI Workspace",
    description: "A comprehensive workspace powered by multiple AI agents. Orchestrates different AI models to collaborate on tasks, research, and content creation.",
    icon: Cpu,
    color: "from-blue-600 to-cyan-500",
    technologies: ["AI Agents", "Next.js", "TypeScript", "OpenAI"],
    github: "https://github.com/yamrale306-crypto",
    demo: "#",
    challenges: "Coordinating multiple AI agents to work together seamlessly without conflicts.",
    solution: "Designed an agent orchestration system with clear task delegation and result aggregation.",
    results: "Created a multi-agent workspace capable of handling complex collaborative tasks.",
  },
  {
    name: "AI OS",
    description: "An experimental operating system interface for AI agent orchestration. Provides a unified dashboard for managing, deploying, and monitoring AI agents.",
    icon: Monitor,
    color: "from-cyan-600 to-emerald-500",
    technologies: ["React", "Node.js", "Docker", "AI APIs"],
    github: "https://github.com/yamrale306-crypto",
    demo: "#",
    challenges: "Building a modular system that can adapt to different AI models and workflows.",
    solution: "Created a plugin-based architecture with standardized agent interfaces and dynamic loading.",
    results: "Developed a flexible AI OS prototype with modular agent management capabilities.",
  },
  {
    name: "Online Service Platform",
    description: "A modern service marketplace connecting service providers with clients. Features real-time messaging, booking system, and payment integration.",
    icon: ShoppingCart,
    color: "from-emerald-600 to-purple-500",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Stripe"],
    github: "https://github.com/yamrale306-crypto",
    demo: "#",
    challenges: "Creating a seamless user experience for both service providers and clients.",
    solution: "Implemented dual-role interfaces with intuitive navigation and secure transaction handling.",
    results: "Built a fully functional service marketplace with user authentication and listing management.",
  },
];

export function ProjectsSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
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
              Featured Projects
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              AI & <span className="text-gradient">Web Projects</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="glass rounded-2xl overflow-hidden hover:bg-white/5 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.01, y: -5 }}
              >
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <project.icon className="w-16 h-16 text-white/80 relative z-10" />
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </motion.a>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div>
                      <span className="text-xs font-semibold text-purple-400 uppercase">Challenges</span>
                      <p className="text-gray-400 text-sm mt-1">{project.challenges}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-400 uppercase">Solution</span>
                      <p className="text-gray-400 text-sm mt-1">{project.solution}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-cyan-400 uppercase">Results</span>
                      <p className="text-gray-400 text-sm mt-1">{project.results}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
