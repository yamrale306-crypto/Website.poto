"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react";
import { useTypingEffect } from "@/hooks/useEffects";

export function HeroSection() {
  const tagline = useTypingEffect(
    "I build AI-powered software, intelligent automation, and scalable web applications.",
    30,
    true
  );

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for collaborations
            </motion.div>

            <motion.p
              className="text-gray-400 text-lg mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Deva{" "}
              <span className="text-gradient">Amrale</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="text-purple-400">AI Builder</span>
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-blue-400">Full-Stack Developer</span>
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-cyan-400">Future Startup Founder</span>
            </motion.p>

            <motion.p
              className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 h-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {tagline}
              <span className="animate-pulse">|</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection("#projects")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg hover:opacity-90 transition-opacity glow-purple"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                View Projects
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass text-white font-semibold text-lg hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.button>
              <motion.a
                href="/resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass text-white font-semibold text-lg hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Portrait */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Glowing background rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-cyan-500/30 blur-2xl animate-pulse-slow" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-500/20 blur-xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
              
              {/* Portrait container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 glow-purple">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-[#050505] to-blue-900/50" />
                
                {/* Stylized portrait with initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center animate-float">
                      <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white">DA</span>
                    </div>
                    {/* Floating elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-12 h-12 rounded-lg bg-purple-600/80 flex items-center justify-center"
                      animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <span className="text-xs font-bold">AI</span>
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-2 -left-6 w-10 h-10 rounded-lg bg-blue-600/80 flex items-center justify-center"
                      animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="text-xs font-bold">&lt;/&gt;</span>
                    </motion.div>
                    <motion.div
                      className="absolute top-1/2 -right-8 w-8 h-8 rounded-full bg-cyan-500/80 flex items-center justify-center"
                      animate={{ x: [-3, 3, -3] }}
                      transition={{ duration: 3.5, repeat: Infinity }}
                    >
                      <span className="text-xs font-bold">+</span>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative code snippets */}
                <div className="absolute top-8 left-4 text-[10px] text-purple-400/40 font-mono">
                  const builder = new AI();
                </div>
                <div className="absolute bottom-12 right-4 text-[10px] text-blue-400/40 font-mono">
                  npm run future
                </div>
                <div className="absolute top-1/2 left-2 text-[10px] text-cyan-400/40 font-mono">
                  import Vision from &quot;@/startup&quot;;
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection("#about")}
          className="p-2 rounded-full glass text-white hover:bg-white/10 transition-colors"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
}
