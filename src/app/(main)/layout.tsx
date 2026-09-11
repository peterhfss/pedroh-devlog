'use client'

import { Footer, Header, TabContainer, TerminalPrompt } from "@/components";
import { stacks } from "@/lib/utils";

type MainProps = {
  children: React.ReactNode;
};

export default function Main({ children }: MainProps) {

  return (
    <div className="bg-background">
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <section className="mb-10">
          <TerminalPrompt>whoami</TerminalPrompt>
          <div className="mt-4 pl-5 border-l border-border">
            <h1 className="text-xl font-medium text-foreground mb-1">
              Pedro Henrique
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg ">
              Software engineer building reliable systems and documenting the journey from core concepts to production. Exploring architecture, code optimization, and modern full-stack engineering.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {stacks.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[10px] text-muted-foreground border border-border px-2 py-0.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
        <TabContainer />
           {children}

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
