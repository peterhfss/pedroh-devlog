
import { Prompt } from "@/components";

export default function Projects() {
  return (
    <section className="content-container">
      <Prompt command="ls -la ./projects" />
      <div className="mt-16 border-t-2 border-border pt-11 grid  grid-cols-[1fr] gap-8">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2 className="mt-5 mb-2 font-medium text-[42px] tracking-6">
            Small tools, carefully made.
          </h2>
        </div>
        <div className="text-base leading-7 text-soft">
          
        </div>
      </div>
    </section>
  );
}
