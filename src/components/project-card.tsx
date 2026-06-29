import { ProjectType } from "@/types"

interface ProjectProps {
    project: ProjectType
}

export function ProjectCard({ project } :ProjectProps){
    return(
        <div className="border border-border rounded p-4 bg-card hover:border-[rgba(255,255,255,0.16)] transition-colors group cursor-pointer">
            <div className="flex items-start justify-between mb-2">
                <span className="font-mono text-sm text-accent font-medium">
                    ~/{project.name}
                </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
               {project.desc}
            </p>
            <div className="flex items-center gap-4 font-mono text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full" style={{backgroundColor: project.langColor}} />
                    {project.lang}
                </span>
            </div>
        </div>
    )
}