"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Circle } from "lucide-react";

export type SidebarAula = { slug: string; titulo: string };
export type SidebarModulo = { slug: string; titulo: string; aulas: SidebarAula[] };

export function Sidebar({ modulos }: { modulos: SidebarModulo[] }) {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 border-zinc-800 light:border-zinc-200 md:w-64 md:border-r md:pr-3x">
      <nav className="space-y-4x">
        {modulos.map((modulo) => (
          <div key={modulo.slug}>
            <p className="mb-1.5x text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {modulo.titulo}
            </p>
            <ul className="space-y-0.5">
              {modulo.aulas.map((aula) => {
                const href = `/curso/${modulo.slug}/${aula.slug}`;
                const active = pathname === href;
                return (
                  <li key={aula.slug}>
                    <Link
                      href={href}
                      className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition ${
                        active
                          ? "bg-primary/10 text-primary-light font-medium"
                          : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
                      }`}
                    >
                      <Circle size={12} className="shrink-0 opacity-50" />
                      {aula.titulo}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

