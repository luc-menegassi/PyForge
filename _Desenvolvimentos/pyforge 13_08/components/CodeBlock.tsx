"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CodeBlock({
  filename,
  code,
}: {
  filename?: string;
  code: string;
}) {
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/\n$/, "").split("\n");

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="my-3x overflow-hidden rounded-xl border border-zinc-800 light:border-zinc-200">
      {filename && (
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-3x py-1.5x text-xs text-zinc-400 light:border-zinc-200 light:bg-zinc-100">
          <span className="font-mono">{filename}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-zinc-400 transition hover:text-accent"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copiado" : "Copiar"}
          </button>
        </div>
      )}
      <pre className="overflow-x-auto bg-bg-dark-elevated p-3x font-mono text-sm light:bg-zinc-50">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-3x select-none text-zinc-600">
                {String(i + 1).padStart(2, " ")}
              </span>
              <span className="text-zinc-200 light:text-zinc-800">{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
