"use client";

import { useState } from "react";
import { BookMarked } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ReferenceSearch, useFilteredItems } from "@/components/ReferenceSearch";
import { GLOSSARIO_MODULO_01, GLOSSARIO_MODULO_02, GLOSSARIO_MODULO_03 } from "@/lib/glossario";

const TODOS_OS_TERMOS = [...GLOSSARIO_MODULO_01, ...GLOSSARIO_MODULO_02, ...GLOSSARIO_MODULO_03];

export default function GlossarioPage() {
  const [query, setQuery] = useState("");
  const itens = useFilteredItems(TODOS_OS_TERMOS, query, [
    "termo",
    "definicao",
  ]);

  const ordenados = [...itens].sort((a, b) => a.termo.localeCompare(b.termo));

  return (
    <>
      <Navbar />
      <main className="pf-container py-6x">
        <div className="mb-4x flex items-center gap-2">
          <BookMarked size={22} className="text-curiosity" />
          <h1 className="text-2xl font-bold">Glossário</h1>
        </div>
        <p className="mb-4x text-sm text-zinc-400">
          Os conceitos por trás do código, explicados em uma frase. Cresce a
          cada aula publicada — hoje reúne os termos dos Módulos 1 a 3.
        </p>

        <ReferenceSearch placeholder="Buscar um termo..." onChange={setQuery} />

        <div className="grid gap-3 sm:grid-cols-2">
          {ordenados.map((item) => (
            <div key={`${item.aula}-${item.termo}`} className="pf-card !p-3x">
              <div className="mb-1 flex items-center justify-between gap-2">
                <h3 className="font-semibold text-curiosity">{item.termo}</h3>
                <span className="shrink-0 text-xs text-zinc-500">
                  {item.aula}
                </span>
              </div>
              <p className="text-sm text-zinc-300 light:text-zinc-700">
                {item.definicao}
              </p>
            </div>
          ))}
          {ordenados.length === 0 && (
            <p className="text-sm text-zinc-500">Nenhum termo encontrado.</p>
          )}
        </div>
      </main>
    </>
  );
}

