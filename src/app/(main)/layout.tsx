'use client'

import { Footer, Header, TabContainer, Prompt, Hero } from "@/components";
import { stacks } from "@/lib/utils";

type MainProps = {
  children: React.ReactNode;
};

export default function Main({ children }: MainProps) {

  return (
    <div className="min-h-screen overflow-hidden my-background">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
