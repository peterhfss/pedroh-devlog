import { ProjectCard } from "@/components/project-card";
import { Tab } from "@/components/tab";
import { projects } from "@/lib/utils";

export function Projects(){
    return(
        <Tab title="ls -lt ~/github/">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project}></ProjectCard>
                ))}
            </div>
            <div className="mt-6 font-mono text-xs text-muted-foreground">
                <span className="text-primary">▸</span> more on{" "}
                <a href="https://github.com/peterhfss?tab=repositories" target="_blank" className="text-accent hover:underline">github.com/peterhfss</a>
            </div>
        </Tab>
    )
}