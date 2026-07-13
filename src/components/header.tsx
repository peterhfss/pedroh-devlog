import { DiscordLogoIcon, GithubLogoIcon, LinkedinLogoIcon, RssIcon, TerminalIcon } from "@phosphor-icons/react"

export function Header(){
    return(
        <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto px-4 h-14 items-center flex justify-between">
                <div className="flex items-center gap-2">
                    <TerminalIcon size={16} className="text-primary"/>
                    <span className="font-mono text-sm font-medium text-foreground">pedroh's devlog</span>
                    <span className="font-mono text-xs text-muted-foreground hidden sm:inline">['full-stack', 'game dev']</span>
                </div>
                <div className="flex items-center gap-1">
                    <a href="https://www.linkedin.com/in/pedrohenriquefrancelino/" target="_blank" className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded " aria-label="Linkedin">
                        <LinkedinLogoIcon  size={20}/>
                    </a>
                    <a href="/" target="_blank" className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded " aria-label="RSS">
                        <RssIcon  size={20}/>
                    </a>
                    <a href="https://github.com/peterhfss" target="_blank" className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded " aria-label="GitHub">
                        <GithubLogoIcon  size={20}/>
                    </a>
                    <a href="https://discord.gg/tWETmrrnZp" target="_blank" className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded " aria-label="Discord">
                        <DiscordLogoIcon size={20}/>
                    </a>
                </div>
            </div>
        </header>
    )
}