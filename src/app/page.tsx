"use client";

import { ParticleBackground } from "@/components/ui-custom/ParticleBackground";
import { ScrollProgress } from "@/components/ui-custom/ScrollProgress";
import { CustomCursor } from "@/components/ui-custom/CustomCursor";
import { Navigation } from "@/components/ui-custom/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-[100dvh] bg-[#050505] text-white overflow-x-hidden">
      {/* Premium effects */}
      <CustomCursor />
      <ScrollProgress />
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GitHubSection />
      <TimelineSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
