'use client'

import { type SubmitEvent, useState } from "react";
import { Footer, Header, Hero, Prompt, TabContainer } from "@/components";
import { Subscription } from "@/components/subscription";


type MainProps = {
  children: React.ReactNode;
};

export default function Main({ children }: MainProps) {

  const [subscribed , setSubscribed] = useState(false);

  function subscribe(event: SubmitEvent<HTMLFormElement>){
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <div className="min-h-screen overflow-hidden my-background">
      <Header />
      <main className="pt-20 pb-24 content-container">
        <Hero />
        <Subscription subscribed={false}/>
      </main>
    </div>
  );
}
