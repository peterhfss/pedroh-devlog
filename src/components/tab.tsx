import type { ReactNode } from "react";
import { TerminalPrompt } from "./terminal-prompt";

type TabProps = {
  title: string;
  children: ReactNode;
};

export function Tab({ title, children }: TabProps) {
  return (
    <section>
      <div className="mb-5">
        <TerminalPrompt>{title}</TerminalPrompt>
      </div>
      <div>{children}</div>
    </section>
  );
}
