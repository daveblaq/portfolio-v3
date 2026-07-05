"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import EducationSkills from "@/components/EducationSkills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import AIShowcase from "@/components/AIShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Preloader onComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <>
          <NavBar />
          <SmoothScroll>
            <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30 animate-fade-in">
              <Hero />
              <About />
              <Projects />
              <AIShowcase />
              <WorkExperience />
              <EducationSkills />
              <Contact />
              <Footer />
            </main>
          </SmoothScroll>
        </>
      )}
    </>
  );
}
