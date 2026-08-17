import { ReactNode } from "react";
import {
  Lightbulb,
  TriangleAlert,
  BookOpen,
  Target,
  Trophy,
  ClipboardList,
  Brain,
} from "lucide-react";

type AlertType =
  | "dica"
  | "atencao"
  | "curiosidade"
  | "desafio"
  | "projeto"
  | "resumo"
  | "programador";

const CONFIG: Record<
  AlertType,
  { label: string; icon: ReactNode; classes: string }
> = {
  dica: {
    label: "Dica",
    icon: <Lightbulb size={18} />,
    classes: "border-primary/40 bg-primary/10 text-primary-light",
  },
  atencao: {
    label: "Atenção",
    icon: <TriangleAlert size={18} />,
    classes: "border-danger/40 bg-danger/10 text-danger",
  },
  curiosidade: {
    label: "Curiosidade",
    icon: <BookOpen size={18} />,
    classes: "border-curiosity/40 bg-curiosity/10 text-curiosity",
  },
  desafio: {
    label: "Desafio",
    icon: <Target size={18} />,
    classes: "border-warning/40 bg-warning/10 text-warning",
  },
  projeto: {
    label: "Projeto",
    icon: <Trophy size={18} />,
    classes: "border-success/40 bg-success/10 text-success",
  },
  resumo: {
    label: "Resumo da aula",
    icon: <ClipboardList size={18} />,
    classes: "border-zinc-600/40 bg-zinc-500/10 text-zinc-300",
  },
  programador: {
    label: "Como um programador pensa",
    icon: <Brain size={18} />,
    classes: "border-curiosity/40 bg-curiosity/10 text-curiosity",
  },
};

export function Alert({
  type,
  title,
  children,
}: {
  type: AlertType;
  title?: string;
  children: ReactNode;
}) {
  const cfg = CONFIG[type];
  return (
    <div className={`my-3x rounded-xl border px-3x py-2x ${cfg.classes}`}>
      <div className="mb-1.5x flex items-center gap-2 text-sm font-semibold">
        {cfg.icon}
        <span>{title || cfg.label}</span>
      </div>
      <div className="text-sm leading-relaxed text-zinc-200 light:text-zinc-700">
        {children}
      </div>
    </div>
  );
}
