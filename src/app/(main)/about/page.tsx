import { Tab } from "@/components/tab";

export default function About() {
  return (
    <Tab title="cat about.md">
      <div className="pl-5 border-l border-border space-y-4 text-sm text-muted-foreground leading-relaxed ">
        <p>
          I write to document the unfiltered reality of building software from the ground up. Beyond just clean code, this space is a log of architectural tradeoffs, 
          system bottlenecks, and the daily grind of continuous learning.
          My goal is simple: test ideas, share the lessons learned from production mistakes, and help fellow engineers build more resilient systems.
        </p>
        <p>Let's build (and break) things together.</p>
        <div className="mt-6 space-y-2 font-mono text-xs">
          {[
            ["email", "pedroh.fss@gmail.com"],
            ["github", "github.com/peterhfss"],
            ["discord", "pedroh.dev"],
            ["linkedin", "linkedin.com/in/pedrohenriquefrancelino/"],
            ["portfolio", "pedrohdev.com/en-US"],
            ["location", "Brazil, PE"],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-4">
              <span className="text-[#3d4148] w-16 shrink-0">{k}</span>
              <span className="text-accent">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </Tab>
  );
}
