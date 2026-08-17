"use client";

import { useMemo, useState } from "react";
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

export function useFilteredItems<T>(
  items: T[],
  query: string,
  fields: (item: T) => string[]
): T[] {
  return useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter((item) =>
      fields(item).some((field) => field.toLowerCase().includes(q))
    );
  }, [items, query, fields]);
}

