"use client";

import {
  DiscordLogoIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  RssIcon,
  TerminalIcon,
} from "@phosphor-icons/react";
import { Anchor } from "./anchor";


export function Header() {
  return (
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-4 h-14 items-center flex justify-between">
          <div className="flex items-center gap-2">
            <TerminalIcon size={16} className="text-primary" />
            <span className="font-mono text-sm font-medium text-foreground">
              pedroh's devlog
            </span>
            <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
              ['full-stack', 'game dev']
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Anchor href={"https://www.linkedin.com/in/pedrohenriquefrancelino/"} aria-label="Linkedin">
              <LinkedinLogoIcon size={20} />
            </Anchor>
            <Anchor href={"/rss.xml"} aria-label="RSS Feed">
              <RssIcon size={20} />
            </Anchor>
            <Anchor href={"https://github.com/peterhfss"} aria-label="GitHub">
              <GithubLogoIcon size={20} />
            </Anchor>
            <Anchor href={"https://discord.gg/tWETmrrnZp"} aria-label="Discord">
              <DiscordLogoIcon size={20} />
            </Anchor>
          </div>
        </div>
      </header>
  );
}
