"use client";

import type React from "react";
import { isValidElement, useRef } from "react";
import { CopyButton } from "./copy-button";

interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

// Fenced blocks in these languages are illustrative syntax examples, not
// real code meant to be copied and reused (see markdown-styles-guide.mdx).
const NON_COPYABLE_LANGUAGES = new Set(["markdown", "md"]);

export function CodeBlock({ className, children, ...props }: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);

  const getCodeText = () => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector("code");
      return codeElement?.textContent || "";
    }
    return "";
  };

  const codeClassName = isValidElement<{ className?: string }>(children)
    ? children.props.className
    : undefined;
  const language = codeClassName?.match(/language-(\w+)/)?.[1];
  const isCopyable = !language || !NON_COPYABLE_LANGUAGES.has(language);

  return (
    <div className="relative group">
      {isCopyable && <CopyButton getText={getCodeText} />}
      <pre ref={preRef} data-line-numbers className={className} {...props}>
        {children}
      </pre>
    </div>
  );
}
