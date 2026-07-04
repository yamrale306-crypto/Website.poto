"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useEffects";
import { Github, GitCommit, GitBranch, Star, Code2, ExternalLink } from "lucide-react";

const githubStats = {
  username: "yamrale306-crypto",
  repositories: 12,
  contributions: 200,
  stars: 15,
  followers: 8,
  languages: [
    { name: "TypeScript", percent: 35, color: "#3178C6" },
    { name: "JavaScript", percent: 30, color: "#F7DF1E" },
    { name: "HTML/CSS", percent: 20, color: "#E34F26" },
    { name: "Python", percent: 10, color: "#3776AB" },
    { name: "Other", percent: 5, color: "#8B949E" },
  ],
  recentRepos: [
    { name: "ai-call-assistant", description: "AI-powered voice assistant", stars: 5, language: "TypeScript" },
    { name: "ai-workspace", description: "Multi-agent AI workspace", stars: 4, language: "TypeScript" },
    { name: "ai-os", description: "AI agent orchestration system", stars: 3, language: "JavaScript" },
    { name: "service-platform", description: "Online service marketplace", stars: 2, language: "TypeScript" },
  ],
};

export function GitHubSection() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="github" className="relative py-24 sm:py-32 overflow-hidden">
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
              GitHub Activity
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Open Source <span className="text-gradient">Contributions</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </div>

          {/* GitHub Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: GitBranch, label: "Repositories", value: githubStats.repositories, color: "text-purple-400" },
              { icon: GitCommit, label: "Contributions", value: githubStats.contributions, color: "text-blue-400" },
              { icon: Star, label: "Stars Earned", value: githubStats.stars, color: "text-cyan-400" },
              { icon: Code2, label: "Followers", value: githubStats.followers, color: "text-emerald-400" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Languages Chart */}
            <motion.div
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Languages</h3>
              <div className="space-y-4">
                {githubStats.languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">{lang.name}</span>
                      <span className="text-gray-400">{lang.percent}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: lang.color }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.percent}%` } : {}}
                        transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Repositories */}
            <motion.div
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Recent Repositories</h3>
              <div className="space-y-4">
                {githubStats.recentRepos.map((repo, index) => (
                  <motion.div
                    key={repo.name}
                    className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <a
                          href={`https://github.com/${githubStats.username}/${repo.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-semibold hover:text-purple-400 transition-colors flex items-center gap-2"
                        >
                          {repo.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <p className="text-gray-400 text-sm mt-1">{repo.description}</p>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{repo.stars}</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-blue-400" />
                      <span className="text-xs text-gray-400">{repo.language}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* View Profile Button */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.a
              href={`https://github.com/${githubStats.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass text-white font-semibold hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
