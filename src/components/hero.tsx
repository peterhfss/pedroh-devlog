import { Prompt } from "./terminal-prompt"

export const Hero = () => {
    return (
        <section className="relative flex items-center border-b border-b-border min-h-[88vh] before:hero-before">
            <div className="absolute w-130 h-130 pointer-events-none rounded-[50%]  left-[9%] top-[18%] hero-glow" />
            <div>
                <Prompt command="whoami" />
                <p>Hello, I'm Pedro.</p>
                <h1>
                    Software, systems,
                    <br />
                    and the work <em>between.</em>
                </h1>
                <p>
                    A developer's field notes on building reliable products-from first principles to production.
                </p>
            </div>
            <div>
                <span>scroll to read</span>
                <i />
            </div>
        </section>
    )
}