"use client";

import { useState } from "react";

interface CopyButtonProps {
  getText: () => string;
}

export function CopyButton({ getText }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getText());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      alert(`Failed to copy text: ${err}`);
    }
  };

  return (
    <button
      className={`absolute top-2 right-2 px-2 py-1 text-xs cursor-pointer font-medium rounded border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 ${copied ? "bg-green-600 hover:bg-green-700 border-green-600 text-white" : "bg-gray-800 hover:bg-gray-700 border-gray-600 text-gray-200"}`}
      type="button"
      onClick={handleCopy}
      aria-label="Copy code to clipboard"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
