"use client";

import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Footer } from "@/components/sections/footer";
import { GitHubShowcase } from "@/components/sections/github-showcase";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { Header } from "@/components/ui/header";
import { LoadingGate } from "@/components/ui/loading-gate";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <LoadingGate>
      <CursorGlow />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <GitHubShowcase />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </LoadingGate>
  );
}
