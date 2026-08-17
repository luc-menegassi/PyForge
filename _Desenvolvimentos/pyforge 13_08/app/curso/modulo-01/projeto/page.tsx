import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const CHECKLIST = [
  "O programa pergunta o nome da pessoa com input().",
  "O programa pergunta a idade da pessoa com input().",
  "A idade é convertida de texto para número com int().",
  "O ano de nascimento é calculado corretamente.",
  "Uma mensagem personalizada é exibida na tela com print().",
  "As informações são gravadas em cadastro.txt com open() e write().",
  "Rodar o programa duas vezes acumula duas linhas no arquivo (modo 'a').",
  "As variáveis usam nomes claros, em snake_case.",
  "O arquivo está dentro de uma pasta organizada (idealmente com venv/, README.md e .gitignore, como na Aula 8).",
];

export default function ProjetoModulo01Page() {
  return (
    <article className="pf-card">
      <header className="mb-6x border-b border-zinc-800 pb-4x light:border-zinc-200">
        <p className="mb-1 text-sm font-medium text-success">
          Módulo 1 — Projeto Final
        </p>
        <h1 className="text-3xl font-bold">Sistema de Cadastro em Terminal</h1>
      </header>

      <p className="mb-4x leading-relaxed text-zinc-300 light:text-zinc-700">
        Este é o projeto integrador do Módulo 1. O código completo foi
        construído passo a passo na{" "}
        <Link href="/curso/modulo-01/aula-10" className="text-primary-light underline">
          Aula 10
        </Link>
        . Use o checklist abaixo para validar seu programa antes de seguir
        para o Módulo 2.
      </p>

      <div className="pf-card !p-3x">
        <h2 className="mb-3x font-semibold">Checklist de entrega</h2>
        <ul className="space-y-2">
          {CHECKLIST.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-zinc-300 light:text-zinc-700">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-success" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4x rounded-xl border border-warning/40 bg-warning/10 p-3x text-sm text-warning">
        <strong>Desafio extra (opcional):</strong> em vez de gravar sempre em
        &quot;cadastro.txt&quot;, peça também a cidade da pessoa e adicione
        essa informação à mensagem e ao arquivo salvo.
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-02/aula-01" className="pf-btn-primary">
          Ir para o Módulo 2 <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}
