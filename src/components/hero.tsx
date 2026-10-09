import { Prompt } from "./prompt"

export const Hero = () => {
    return (
        <section className="relative flex items-center border-b border-b-border min-h-[88vh] before:hero-before">
            <div className="absolute w-130 h-130 pointer-events-none rounded-[50%]  left-[9%] top-[18%] hero-glow" />
            <div className="relative mt-8 mx-auto hero-content">
                <Prompt command="whoami" />
                <p className="text-[17px] text-soft mt-7 mb-3 mx-0 ">Hello, I'm Pedro.</p>
                <h1 className="max-w-215 m-0 font-medium tracking-5 heading-1">
                    Software, systems,
                    <br />
                    and the work <em className="text-green not-italic">between.</em>
                </h1>
                <p className="max-w-140 mt-8 text-soft text-[18px] leading-[26.4px]">
                    A developer’s field notes on building reliable products—from first principles to production.
                </p>
            </div>
            <div className="absolute bottom-11 flex items-center gap-3.5 text-[9px] uppercase text-muted leading-0.5 font-mono origin-bottom-right rotate-90 translate-x-[100%} scroll-note">
                <span>scroll to read</span>
                <i className="w-11 h-px bg-muted origin-left line" />
            </div>
        </section>
    )
}