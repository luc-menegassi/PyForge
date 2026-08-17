"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { Search } from "lucide-react";

export function ReferenceSearch({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: (query: string) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <div className="relative mb-4x">
      <Search
        size={16}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
      />
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={placeholder}
        className="w-full rounded-xl border border-zinc-800 bg-transparent py-2 pl-9 pr-3 text-sm text-zinc-200 outline-none transition focus:border-primary light:border-zinc-300 light:text-zinc-800"
      />
    </div>
  );
}

/**
 * Busca fuzzy client-side com Fuse.js — usada em /cheatsheet e /glossario.
 * Diferente de um `includes()` simples, tolera erros de digitação comuns
 * de quem está aprendendo termos técnicos novos (ex.: "indentaçao",
 * "excecao", "syncronia").
 *
 * `keys` são os nomes das propriedades do item onde a busca deve ocorrer
 * (ex.: ["termo", "definicao"] no glossário, ["comando", "descricao"] no
 * cheatsheet) — o mesmo item pode casar por qualquer uma delas.
 */
export function useFilteredItems<T>(
  items: T[],
  query: string,
  keys: string[]
): T[] {
  const fuse = useMemo(
    () =>
      new Fuse(items, {
        keys,
        // threshold: 0 = só match exato, 1 = casa com quase tudo.
        // 0.35 tolera pequenos erros de digitação sem devolver
        // resultados irrelevantes demais.
        threshold: 0.35,
        // Termos curtos (ex.: "pip", "int") não devem exigir 3+
        // caracteres coincidindo para aparecer.
        minMatchCharLength: 2,
        // Não importa em que posição do texto o termo aparece —
        // relevante porque `descricao`/`definicao` são frases longas.
        ignoreLocation: true,
      }),
    [items, keys.join("|")]
  );

  return useMemo(() => {
    const q = query.trim();
    if (!q) return items;
    return fuse.search(q).map((resultado) => resultado.item);
  }, [fuse, items, query]);
}
