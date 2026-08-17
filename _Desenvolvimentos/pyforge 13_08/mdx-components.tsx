import type { MDXComponents } from "mdx/types";
import { Alert } from "@/components/Alert";
import { CodeBlock } from "@/components/CodeBlock";
import { Quiz } from "@/components/Quiz";
import { Diagrama } from "@/components/Diagrama";
import { PyPlayground } from "@/components/PyPlayground";

// Permite usar <Dica>, <Atencao>, <Curiosidade>, <Desafio>, <Projeto>,
// <Resumo> e <ComoUmProgramadorPensa> diretamente nos arquivos .mdx das aulas.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="mb-3x text-3xl font-bold" {...props} />,
    h2: (props) => (
      <h2 className="mb-2x mt-6x text-2xl font-bold" {...props} />
    ),
    h3: (props) => (
      <h3 className="mb-2x mt-4x text-xl font-semibold" {...props} />
    ),
    p: (props) => (
      <p
        className="mb-3x leading-relaxed text-zinc-300 light:text-zinc-700"
        {...props}
      />
    ),
    ul: (props) => <ul className="mb-3x ml-5 list-disc space-y-1" {...props} />,
    ol: (props) => (
      <ol className="mb-3x ml-5 list-decimal space-y-1" {...props} />
    ),
    table: (props) => (
      <div className="mb-3x overflow-x-auto rounded-xl border border-zinc-800 light:border-zinc-200">
        <table className="w-full border-collapse text-sm" {...props} />
      </div>
    ),
    thead: (props) => (
      <thead
        className="bg-zinc-900 text-left text-zinc-300 light:bg-zinc-100 light:text-zinc-700"
        {...props}
      />
    ),
    th: (props) => <th className="px-3 py-2 font-semibold" {...props} />,
    td: (props) => (
      <td
        className="border-t border-zinc-800 px-3 py-2 text-zinc-300 light:border-zinc-200 light:text-zinc-700"
        {...props}
      />
    ),
    code: (props) => <code className="pf-code-inline" {...props} />,
    Dica: (props) => <Alert type="dica" {...props} />,
    Atencao: (props) => <Alert type="atencao" {...props} />,
    Curiosidade: (props) => <Alert type="curiosidade" {...props} />,
    Desafio: (props) => <Alert type="desafio" {...props} />,
    Projeto: (props) => <Alert type="projeto" {...props} />,
    Resumo: (props) => <Alert type="resumo" {...props} />,
    ComoUmProgramadorPensa: (props) => <Alert type="programador" {...props} />,
    CodeBlock,
    Quiz,
    Diagrama,
    PyPlayground,
    ...components,
  };
}
