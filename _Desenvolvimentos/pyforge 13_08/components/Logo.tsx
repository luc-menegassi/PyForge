export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Hexágono representando engenharia/construção */}
        <path
          d="M16 2L28.2 9V23L16 30L3.8 23V9L16 2Z"
          stroke="#FACC15"
          strokeWidth="2"
          fill="none"
        />
        {/* Símbolo <> (código) no centro */}
        <path
          d="M13 12L9 16L13 20"
          stroke="#2563EB"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 12L23 16L19 20"
          stroke="#2563EB"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {!compact && (
        <span className="font-sans text-lg font-bold tracking-tight text-zinc-100 light:text-zinc-900">
          Py<span className="text-primary">Forge</span>
        </span>
      )}
    </span>
  );
}
