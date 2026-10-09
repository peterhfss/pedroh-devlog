import type { ReactNode } from "react";
import { Prompt } from "./terminal-prompt";

type TabProps = {
  title: string;
  children: ReactNode;
};

export function Tab({ title, children }: TabProps) {
  return (
    <section>
      <div className="mb-5">
        <Prompt command={title} />
      </div>
      <div>{children}</div>
    </section>
  );
}
