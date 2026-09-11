// app/not-found.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-foreground px-6">
      <div className="max-w-lg w-full font-mono">
        <div className="rounded-lg border border-zinc-800 bg-background/90 shadow-lg overflow-hidden">
          {/* barra estilo terminal */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800 bg-neutral-900/90">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-zinc-500">devlog@pedro:~</span>
          </div>

          <div className="p-6 space-y-3 text-sm leading-relaxed">
            <p className="text-zinc-500">$ curl {`${pathname}`}</p>
            <p className="text-red-400">Error: 404 — Not Found</p>
            <p className="text-zinc-400">
              A página que você procura não existe (ou foi movida pra outro
              branch).
            </p>
            <p className="text-zinc-600 text-xs">
              // TODO: talvez você tenha digitado a URL errada
            </p>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-block px-4 py-2 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
              >
                git checkout home →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
