'use client'

import { useState } from "react";
import { Footer, Header, Hero, TabContainer } from "@/components";
import { Subscription } from "@/components/subscription";

type MainProps = {
  children: React.ReactNode;
}

export default function Main({children}: MainProps) {

  const [activeSection, setActiveSection] = useState("writing")

  return (
    <div className="min-h-screen overflow-hidden my-background">
      <Header />
      <main className="pt-20 pb-24 content-container">
        <Hero />
        <TabContainer />
        {children}
        <Subscription subscribed={false}/>
      </main>
      <Footer />
    </div>
  );
}
