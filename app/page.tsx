"use client";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Features from "@/components/sections/features";
import Mockup from "@/components/sections/mockup";
import GetStarted from "@/components/sections/get-started";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Features />
      <Mockup />
      <GetStarted />
      <Projects />
      <Contact />
    </main>
  );
}