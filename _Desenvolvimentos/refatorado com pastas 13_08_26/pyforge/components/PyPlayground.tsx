"use client";

import { useEffect, useRef, useState } from "react";
import {
  Play,
  Loader2,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Keyboard,
} from "lucide-react";

// Pyodide é carregado sob demanda, via CDN, só quando o componente
// aparece na tela — evita pesar o carregamento das páginas que não usam
// o playground (o runtime tem alguns megabytes).
const PYODIDE_CDN =
  "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js";

declare global {
  interface Window {
    loadPyodide?: (config?: { indexURL: string }) => Promise<any>;
  }
}

let pyodidePromise: Promise<any> | null = null;

function getPyodide() {
  if (pyodidePromise) return pyodidePromise;

  pyodidePromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = PYODIDE_CDN;
    script.onload = async () => {
      try {
        const pyodide = await window.loadPyodide!({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/",
        });
        resolve(pyodide);
      } catch (err) {
        reject(err);
      }
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });

  return pyodidePromise;
}

// Preâmbulo injetado antes do código do aluno quando a aula usa input().
// Pyodide roda em uma única thread no navegador, então um input() que
// pausa de verdade no meio da execução exigiria Web Workers com
// SharedArrayBuffer e cabeçalhos especiais de servidor (COOP/COEP) — uma
// infraestrutura própria, fora do escopo agora. Em vez disso, o aluno
// pré-preenche as respostas (uma por linha) e input() consome essa fila,
// na ordem — o mesmo padrão usado por outros playgrounds educacionais de
// Python no navegador.
const PREAMBULO_INPUT = `
import builtins as _pyforge_builtins
_pyforge_input_iter = iter(_pyforge_input_queue)
def input(prompt=""):
    print(prompt, end="")
    try:
        _valor = next(_pyforge_input_iter)
    except StopIteration:
        raise EOFError(
            "Sem mais entradas disponíveis — adicione mais valores no "
            "campo 'Entradas', uma por linha."
        )
    print(_valor)
    return _valor
`;

type Validacao = {
  // Compara a saída (stdout) do código do aluno com o texto esperado.
  // A comparação ignora espaços extras no início/fim de cada linha.
  saidaEsperada: string;
};

export function PyPlayground({
  codigoInicial = "",
  validacao,
  titulo = "Playground",
  usaInput = false,
  entradasIniciais = "",
}: {
  codigoInicial?: string;
  validacao?: Validacao;
  titulo?: string;
  /** Ative quando o código do aluno for usar input(). */
  usaInput?: boolean;
  /** Valores de exemplo pré-preenchidos no campo de entradas, um por linha. */
  entradasIniciais?: string;
}) {
  const [codigo, setCodigo] = useState(codigoInicial);
  const [entradas, setEntradas] = useState(entradasIniciais);
  const [saida, setSaida] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);
  const [preparando, setPreparando] = useState(false);
  const [resultado, setResultado] = useState<"acerto" | "erro" | null>(null);
  const pyodideRef = useRef<any>(null);

  useEffect(() => {
    // Pré-carrega o Pyodide assim que o componente aparece na tela, para
    // que o primeiro clique em "Rodar" não pareça travado.
    setPreparando(true);
    getPyodide()
      .then((pyodide) => {
        pyodideRef.current = pyodide;
      })
      .catch(() => setErro("Não foi possível carregar o interpretador Python."))
      .finally(() => setPreparando(false));
  }, []);

  async function rodar() {
    setCarregando(true);
    setErro(null);
    setSaida(null);
    setResultado(null);

    try {
      const pyodide = pyodideRef.current ?? (await getPyodide());
      pyodideRef.current = pyodide;

      // Redireciona stdout/stderr do Python para strings que conseguimos ler.
      let coletado = "";
      function appendOut(s: string) {
        coletado += s + "\n";
      }
      pyodide.setStdout({ batched: (s: string) => appendOut(s) });
      pyodide.setStderr({ batched: (s: string) => appendOut(s) });

      let codigoFinal = codigo;
      if (usaInput) {
        const fila = entradas.split("\n");
        pyodide.globals.set("_pyforge_input_queue", pyodide.toPy(fila));
        codigoFinal = PREAMBULO_INPUT + "\n" + codigo;
      }

      await pyodide.runPythonAsync(codigoFinal);

      setSaida(coletado.trimEnd());

      if (validacao) {
        const normaliza = (t: string) =>
          t
            .split("\n")
            .map((l) => l.trim())
            .join("\n")
            .trim();
        const passou = normaliza(coletado) === normaliza(validacao.saidaEsperada);
        setResultado(passou ? "acerto" : "erro");
      }
    } catch (e: any) {
      setErro(String(e?.message ?? e));
    } finally {
      setCarregando(false);
    }
  }

  function reiniciar() {
    setCodigo(codigoInicial);
    setEntradas(entradasIniciais);
    setSaida(null);
    setErro(null);
    setResultado(null);
  }

  return (
    <div className="my-4x overflow-hidden rounded-xl border border-zinc-800 light:border-zinc-200">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-3x py-1.5x text-xs text-zinc-400 light:border-zinc-200 light:bg-zinc-100">
        <span className="font-mono">{titulo}.py</span>
        {preparando && (
          <span className="flex items-center gap-1 text-zinc-500">
            <Loader2 size={12} className="animate-spin" /> preparando interpretador…
          </span>
        )}
      </div>

      <textarea
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        spellCheck={false}
        rows={Math.max(6, codigo.split("\n").length + 1)}
        className="w-full resize-y bg-bg-dark-elevated p-3x font-mono text-sm text-zinc-200 outline-none light:bg-zinc-50 light:text-zinc-800"
      />

      {usaInput && (
        <div className="border-t border-zinc-800 px-3x py-2x light:border-zinc-200">
          <label className="mb-1 flex items-center gap-1.5 text-xs font-medium text-zinc-400">
            <Keyboard size={13} />
            Entradas (uma por linha — cada linha responde um input(), em
            ordem)
          </label>
          <textarea
            value={entradas}
            onChange={(e) => setEntradas(e.target.value)}
            spellCheck={false}
            rows={3}
            placeholder={"Ana\n25"}
            className="w-full resize-y rounded-lg border border-zinc-800 bg-bg-dark-elevated p-2 font-mono text-sm text-zinc-200 outline-none focus:border-primary light:border-zinc-300 light:bg-zinc-50 light:text-zinc-800"
          />
        </div>
      )}

      <div className="flex items-center gap-2 border-t border-zinc-800 bg-zinc-900/50 px-3x py-2x light:border-zinc-200 light:bg-zinc-50">
        <button
          onClick={rodar}
          disabled={carregando || preparando}
          className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-white transition hover:bg-primary-dark disabled:opacity-50"
        >
          {carregando ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <Play size={14} />
          )}
          Rodar
        </button>
        <button
          onClick={reiniciar}
          className="flex items-center gap-1.5 rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400 transition hover:text-zinc-200 light:border-zinc-300"
        >
          <RotateCcw size={14} /> Reiniciar
        </button>

        {resultado === "acerto" && (
          <span className="ml-auto flex items-center gap-1 text-sm font-medium text-success">
            <CheckCircle2 size={16} /> Saída correta!
          </span>
        )}
        {resultado === "erro" && (
          <span className="ml-auto flex items-center gap-1 text-sm font-medium text-danger">
            <XCircle size={16} /> Ainda não é isso
          </span>
        )}
      </div>

      {(saida !== null || erro) && (
        <div className="border-t border-zinc-800 bg-black px-3x py-2x font-mono text-sm light:border-zinc-200 light:bg-zinc-950">
          {erro ? (
            <pre className="whitespace-pre-wrap text-danger">{erro}</pre>
          ) : (
            <pre className="whitespace-pre-wrap text-zinc-300">
              {saida || <span className="text-zinc-600">(sem saída)</span>}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}

