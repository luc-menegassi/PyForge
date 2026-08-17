"use client";

import { useState } from "react";
import { Check, X, HelpCircle, RotateCcw } from "lucide-react";

export type QuizQuestion = {
  pergunta: string;
  opcoes: string[];
  correta: number; // índice da opção correta
  explicacao: string;
};

export function Quiz({ perguntas }: { perguntas: QuizQuestion[] }) {
  const [respostas, setRespostas] = useState<(number | null)[]>(
    Array(perguntas.length).fill(null)
  );

  function responder(qIndex: number, oIndex: number) {
    if (respostas[qIndex] !== null) return; // já respondida, trava
    const novas = [...respostas];
    novas[qIndex] = oIndex;
    setRespostas(novas);
  }

  function tentarNovamente(qIndex: number) {
    const novas = [...respostas];
    novas[qIndex] = null;
    setRespostas(novas);
  }

  function reiniciarQuiz() {
    setRespostas(Array(perguntas.length).fill(null));
  }

  const acertos = respostas.filter(
    (r, i) => r !== null && r === perguntas[i].correta
  ).length;
  const respondidas = respostas.filter((r) => r !== null).length;

  return (
    <div className="my-4x rounded-2xl border border-zinc-800 p-4x light:border-zinc-200">
      <div className="mb-3x flex items-center gap-2 text-sm font-semibold text-primary-light">
        <HelpCircle size={18} />
        Quiz de revisão
        {respondidas > 0 && (
          <span className="ml-auto flex items-center gap-3 text-xs font-normal text-zinc-400">
            {acertos}/{respondidas} corretas
            <button
              onClick={reiniciarQuiz}
              className="flex items-center gap-1 text-zinc-500 transition hover:text-primary-light"
            >
              <RotateCcw size={12} /> Reiniciar
            </button>
          </span>
        )}
      </div>

      <div className="space-y-4x">
        {perguntas.map((q, qi) => {
          const respondida = respostas[qi] !== null;
          return (
            <div key={qi}>
              <p className="mb-2x text-sm font-medium text-zinc-200 light:text-zinc-800">
                {qi + 1}. {q.pergunta}
              </p>
              <div className="space-y-1.5">
                {q.opcoes.map((opcao, oi) => {
                  const isCorreta = oi === q.correta;
                  const isEscolhida = respostas[qi] === oi;
                  let classes =
                    "w-full text-left rounded-lg border px-3 py-2 text-sm transition ";
                  if (!respondida) {
                    classes +=
                      "border-zinc-800 text-zinc-300 hover:border-primary light:border-zinc-300 light:text-zinc-700";
                  } else if (isCorreta) {
                    classes += "border-success/60 bg-success/10 text-success";
                  } else if (isEscolhida) {
                    classes += "border-danger/60 bg-danger/10 text-danger";
                  } else {
                    classes +=
                      "border-zinc-800 text-zinc-500 light:border-zinc-300";
                  }
                  return (
                    <button
                      key={oi}
                      onClick={() => responder(qi, oi)}
                      className={classes}
                      disabled={respondida}
                    >
                      <span className="flex items-center justify-between">
                        {opcao}
                        {respondida && isCorreta && <Check size={16} />}
                        {respondida && isEscolhida && !isCorreta && (
                          <X size={16} />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
              {respondida && (
                <div className="mt-1.5 flex items-center justify-between gap-2">
                  <p className="text-xs text-zinc-400">{q.explicacao}</p>
                  <button
                    onClick={() => tentarNovamente(qi)}
                    className="flex shrink-0 items-center gap-1 text-xs text-zinc-500 transition hover:text-primary-light"
                  >
                    <RotateCcw size={12} /> Tentar de novo
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
