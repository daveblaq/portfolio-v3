"use client";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import EducationSkills from "@/components/EducationSkills";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import AIShowcase from "@/components/AIShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30">
        <NavBar />
        <Hero />
        <About />
        <WorkExperience />
        <EducationSkills />
        <Projects />
        <AIShowcase />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
