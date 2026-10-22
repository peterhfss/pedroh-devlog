'use client'

import { Prompt } from "@/components";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="content-container">
      <Prompt command="cat about.md" />
      <div className="mt-16 border-t-2 border-border pt-11 grid  grid-cols-[1fr] gap-8">
        <div>
          <p className="eyebrow">About me</p>
          <h2 className="mt-5 mb-2 font-medium text-[42px] tracking-6">
            I build realible software and explain what I learn.
          </h2>
        </div>
        <div className="text-base leading-7 text-soft">
          <p className="mb-6">
            I’m Pedro Henrique, a software engineer focused on the systems behind useful products. My work spans backend architecture, full-stack development, and the occasional game engine rabbit hole.
          </p>
          <p className="mb-6">
            This devlog is my public notebook: concrete lessons from building real-world projects, careful explorations of core concepts, and honest notes about the trade-offs behind the finished code.
          </p>
          <p className="mb-6">
            Currently open to new opportunities — feel free to reach out via :  <Button>Linkedin</Button>
          </p>
        </div>
      </div>
    </section>
  );
}
