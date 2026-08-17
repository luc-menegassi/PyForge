import { Clock, Signal } from "lucide-react";

export function LessonHeader({
  modulo,
  titulo,
  duracao,
  nivel,
}: {
  modulo: string;
  titulo: string;
  duracao: string;
  nivel: string;
}) {
  return (
    <header className="mb-6x border-b border-zinc-800 pb-4x light:border-zinc-200">
      <p className="mb-1 text-sm font-medium text-primary-light">{modulo}</p>
      <h1 className="mb-3x text-3xl font-bold">{titulo}</h1>
      <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
        <span className="flex items-center gap-1.5">
          <Clock size={14} /> {duracao}
        </span>
        <span className="flex items-center gap-1.5">
          <Signal size={14} /> {nivel}
        </span>
      </div>
    </header>
  );
}

