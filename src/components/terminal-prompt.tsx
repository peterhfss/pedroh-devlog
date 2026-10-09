export function Prompt({ command }: { command: string }) {
  return (
    <div>
      <span className="prompt-mark">›</span>
      <span className="prompt-path">~/devlog</span>
      <span className="prompt-symbol">$</span>
      <span>{command}</span>
    </div>

  );
}
