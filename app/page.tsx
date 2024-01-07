import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 justify-between p-24">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
