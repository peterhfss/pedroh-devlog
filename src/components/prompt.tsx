export function Prompt({ command }: { command: string }) {
  return (
    <div className="flex items-center flex-wrap gap-2 font-mono text-xs text-soft" aria-label={`Terminal command: ${command}`}>
      <span className="text-green text-[19px] leading-px">›</span>
      <span className="text-blue">~/devlog</span>
      <span className="text-muted">$</span>
      <span>{command}</span>
    </div>

  );
}
