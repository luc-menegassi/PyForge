import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";
import { PyPlayground } from "@/components/PyPlayground";

const CHECKLIST = [
  "O programa pergunta o valor em reais com input().",
  "O valor é convertido de texto para número decimal com float().",
  "A cotação (reais por dólar) fica em uma variável separada, fácil de atualizar.",
  "O resultado é calculado dividindo o valor em reais pela cotação.",
  "O resultado é exibido com f-string, formatado com duas casas decimais (:.2f).",
  "As variáveis usam nomes claros, em snake_case.",
];

export default function ProjetoModulo02Page() {
  return (
    <article className="pf-card">
      <header className="mb-6x border-b border-zinc-800 pb-4x light:border-zinc-200">
        <p className="mb-1 text-sm font-medium text-success">
          Módulo 2 — Projeto Final
        </p>
        <h1 className="text-3xl font-bold">Conversor de Moedas</h1>
      </header>

      <p className="mb-4x leading-relaxed text-zinc-300 light:text-zinc-700">
        Este projeto reúne variáveis, tipos de dados, entrada e saída, e
        operadores — tudo o que vimos no Módulo 2 — em um programa
        completo: um conversor simples de Reais para Dólares.
      </p>

      <h2 className="mb-2x text-lg font-semibold">O programa</h2>
      <CodeBlock
        filename="conversor.py"
        code={`# Conversor de Moedas — Projeto Final do Módulo 2

cotacao_dolar = 5.42  # reais por 1 dólar — atualize conforme o dia

valor_texto = input("Quanto você quer converter (em reais)? R$ ")
valor_em_reais = float(valor_texto)

valor_em_dolares = valor_em_reais / cotacao_dolar

print(f"R$ {valor_em_reais:.2f} equivalem a US$ {valor_em_dolares:.2f}")`}
      />

      <p className="mb-2x mt-4x text-sm text-zinc-400">
        Teste você mesmo — a primeira linha do campo "Entradas" responde
        ao valor em reais:
      </p>
      <PyPlayground
        titulo="conversor"
        usaInput
        entradasIniciais="100"
        codigoInicial={`cotacao_dolar = 5.42

valor_texto = input("Quanto você quer converter (em reais)? R$ ")
valor_em_reais = float(valor_texto)

valor_em_dolares = valor_em_reais / cotacao_dolar

print(f"R$ {valor_em_reais:.2f} equivalem a US$ {valor_em_dolares:.2f}")`}
      />

      <div className="pf-card !p-3x mt-6x">
        <h2 className="mb-3x font-semibold">Checklist de entrega</h2>
        <ul className="space-y-2">
          {CHECKLIST.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-zinc-300 light:text-zinc-700"
            >
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-success" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4x rounded-xl border border-warning/40 bg-warning/10 p-3x text-sm text-warning">
        <strong>Desafio extra (opcional):</strong> adicione uma segunda
        cotação (por exemplo, Euro) e pergunte ao usuário para qual moeda
        ele quer converter, antes de calcular.
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-03/aula-01" className="pf-btn-primary">
          Ir para o Módulo 3 <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

