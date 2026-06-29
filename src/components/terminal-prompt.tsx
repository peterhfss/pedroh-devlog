import type { ReactNode } from "react";

export function TerminalPrompt({children} : { children: ReactNode}){
    return(
        <span className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">▶</span>{" "}
            <span className="text-accent">~/blog</span>{" "}
            <span className="opacity-50">$</span>{" "}
            {children}
        </span>
    )
}