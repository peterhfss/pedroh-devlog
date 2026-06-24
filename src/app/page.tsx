'use client'

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TerminalPrompt } from "@/components/terminal-prompt";

export default function Home() {

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <section className="mb-10">
          <TerminalPrompt>whoami</TerminalPrompt>
          <div className="mt-4 pl-5 border-l border-border">
            <h1 className="text-xl font-medium text-foreground mb-1">Pedro Henrique</h1>
            <p className="text-sm text-muted leading-relaxed max-w-lg ">
              Sistemas confiáveis com TypeScript, Python e PostgreSQL. Escrevo sobre os bastidores do desenvolvimento: código, arquitetura e os desafios da carreira dev.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["TypeScript", "Python", "Node.js", "Docker", "AWS", "React", "PostgreSQL"].map((skill) => (
                <span key={skill} className="font-mono text-[10px] text-muted border border-border px-2 py-0.5 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs */}

        {/* Footer */}
        <Footer /> 
      </div>
    </div>
  );
}
