
import { Prompt } from "@/components";
import { projects } from "@/lib/utils";

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
        <div className="text-base leading-7 text-soft grid gap-4 ">
          {projects.map((project) => (
            <article key={project.name} className="p-6 border border-border bg-project-card transition-all duration-200 ease hover:-translate-y-1 hover:bg-surface hover:cursor-pointer hover:border-border-icon">
              <div className="flex items-center justify-between gap-5">
                <h3 className="m-0 text-base font-medium font-mono text-text">{project.name}</h3>
                <span className="text-green text-[9px] font-mono">{project.status}</span>
              </div>
              <p className="mt-3.5 mb-4 text-[14px] leading-2">{project.description}</p>
              <small className="text-blue text-[9px] font-mono">{project.stacks}</small>
            </article>
          ))}
          
        </div>
      </div>
    </section>
  );
}
