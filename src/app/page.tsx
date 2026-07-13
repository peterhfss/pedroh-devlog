'use client'

import { Footer, Header, TerminalPrompt, TabContainer } from "@/components";
import { TabId } from "@/types";
import { useState } from "react";
import { About } from "./about/page";
import { Projects } from "./projects/page";
import { allPosts } from "contentlayer/generated";
import { Blog } from "./blog/page";
import { stacks } from "@/lib/utils";

export default function Home() {

  const [activeTab, setActiveTab] = useState<"writing" | "projects" | "about">("writing")

  const posts = allPosts

  function handleActiveTab(tab:TabId){
    setActiveTab(tab)
    
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <section className="mb-10">
          <TerminalPrompt>whoami</TerminalPrompt>
          <div className="mt-4 pl-5 border-l border-border">
            <h1 className="text-xl font-medium text-foreground mb-1">Pedro Henrique</h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg ">
            Building reliable systems with TypeScript, Python, and PostgreSQL. I write about the behind-the-scenes of software development: code, architecture, and navigating a dev career.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {stacks.map((skill) => (
                <span key={skill} className="font-mono text-[10px] text-muted-foreground border border-border px-2 py-0.5 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <TabContainer onHandleActiveTab={handleActiveTab} activeTab={activeTab} />

        {activeTab === "writing" && (
          <Blog posts={posts} />
        
        )}

        {activeTab === "projects" && (
          <Projects />
        )}

        {activeTab === "about" && (
          <About />
        )}

        {/* Footer */}
        <Footer /> 
      </main>
    </div>
  );
}
