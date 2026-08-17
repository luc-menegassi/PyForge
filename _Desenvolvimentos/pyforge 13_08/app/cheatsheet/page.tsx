"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ReferenceSearch, useFilteredItems } from "@/components/ReferenceSearch";
import { CHEATSHEET_MODULO_01, CHEATSHEET_MODULO_02, CHEATSHEET_MODULO_03, CheatItem } from "@/lib/cheatsheet";

const TODOS_OS_ITENS = [...CHEATSHEET_MODULO_01, ...CHEATSHEET_MODULO_02, ...CHEATSHEET_MODULO_03];

const CATEGORIAS: CheatItem["categoria"][] = [
  "Python",
  "Terminal",
  "Pip / Ambiente",
  "Sintaxe",
];

export default function CheatsheetPage() {
  const [query, setQuery] = useState("");
  const itens = useFilteredItems(TODOS_OS_ITENS, query, (item) => [
    item.comando,
    item.descricao,
  ]);

  return (
    <>
      <Navbar />
      <main className="pf-container py-6x">
        <div className="mb-4x flex items-center gap-2">
          <Zap size={22} className="text-accent" />
          <h1 className="text-2xl font-bold">Cheatsheet</h1>
        </div>
        <p className="mb-4x text-sm text-zinc-400">
          Comandos e funções, resumidos em uma linha — a referência rápida
          para consultar enquanto pratica. Cresce a cada aula publicada.
        </p>

        <ReferenceSearch placeholder="Buscar um comando..." onChange={setQuery} />

        <div className="space-y-6x">
          {CATEGORIAS.map((categoria) => {
            const doGrupo = itens.filter((i) => i.categoria === categoria);
            if (doGrupo.length === 0) return null;
            return (
              <div key={categoria}>
                <h2 className="mb-2x text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  {categoria}
                </h2>
                <div className="overflow-hidden rounded-xl border border-zinc-800 light:border-zinc-200">
                  {doGrupo.map((item, i) => (
                    <div
                      key={`${item.categoria}-${item.comando}`}
                      className={`flex items-center justify-between gap-3 px-3x py-2x text-sm ${
                        i !== 0 ? "border-t border-zinc-800 light:border-zinc-200" : ""
                      }`}
                    >
                      <code className="pf-code-inline shrink-0">
                        {item.comando}
                      </code>
                      <span className="flex-1 text-right text-zinc-400">
                        {item.descricao}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          {itens.length === 0 && (
            <p className="text-sm text-zinc-500">Nenhum comando encontrado.</p>
          )}
        </div>
      </main>
    </>
  );
}
