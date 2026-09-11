"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function PageError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-100 px-6">
      <div className="max-w-lg w-full font-mono">
        <div className="rounded-lg border border-zinc-800 bg-background/90 shadow-lg overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800 bg-zinc-900">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-zinc-500">devlog@pedro:~</span>
          </div>

          <div className="p-6 space-y-3 text-sm leading-relaxed">
            <p className="text-zinc-500">$ npm run build</p>
            <p className="text-red-400">Error: 500 — Something went wrong</p>
            <p className="text-zinc-400">
              Um erro inesperado quebrou essa página no meio do processo.
            </p>
            {error?.message && (
              <p className="text-zinc-600 text-xs wrap-break-word">
                // {error.message}
              </p>
            )}

            <div className="pt-4 flex gap-3">
              <button
                type="button"
                onClick={() => reset()}
                className="inline-block px-4 py-2 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors cursor-pointer"
              >
                git retry →
              </button>
              <Link
                href="/"
                className="inline-block px-4 py-2 rounded-md bg-zinc-800/50 text-zinc-300 border border-zinc-700 hover:bg-zinc-800 transition-colors"
              >
                git checkout home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
