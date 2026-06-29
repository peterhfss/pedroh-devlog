import { Tab } from "@/components/tab";

export function About(){

    return(
        <Tab title="cat about.md">
            <div className="pl-5 border-l border-border space-y-4 text-sm text-muted-foreground leading-relaxed ">
                <p >
                    I’m focused on building reliable applications with a modern stack centered around TypeScript, Python, and PostgreSQL. 
                    I started this blog to share the unfiltered reality of software engineering from the ground up. From architectural choices and code optimization to career growth and daily developer challenges, my goal is to document my journey and help other devs build better systems.
                </p>
                <p>
                    Let's build (and break) things together.
                </p>
                <div className="mt-6 space-y-2 font-mono text-xs">
                    {[
                        ["email", "pedroh.fss@gmail.com"],
                        ["github", "github.com/peterhfss"],
                        ["discord", "pedroh.dev"],
                        ["linkedin", "linkedin.com/in/pedrohenriquefrancelino/"],
                        ["portfolio", "pedrohdev.com/en-US"],
                        ["location", "Brazil, PE"]
                    ].map(([k, v])=> (
                        <div key={k} className="flex gap-4">
                            <span className="text-[#3d4148] w-16 shrink-0">{k}</span>
                            <span className="text-accent">{v}</span>
                        </div>
                    ))
                    }
                </div>
            </div>
           
        </Tab>
    )
}