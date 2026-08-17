# PyForge — Código-fonte completo

Snapshot gerado para a Base de Conhecimento do Projeto no Claude.ai.
Cada seção abaixo representa um arquivo do repositório. Para retomar o
trabalho, recrie cada arquivo no caminho indicado antes de editar.

---

## Arquivo: `CHANGELOG.md`

```md
# Changelog

Todas as mudanças notáveis deste projeto serão documentadas aqui.
O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

## [Não lançado]

### Corrigido (revisão de conteúdo e profundidade)

- `ValueError` era mencionado em duas aulas (Aula 10/M1 e Aula 3/M2) mas
  nunca tinha entrada no glossário — adicionado.
- `pip` vs `pip3` usado de forma inconsistente dentro da própria Aula 2
  (ensinava `pip3`, mas o exemplo seguinte usava `pip` sem explicação) —
  corrigido para `pip3`, e adicionada uma Dica na Aula 8 explicando por
  que `pip` (sem "3") é seguro depois que o ambiente virtual está ativo.
- A Aula 6/M1 prometia explorar variáveis "com profundidade" no Módulo 2,
  mas a Aula 1/M2 só tinha um parágrafo curto sobre isso — adicionado um
  exemplo prático (`a = 5; b = a; a = 10`) mostrando que reatribuir uma
  variável não afeta outra que apontava para o mesmo valor, com uma Dica
  introduzindo os termos "imutável"/"mutável" (adicionados ao glossário).
- README não mencionava o componente `PyPlayground` (criado depois da
  última atualização da tabela de componentes) — corrigido.

### Adicionado (destaque)

- **Módulo 2 completo**: Aula 4 (Operadores) e o Projeto Final do módulo
  (Conversor de Moedas), fechando Variáveis → Tipos de Dados → Entrada e
  Saída → Operadores → Projeto.
- **Suporte a `input()` no Playground**: campo "Entradas" (uma resposta
  por linha) alimenta uma fila que `input()` consome em ordem — permite
  rodar programas interativos (como o `cadastro.py` da Aula 10) direto no
  navegador. Integrado nas Aulas 10/M1 e 3/M2.
- **Playground com interpretador Python real**: componente `PyPlayground`,
  usando Pyodide (Python compilado para WebAssembly) — o código do aluno
  roda de verdade no navegador, sem servidor. Suporta validação automática
  opcional, comparando a saída do código com um resultado esperado.
  Integrado na Aula 5 do Módulo 1 (uso livre) e na Aula 2 do Módulo 2
  (com validação do desafio). `input()` ainda não é suportado — ver
  `docs/roadmap.md`.

### Corrigido

- **Tema claro não funcionava**: a variante `light:` era usada em quase
  todos os componentes, mas nunca havia sido registrada no Tailwind — o
  tema claro não aplicava nenhuma dessas regras. Adicionado plugin que
  registra `light:` como `html.light &`.
- `mdx-components.tsx` não estava nos caminhos escaneados pelo Tailwind
  (`content` em `tailwind.config.ts`) — risco de as classes de tipografia
  do conteúdo das aulas serem removidas em build de produção.
- Tabelas Markdown (usadas na Aula 3) não são suportadas pelo MDX puro —
  adicionado `remark-gfm` e estilos de tabela em `mdx-components.tsx`.
- Aviso de hidratação esperado no React (`<html>` muda de classe antes da
  hidratação, conforme o tema salvo) — adicionado `suppressHydrationWarning`.
- Classe `prose-pyforge`, usada em todas as páginas de aula, nunca havia
  sido definida — agora tem uma definição mínima em `globals.css`.
- Duas fontes divergentes de cheatsheet (`docs/cheatsheet-modulo-01.md`
  estático e a página `/cheatsheet`) — o Markdown agora só aponta para a
  página viva, que passa a ser a fonte única.

### Adicionado

- Componente `Diagrama` — diagramas de fluxo em SVG puro, no padrão visual
  do Design System, usados nas Aulas 1, 6 e 7.
- Botão "tentar de novo" no `Quiz`, por pergunta e para reiniciar o quiz
  inteiro.
- Página `/cheatsheet` — referência rápida de comandos e funções,
  pesquisável, organizada por categoria (Python, Terminal, Pip/Ambiente,
  Sintaxe).
- Página `/glossario` — referência de conceitos e termos técnicos,
  pesquisável, com a aula de origem de cada termo.
- Componente `ReferenceSearch` reutilizável para busca client-side.
- Links de Cheatsheet e Glossário na Navbar.

## [0.2.0] — Módulo 1 completo

### Adicionado

- Aulas 2 a 10 do Módulo 1, em MDX, no formato definitivo da plataforma:
  instalação do Python, VS Code, terminal, primeiro programa, como o
  interpretador funciona, leitura de erros, organização de projetos, boas
  práticas e o projeto final do módulo.
- Componente `Quiz` — perguntas de múltipla escolha com correção
  imediata, usado na revisão de fim de módulo.
- Página dedicada ao Projeto Final do Módulo 1 (`/curso/modulo-01/projeto`)
  com checklist de entrega.
- `docs/cheatsheet-modulo-01.md` — cheatsheet com comandos de terminal,
  comandos do Python/pip/venv, erros comuns e convenções de estilo.
- Sidebar do curso atualizada com as 10 aulas e o projeto do módulo.

## [0.1.0] — Fundação

### Adicionado

- Estrutura inicial do projeto com Next.js 15, TypeScript e Tailwind CSS.
- Design System v1.0 (paleta, tipografia, espaçamento) documentado e
  implementado em `tailwind.config.ts`.
- Componentes base: `Navbar`, `Sidebar`, `Alert` (Dica, Atenção,
  Curiosidade, Desafio, Projeto, Resumo, Como um programador pensa),
  `CodeBlock`, `ProgressBar`, `Logo`, `ThemeToggle`.
- Suporte a MDX para o conteúdo das aulas, com componentes globais via
  `mdx-components.tsx`.
- Landing page com apresentação dos 12 módulos planejados.
- Layout da área de curso com navegação lateral por módulo/aula.
- Aula 1 do Módulo 1 — "Bem-vindo ao Mundo da Programação" — publicada no
  formato definitivo da plataforma.
- Documentação inicial: `README.md`, `docs/design-system.md`,
  `docs/roadmap.md`.

```

---

## Arquivo: `README.md`

```md
# PyForge

**Aprenda Python. Construa o futuro.**

PyForge é uma plataforma moderna de ensino de Python: um curso completo
(12 módulos, 100+ aulas planejadas) construído junto com uma aplicação web
open source, em vez de apenas um punhado de textos soltos.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/) para o conteúdo das aulas
- [Lucide Icons](https://lucide.dev/)

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Estrutura do projeto

```
pyforge/
├── app/                       # Rotas (App Router)
│   ├── page.tsx                # Landing page
│   ├── cheatsheet/              # Referência de comandos, pesquisável
│   ├── glossario/               # Referência de conceitos, pesquisável
│   └── curso/
│       ├── layout.tsx            # Sidebar + navegação do curso
│       └── modulo-01/
│           ├── aula-01/ ... aula-10/   # Uma pasta de rota por aula
│           └── projeto/          # Projeto final do módulo
├── components/                 # Componentes reutilizáveis (Navbar, Alert,
│                                  CodeBlock, Diagrama, Quiz, PyPlayground...)
├── content/                     # Aulas em MDX — fonte canônica do conteúdo
│   └── modulo-01/
│       └── aula-01.mdx ... aula-10.mdx
├── lib/                         # Dados estruturados (cheatsheet, glossário)
├── docs/                        # Documentação do projeto (design system, roadmap)
├── mdx-components.tsx            # Mapeamento global dos componentes usados no MDX
└── tailwind.config.ts            # Paleta e tokens do Design System
```

## Componentes de conteúdo disponíveis no MDX

Ao escrever uma aula em `.mdx`, os seguintes componentes já estão
disponíveis sem necessidade de import:

| Componente | Uso |
|---|---|
| `<Dica>` | Atalhos e boas práticas (azul) |
| `<Atencao>` | Erros e alertas comuns (vermelho) |
| `<Curiosidade>` | Histórias e fatos da computação (roxo) |
| `<Desafio>` | Exercício de maior dificuldade (laranja) |
| `<Projeto>` | Projeto prático de fim de módulo (verde) |
| `<Resumo>` | Revisão rápida ao final da aula (cinza) |
| `<ComoUmProgramadorPensa>` | Seção de raciocínio antes do código (roxo) |
| `<CodeBlock filename="..." code={...} />` | Bloco de código com nome de arquivo e botão copiar |
| `<Diagrama titulo="..." passos={[...]} />` | Diagrama de fluxo vertical em SVG |
| `<Quiz perguntas={[...]} />` | Quiz de múltipla escolha com correção imediata |
| `<PyPlayground codigoInicial={...} usaInput validacao={{saidaEsperada}} />` | Interpretador Python real no navegador (Pyodide), com suporte a `input()` via fila de entradas e validação automática opcional |

Tabelas Markdown também funcionam (via `remark-gfm`) e já saem estilizadas.

Veja `content/modulo-01/aula-01.mdx` e `aula-10.mdx` como referência de uso.

## Cheatsheet e Glossário

Além das aulas, a plataforma mantém duas referências rápidas, alimentadas
por `lib/cheatsheet.ts` e `lib/glossario.ts` — atualize esses arquivos ao
publicar novas aulas para que `/cheatsheet` e `/glossario` cresçam junto
com o curso.

## Design System

A paleta, tipografia e espaçamento estão documentados em
[`docs/design-system.md`](./docs/design-system.md) e implementados em
`tailwind.config.ts`.

## Roadmap

Veja [`docs/roadmap.md`](./docs/roadmap.md) para os próximos releases.

## Licença

MIT — veja [`LICENSE`](./LICENSE).

```

---

## Arquivo: `app/cheatsheet/page.tsx`

```tsx
"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ReferenceSearch, useFilteredItems } from "@/components/ReferenceSearch";
import { CHEATSHEET_MODULO_01, CHEATSHEET_MODULO_02, CHEATSHEET_MODULO_03, CheatItem } from "@/lib/cheatsheet";

const TODOS_OS_ITENS = [...CHEATSHEET_MODULO_01, ...CHEATSHEET_MODULO_02, ...CHEATSHEET_MODULO_03];

const CATEGORIAS: CheatItem["categoria"][] = [
  "Python",
  "Terminal",
  "Pip / Ambiente",
  "Sintaxe",
];

export default function CheatsheetPage() {
  const [query, setQuery] = useState("");
  const itens = useFilteredItems(TODOS_OS_ITENS, query, (item) => [
    item.comando,
    item.descricao,
  ]);

  return (
    <>
      <Navbar />
      <main className="pf-container py-6x">
        <div className="mb-4x flex items-center gap-2">
          <Zap size={22} className="text-accent" />
          <h1 className="text-2xl font-bold">Cheatsheet</h1>
        </div>
        <p className="mb-4x text-sm text-zinc-400">
          Comandos e funções, resumidos em uma linha — a referência rápida
          para consultar enquanto pratica. Cresce a cada aula publicada.
        </p>

        <ReferenceSearch placeholder="Buscar um comando..." onChange={setQuery} />

        <div className="space-y-6x">
          {CATEGORIAS.map((categoria) => {
            const doGrupo = itens.filter((i) => i.categoria === categoria);
            if (doGrupo.length === 0) return null;
            return (
              <div key={categoria}>
                <h2 className="mb-2x text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  {categoria}
                </h2>
                <div className="overflow-hidden rounded-xl border border-zinc-800 light:border-zinc-200">
                  {doGrupo.map((item, i) => (
                    <div
                      key={`${item.categoria}-${item.comando}`}
                      className={`flex items-center justify-between gap-3 px-3x py-2x text-sm ${
                        i !== 0 ? "border-t border-zinc-800 light:border-zinc-200" : ""
                      }`}
                    >
                      <code className="pf-code-inline shrink-0">
                        {item.comando}
                      </code>
                      <span className="flex-1 text-right text-zinc-400">
                        {item.descricao}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          {itens.length === 0 && (
            <p className="text-sm text-zinc-500">Nenhum comando encontrado.</p>
          )}
        </div>
      </main>
    </>
  );
}

```

---

## Arquivo: `app/curso/layout.tsx`

```tsx
import { Navbar } from "@/components/Navbar";
import { Sidebar, SidebarModulo } from "@/components/Sidebar";

// Fonte única de navegação do curso.
// Conforme o curso cresce, os módulos/aulas seguintes entram aqui.
const MODULOS: SidebarModulo[] = [
  {
    slug: "modulo-01",
    titulo: "Módulo 1 — Primeiros Passos",
    aulas: [
      { slug: "aula-01", titulo: "Aula 1 — Bem-vindo ao mundo da programação" },
      { slug: "aula-02", titulo: "Aula 2 — Instalando o Python" },
      { slug: "aula-03", titulo: "Aula 3 — Escolhendo uma IDE" },
      { slug: "aula-04", titulo: "Aula 4 — Terminal para iniciantes" },
      { slug: "aula-05", titulo: "Aula 5 — Seu primeiro programa" },
      { slug: "aula-06", titulo: "Aula 6 — Como o Python executa um programa" },
      { slug: "aula-07", titulo: "Aula 7 — Erros fazem parte" },
      { slug: "aula-08", titulo: "Aula 8 — Organizando projetos" },
      { slug: "aula-09", titulo: "Aula 9 — Boas práticas desde o primeiro dia" },
      { slug: "aula-10", titulo: "Aula 10 — Projeto final do módulo" },
      { slug: "projeto", titulo: "🏆 Projeto: Sistema de Cadastro" },
    ],
  },
  {
    slug: "modulo-02",
    titulo: "Módulo 2 — Fundamentos",
    aulas: [
      { slug: "aula-01", titulo: "Aula 1 — Variáveis" },
      { slug: "aula-02", titulo: "Aula 2 — Tipos de dados" },
      { slug: "aula-03", titulo: "Aula 3 — Entrada e saída" },
      { slug: "aula-04", titulo: "Aula 4 — Operadores" },
      { slug: "projeto", titulo: "🏆 Projeto: Conversor de Moedas" },
    ],
  },
  {
    slug: "modulo-03",
    titulo: "Módulo 3 — Controle de Fluxo",
    aulas: [
      { slug: "aula-01", titulo: "Aula 1 — Condicionais (if/elif/else)" },
      { slug: "aula-02", titulo: "Aula 2 — Laço while" },
      { slug: "aula-03", titulo: "Aula 3 — Laço for e range" },
    ],
  },
];

export default function CursoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="pf-container flex flex-col gap-6x py-4x md:flex-row">
        <Sidebar modulos={MODULOS} />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </>
  );
}

```

---

## Arquivo: `app/curso/modulo-01/aula-01/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-01/aula-01.mdx";

export default function Aula01Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link
          href="/curso/modulo-01/aula-02"
          className="pf-btn-primary"
        >
          Próxima aula <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-01/aula-02/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-01/aula-02.mdx";

export default function Aula02Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-01/aula-03" className="pf-btn-primary">
          Próxima aula <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-01/aula-03/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-01/aula-03.mdx";

export default function Aula03Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-01/aula-04" className="pf-btn-primary">
          Próxima aula <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-01/aula-04/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-01/aula-04.mdx";

export default function Aula04Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-01/aula-05" className="pf-btn-primary">
          Próxima aula <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-01/aula-05/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-01/aula-05.mdx";

export default function Aula05Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-01/aula-06" className="pf-btn-primary">
          Próxima aula <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-01/aula-06/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-01/aula-06.mdx";

export default function Aula06Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-01/aula-07" className="pf-btn-primary">
          Próxima aula <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-01/aula-07/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-01/aula-07.mdx";

export default function Aula07Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-01/aula-08" className="pf-btn-primary">
          Próxima aula <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-01/aula-08/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-01/aula-08.mdx";

export default function Aula08Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-01/aula-09" className="pf-btn-primary">
          Próxima aula <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-01/aula-09/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-01/aula-09.mdx";

export default function Aula09Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-01/aula-10" className="pf-btn-primary">
          Próxima aula <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-01/aula-10/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-01/aula-10.mdx";

export default function Aula10Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-01/projeto" className="pf-btn-primary">
          Ver projeto final do módulo <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-01/projeto/page.tsx`

```tsx
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

```

---

## Arquivo: `app/curso/modulo-02/aula-01/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-02/aula-01.mdx";

export default function Modulo02Aula01Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-02/aula-02" className="pf-btn-primary">
          Próxima aula <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-02/aula-02/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-02/aula-02.mdx";

export default function Modulo02Aula02Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-02/aula-03" className="pf-btn-primary">
          Próxima aula <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-02/aula-03/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-02/aula-03.mdx";

export default function Modulo02Aula03Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-02/aula-04" className="pf-btn-primary">
          Próxima aula <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-02/aula-04/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-02/aula-04.mdx";

export default function Modulo02Aula04Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-02/projeto" className="pf-btn-primary">
          Ver projeto do módulo <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-02/projeto/page.tsx`

```tsx
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

```

---

## Arquivo: `app/curso/modulo-03/aula-01/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-03/aula-01.mdx";

export default function Modulo03Aula01Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-03/aula-02" className="pf-btn-primary">
          Próxima aula <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-03/aula-02/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-03/aula-02.mdx";

export default function Modulo03Aula02Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-03/aula-03" className="pf-btn-primary">
          Próxima aula <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/curso/modulo-03/aula-03/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LessonHeader } from "@/components/LessonHeader";
import Aula, { meta } from "@/content/modulo-03/aula-03.mdx";

export default function Modulo03Aula03Page() {
  return (
    <article className="pf-card">
      <LessonHeader
        modulo={meta.modulo}
        titulo={meta.titulo}
        duracao={meta.duracao}
        nivel={meta.nivel}
      />

      <div className="prose-pyforge">
        <Aula />
      </div>

      <footer className="mt-8x flex justify-end border-t border-zinc-800 pt-4x light:border-zinc-200">
        <Link href="/curso/modulo-03/aula-04" className="pf-btn-primary">
          Próxima aula <ArrowRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

```

---

## Arquivo: `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    color-scheme: dark;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-bg-dark text-zinc-100 antialiased;
    font-feature-settings: "cv11", "ss01";
  }

  html.light body {
    @apply bg-bg-light text-zinc-900;
  }

  ::selection {
    @apply bg-primary/30;
  }
}

@layer components {
  .pf-container {
    @apply mx-auto max-w-6xl px-4x;
  }

  .pf-card {
    @apply rounded-2xl border border-zinc-800 bg-bg-dark-elevated p-4x;
  }

  html.light .pf-card {
    @apply border-zinc-200 bg-bg-light-elevated;
  }

  .pf-btn-primary {
    @apply inline-flex items-center gap-2 rounded-xl bg-primary px-3x py-1.5x font-medium text-white transition hover:bg-primary-dark;
  }

  .pf-code-inline {
    @apply rounded bg-zinc-800/70 px-1.5 py-0.5 font-mono text-sm text-accent;
  }

  html.light .pf-code-inline {
    @apply bg-zinc-200 text-primary-dark;
  }

  /* Envolve o conteúdo renderizado do MDX de cada aula. A tipografia em
     si já vem do mapeamento em mdx-components.tsx; aqui só garantimos que
     o primeiro e o último elemento não deixem espaço extra nas bordas
     do card da aula. */
  .prose-pyforge > :first-child {
    @apply mt-0;
  }

  .prose-pyforge > :last-child {
    @apply mb-0;
  }
}

```

---

## Arquivo: `app/glossario/page.tsx`

```tsx
"use client";

import { useState } from "react";
import { BookMarked } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ReferenceSearch, useFilteredItems } from "@/components/ReferenceSearch";
import { GLOSSARIO_MODULO_01, GLOSSARIO_MODULO_02, GLOSSARIO_MODULO_03 } from "@/lib/glossario";

const TODOS_OS_TERMOS = [...GLOSSARIO_MODULO_01, ...GLOSSARIO_MODULO_02, ...GLOSSARIO_MODULO_03];

export default function GlossarioPage() {
  const [query, setQuery] = useState("");
  const itens = useFilteredItems(TODOS_OS_TERMOS, query, (item) => [
    item.termo,
    item.definicao,
  ]);

  const ordenados = [...itens].sort((a, b) => a.termo.localeCompare(b.termo));

  return (
    <>
      <Navbar />
      <main className="pf-container py-6x">
        <div className="mb-4x flex items-center gap-2">
          <BookMarked size={22} className="text-curiosity" />
          <h1 className="text-2xl font-bold">Glossário</h1>
        </div>
        <p className="mb-4x text-sm text-zinc-400">
          Os conceitos por trás do código, explicados em uma frase. Cresce a
          cada aula publicada — hoje reúne os termos dos Módulos 1 a 3.
        </p>

        <ReferenceSearch placeholder="Buscar um termo..." onChange={setQuery} />

        <div className="grid gap-3 sm:grid-cols-2">
          {ordenados.map((item) => (
            <div key={`${item.aula}-${item.termo}`} className="pf-card !p-3x">
              <div className="mb-1 flex items-center justify-between gap-2">
                <h3 className="font-semibold text-curiosity">{item.termo}</h3>
                <span className="shrink-0 text-xs text-zinc-500">
                  {item.aula}
                </span>
              </div>
              <p className="text-sm text-zinc-300 light:text-zinc-700">
                {item.definicao}
              </p>
            </div>
          ))}
          {ordenados.length === 0 && (
            <p className="text-sm text-zinc-500">Nenhum termo encontrado.</p>
          )}
        </div>
      </main>
    </>
  );
}

```

---

## Arquivo: `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PyForge — Aprenda Python. Construa o futuro.",
  description:
    "Plataforma moderna de ensino de Python com conteúdo interativo, projetos reais e uma trilha completa do zero ao avançado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        {/* Tema: aplica a classe salva no localStorage antes da hidratação, evitando flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('pyforge-theme');
                const theme = saved || 'dark';
                document.documentElement.classList.remove('dark', 'light');
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

```

---

## Arquivo: `app/page.tsx`

```tsx
import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Rocket } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const MODULOS = [
  { titulo: "Primeiros Passos", desc: "Programação, algoritmos e ambiente" },
  { titulo: "Fundamentos", desc: "Variáveis, tipos de dados e operadores" },
  { titulo: "Controle de Fluxo", desc: "Condições, laços e repetição" },
  { titulo: "Estruturas de Dados", desc: "Listas, tuplas, sets e dicionários" },
  { titulo: "Funções", desc: "Parâmetros, escopo, lambda e recursão" },
  { titulo: "Orientação a Objetos", desc: "Classes, herança e polimorfismo" },
  { titulo: "Arquivos", desc: "TXT, CSV, JSON, Excel e PDF" },
  { titulo: "Automação", desc: "Scripts, web scraping e APIs" },
  { titulo: "Banco de Dados", desc: "SQLite, PostgreSQL e SQLAlchemy" },
  { titulo: "Interface Gráfica", desc: "Tkinter, CustomTkinter e PySide6" },
  { titulo: "Inteligência Artificial", desc: "APIs, agentes e RAG com Python" },
  { titulo: "Projeto Final", desc: "Software completo, do zero à entrega" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pf-container flex flex-col items-center py-8x text-center">
          <span className="mb-3x rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400 light:border-zinc-300">
            12 módulos · 100+ aulas · projetos reais
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Aprenda <span className="text-primary">Python</span>.
            <br />
            Construa o <span className="text-accent">futuro</span>.
          </h1>
          <p className="mt-3x max-w-xl text-zinc-400">
            Uma trilha completa, do zero absoluto até projetos com interface
            gráfica, banco de dados e inteligência artificial.
          </p>
          <div className="mt-4x flex flex-wrap items-center justify-center gap-3">
            <Link href="/curso/modulo-01/aula-01" className="pf-btn-primary">
              Começar curso <ArrowRight size={16} />
            </Link>
            <Link
              href="#modulos"
              className="rounded-xl border border-zinc-800 px-3x py-1.5x font-medium text-zinc-300 transition hover:border-primary hover:text-primary light:border-zinc-300"
            >
              Ver módulos
            </Link>
          </div>
        </section>

        {/* Destaques */}
        <section className="pf-container grid gap-3x py-4x md:grid-cols-3">
          {[
            {
              icon: <BookOpen size={20} />,
              title: "Aulas completas",
              desc: "Teoria, analogias, exemplos comentados e exercícios em cada aula.",
            },
            {
              icon: <Code2 size={20} />,
              title: "Projetos reais",
              desc: "Cada módulo termina em um projeto aplicado, não só exercícios soltos.",
            },
            {
              icon: <Rocket size={20} />,
              title: "Forge Path",
              desc: "Acompanhe sua evolução com progresso, XP e desbloqueios por módulo.",
            },
          ].map((item) => (
            <div key={item.title} className="pf-card">
              <div className="mb-2x flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary-light">
                {item.icon}
              </div>
              <h3 className="mb-1 font-semibold">{item.title}</h3>
              <p className="text-sm text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Módulos */}
        <section id="modulos" className="pf-container py-6x">
          <h2 className="mb-4x text-2xl font-bold">Módulos do curso</h2>
          <div className="grid gap-3x sm:grid-cols-2 lg:grid-cols-3">
            {MODULOS.map((m, i) => (
              <div key={m.titulo} className="pf-card">
                <span className="text-xs font-semibold text-primary-light">
                  Módulo {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-semibold">{m.titulo}</h3>
                <p className="mt-1 text-sm text-zinc-400">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-zinc-800 py-4x text-center text-sm text-zinc-500 light:border-zinc-200">
          PyForge — construído em Next.js, React, TypeScript e Tailwind CSS.
        </footer>
      </main>
    </>
  );
}

```

---

## Arquivo: `components/Alert.tsx`

```tsx
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

```

---

## Arquivo: `components/CodeBlock.tsx`

```tsx
"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CodeBlock({
  filename,
  code,
}: {
  filename?: string;
  code: string;
}) {
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/\n$/, "").split("\n");

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="my-3x overflow-hidden rounded-xl border border-zinc-800 light:border-zinc-200">
      {filename && (
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-3x py-1.5x text-xs text-zinc-400 light:border-zinc-200 light:bg-zinc-100">
          <span className="font-mono">{filename}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-zinc-400 transition hover:text-accent"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copiado" : "Copiar"}
          </button>
        </div>
      )}
      <pre className="overflow-x-auto bg-bg-dark-elevated p-3x font-mono text-sm light:bg-zinc-50">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-3x select-none text-zinc-600">
                {String(i + 1).padStart(2, " ")}
              </span>
              <span className="text-zinc-200 light:text-zinc-800">{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}

```

---

## Arquivo: `components/Diagrama.tsx`

```tsx
type DiagramaStep = {
  titulo: string;
  descricao?: string;
};

const CORES = [
  { border: "#2563EB", bg: "rgba(37,99,235,0.08)" }, // azul
  { border: "#A855F7", bg: "rgba(168,85,247,0.08)" }, // roxo
  { border: "#FACC15", bg: "rgba(250,204,21,0.08)" }, // amarelo
  { border: "#22C55E", bg: "rgba(34,197,94,0.08)" }, // verde
  { border: "#F97316", bg: "rgba(249,115,22,0.08)" }, // laranja
];

/**
 * Diagrama de fluxo vertical, desenhado em SVG puro (sem imagens externas),
 * seguindo o padrão visual do Design System: caixas arredondadas, linhas
 * suaves, cores consistentes por posição no fluxo.
 */
export function Diagrama({
  titulo,
  passos,
}: {
  titulo?: string;
  passos: DiagramaStep[];
}) {
  const boxHeight = 64;
  const gap = 40;
  const width = 340;
  const totalHeight = passos.length * boxHeight + (passos.length - 1) * gap + 16;

  return (
    <div className="my-4x flex flex-col items-center rounded-2xl border border-zinc-800 bg-bg-dark-elevated p-4x light:border-zinc-200 light:bg-bg-light-elevated">
      {titulo && (
        <p className="mb-3x text-sm font-semibold text-zinc-300 light:text-zinc-700">
          {titulo}
        </p>
      )}
      <svg
        width="100%"
        viewBox={`0 0 ${width} ${totalHeight}`}
        className="max-w-sm"
      >
        {passos.map((passo, i) => {
          const y = 8 + i * (boxHeight + gap);
          const cor = CORES[i % CORES.length];
          return (
            <g key={i}>
              <rect
                x={20}
                y={y}
                width={width - 40}
                height={boxHeight}
                rx={14}
                fill={cor.bg}
                stroke={cor.border}
                strokeWidth={1.5}
              />
              <text
                x={width / 2}
                y={y + boxHeight / 2 - (passo.descricao ? 8 : 0)}
                textAnchor="middle"
                fontSize={14}
                fontWeight={600}
                fill={cor.border}
                fontFamily="Inter, sans-serif"
              >
                {passo.titulo}
              </text>
              {passo.descricao && (
                <text
                  x={width / 2}
                  y={y + boxHeight / 2 + 14}
                  textAnchor="middle"
                  fontSize={11}
                  fill="#a1a1aa"
                  fontFamily="Inter, sans-serif"
                >
                  {passo.descricao}
                </text>
              )}
              {i < passos.length - 1 && (
                <>
                  <line
                    x1={width / 2}
                    y1={y + boxHeight}
                    x2={width / 2}
                    y2={y + boxHeight + gap - 8}
                    stroke="#52525b"
                    strokeWidth={1.5}
                  />
                  <polygon
                    points={`${width / 2 - 5},${y + boxHeight + gap - 8} ${width / 2 + 5},${y + boxHeight + gap - 8} ${width / 2},${y + boxHeight + gap}`}
                    fill="#52525b"
                  />
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

```

---

## Arquivo: `components/LessonHeader.tsx`

```tsx
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

```

---

## Arquivo: `components/Logo.tsx`

```tsx
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

```

---

## Arquivo: `components/Navbar.tsx`

```tsx
import Link from "next/link";
import { Search } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-bg-dark/80 backdrop-blur light:border-zinc-200 light:bg-bg-light/80">
      <div className="pf-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
          <Link href="/curso" className="transition hover:text-zinc-100">
            Curso
          </Link>
          <Link href="/cheatsheet" className="transition hover:text-zinc-100">
            Cheatsheet
          </Link>
          <Link href="/glossario" className="transition hover:text-zinc-100">
            Glossário
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Buscar"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-primary hover:text-primary light:border-zinc-300"
          >
            <Search size={16} />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

```

---

## Arquivo: `components/ProgressBar.tsx`

```tsx
export function ProgressBar({
  value,
  max,
  label,
}: {
  value: number;
  max: number;
  label?: string;
}) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div>
      {label && (
        <div className="mb-1 flex items-center justify-between text-xs text-zinc-400">
          <span>{label}</span>
          <span>{pct}%</span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800 light:bg-zinc-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

```

---

## Arquivo: `components/PyPlayground.tsx`

```tsx
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

```

---

## Arquivo: `components/Quiz.tsx`

```tsx
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

```

---

## Arquivo: `components/ReferenceSearch.tsx`

```tsx
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

```

---

## Arquivo: `components/Sidebar.tsx`

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Circle } from "lucide-react";

export type SidebarAula = { slug: string; titulo: string };
export type SidebarModulo = { slug: string; titulo: string; aulas: SidebarAula[] };

export function Sidebar({ modulos }: { modulos: SidebarModulo[] }) {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 border-zinc-800 light:border-zinc-200 md:w-64 md:border-r md:pr-3x">
      <nav className="space-y-4x">
        {modulos.map((modulo) => (
          <div key={modulo.slug}>
            <p className="mb-1.5x text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {modulo.titulo}
            </p>
            <ul className="space-y-0.5">
              {modulo.aulas.map((aula) => {
                const href = `/curso/${modulo.slug}/${aula.slug}`;
                const active = pathname === href;
                return (
                  <li key={aula.slug}>
                    <Link
                      href={href}
                      className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition ${
                        active
                          ? "bg-primary/10 text-primary-light font-medium"
                          : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
                      }`}
                    >
                      <Circle size={12} className="shrink-0 opacity-50" />
                      {aula.titulo}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

```

---

## Arquivo: `components/ThemeToggle.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("pyforge-theme") as "dark" | "light") || "dark";
    setTheme(saved);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
    localStorage.setItem("pyforge-theme", next);
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema claro/escuro"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-primary hover:text-primary dark:border-zinc-800 light:border-zinc-300"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

```

---

## Arquivo: `content/modulo-01/aula-01.mdx`

```mdx
export const meta = {
  modulo: "Módulo 1 — Primeiros Passos no Python",
  titulo: "Aula 1 — Bem-vindo ao Mundo da Programação",
  duracao: "30 a 40 minutos",
  nivel: "Iniciante (nenhum conhecimento prévio necessário)",
};

## Objetivos da aula

Ao finalizar esta aula, você será capaz de:

- Entender o que é programação.
- Compreender como um computador executa tarefas.
- Saber o que é um algoritmo.
- Diferenciar hardware de software.
- Entender por que Python é uma excelente linguagem para começar.
- Conhecer a estrutura do restante do curso.

## Antes de começar

Se esta é sua primeira experiência com programação, talvez você imagine que
programadores passam o dia digitando códigos cheios de símbolos difíceis.

A realidade é diferente. Programar significa, acima de tudo, **resolver
problemas**. A linguagem de programação é apenas a ferramenta usada para
dizer ao computador como resolver esses problemas.

Durante este curso, vamos aprender muito mais do que Python: vamos aprender
a **pensar como programadores**.

## O que é programação?

Imagine que você pediu uma pizza. Você liga para a pizzaria e diz: "Quero
uma pizza grande de calabresa."

Para você, esse pedido é simples. Mas, dentro da pizzaria, existe uma
sequência de etapas: anotar o pedido, preparar a massa, adicionar o molho,
colocar o queijo, adicionar a calabresa, assar, cortar, embalar e enviar
para entrega.

Você não precisa conhecer todas essas etapas — basta informar o resultado
esperado. Com um computador, isso não acontece: ele precisa receber cada
passo, exatamente na ordem correta. **Programação é justamente escrever
essa sequência de instruções.**

## Como um computador "pensa"?

Na verdade, ele não pensa. O computador apenas executa instruções.

Se você disser "some 10 + 20", ele soma. Se disser "escreva Olá", ele
escreve. Se disser "repita isso mil vezes", ele repetirá mil vezes.

O computador não questiona, não interpreta intenções e não tenta adivinhar
o que você quis dizer. Ele faz exatamente o que foi solicitado — nem mais,
nem menos. Essa característica explica por que pequenos erros podem gerar
resultados completamente diferentes do esperado.

## Hardware e Software

### Hardware

Hardware é tudo aquilo que você pode tocar: processador, memória RAM, SSD,
HD, placa de vídeo, teclado, mouse, monitor. São os componentes físicos do
computador.

### Software

Software é a parte lógica: sistema operacional, navegador, editor de
texto, jogos, aplicativos, Python.

Você pode imaginar o computador como um corpo humano: o hardware seria o
corpo, o software seria a mente. Um sem o outro praticamente não tem
utilidade.

## O que é um algoritmo?

Essa é provavelmente a palavra mais importante de toda a programação.

> Um algoritmo é simplesmente uma sequência organizada de passos para
> resolver um problema.

Você utiliza algoritmos diariamente sem perceber — escovar os dentes,
preparar café. Programação nada mais é do que escrever algoritmos para
computadores.

<Diagrama
  titulo="Do problema ao resultado"
  passos={[
    { titulo: "Problema", descricao: "o que você quer resolver" },
    { titulo: "Algoritmo", descricao: "os passos, em português" },
    { titulo: "Código Python", descricao: "os passos traduzidos" },
    { titulo: "Resultado", descricao: "o computador executa" },
  ]}
/>

## Como um programador pensa

<ComoUmProgramadorPensa>
  Uma habilidade importante é separar o problema da solução. Imagine que
  alguém diga: "Quero um programa que organize minhas fotos." Um iniciante
  costuma pensar imediatamente em código. Um programador experiente faz
  perguntas primeiro: onde estão as fotos? Como serão organizadas? Por
  data, nome ou tamanho? O que fazer com arquivos duplicados? Só depois de
  entender o problema ele começa a programar.
</ComoUmProgramadorPensa>

## Linguagens de programação

Existem centenas de linguagens, cada uma criada com objetivos diferentes.
Entre as mais conhecidas estão Python, C, C++, Java, C#, JavaScript, Go,
Rust, Kotlin e Swift. Nenhuma é "a melhor" para tudo — neste curso
utilizaremos **Python**.

## Por que aprender Python?

Python é considerada uma das linguagens mais amigáveis para iniciantes,
com sintaxe limpa e próxima da linguagem humana:

<CodeBlock filename="ola_mundo.py" code={`print("Olá, mundo!")`} />

Além disso, Python é utilizada em Inteligência Artificial, Ciência de
Dados, Automação, Desenvolvimento Web, Segurança da Informação, Computação
Científica, Robótica, APIs e DevOps.

<Dica>
  Aprender Python abre portas para diversos caminhos profissionais — você
  não precisa escolher uma área agora. A base que constrói aqui serve para
  todas elas.
</Dica>

## Mitos sobre programação

<Atencao title="Preciso ser bom em matemática?">
  Não. Você precisa desenvolver raciocínio lógico. Grande parte dos
  programadores utiliza apenas matemática básica no dia a dia.
</Atencao>

<Atencao title="Programação é muito difícil?">
  Pode parecer desafiadora no início, assim como aprender um novo idioma.
  Com prática constante, os conceitos passam a fazer sentido.
</Atencao>

<Atencao title="Só gênios conseguem programar?">
  Falso. Programação é uma habilidade desenvolvida com estudo, prática e
  persistência.
</Atencao>

<Curiosidade>
  A palavra "bug", usada para indicar um erro em um programa, ficou famosa
  em 1947 quando uma mariposa ficou presa em um relé do computador Harvard
  Mark II, causando uma falha. O termo já existia na engenharia, mas esse
  episódio ajudou a popularizá-lo na computação.
</Curiosidade>

## Resumo da aula

<Resumo>
  Programação é resolver problemas por meio de instruções. Computadores
  executam exatamente o que recebem. Hardware é a parte física, software é
  a parte lógica. Algoritmos são sequências de passos. Python é uma
  excelente linguagem para começar.
</Resumo>

## Exercícios

1. Explique, com suas próprias palavras, o que é programação.
2. Cite cinco exemplos de hardware.
3. Cite cinco exemplos de software.
4. O que é um algoritmo?
5. Escreva o algoritmo para preparar um sanduíche.
6. Escreva o algoritmo para trocar uma lâmpada.
7. Por que um computador não "pensa"?

<Desafio>
  Escolha uma atividade do seu dia a dia (por exemplo, lavar roupa,
  preparar um almoço simples ou organizar uma mochila) e escreva um
  algoritmo com 10 a 20 passos, em ordem, como se fosse para um robô
  executar. Não use linguagem de programação — apenas instruções em
  português. Objetivo: perceber que programar começa muito antes de
  escrever código.
</Desafio>

## Próxima aula

Na **Aula 2 — Instalando o Python e preparando o ambiente**, vamos instalar
todas as ferramentas necessárias, entender o que é o interpretador Python,
conhecer o pip e preparar um ambiente de desenvolvimento organizado tanto
para Linux quanto para Windows.

```

---

## Arquivo: `content/modulo-01/aula-02.mdx`

```mdx
export const meta = {
  modulo: "Módulo 1 — Primeiros Passos no Python",
  titulo: "Aula 2 — Instalando o Python e Preparando o Ambiente",
  duracao: "25 a 35 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Instalar o Python no seu sistema operacional.
- Verificar se a instalação foi concluída com sucesso.
- Entender o que é o `pip` e para que serve.
- Preparar um ambiente de desenvolvimento organizado.

## Antes de instalar

O Python já vem pré-instalado em algumas distribuições Linux e no macOS,
mas geralmente em uma versão desatualizada, usada pelo próprio sistema
operacional. **Não mexa nessa instalação do sistema** — vamos instalar (ou
usar) uma versão própria para os nossos estudos.

## Windows

1. Acesse [python.org/downloads](https://www.python.org/downloads/).
2. Baixe a versão mais recente do instalador.
3. Na primeira tela do instalador, marque a opção **"Add python.exe to PATH"**
   antes de clicar em Install — esse é o passo que mais gente esquece.
4. Conclua a instalação normalmente.

<Atencao title="Esqueceu de marcar o PATH?">
  Sem isso, o Windows não vai reconhecer o comando `python` no terminal.
  Se acontecer, é só reinstalar e marcar a caixa, ou adicionar o Python ao
  PATH manualmente pelas configurações do sistema.
</Atencao>

## Fedora

<CodeBlock filename="terminal" code={`sudo dnf install python3 python3-pip`} />

## Ubuntu / Debian

<CodeBlock filename="terminal" code={`sudo apt update
sudo apt install python3 python3-pip`} />

## macOS

A forma mais simples é usando o [Homebrew](https://brew.sh):

<CodeBlock filename="terminal" code={`brew install python3`} />

## Verificando a instalação

Em qualquer sistema, abra o terminal e digite:

<CodeBlock filename="terminal" code={`python3 --version`} />

Você deve ver algo como `Python 3.12.4`. No Windows, o comando costuma ser
`python --version` (sem o "3").

<Dica>
  Se `python3` não funcionar, tente `python`. Alguns sistemas configuram o
  comando de formas diferentes — o importante é que algum dos dois
  responda com um número de versão.
</Dica>

## O que é o pip?

`pip` é o **gerenciador de pacotes** do Python. É por meio dele que você
instala bibliotecas prontas, feitas por outras pessoas, para não precisar
reinventar a roda.

<CodeBlock filename="terminal" code={`pip3 --version`} />

Exemplo de uso (não precisa rodar isso agora):

<CodeBlock filename="terminal" code={`pip3 install requests`} />

Esse comando instalaria a biblioteca `requests`, usada para fazer
requisições na internet — algo que veremos no módulo de Automação.

## Ambientes virtuais (introdução)

Cada projeto Python pode precisar de versões diferentes de uma mesma
biblioteca. Um **ambiente virtual** cria uma "caixa isolada" para cada
projeto, evitando conflitos.

<CodeBlock filename="terminal" code={`python3 -m venv venv`} />

Vamos usar ambientes virtuais na prática a partir da Aula 8, quando
falarmos sobre organização de projetos — por enquanto, só guarde o
conceito.

<ComoUmProgramadorPensa>
  Programadores experientes nunca instalam bibliotecas "soltas" no sistema
  operacional. Antes de instalar qualquer coisa, a pergunta é: "isso deve
  ficar isolado dentro de um ambiente virtual do projeto, ou é uma
  ferramenta que uso globalmente?" Essa separação evita que um projeto
  quebre outro.
</ComoUmProgramadorPensa>

## Resumo da aula

<Resumo>
  Instalamos o Python (Windows, Fedora, Ubuntu ou macOS) e verificamos a
  instalação com `--version`. Conhecemos o `pip`, o gerenciador de pacotes
  do Python, e tivemos uma primeira introdução a ambientes virtuais, que
  isolam as dependências de cada projeto.
</Resumo>

## Exercícios

1. Qual comando verifica a versão instalada do Python?
2. Para que serve o `pip`?
3. Por que é recomendado usar ambientes virtuais?

<Desafio>
  Instale o Python na sua máquina (se ainda não tiver) e rode
  `pip3 list` no terminal. Anote quais pacotes já aparecem instalados por
  padrão.
</Desafio>

## Próxima aula

Na **Aula 3 — Escolhendo uma IDE**, vamos instalar e configurar o VS Code,
a ferramenta que usaremos durante todo o curso para escrever código.

```

---

## Arquivo: `content/modulo-01/aula-03.mdx`

```mdx
export const meta = {
  modulo: "Módulo 1 — Primeiros Passos no Python",
  titulo: "Aula 3 — Escolhendo uma IDE",
  duracao: "20 a 30 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Entender o que é uma IDE e por que ela facilita a programação.
- Instalar e configurar o VS Code.
- Conhecer as extensões essenciais para Python.
- Aprender os atalhos mais úteis do dia a dia.

## O que é uma IDE?

IDE significa **Ambiente de Desenvolvimento Integrado** (Integrated
Development Environment). É um editor de texto especializado em
programação, com recursos como:

- Destaque de sintaxe (cores para cada tipo de código).
- Autocompletar.
- Detecção de erros em tempo real.
- Terminal integrado.
- Depurador (debugger).

Você poderia escrever Python no Bloco de Notas, mas seria como cozinhar
sem faca — tecnicamente possível, extremamente ineficiente.

## Por que VS Code?

Existem várias IDEs boas (PyCharm, Sublime Text, Vim, Neovim). Escolhemos
o **VS Code** para este curso porque é gratuito, leve, multiplataforma e
tem o maior ecossistema de extensões para Python atualmente.

## Instalando o VS Code

Baixe em [code.visualstudio.com](https://code.visualstudio.com/) e siga o
instalador padrão do seu sistema operacional.

## Extensões essenciais

Abra a aba de extensões (ícone de quadrados na barra lateral, ou
`Ctrl+Shift+X`) e instale:

- **Python** (Microsoft) — suporte oficial à linguagem.
- **Pylance** — autocompletar inteligente e checagem de tipos.
- **Error Lens** — mostra os erros diretamente na linha, sem precisar
  passar o mouse.

<Dica>
  Não instale dezenas de extensões de uma vez. Comece com essas três —
  elas cobrem 90% do que você vai precisar neste curso.
</Dica>

## Configuração recomendada

Abra as configurações (`Ctrl+,`) e ajuste:

- **Format on Save**: ativado — formata o código automaticamente ao salvar.
- **Auto Save**: `afterDelay` — evita perder trabalho.
- **Tema**: escolha um que tenha bom contraste; para código, temas escuros
  costumam cansar menos a vista em sessões longas.

## Atalhos importantes

| Atalho (Windows/Linux) | Atalho (macOS) | Ação |
|---|---|---|
| `Ctrl+S` | `Cmd+S` | Salvar arquivo |
| `` Ctrl+` `` | `` Cmd+` `` | Abrir terminal integrado |
| `Ctrl+B` | `Cmd+B` | Mostrar/ocultar barra lateral |
| `Ctrl+P` | `Cmd+P` | Buscar e abrir arquivo rapidamente |
| `Ctrl+/` | `Cmd+/` | Comentar/descomentar linha |
| `F5` | `F5` | Rodar e depurar o arquivo atual |

<ComoUmProgramadorPensa>
  Vale a pena investir 20 minutos aprendendo atalhos no início do curso.
  Parece perda de tempo agora, mas ao longo de centenas de horas de
  código, cada segundo economizado ao navegar pelo editor se acumula em
  horas de produtividade real.
</ComoUmProgramadorPensa>

## Resumo da aula

<Resumo>
  Uma IDE facilita a programação com autocompletar, detecção de erros e
  terminal integrado. Instalamos o VS Code, as extensões Python, Pylance e
  Error Lens, configuramos Format on Save e Auto Save, e conhecemos os
  atalhos essenciais.
</Resumo>

## Exercícios

1. Para que serve a extensão Pylance?
2. Qual atalho abre o terminal integrado no VS Code?
3. Por que "Format on Save" é uma configuração útil?

<Desafio>
  Configure o VS Code do seu jeito: escolha um tema, ative Format on Save
  e Auto Save, e crie um arquivo `teste.py` só para praticar os atalhos da
  tabela acima.
</Desafio>

## Próxima aula

Na **Aula 4 — Terminal para iniciantes**, vamos aprender os comandos
básicos que todo programador usa no dia a dia, dentro do próprio VS Code.

```

---

## Arquivo: `content/modulo-01/aula-04.mdx`

```mdx
export const meta = {
  modulo: "Módulo 1 — Primeiros Passos no Python",
  titulo: "Aula 4 — Terminal para Iniciantes",
  duracao: "25 a 35 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Perder o medo do terminal.
- Navegar entre pastas usando comandos.
- Criar, copiar, mover e remover arquivos pelo terminal.
- Entender por que programadores preferem o terminal à interface gráfica.

## Por que usar o terminal?

A interface gráfica (clicar em ícones e pastas) é ótima para o dia a dia,
mas é lenta para tarefas repetitivas. O terminal permite fazer, em um
comando, o que levaria vários cliques — e, mais importante, permite
**automatizar** tarefas, que é justamente um dos grandes poderes do
Python.

<Dica>
  Não existe "comando errado que quebra o computador" nos comandos desta
  aula. Pode digitar e testar sem medo.
</Dica>

## Onde estou? — `pwd`

`pwd` (*print working directory*) mostra a pasta atual:

<CodeBlock filename="terminal" code={`pwd`} />

## O que tem aqui? — `ls`

`ls` (*list*) lista os arquivos e pastas do diretório atual:

<CodeBlock filename="terminal" code={`ls`} />

No Windows (PowerShell), o equivalente é `dir`, mas `ls` também costuma
funcionar.

## Mudando de pasta — `cd`

`cd` (*change directory*) navega entre pastas:

<CodeBlock filename="terminal" code={`cd Documentos
cd ..
cd /home/usuario/projetos`} />

`cd ..` sobe um nível (volta para a pasta anterior). `cd` sozinho (sem
argumento) volta para a pasta pessoal do usuário na maioria dos sistemas.

## Criando uma pasta — `mkdir`

<CodeBlock filename="terminal" code={`mkdir meu-projeto`} />

## Removendo arquivos e pastas — `rm`

<CodeBlock filename="terminal" code={`rm arquivo.txt
rm -r pasta-inteira`} />

<Atencao title="rm não tem lixeira">
  Diferente de excluir pelo mouse, `rm` apaga direto, sem passar pela
  lixeira. Confira sempre o nome do arquivo ou pasta antes de confirmar.
</Atencao>

## Copiando — `cp`

<CodeBlock filename="terminal" code={`cp arquivo.py copia.py
cp -r pasta-original pasta-copia`} />

## Movendo ou renomeando — `mv`

<CodeBlock filename="terminal" code={`mv arquivo.py novo-nome.py
mv arquivo.py pasta-destino/`} />

`mv` serve tanto para mover um arquivo de lugar quanto para renomeá-lo —
no fundo, renomear é apenas "mover" para o mesmo lugar com outro nome.

<ComoUmProgramadorPensa>
  Sempre que for apagar ou sobrescrever algo pelo terminal, um programador
  experiente pausa um segundo e confere o caminho completo antes de
  apertar Enter. Ao contrário da interface gráfica, o terminal não
  pergunta "tem certeza?" — ele confia que você sabe o que está pedindo.
</ComoUmProgramadorPensa>

## Resumo da aula

<Resumo>
  `pwd` mostra onde você está, `ls` lista o conteúdo da pasta, `cd` navega
  entre diretórios, `mkdir` cria pastas, `rm` remove arquivos e pastas,
  `cp` copia e `mv` move ou renomeia. Esses sete comandos cobrem a maior
  parte da navegação do dia a dia.
</Resumo>

## Exercícios

1. Qual comando mostra o diretório atual?
2. Como voltar uma pasta usando `cd`?
3. Qual a diferença entre `cp` e `mv`?
4. O que acontece se você usar `rm` em um arquivo — ele vai para a
   lixeira?

<Desafio>
  Pelo terminal: crie uma pasta chamada `pyforge-testes`, entre nela, crie
  um arquivo vazio chamado `notas.txt` (dica: pesquise o comando `touch`
  no Linux/macOS, ou `New-Item` no PowerShell), renomeie-o para
  `anotacoes.txt` e depois remova a pasta inteira.
</Desafio>

## Próxima aula

Na **Aula 5 — Seu primeiro programa**, vamos finalmente escrever e
executar nosso primeiro código Python.

```

---

## Arquivo: `content/modulo-01/aula-05.mdx`

```mdx
export const meta = {
  modulo: "Módulo 1 — Primeiros Passos no Python",
  titulo: "Aula 5 — Criando Seu Primeiro Programa",
  duracao: "20 a 30 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Escrever e salvar seu primeiro arquivo Python.
- Executar um script pelo terminal.
- Entender a função `print()`.
- Saber por que arquivos Python usam a extensão `.py`.

## Criando o arquivo

Abra o VS Code, crie uma pasta para o curso (por exemplo,
`pyforge-estudos`) e, dentro dela, um arquivo chamado `ola_mundo.py`.

<Dica>
  A extensão `.py` não é apenas uma formalidade — ela avisa o sistema
  operacional e o editor que aquele arquivo contém código Python, o que
  ativa o destaque de sintaxe e permite executá-lo com o interpretador
  certo.
</Dica>

## Escrevendo o código

<CodeBlock filename="ola_mundo.py" code={`print("Olá, mundo!")`} />

`print()` é uma **função** — um bloco de código pronto que executa uma
ação. Neste caso, a ação é exibir um texto na tela. O texto entre aspas é
chamado de **string**.

## Executando pelo terminal

Salve o arquivo (`Ctrl+S`) e, no terminal (`` Ctrl+` `` no VS Code),
navegue até a pasta do arquivo e rode:

<CodeBlock filename="terminal" code={`python3 ola_mundo.py`} />

Você deve ver `Olá, mundo!` impresso logo abaixo do comando.

<Atencao title="python3 ou python?">
  Se o comando `python3` não for reconhecido, tente `python`. Isso
  depende de como o Python foi instalado no seu sistema (veja a Aula 2).
</Atencao>

## Experimentando mais

<CodeBlock filename="ola_mundo.py" code={`print("Olá, mundo!")
print("Estou aprendendo Python.")
print(2 + 2)`} />

Note que `print()` também funciona com números, não só com texto — e que
o Python calcula `2 + 2` antes de exibir o resultado.

Tente você mesmo, direto aqui na página — digite o código acima (ou o
seu próprio) no campo abaixo e clique em "Rodar":

<PyPlayground
  titulo="ola_mundo"
  codigoInicial={`# Escreva aqui o código que você acabou de ver acima
`}
/>

## O botão "Run" do VS Code

Além do terminal, o VS Code tem um botão de "play" (▶) no canto superior
direito quando um arquivo `.py` está aberto. Ele faz exatamente a mesma
coisa que digitar `python3 arquivo.py` no terminal — só que com um clique.

<ComoUmProgramadorPensa>
  Vale a pena aprender os dois caminhos (terminal e botão Run) desde já.
  O botão é mais rápido no dia a dia; o terminal é indispensável quando o
  programa precisa receber argumentos, ou quando você estiver automatizando
  tarefas mais adiante no curso.
</ComoUmProgramadorPensa>

## Resumo da aula

<Resumo>
  Criamos um arquivo `.py`, usamos `print()` para exibir texto e números
  na tela, e aprendemos duas formas de executar um script Python: pelo
  terminal (`python3 arquivo.py`) e pelo botão Run do VS Code.
</Resumo>

## Exercícios

1. O que faz a função `print()`?
2. Qual comando de terminal executa um arquivo chamado `app.py`?
3. O que é uma string?

<Desafio>
  Crie um arquivo `sobre_mim.py` com pelo menos quatro linhas de
  `print()`, contando seu nome, uma cidade que gostaria de visitar, um
  número favorito e uma curiosidade sobre você. Execute pelo terminal.
</Desafio>

## Próxima aula

Na **Aula 6 — Como o Python executa um programa**, vamos abrir o capô e
entender o que realmente acontece quando você roda um script.

```

---

## Arquivo: `content/modulo-01/aula-06.mdx`

```mdx
export const meta = {
  modulo: "Módulo 1 — Primeiros Passos no Python",
  titulo: "Aula 6 — Como o Python Executa um Programa",
  duracao: "20 a 30 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Entender a diferença entre linguagens compiladas e interpretadas.
- Conhecer o papel do interpretador Python.
- Saber o que são os arquivos `.pyc` e a pasta `__pycache__`.
- Ter uma primeira noção de como a memória é usada durante a execução.

## Compilado × Interpretado

Existem, de forma simplificada, duas famílias de linguagens:

- **Compiladas** (como C e Rust): o código é totalmente traduzido para
  linguagem de máquina *antes* de rodar, gerando um arquivo executável.
- **Interpretadas** (como Python e JavaScript): o código é lido e
  executado linha a linha, por um programa chamado **interpretador**.

Python é interpretado. Isso torna o desenvolvimento mais rápido — você
edita e roda na hora, sem uma etapa extra de compilação — em troca de,
geralmente, ser um pouco mais lento em tempo de execução que uma
linguagem compilada.

## O interpretador Python

Quando você digita `python3 ola_mundo.py`, o interpretador:

1. Lê o arquivo `.py` de cima para baixo.
2. Traduz cada instrução para um formato intermediário chamado
   **bytecode**.
3. Executa esse bytecode, instrução por instrução.

<Diagrama
  titulo="Como o Python executa um arquivo .py"
  passos={[
    { titulo: "Código-fonte (.py)", descricao: "o que você escreveu" },
    { titulo: "Interpretador (CPython)", descricao: "lê linha por linha" },
    { titulo: "Bytecode", descricao: "formato intermediário" },
    { titulo: "Execução", descricao: "resultado na tela" },
  ]}
/>

<Curiosidade>
  O interpretador "oficial" do Python é chamado **CPython** — é ele que
  você instalou na Aula 2. Existem outras implementações (PyPy, Jython),
  mas o CPython é, disparado, a mais usada no mundo.
</Curiosidade>

## Bytecode e a pasta `__pycache__`

Ao rodar um arquivo Python que é importado por outro (algo que veremos
melhor no módulo de Funções), o interpretador guarda o bytecode gerado em
arquivos `.pyc`, dentro de uma pasta chamada `__pycache__`. Isso funciona
como um cache: se o arquivo original não mudou, o Python reaproveita o
bytecode já traduzido, economizando tempo.

<Dica>
  Você nunca precisa mexer manualmente na pasta `__pycache__` — ela é
  gerada e gerenciada automaticamente. É comum (e recomendado) adicioná-la
  ao `.gitignore` do projeto.
</Dica>

## Uma primeira ideia sobre memória

Quando o Python executa `nome = "Ana"`, ele guarda o texto `"Ana"` em um
espaço da memória RAM e faz a palavra `nome` apontar para esse espaço.
Vamos explorar isso com profundidade no Módulo 2, quando falarmos sobre
variáveis — por enquanto, guarde a ideia: **variáveis são etiquetas que
apontam para dados guardados na memória**, não "caixinhas" que contêm o
dado diretamente.

<ComoUmProgramadorPensa>
  Entender que uma variável é uma referência (e não uma caixa) evita
  muita confusão mais à frente, especialmente quando trabalharmos com
  listas e dicionários, onde duas variáveis podem apontar para o mesmo
  dado na memória.
</ComoUmProgramadorPensa>

## Resumo da aula

<Resumo>
  Python é uma linguagem interpretada: o CPython lê o código, traduz para
  bytecode e executa instrução por instrução. Arquivos importados geram
  bytecode em cache na pasta `__pycache__`. Variáveis funcionam como
  etiquetas que apontam para dados na memória, não como caixas fechadas.
</Resumo>

## Exercícios

1. Qual a principal diferença entre linguagem compilada e interpretada?
2. Como se chama o interpretador oficial do Python?
3. Para que serve a pasta `__pycache__`?

<Desafio>
  Pesquise: qual linguagem de programação você mais ouviu falar que é
  compilada, e qual é interpretada? Escreva duas ou três frases explicando
  por que você acha que cada uma foi projetada daquele jeito (dica: pense
  em jogos versus sites).
</Desafio>

## Próxima aula

Na **Aula 7 — Erros fazem parte**, vamos aprender a ler mensagens de erro
do Python em vez de temê-las.

```

---

## Arquivo: `content/modulo-01/aula-07.mdx`

```mdx
export const meta = {
  modulo: "Módulo 1 — Primeiros Passos no Python",
  titulo: "Aula 7 — Erros Fazem Parte",
  duracao: "25 a 35 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Perder o medo de mensagens de erro.
- Reconhecer os quatro erros mais comuns para iniciantes.
- Aprender a ler um *traceback* de baixo para cima.

## Erros não são fracasso

Todo programador, do iniciante ao mais experiente, produz erros
diariamente. A diferença não é "quem erra menos", mas **quem sabe ler o
erro e corrigir mais rápido**. Esta aula existe para transformar a
mensagem de erro de "algo assustador" em "uma pista útil".

## SyntaxError

Acontece quando o código quebra as regras gramaticais do Python — como
esquecer um dois-pontos ou um parêntese.

<CodeBlock filename="erro_sintaxe.py" code={`print("Olá"`} />

Saída:

<CodeBlock filename="terminal" code={`SyntaxError: unexpected EOF while parsing`} />

Falta um parêntese de fechamento. `EOF` significa "fim do arquivo" — o
Python chegou ao final do código ainda esperando algo.

## NameError

Acontece quando você usa um nome (variável, função) que o Python não
conhece.

<CodeBlock filename="erro_nome.py" code={`print(idade)`} />

Saída:

<CodeBlock filename="terminal" code={`NameError: name 'idade' is not defined`} />

A variável `idade` nunca foi criada antes de ser usada.

## TypeError

Acontece quando uma operação é aplicada a um tipo de dado incompatível.

<CodeBlock filename="erro_tipo.py" code={`print("Idade: " + 25)`} />

Saída:

<CodeBlock filename="terminal" code={`TypeError: can only concatenate str (not "int") to str`} />

Python não soma texto com número diretamente — veremos como converter
tipos no Módulo 2.

## IndentationError

O Python usa espaços no início da linha (indentação) para definir blocos
de código — diferente de outras linguagens que usam chaves `{}`.

<CodeBlock filename="erro_indentacao.py" code={`if 5 > 2:
print("Cinco é maior")`} />

Saída:

<CodeBlock filename="terminal" code={`IndentationError: expected an indented block`} />

A linha depois do `:` precisa começar com um recuo (geralmente 4 espaços).

<Dica>
  O VS Code, com a extensão Python instalada, adiciona a indentação
  automaticamente na maioria dos casos — mas vale entender a regra, porque
  ela é fundamental na linguagem.
</Dica>

## Como ler um traceback

Quando o erro é mais longo, o Python mostra um *traceback* — o caminho
que o programa percorreu até quebrar. A regra prática:

<ComoUmProgramadorPensa>
  Leia o traceback de baixo para cima. A última linha diz **o que**
  aconteceu (o tipo do erro e a mensagem). As linhas acima mostram **onde**
  aconteceu — o arquivo e o número da linha. Comece sempre pela última
  linha; só suba para entender o contexto se a mensagem sozinha não for
  suficiente.
</ComoUmProgramadorPensa>

<Diagrama
  titulo="Ordem de leitura de um traceback"
  passos={[
    { titulo: "1. Última linha", descricao: "tipo do erro e mensagem" },
    { titulo: "2. Linha do erro", descricao: "arquivo e número da linha" },
    { titulo: "3. Linhas acima", descricao: "o caminho até o erro" },
  ]}
/>

## Resumo da aula

<Resumo>
  `SyntaxError` indica uma quebra da gramática do Python. `NameError`
  aparece ao usar algo que não existe. `TypeError` surge ao misturar tipos
  incompatíveis. `IndentationError` acontece quando os recuos de bloco
  estão errados. Em qualquer erro, leia o traceback de baixo para cima.
</Resumo>

## Exercícios

1. O que causa um `NameError`?
2. Por que `"Idade: " + 25` gera erro, mas `"Idade: " + "25"` não?
3. Em qual ordem devemos ler um traceback?

<Desafio>
  Escreva, de propósito, um arquivo `.py` com cada um dos quatro erros
  desta aula (em blocos separados, comentando os outros três com `#`
  enquanto testa cada um). Rode e confirme que a mensagem bate com o que
  você esperava.
</Desafio>

## Próxima aula

Na **Aula 8 — Organizando projetos**, vamos aprender a estruturar pastas
de forma profissional desde o primeiro projeto.

```

---

## Arquivo: `content/modulo-01/aula-08.mdx`

```mdx
export const meta = {
  modulo: "Módulo 1 — Primeiros Passos no Python",
  titulo: "Aula 8 — Organizando Projetos",
  duracao: "25 a 35 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Estruturar um projeto Python de forma organizada.
- Escrever um `README.md` básico.
- Entender o que vai (e o que não vai) para o `.gitignore`.
- Criar e ativar um ambiente virtual na prática.

## Por que organizar desde o início?

Um projeto de cinco linhas não precisa de estrutura. Mas quase todo
projeto começa pequeno e cresce — e reorganizar depois é muito mais
trabalhoso do que começar organizado. Vamos adotar, desde já, um padrão
simples que você reaproveitará em todos os projetos do curso.

## Estrutura recomendada

<CodeBlock filename="estrutura" code={`meu-projeto/
├── venv/              # ambiente virtual (não vai para o Git)
├── main.py            # ponto de entrada do programa
├── README.md          # documentação do projeto
├── requirements.txt   # bibliotecas usadas
└── .gitignore`} />

## Criando e ativando o ambiente virtual

Retomando a Aula 2, dentro da pasta do projeto:

<CodeBlock filename="terminal" code={`python3 -m venv venv`} />

Isso cria a pasta `venv/` com uma cópia isolada do Python. Para ativá-la:

<CodeBlock filename="terminal (Linux/macOS)" code={`source venv/bin/activate`} />

<CodeBlock filename="terminal (Windows)" code={`venv\\Scripts\\activate`} />

Quando ativo, o terminal mostra `(venv)` no início da linha. A partir
daí, qualquer `pip install` fica isolado dentro daquele projeto.

<Dica>
  Repare que, a partir daqui, os exemplos usam `pip` em vez de `pip3`. Com
  o ambiente virtual ativo, `pip` já aponta, sem ambiguidade, para o pip
  daquele venv — não existe mais chance de confundir com uma versão do
  sistema. Fora de um venv (como na Aula 2), `pip3` é a forma mais segura
  de garantir que você está usando o Python 3.
</Dica>

<Dica>
  Para sair do ambiente virtual a qualquer momento, digite `deactivate`.
</Dica>

## O README.md

Todo projeto sério tem um `README.md` — o primeiro arquivo que alguém lê
ao abrir o repositório. Um bom README mínimo responde três perguntas: o
que o projeto faz, como instalar, e como executar.

<CodeBlock filename="README.md" code={`# Meu Projeto

Breve descrição do que o programa faz.

## Como executar

\`\`\`bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 main.py
\`\`\`
`} />

## O .gitignore

Diz ao Git quais arquivos **não** devem ser versionados — geralmente
coisas geradas automaticamente, ou específicas da sua máquina.

<CodeBlock filename=".gitignore" code={`venv/
__pycache__/
*.pyc
.env`} />

<Atencao title="Nunca versione senhas ou chaves de API">
  Arquivos como `.env`, que costumam guardar senhas e chaves secretas,
  devem sempre estar no `.gitignore`. Subir uma chave de API para um
  repositório público é um dos erros mais comuns — e mais graves — de
  quem está começando.
</Atencao>

## O requirements.txt

Lista as bibliotecas que o projeto usa, para que qualquer pessoa (ou você
mesmo, em outra máquina) consiga instalar tudo de uma vez:

<CodeBlock filename="terminal" code={`pip freeze > requirements.txt`} />

E para instalar a partir dele:

<CodeBlock filename="terminal" code={`pip install -r requirements.txt`} />

<ComoUmProgramadorPensa>
  Um programador experiente pensa em "reprodutibilidade": se essa pasta
  fosse copiada para o computador de outra pessoa, ela conseguiria rodar o
  projeto só lendo o README e o requirements.txt? Se a resposta for não,
  falta organização.
</ComoUmProgramadorPensa>

## Resumo da aula

<Resumo>
  Um projeto organizado tem `venv/` (isolado do Git), um `main.py` como
  ponto de entrada, `README.md` explicando o que o projeto faz e como
  rodar, `requirements.txt` listando dependências, e `.gitignore` evitando
  versionar arquivos gerados ou sensíveis.
</Resumo>

## Exercícios

1. Por que a pasta `venv/` não deve ir para o Git?
2. Quais três perguntas um bom README responde?
3. Qual comando gera o `requirements.txt` a partir do ambiente atual?

<Desafio>
  Crie a estrutura completa desta aula para um projeto fictício chamado
  `calculadora-imc` (ainda sem código dentro de `main.py`, só a estrutura
  de pastas e arquivos).
</Desafio>

## Próxima aula

Na **Aula 9 — Boas práticas desde o primeiro dia**, vamos falar sobre como
nomear variáveis e organizar código de um jeito que qualquer pessoa
consiga entender.

```

---

## Arquivo: `content/modulo-01/aula-09.mdx`

```mdx
export const meta = {
  modulo: "Módulo 1 — Primeiros Passos no Python",
  titulo: "Aula 9 — Boas Práticas Desde o Primeiro Dia",
  duracao: "20 a 30 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Nomear variáveis de forma clara.
- Escrever comentários úteis (e saber quando não comentar).
- Conhecer o `snake_case` e a convenção PEP 8.

## Por que isso importa desde já?

É tentador pensar "boas práticas eu aprendo depois, agora só quero fazer
funcionar". O problema é que hábitos se formam rápido — e é muito mais
fácil aprender certo desde o início do que desaprender depois de meses.

## Nomeando variáveis

Um nome de variável deve dizer **o que ela guarda**, não como ela foi
calculada.

<CodeBlock filename="ruim.py" code={`x = 25
y = x * 2
z = y + 10`} />

<CodeBlock filename="bom.py" code={`idade = 25
idade_em_dobro = idade * 2
idade_daqui_a_dez_anos = idade_em_dobro + 10`} />

O segundo exemplo é mais longo, mas qualquer pessoa entende o que está
acontecendo sem precisar rodar o código mentalmente.

<Dica>
  Uma boa pergunta para testar um nome de variável: "se eu mostrasse só
  essa linha para alguém, sem contexto nenhum, essa pessoa entenderia o
  que a variável representa?"
</Dica>

## snake_case

Em Python, a convenção é escrever nomes de variáveis e funções em
**snake_case**: tudo minúsculo, com underscore separando palavras.

<CodeBlock filename="convencao.py" code={`nome_completo = "Ana Silva"
data_de_nascimento = "1998-04-12"
total_de_itens = 12`} />

Isso é diferente de outras linguagens (JavaScript, por exemplo, usa
`camelCase`). Seguir a convenção da própria linguagem facilita a leitura
para qualquer outro programador Python que olhar seu código.

## Comentários

Comentários explicam o **porquê**, não o **o quê** — o código já diz o
que está acontecendo.

<CodeBlock filename="comentarios.py" code={`# Ruim: só repete o que o código já diz
idade = 25  # define a variável idade como 25

# Bom: explica uma decisão que não é óbvia
idade = 25  # idade mínima usada como valor padrão nos testes`} />

<Atencao title="Comentário desatualizado é pior que nenhum comentário">
  Se você mudar o código, lembre de atualizar (ou remover) o comentário
  relacionado. Um comentário que descreve um comportamento antigo confunde
  mais do que ajuda.
</Atencao>

## PEP 8

**PEP 8** é o guia oficial de estilo do Python. Você não precisa
decorá-lo, mas vale conhecer algumas regras centrais:

- Use 4 espaços por nível de indentação (nunca tabulação).
- Linhas com, no máximo, cerca de 79 caracteres.
- Dois espaços em branco entre funções no nível principal do arquivo.
- Espaços ao redor de operadores: `idade = 25`, não `idade=25`.

<Curiosidade>
  PEP significa *Python Enhancement Proposal* — o mesmo processo formal
  usado para propor mudanças na própria linguagem Python é usado para
  definir seu guia de estilo. A PEP 8 foi escrita por Guido van Rossum,
  criador do Python, junto com outros colaboradores, em 2001.
</Curiosidade>

<ComoUmProgramadorPensa>
  Código é lido muito mais vezes do que é escrito. Um programador
  experiente otimiza para quem vai ler o código depois — inclusive ele
  mesmo, seis meses no futuro, sem lembrar mais o contexto.
</ComoUmProgramadorPensa>

## Resumo da aula

<Resumo>
  Nomeie variáveis pelo que elas representam, em `snake_case`. Use
  comentários para explicar decisões, não para repetir o código. A PEP 8
  é o guia oficial de estilo do Python — 4 espaços de indentação, espaços
  ao redor de operadores, linhas não muito longas.
</Resumo>

## Exercícios

1. Reescreva em `snake_case`: `NomeCompleto`, `idadeDoUsuario`, `TOTAL`.
2. O que a PEP 8 recomenda para indentação?
3. Dê um exemplo de comentário útil e um exemplo de comentário
   desnecessário.

<Desafio>
  Pegue o arquivo `sobre_mim.py` que você criou na Aula 5 e reescreva-o
  seguindo tudo o que aprendeu aqui: nomes de variável claros, snake_case
  e ao menos um comentário que explique uma decisão (não o óbvio).
</Desafio>

## Próxima aula

Na **Aula 10 — Projeto Final do Módulo 1**, vamos juntar tudo o que
aprendemos em um programa completo.

```

---

## Arquivo: `content/modulo-01/aula-10.mdx`

```mdx
export const meta = {
  modulo: "Módulo 1 — Primeiros Passos no Python",
  titulo: "Aula 10 — Projeto Final do Módulo",
  duracao: "40 a 60 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Reunir, em um único programa, tudo o que foi aprendido no Módulo 1.
- Praticar a leitura de entrada do usuário com `input()`.
- Gravar informações em um arquivo de texto.
- Ganhar confiança para começar o Módulo 2.

## O projeto

Vamos construir um programa de terminal que:

1. Pergunta o nome da pessoa.
2. Pergunta a idade da pessoa.
3. Calcula o ano aproximado de nascimento.
4. Exibe uma mensagem personalizada.
5. Grava essas informações em um arquivo de texto.

Isso usa apenas conceitos que você já viu — o objetivo não é aprender
coisa nova, é **praticar a costura** entre ideias que ainda estão soltas
na sua cabeça.

## Planejamento

<ComoUmProgramadorPensa>
  Antes de abrir o editor, vale escrever o algoritmo em português, como
  fizemos na Aula 1: pedir nome → pedir idade → calcular ano de nascimento
  → montar mensagem → mostrar na tela → salvar em arquivo. Só depois disso
  traduzimos cada passo para Python.
</ComoUmProgramadorPensa>

## Lendo dados do usuário: `input()`

Ainda não vimos `input()` formalmente — ele será aprofundado no Módulo 2,
mas aqui está o essencial: `input()` pausa o programa, espera a pessoa
digitar algo e pressionar Enter, e devolve o que foi digitado como texto.

<CodeBlock filename="exemplo_input.py" code={`nome = input("Qual é o seu nome? ")
print("Olá, " + nome + "!")`} />

<Dica>
  No papel (ou no seu terminal), `input()` pausa e espera você digitar.
  Aqui na página, como não há como "pausar" de verdade um programa rodando
  no navegador, você preenche a resposta antecipadamente no campo
  "Entradas" abaixo — uma linha para cada `input()` do código, na ordem em
  que aparecem.
</Dica>

<PyPlayground
  titulo="exemplo_input"
  usaInput
  entradasIniciais="Ana"
  codigoInicial={`nome = input("Qual é o seu nome? ")
print("Olá, " + nome + "!")`}
/>

## Construindo o programa

<CodeBlock filename="cadastro.py" code={`# Cadastro simples — Projeto Final do Módulo 1

nome = input("Qual é o seu nome? ")
idade = input("Qual é a sua idade? ")

# input() sempre devolve texto — int() converte para número
idade_numero = int(idade)
ano_atual = 2026
ano_nascimento = ano_atual - idade_numero

mensagem = (
    nome + ", você tem " + idade + " anos e nasceu por volta de "
    + str(ano_nascimento) + "."
)

print(mensagem)

# Gravando em um arquivo de texto
with open("cadastro.txt", "a") as arquivo:
    arquivo.write(mensagem + "\\n")

print("Cadastro salvo em cadastro.txt!")`} />

<Dica>
  `with open(...) as arquivo:` abre o arquivo, executa o bloco indentado e
  fecha o arquivo automaticamente ao final — mesmo que algo dê errado no
  meio do caminho. O modo `"a"` (*append*) adiciona ao final do arquivo,
  sem apagar o que já estava lá. Veremos manipulação de arquivos com
  profundidade no Módulo 5.
</Dica>

Rode o programa completo aqui — a primeira linha do campo "Entradas"
responde ao nome, a segunda responde à idade:

<PyPlayground
  titulo="cadastro"
  usaInput
  entradasIniciais={`Ana\n25`}
  codigoInicial={`# Cadastro simples — Projeto Final do Módulo 1

nome = input("Qual é o seu nome? ")
idade = input("Qual é a sua idade? ")

idade_numero = int(idade)
ano_atual = 2026
ano_nascimento = ano_atual - idade_numero

mensagem = (
    nome + ", você tem " + idade + " anos e nasceu por volta de "
    + str(ano_nascimento) + "."
)

print(mensagem)

with open("cadastro.txt", "a") as arquivo:
    arquivo.write(mensagem + "\\n")

print("Cadastro salvo em cadastro.txt!")`}
/>

## Testando no seu computador

Rode `python3 cadastro.py` no terminal, responda às perguntas e confira o
arquivo `cadastro.txt` gerado na mesma pasta. Rode de novo com outro nome
— você verá as duas entradas acumuladas no arquivo.

<Atencao title="E se a pessoa digitar texto em vez de número?">
  Se alguém digitar "vinte" em vez de "20" na pergunta da idade,
  `int(idade)` vai gerar um `ValueError`. Não se preocupe em resolver isso
  agora — tratamento de erros é assunto para mais adiante no curso. Por
  enquanto, o objetivo é entender o fluxo principal.
</Atencao>

## Quiz de revisão do Módulo 1

<Quiz
  perguntas={[
    {
      pergunta: "O que é um algoritmo?",
      opcoes: [
        "Um tipo de erro do Python",
        "Uma sequência organizada de passos para resolver um problema",
        "Um componente físico do computador",
        "Um comando exclusivo do terminal",
      ],
      correta: 1,
      explicacao:
        "Algoritmo é a sequência de passos que resolve um problema — a base de toda programação.",
    },
    {
      pergunta: "Qual comando verifica a versão instalada do Python?",
      opcoes: ["python --new", "python3 --version", "pip check", "python run"],
      correta: 1,
      explicacao: "`python3 --version` (ou `python --version`) mostra a versão instalada.",
    },
    {
      pergunta: "Para que serve um ambiente virtual (venv)?",
      opcoes: [
        "Deixar o código mais rápido",
        "Isolar as dependências de cada projeto",
        "Substituir o VS Code",
        "Corrigir erros de sintaxe automaticamente",
      ],
      correta: 1,
      explicacao:
        "O venv cria uma cópia isolada do Python para o projeto, evitando conflitos entre bibliotecas de projetos diferentes.",
    },
    {
      pergunta: "O que causa um IndentationError?",
      opcoes: [
        "Usar um nome de variável inexistente",
        "Somar texto com número",
        "Recuo (espaços) incorreto no início de uma linha de bloco",
        "Esquecer de importar uma biblioteca",
      ],
      correta: 2,
      explicacao:
        "Python usa indentação para definir blocos de código — um recuo incorreto gera IndentationError.",
    },
    {
      pergunta: "Qual convenção de nomenclatura o Python recomenda para variáveis?",
      opcoes: ["camelCase", "PascalCase", "snake_case", "kebab-case"],
      correta: 2,
      explicacao: "A PEP 8 recomenda snake_case: tudo minúsculo, palavras separadas por underscore.",
    },
  ]}
/>

## Resumo do módulo

<Resumo>
  Neste módulo você entendeu o que é programação e o que é um algoritmo,
  instalou o Python e o VS Code, aprendeu comandos básicos de terminal,
  escreveu e executou seus primeiros programas, entendeu como o
  interpretador funciona, aprendeu a ler mensagens de erro, organizou um
  projeto com README, .gitignore e ambiente virtual, e praticou boas
  práticas de nomenclatura. Você já tem a base para começar a programar de
  verdade.
</Resumo>

<Projeto>
  Antes de seguir para o Módulo 2, garanta que seu `cadastro.py` está
  funcionando de ponta a ponta: pergunta nome e idade, calcula o ano de
  nascimento, mostra a mensagem na tela e grava no arquivo. Esse será o
  seu primeiro projeto completo do PyForge — guarde-o, você vai revisitar
  essa mesma lógica, só que muito mais poderosa, nos próximos módulos.
</Projeto>

## Próximo módulo

No **Módulo 2 — Fundamentos**, vamos estudar variáveis, tipos de dados,
operadores e entrada/saída com profundidade — construindo, ao final, um
conversor de moedas.

```

---

## Arquivo: `content/modulo-02/aula-01.mdx`

```mdx
export const meta = {
  modulo: "Módulo 2 — Fundamentos",
  titulo: "Aula 1 — Variáveis",
  duracao: "25 a 35 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Entender o que é uma variável.
- Criar e atualizar variáveis em Python.
- Entender por que variáveis são referências, não caixas.
- Conhecer as regras de nomenclatura válidas.

## O que é uma variável?

Uma variável é um nome que você dá a um valor guardado na memória, para
poder usá-lo depois.

<CodeBlock filename="variaveis.py" code={`idade = 25
nome = "Ana"
altura = 1.68`} />

<Dica>
  Lembra da Aula 6 do Módulo 1? Uma variável funciona como uma etiqueta
  que aponta para um dado na memória — não como uma caixinha fechada que
  guarda o valor dentro de si.
</Dica>

<Diagrama
  titulo="Variável como etiqueta"
  passos={[
    { titulo: "idade = 25", descricao: "Python guarda 25 na memória" },
    { titulo: "etiqueta 'idade'", descricao: "aponta para esse endereço" },
    { titulo: "print(idade)", descricao: "Python segue a etiqueta" },
  ]}
/>

## Atualizando uma variável

<CodeBlock filename="atualizando.py" code={`idade = 25
print(idade)

idade = 26
print(idade)`} />

A variável não guarda histórico — ao reatribuir, o valor anterior é
simplesmente substituído.

## Duas variáveis, o mesmo valor

Uma pergunta comum: se `nome` é uma etiqueta, e não uma caixa, o que
acontece se eu apontar duas etiquetas para o mesmo valor?

<CodeBlock filename="mesma_etiqueta.py" code={`a = 5
b = a       # b aponta para o mesmo valor que a, por enquanto
print(b)    # 5

a = 10      # a passa a apontar para um novo valor
print(a)    # 10
print(b)    # 5 — b não muda`} />

`b = a` copia **para onde a etiqueta aponta**, não cria um vínculo
permanente entre as duas variáveis. Quando `a` é reatribuída, ela passa a
apontar para outro lugar — `b` continua apontando para onde estava antes.

<Dica>
  Isso funciona assim porque números, em Python, são **imutáveis**: uma
  vez criado, o valor `5` nunca muda — o que muda é para qual valor a
  etiqueta aponta. Mais à frente, no Módulo 4, veremos listas — que são
  **mutáveis** — e aí essa mesma pergunta tem uma resposta bem diferente.
</Dica>

## Regras de nomenclatura

- Pode conter letras, números e underscore.
- Não pode começar com número.
- Não pode ser uma palavra reservada do Python (`print`, `if`, `for`...).
- Diferencia maiúsculas de minúsculas (`idade` e `Idade` são variáveis
  diferentes).

<CodeBlock filename="nomes_validos.py" code={`nome_completo = "Ana Silva"
idade2 = 25
_temp = 10`} />

<Atencao title="Nomes inválidos">
  `2idade = 25` gera `SyntaxError` — não pode começar com número.
  `class = "A"` também dá erro — `class` é palavra reservada.
</Atencao>

## Resumo da aula

<Resumo>
  Uma variável é um nome que aponta para um valor na memória. Reatribuir
  substitui o valor anterior. Nomes seguem snake_case, não podem começar
  com número nem usar palavras reservadas do Python.
</Resumo>

## Exercícios

1. Crie três variáveis: seu nome, sua idade e sua cidade.
2. Por que `idade` e `Idade` são consideradas variáveis diferentes?
3. Qual dessas opções é um nome de variável válido: `1nome`, `nome_1`,
   `for`?

<Desafio>
  Crie uma variável `saldo = 100`. Depois, sem usar nenhum número
  literal além de `50`, atualize `saldo` para refletir um depósito de 50
  (ou seja, `saldo` deve valer 150 ao final, calculado a partir do valor
  anterior).
</Desafio>

## Próxima aula

Na **Aula 2 — Tipos de dados**, vamos conhecer os tipos primitivos do
Python: strings, inteiros, floats e booleanos.

```

---

## Arquivo: `content/modulo-02/aula-02.mdx`

```mdx
export const meta = {
  modulo: "Módulo 2 — Fundamentos",
  titulo: "Aula 2 — Tipos de Dados",
  duracao: "30 a 40 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Conhecer os quatro tipos de dados primitivos do Python.
- Usar `type()` para descobrir o tipo de um valor.
- Entender por que a conversão entre tipos é necessária.
- Evitar os erros mais comuns ao misturar tipos.

## Os quatro tipos primitivos

<CodeBlock filename="tipos.py" code={`nome = "Ana"          # str    (texto)
idade = 25            # int    (inteiro)
altura = 1.68          # float  (decimal)
esta_estudando = True  # bool   (verdadeiro ou falso)`} />

## str — texto

Qualquer valor entre aspas simples ou duplas é uma **string**.

<CodeBlock filename="strings.py" code={`nome = "Ana Silva"
cidade = 'São Paulo'
frase = "Ela disse: 'olá!'"`} />

<Dica>
  Use aspas duplas por padrão e aspas simples quando o próprio texto já
  contiver aspas duplas (ou vice-versa) — evita ter que escapar caracteres.
</Dica>

## int — números inteiros

<CodeBlock filename="inteiros.py" code={`idade = 25
ano = 2026
temperatura_negativa = -5`} />

## float — números decimais

<CodeBlock filename="decimais.py" code={`altura = 1.68
pi = 3.14159
saldo = -12.50`} />

<Atencao title="Ponto, não vírgula">
  Python usa **ponto** como separador decimal, mesmo em português.
  `altura = 1,68` não gera o número esperado — cria, na verdade, uma
  **tupla** com dois valores (`1` e `68`), algo que veremos no Módulo 4.
</Atencao>

## bool — verdadeiro ou falso

<CodeBlock filename="booleanos.py" code={`esta_chovendo = False
maior_de_idade = True`} />

Booleanos são o resultado de comparações, que veremos com profundidade no
Módulo 3 (Controle de Fluxo):

<CodeBlock filename="comparacao.py" code={`idade = 20
maior_de_idade = idade >= 18
print(maior_de_idade)  # True`} />

## Descobrindo o tipo com type()

<CodeBlock filename="descobrindo_tipo.py" code={`print(type("Ana"))    # <class 'str'>
print(type(25))       # <class 'int'>
print(type(1.68))     # <class 'float'>
print(type(True))     # <class 'bool'>`} />

<Diagrama
  titulo="Os quatro tipos primitivos"
  passos={[
    { titulo: "str", descricao: '"Ana", "São Paulo"' },
    { titulo: "int", descricao: "25, -5, 2026" },
    { titulo: "float", descricao: "1.68, 3.14, -12.5" },
    { titulo: "bool", descricao: "True, False" },
  ]}
/>

## Convertendo entre tipos

Lembra do `int()` que usamos no projeto final do Módulo 1? Ele é uma
**função de conversão**. Existem equivalentes para os outros tipos:

<CodeBlock filename="conversoes.py" code={`idade_texto = "25"
idade_numero = int(idade_texto)      # str -> int

preco_texto = "19.90"
preco_numero = float(preco_texto)    # str -> float

idade = 25
idade_como_texto = str(idade)        # int -> str

print(type(idade_numero))  # <class 'int'>`} />

<ComoUmProgramadorPensa>
  Sempre que um valor vier de `input()`, de um arquivo ou de uma
  requisição na internet, um programador experiente já assume que ele vai
  chegar como `str` — e decide conscientemente se e quando converter,
  antes de fazer contas com aquele valor.
</ComoUmProgramadorPensa>

## Erros comuns ao misturar tipos

<CodeBlock filename="erro_tipo.py" code={`idade = "25"
print(idade + 1)`} />

<CodeBlock filename="terminal" code={`TypeError: can only concatenate str (not "int") to str`} />

A correção é converter antes de operar:

<CodeBlock filename="correcao.py" code={`idade = "25"
print(int(idade) + 1)`} />

## Resumo da aula

<Resumo>
  Python tem quatro tipos primitivos: `str` (texto), `int` (inteiro),
  `float` (decimal) e `bool` (verdadeiro/falso). `type()` revela o tipo de
  um valor. `int()`, `float()` e `str()` convertem entre eles — necessário
  sempre que dados vêm de fora (como `input()`) como texto.
</Resumo>

## Exercícios

1. Qual o tipo do valor `3.0`? E de `3`?
2. O que `type(True)` retorna?
3. Por que `"10" + "5"` resulta em `"105"` e não em `15`?
4. Como converter a string `"3.14"` para um número decimal usável em
   contas?

<Desafio>
  Crie uma variável `preco_texto = "49.90"`. Sem alterar essa linha,
  escreva o código que converte para número, aplica 10% de desconto, e
  imprime o resultado com `print()`.
</Desafio>

<Dica>
  Números decimais às vezes aparecem com muitas casas por causa de como o
  computador representa frações internamente (ex.: `44.909999999999997`
  em vez de `44.91`). A função `round(valor, 2)` arredonda para 2 casas
  decimais — use `print(round(resultado, 2))` para uma saída limpa.
</Dica>

Teste sua solução aqui — o site confere automaticamente se a saída bate
com o resultado esperado:

<PyPlayground
  titulo="desafio_desconto"
  codigoInicial={`preco_texto = "49.90"

# escreva seu código abaixo
`}
  validacao={{ saidaEsperada: "44.91" }}
/>

## Próxima aula

Na **Aula 3 — Entrada e Saída**, vamos aprofundar `input()` e `print()`,
incluindo formatação de texto com f-strings.

```

---

## Arquivo: `content/modulo-02/aula-03.mdx`

```mdx
export const meta = {
  modulo: "Módulo 2 — Fundamentos",
  titulo: "Aula 3 — Entrada e Saída",
  duracao: "30 a 40 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Aprofundar o uso de `input()` e `print()`.
- Formatar texto com f-strings.
- Controlar separador e final de linha do `print()`.
- Evitar os erros mais comuns ao ler dados do usuário.

## Revisando input()

Você já usou `input()` no projeto final do Módulo 1. Ele sempre devolve
**texto** (`str`), mesmo que a pessoa digite um número:

<CodeBlock filename="revisao_input.py" code={`idade = input("Qual é a sua idade? ")
print(type(idade))  # <class 'str'>`} />

## Formatando texto: o jeito antigo

Antes das f-strings, o jeito comum de combinar texto e variáveis era com
`+`, como fizemos na Aula 10 do Módulo 1:

<CodeBlock filename="concatenacao.py" code={`nome = "Ana"
idade = 25
print("Olá, " + nome + "! Você tem " + str(idade) + " anos.")`} />

Funciona, mas fica difícil de ler com muitas variáveis — e exige converter
manualmente números para `str()` antes de somar com texto.

## f-strings: o jeito moderno

Uma **f-string** é uma string com um `f` antes das aspas, que permite
inserir variáveis diretamente dentro de chaves `{}`:

<CodeBlock filename="f_strings.py" code={`nome = "Ana"
idade = 25
print(f"Olá, {nome}! Você tem {idade} anos.")`} />

Note que não precisamos de `str(idade)` — a f-string converte
automaticamente. Isso é o padrão recomendado no Python moderno.

<Dica>
  Daqui para frente, vamos preferir f-strings no lugar de concatenação
  com `+`. O código do Módulo 1 usava `+` de propósito, para não
  introduzir conceitos antes da hora — agora que você conhece f-strings,
  use-as sempre que puder.
</Dica>

## f-strings também fazem contas

<CodeBlock filename="fstring_com_conta.py" code={`preco = 49.90
quantidade = 3
print(f"Total: {preco * quantidade}")`} />

## Controlando casas decimais

<CodeBlock filename="formatando_decimais.py" code={`preco = 49.9
print(f"R$ {preco:.2f}")  # R$ 49.90`} />

`:.2f` significa "formate como float com 2 casas decimais" — muito útil
para valores em dinheiro.

## print() com múltiplos valores

<CodeBlock filename="print_multiplos.py" code={`nome = "Ana"
idade = 25
print(nome, idade)          # Ana 25
print(nome, idade, sep=" - ")  # Ana - 25
print("Carregando", end="...")
print("pronto!")            # Carregando...pronto!`} />

`sep` controla o que fica entre os valores (o padrão é um espaço); `end`
controla o que vem depois de tudo (o padrão é uma quebra de linha).

<Diagrama
  titulo="input() e print() no fluxo do programa"
  passos={[
    { titulo: "print()", descricao: "pergunta ou mostra algo" },
    { titulo: "input()", descricao: "espera a resposta (sempre str)" },
    { titulo: "conversão", descricao: "int() ou float(), se necessário" },
    { titulo: "f-string", descricao: "mostra o resultado formatado" },
  ]}
/>

## Erros comuns

<Atencao title="Esquecer o f antes das aspas">
  `print("Olá, {nome}")` sem o `f` não substitui nada — imprime a chave
  `{nome}` literalmente, ao invés do valor da variável.
</Atencao>

<Atencao title="Converter antes de precisar">
  `idade = int(input("Idade: "))` já converte na mesma linha — muito
  comum no dia a dia, mas leia com atenção: se a pessoa digitar algo que
  não é número, essa linha gera `ValueError` (veremos tratamento de erros
  mais adiante no curso).
</Atencao>

## Resumo da aula

<Resumo>
  `input()` sempre devolve `str`. F-strings (`f"texto {variavel}"`) são o
  jeito moderno e recomendado de combinar texto com variáveis, e
  convertem números automaticamente — `:.2f` formata casas decimais.
  `print()` aceita `sep` (separador entre valores) e `end` (o que vem
  depois, no lugar da quebra de linha padrão).
</Resumo>

## Exercícios

1. Reescreva com f-string: `"Nome: " + nome + ", idade: " + str(idade)`.
2. O que `f"{3.14159:.2f}"` produz?
3. O que acontece se você escrever `print("Olá, {nome}")` sem o `f`?
4. Qual parâmetro do `print()` controla o que aparece entre múltiplos
   valores?

<Desafio>
  Peça ao usuário o preço de um produto e a quantidade desejada (ambos
  com `input()`), calcule o total com f-string e formate o resultado com
  duas casas decimais, no formato `Total: R$ 149.70`.
</Desafio>

<Dica>
  Este desafio usa `input()`, então a correção automática fica menos
  confiável aqui — a saída inclui o texto do prompt que você escolheu
  escrever, que varia de pessoa para pessoa. Use o playground abaixo como
  prática livre e confira visualmente se o resultado bate com o esperado.
</Dica>

<PyPlayground
  titulo="desafio_total"
  usaInput
  entradasIniciais={`49.90\n3`}
  codigoInicial={`# escreva seu código aqui
`}
/>

## Próxima aula

Na **Aula 4 — Operadores**, vamos estudar operadores aritméticos,
relacionais e lógicos — a base para tomar decisões no código.

```

---

## Arquivo: `content/modulo-02/aula-04.mdx`

```mdx
export const meta = {
  modulo: "Módulo 2 — Fundamentos",
  titulo: "Aula 4 — Operadores",
  duracao: "30 a 40 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Usar operadores aritméticos, incluindo divisão inteira e resto.
- Usar operadores relacionais para comparar valores.
- Combinar condições com operadores lógicos.
- Entender a ordem de precedência entre operadores.

## Operadores aritméticos

<CodeBlock filename="aritmeticos.py" code={`soma = 10 + 3        # 13
subtracao = 10 - 3    # 7
multiplicacao = 10 * 3  # 30
divisao = 10 / 3       # 3.3333333333333335
divisao_inteira = 10 // 3  # 3
resto = 10 % 3          # 1
potencia = 10 ** 3       # 1000`} />

Dois merecem atenção especial:

- `//` (**divisão inteira**) descarta a parte decimal do resultado.
- `%` (**módulo**, ou "resto da divisão") devolve o que sobra depois da
  divisão inteira.

<Dica>
  `%` é extremamente útil para saber se um número é par ou ímpar:
  `numero % 2 == 0` é verdadeiro quando `numero` é par.
</Dica>

<Diagrama
  titulo="10 dividido por 3"
  passos={[
    { titulo: "10 / 3 = 3.333...", descricao: "divisão normal (float)" },
    { titulo: "10 // 3 = 3", descricao: "divisão inteira (descarta decimal)" },
    { titulo: "10 % 3 = 1", descricao: "resto que sobrou" },
  ]}
/>

## Operadores relacionais

Comparam dois valores e sempre resultam em um `bool` (`True` ou `False`):

<CodeBlock filename="relacionais.py" code={`print(5 == 5)   # True  — igual a
print(5 != 3)   # True  — diferente de
print(5 > 3)    # True  — maior que
print(5 < 3)    # False — menor que
print(5 >= 5)   # True  — maior ou igual
print(5 <= 3)   # False — menor ou igual`} />

<Atencao title="= não é ==">
  `=` **atribui** um valor a uma variável. `==` **compara** dois valores.
  Confundir os dois é um dos erros mais comuns entre quem está começando
  — `if idade = 18:` gera `SyntaxError`, porque `=` não pode ser usado
  dentro de uma comparação.
</Atencao>

## Operadores lógicos

Combinam expressões booleanas:

<CodeBlock filename="logicos.py" code={`idade = 20
tem_carteira = True

pode_dirigir = idade >= 18 and tem_carteira
print(pode_dirigir)  # True

esta_de_ferias = False
pode_viajar = esta_de_ferias or idade >= 18
print(pode_viajar)  # True

print(not tem_carteira)  # False`} />

- `and` — verdadeiro somente se **ambos** os lados forem verdadeiros.
- `or` — verdadeiro se **pelo menos um** dos lados for verdadeiro.
- `not` — inverte o valor (`True` vira `False`, e vice-versa).

## Precedência de operadores

Assim como na matemática, Python segue uma ordem: primeiro potência,
depois multiplicação/divisão, depois soma/subtração, e por último as
comparações e operadores lógicos.

<CodeBlock filename="precedencia.py" code={`resultado = 2 + 3 * 4       # 14, não 20 — multiplicação primeiro
resultado2 = (2 + 3) * 4    # 20 — parênteses forçam a ordem`} />

<ComoUmProgramadorPensa>
  Na dúvida sobre a ordem de avaliação, um programador experiente não
  tenta decorar a tabela de precedência inteira — ele simplesmente usa
  parênteses para deixar a intenção explícita. Código mais claro vale mais
  que código mais "enxuto".
</ComoUmProgramadorPensa>

## Testando na prática

<PyPlayground
  titulo="operadores"
  codigoInicial={`idade = 20
tem_carteira = True

pode_dirigir = idade >= 18 and tem_carteira
print(pode_dirigir)

print(10 % 3)`}
  validacao={{ saidaEsperada: "True\n1" }}
/>

## Resumo da aula

<Resumo>
  Operadores aritméticos incluem `//` (divisão inteira) e `%` (resto).
  Operadores relacionais (`==`, `!=`, `>`, `<`, `>=`, `<=`) comparam
  valores e retornam `bool`. Operadores lógicos (`and`, `or`, `not`)
  combinam condições. Use parênteses para deixar a ordem de avaliação
  explícita, mesmo quando não é estritamente necessário.
</Resumo>

## Exercícios

1. Qual a diferença entre `/` e `//`?
2. Como usar `%` para verificar se um número é par?
3. Por que `idade = 18` dentro de um `if` gera erro?
4. `True and False` resulta em quê? E `True or False`?

<Desafio>
  Sem usar `if`, escreva uma expressão booleana que seja `True` somente
  quando um número for maior que 10 **e** menor que 20 **e** for par.
  Teste com os números 14 (deve dar True) e 15 (deve dar False).
</Desafio>

## Próxima aula

No **Projeto do Módulo 2 — Conversor de Moedas**, vamos aplicar tudo o que
aprendemos até aqui em um programa completo.

```

---

## Arquivo: `content/modulo-03/aula-01.mdx`

```mdx
export const meta = {
  modulo: "Módulo 3 — Controle de Fluxo",
  titulo: "Aula 1 — Condicionais (if, elif, else)",
  duracao: "30 a 40 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Tomar decisões no código com `if`.
- Encadear várias condições com `elif`.
- Definir um caminho padrão com `else`.
- Aninhar condicionais quando necessário.

## Por que "controle de fluxo"?

Até agora, todo código que escrevemos rodava de cima para baixo, linha
por linha, sem desvios. **Controle de fluxo** é o nome para os recursos
que permitem ao programa **decidir** o que executar (`if`) ou **repetir**
algo (`while`, `for` — próximas aulas). É aqui que os programas deixam de
ser uma lista de instruções fixas e passam a reagir a diferentes
situações.

## if — se

<CodeBlock filename="if_simples.py" code={`idade = 20

if idade >= 18:
    print("Maior de idade")`} />

A estrutura é: `if`, uma condição que resulta em `True` ou `False`
(lembra dos operadores relacionais da Aula 4 do Módulo 2?), dois-pontos, e
um bloco indentado que só roda se a condição for verdadeira.

<Atencao title="Não esqueça o dois-pontos">
  `if idade >= 18` sem o `:` no final gera `SyntaxError`. E a linha
  seguinte precisa estar indentada — lembra da Aula 7 do Módulo 1?
  `IndentationError` é um dos erros mais comuns nesta fase do curso.
</Atencao>

## if / else — se / senão

<CodeBlock filename="if_else.py" code={`idade = 15

if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")`} />

`else` define o que acontece quando a condição do `if` é falsa. Só pode
haver um `else` por `if`, e ele nunca tem sua própria condição.

## if / elif / else — várias condições

<CodeBlock filename="if_elif_else.py" code={`nota = 7

if nota >= 9:
    print("Conceito A")
elif nota >= 7:
    print("Conceito B")
elif nota >= 5:
    print("Conceito C")
else:
    print("Reprovado")`} />

Python avalia as condições **na ordem**, de cima para baixo, e para no
primeiro `if`/`elif` verdadeiro — os demais nem chegam a ser avaliados.

<Diagrama
  titulo="Como o Python avalia elif"
  passos={[
    { titulo: "nota >= 9?", descricao: "se falso, próxima condição" },
    { titulo: "nota >= 7?", descricao: "se falso, próxima condição" },
    { titulo: "nota >= 5?", descricao: "se falso, cai no else" },
    { titulo: "else", descricao: "roda só se nada acima for True" },
  ]}
/>

<ComoUmProgramadorPensa>
  A ordem das condições importa. Se a primeira linha desse exemplo fosse
  `elif nota >= 5:` antes de `elif nota >= 7:`, uma nota 8 cairia na
  condição `>= 5` primeiro e nunca chegaria a ser comparada com `>= 7` —
  um bug sutil e comum. Ao escrever várias condições, pense sempre da mais
  específica para a mais genérica.
</ComoUmProgramadorPensa>

## Condicionais aninhadas

Um `if` pode conter outro `if` dentro do seu bloco:

<CodeBlock filename="aninhado.py" code={`idade = 20
tem_documento = True

if idade >= 18:
    if tem_documento:
        print("Pode entrar")
    else:
        print("Maior de idade, mas precisa do documento")
else:
    print("Menor de idade")`} />

<Dica>
  Condicionais aninhadas funcionam, mas ficam difíceis de ler rápido
  quando passam de 2 ou 3 níveis. Frequentemente dá para simplificar
  combinando as condições com `and`, que vimos na Aula 4 do Módulo 2:
  `if idade >= 18 and tem_documento:` substitui o aninhamento acima em uma
  única linha, com o mesmo resultado.
</Dica>

## Testando na prática

<PyPlayground
  titulo="condicionais"
  codigoInicial={`nota = 7

if nota >= 9:
    print("Conceito A")
elif nota >= 7:
    print("Conceito B")
elif nota >= 5:
    print("Conceito C")
else:
    print("Reprovado")`}
  validacao={{ saidaEsperada: "Conceito B" }}
/>

## Resumo da aula

<Resumo>
  `if` executa um bloco quando uma condição é verdadeira. `elif` encadeia
  condições adicionais, avaliadas em ordem. `else` define o caminho
  padrão quando nenhuma condição anterior é verdadeira. Condicionais
  podem ser aninhadas, mas frequentemente é mais claro combinar condições
  com `and`/`or`.
</Resumo>

## Exercícios

1. O que acontece se nenhuma condição de um `if/elif/else` for
   verdadeira e não houver `else`?
2. Por que a ordem das condições em uma cadeia de `elif` importa?
3. Reescreva o exemplo de condicional aninhada desta aula usando `and`,
   em uma única condição.

<Desafio>
  Escreva um programa que receba um número (fixe o valor em uma variável,
  sem usar `input()` ainda) e imprima `"Positivo"`, `"Negativo"` ou
  `"Zero"`, conforme o caso.
</Desafio>

## Próxima aula

Na **Aula 2 — Laço while**, vamos aprender a repetir um bloco de código
enquanto uma condição continuar verdadeira.

```

---

## Arquivo: `content/modulo-03/aula-02.mdx`

```mdx
export const meta = {
  modulo: "Módulo 3 — Controle de Fluxo",
  titulo: "Aula 2 — Laço while",
  duracao: "30 a 40 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Repetir um bloco de código com `while`.
- Evitar o erro mais perigoso desta aula: o loop infinito.
- Usar `while True` com `break` para loops controlados por evento.

## O que é um laço?

Um **laço** (ou *loop*) repete um bloco de código enquanto uma condição
for verdadeira. É a resposta de Python para "fazer a mesma coisa várias
vezes sem copiar e colar o código".

## while — enquanto

<CodeBlock filename="while_simples.py" code={`contador = 1

while contador <= 5:
    print(contador)
    contador = contador + 1`} />

O Python verifica a condição (`contador <= 5`). Se for verdadeira, executa
o bloco indentado e volta a verificar. Isso se repete até a condição virar
falsa.

<Diagrama
  titulo="Como o while funciona"
  passos={[
    { titulo: "Verifica a condição", descricao: "contador <= 5 ?" },
    { titulo: "Verdadeira → executa o bloco", descricao: "print, incrementa" },
    { titulo: "Volta a verificar", descricao: "repete até ficar falsa" },
    { titulo: "Falsa → sai do laço", descricao: "continua depois do while" },
  ]}
/>

<Atencao title="Loop infinito">
  Se você esquecer de atualizar a variável usada na condição
  (`contador = contador + 1`), o laço nunca termina — o programa trava.
  Esse é, de longe, o erro mais comum ao aprender `while`. Se isso
  acontecer no seu terminal, `Ctrl+C` interrompe a execução.
</Atencao>

## Testando na prática

<PyPlayground
  titulo="while_simples"
  codigoInicial={`contador = 1

while contador <= 5:
    print(contador)
    contador = contador + 1`}
  validacao={{ saidaEsperada: "1\n2\n3\n4\n5" }}
/>

## while True + break

Às vezes você não sabe de antemão quantas vezes o laço vai rodar — por
exemplo, "repita até a pessoa digitar 'sair'". Nesses casos, um padrão
comum é `while True` (uma condição sempre verdadeira) combinado com
`break` (que interrompe o laço imediatamente):

<CodeBlock filename="while_true_break.py" code={`numeros = [4, 8, 15, 16, 23, 42]
indice = 0

while True:
    if indice >= len(numeros):
        break
    print(numeros[indice])
    indice = indice + 1`} />

<Dica>
  `len(numeros)` devolve o tamanho da lista. Ainda não estudamos listas
  formalmente (isso vem no Módulo 4), mas vale ver esse exemplo agora
  para entender o `while True` + `break` na prática.
</Dica>

<ComoUmProgramadorPensa>
  `while True` sem um `break` em algum ponto do bloco é quase sempre um
  bug. Ao escrever esse padrão, um programador experiente já verifica,
  antes de rodar: "existe um caminho garantido para o break acontecer?"
</ComoUmProgramadorPensa>

## Resumo da aula

<Resumo>
  `while condição:` repete um bloco enquanto a condição for verdadeira —
  é essencial atualizar a variável testada para evitar loop infinito.
  `while True` combinado com `break` é o padrão para repetir até um
  evento específico acontecer, sem saber o número exato de repetições.
</Resumo>

## Exercícios

1. O que causa um loop infinito em um `while`?
2. Qual atalho de teclado interrompe um programa travado no terminal?
3. Para que serve o `break` dentro de um `while True`?

<Desafio>
  Usando `while`, escreva um programa que imprima todos os números pares
  de 2 a 20 (sem usar `for`, que veremos na próxima aula).
</Desafio>

## Próxima aula

Na **Aula 3 — Laço for e range**, vamos conhecer o `for`, o laço mais
usado no dia a dia em Python.

```

---

## Arquivo: `content/modulo-03/aula-03.mdx`

```mdx
export const meta = {
  modulo: "Módulo 3 — Controle de Fluxo",
  titulo: "Aula 3 — Laço for e range",
  duracao: "30 a 40 minutos",
  nivel: "Iniciante",
};

## Objetivos da aula

- Repetir um bloco de código um número definido de vezes com `for`.
- Usar `range()` para gerar sequências de números.
- Percorrer o texto de uma string com `for`.
- Escolher entre `for` e `while` com segurança.

## Por que existe o for, se já temos o while?

Na Aula 2, vimos que `while` cobre qualquer repetição — inclusive
"repita N vezes". Mas escrever isso com `while` exige três linhas
(inicializar, testar, atualizar) espalhadas pelo código, com risco de
esquecer uma delas e causar loop infinito. O `for` resolve exatamente o
caso mais comum — "repita isso um número conhecido de vezes" — de forma
mais direta e mais segura.

## for com range()

<CodeBlock filename="for_range.py" code={`for i in range(5):
    print(i)`} />

Saída: `0, 1, 2, 3, 4` — `range(5)` gera cinco números, começando em `0` e
parando **antes** de chegar em `5`.

<Atencao title="range(5) não inclui o 5">
  Esse é um dos detalhes que mais confunde iniciantes: `range(n)` produz
  os números de `0` até `n - 1`, nunca `n`. Se você quer contar de 1 até
  5, use `range(1, 6)`.
</Atencao>

## As três formas do range()

<CodeBlock filename="formas_range.py" code={`range(5)        # 0, 1, 2, 3, 4
range(1, 6)     # 1, 2, 3, 4, 5
range(0, 10, 2) # 0, 2, 4, 6, 8  (de 2 em 2)`} />

O terceiro argumento é o **passo** (*step*) — pode até ser negativo, para
contar regressivamente:

<CodeBlock filename="range_regressivo.py" code={`for i in range(5, 0, -1):
    print(i)
print("Fogo!")`} />

<Diagrama
  titulo="range(1, 6)"
  passos={[
    { titulo: "Início: 1", descricao: "primeiro valor gerado" },
    { titulo: "Passo: +1", descricao: "incremento a cada volta" },
    { titulo: "Fim: 6 (exclusivo)", descricao: "para antes de chegar aqui" },
    { titulo: "Resultado: 1,2,3,4,5", descricao: "cinco números" },
  ]}
/>

## for em strings

`for` também percorre, letra por letra, qualquer string:

<CodeBlock filename="for_string.py" code={`for letra in "Python":
    print(letra)`} />

<Dica>
  Isso funciona porque strings são "iteráveis" — no Módulo 4, quando
  estudarmos listas, tuplas e dicionários, você vai ver esse mesmo padrão
  de `for item in algo:` se repetir para praticamente todo tipo de dado
  que agrupa vários valores.
</Dica>

## Testando na prática

<PyPlayground
  titulo="for_range"
  codigoInicial={`for i in range(1, 6):
    print(i)`}
  validacao={{ saidaEsperada: "1\n2\n3\n4\n5" }}
/>

## for ou while — qual escolher?

<ComoUmProgramadorPensa>
  A pergunta que decide é: "eu sei, antes de começar, quantas vezes isso
  vai repetir?" Se a resposta é sim (percorrer uma lista, contar de 1 a
  10, repetir 3 vezes), use `for`. Se a resposta é não (repita até a
  pessoa digitar "sair", repita até o saldo acabar), use `while`. Usar o
  errado geralmente ainda funciona, mas deixa o código mais confuso do
  que precisa ser.
</ComoUmProgramadorPensa>

## Resumo da aula

<Resumo>
  `for variavel in range(...):` repete um número definido de vezes.
  `range(n)` vai de `0` a `n-1`; `range(a, b)` vai de `a` a `b-1`;
  `range(a, b, passo)` permite contar de trás para frente ou pular
  números. `for` também percorre strings, caractere por caractere. Use
  `for` quando souber quantas repetições vai ter; `while`, quando não
  souber.
</Resumo>

## Exercícios

1. O que `range(3, 8)` gera?
2. Como fazer `range` contar de 10 até 1, de trás para frente?
3. Em que situação `while` é mais apropriado que `for`?

<Desafio>
  Use `for` e `range()` para imprimir a tabuada do 7, do `7 x 1` até o
  `7 x 10`, uma linha por multiplicação (ex.: `7 x 3 = 21`).
</Desafio>

## Próxima aula

Na **Aula 4 — continue e match-case**, vamos completar o controle de
fluxo: como pular uma repetição sem interromper o laço inteiro, e uma
alternativa mais legível a cadeias longas de `elif`.

```

---

## Arquivo: `docs/cheatsheet-modulo-01.md`

```md
# Cheatsheet

A referência de comandos do curso deixou de ser mantida como Markdown
estático para evitar duas fontes divergentes. A versão viva, pesquisável
e sempre atualizada fica em `/cheatsheet` dentro da própria plataforma
(dados em `lib/cheatsheet.ts`).

Rode `npm run dev` e acesse `http://localhost:3000/cheatsheet`.

```

---

## Arquivo: `docs/design-system.md`

```md
# PyForge Design System v1.0

## Filosofia

O design deve transmitir três sensações: **profissionalismo**, **clareza**
e **tecnologia**. Nunca infantil, nunca poluído, nunca exageradamente
colorido. O conteúdo é sempre o protagonista.

Referências: Stripe Docs, Vercel, GitHub Docs, Tailwind CSS, Microsoft
Learn, React.dev.

## Paleta

| Papel | Cor | Hex |
|---|---|---|
| Primária | Azul profundo | `#2563EB` |
| Destaque | Amarelo Python | `#FACC15` |
| Sucesso | Verde | `#22C55E` |
| Aviso | Laranja | `#F97316` |
| Erro | Vermelho | `#EF4444` |
| Curiosidade | Roxo | `#A855F7` |
| Fundo escuro | — | `#09090B` |
| Fundo claro | — | `#FAFAFA` |

Tema escuro é o padrão; o tema claro é opcional (alternável pelo usuário).

## Tipografia

- Títulos: **Inter Bold**
- Texto: **Inter Regular**
- Código: **JetBrains Mono**

## Espaçamento

Escala fixa em pixels: `8 · 16 · 24 · 32 · 48 · 64`, mapeada no Tailwind
como `1.5x · 2x · 3x · 4x · 6x · 8x`.

## Componentes padronizados

| Componente | Cor | Função |
|---|---|---|
| Dica | Azul | Atalhos e boas práticas |
| Atenção | Vermelho | Erros frequentes |
| Curiosidade | Roxo | História e fatos interessantes |
| Desafio | Laranja | Exercícios de maior dificuldade |
| Projeto | Verde | Aplicação prática |
| Resumo | Cinza | Revisão rápida |
| Como um programador pensa | Roxo | Raciocínio antes do código |

Ícones: sempre vetoriais e minimalistas (biblioteca Lucide Icons), nunca
emojis no produto final.

## Estrutura fixa de cada aula

1. Objetivos de aprendizagem
2. Pré-requisitos
3. Explicação do conceito
4. Analogia com o mundo real
5. Exemplo ilustrado
6. Código comentado
7. Erros comuns
8. Como um programador pensa
9. Exercícios
10. Desafio
11. Resumo
12. Próximos passos

Essa previsibilidade é intencional: reduz a carga cognitiva do aluno, que
não precisa se adaptar a um formato novo a cada aula.

```

---

## Arquivo: `docs/roadmap.md`

```md
# Roadmap — PyForge

## Release 0.1 — Fundação (atual)

- [x] Estrutura do projeto (Next.js + TypeScript + Tailwind)
- [x] Design System (cores, tipografia, espaçamento) implementado no Tailwind
- [x] Componentes base: Navbar, Sidebar, Alert, CodeBlock, ProgressBar, Logo
- [x] Tema claro/escuro com persistência
- [x] Landing page
- [x] Layout da área de curso com navegação lateral
- [x] Aula 1 do Módulo 1 publicada no formato definitivo (MDX)

## Release 0.2 — Módulo 1 completo (atual)

- [x] Aulas 2 a 10 do Módulo 1 em MDX
- [x] Projeto final do módulo (programa de terminal com cadastro em arquivo)
- [x] Quiz de revisão do módulo (componente interativo)
- [x] Cheatsheet do módulo (Markdown — versão em PDF fica para uma
      próxima entrega, junto com a exportação de outros materiais)

## Release 0.3 — Interatividade

- [ ] Progresso salvo localmente (aulas concluídas)
- [x] Busca — implementada para Cheatsheet e Glossário; busca no conteúdo
      das aulas ainda pendente
- [ ] Favoritos
- [ ] Sistema Forge Path (XP e desbloqueios)
- [x] Diagramas de fluxo em SVG (componente `Diagrama`, usado nas Aulas 1,
      6 e 7 — reaproveitável nos próximos módulos)
- [x] **Playground com interpretador Python real** (componente
      `PyPlayground`, via Pyodide/WebAssembly) — roda código Python direto
      no navegador do aluno, com validação automática de saída esperada
      quando configurada. Em uso nas Aulas 1/M1, 10/M1, 2/M2 e 3/M2.
      **`input()` suportado** via fila de entradas pré-preenchidas (o
      aluno digita as respostas com antecedência, uma por linha, no campo
      "Entradas" — `input()` consome essa fila em ordem). Um `input()`
      que pausa de verdade no meio da execução exigiria Web Workers com
      SharedArrayBuffer e cabeçalhos COOP/COEP no servidor — avaliar como
      melhoria futura, se fizer falta.
      **Limitação de design conhecida:** validação automática de saída
      não é confiável em desafios que usam `input()`, porque a saída
      inclui o texto do prompt que o próprio aluno escreveu (livre,
      variável). Por isso, exercícios com `input()` ficam como prática
      livre, sem `validacao`; a correção automática (`validacao`) deve
      ser reservada para desafios sem `input()`.

## Release 0.4 — Módulos 2 a 4

- [ ] Fundamentos, Controle de Fluxo, Estruturas de Dados
- [ ] Projetos: conversor de moedas, jogo de adivinhação, sistema de cadastro

## Release 1.0 — Curso completo

- [ ] 12 módulos, 100+ aulas
- [ ] Projeto final integrador
- [ ] Certificado de conclusão (PDF com QR Code)

```

---

## Arquivo: `lib/cheatsheet.ts`

```ts
export type CheatItem = {
  comando: string;
  descricao: string;
  categoria: "Terminal" | "Python" | "Pip / Ambiente" | "Sintaxe";
  aula: string; // onde foi ensinado, para referência
};

// Cada aula nova alimenta esta lista. Mantém o cheatsheet sempre
// atualizado sem precisar duplicar conteúdo em outro lugar.
export const CHEATSHEET_MODULO_01: CheatItem[] = [
  { comando: "print(valor)", descricao: "Exibe um valor na tela.", categoria: "Python", aula: "Aula 5" },
  { comando: "input(pergunta)", descricao: "Pede um texto ao usuário e devolve como string.", categoria: "Python", aula: "Aula 10" },
  { comando: "open(arquivo, modo)", descricao: "Abre um arquivo para leitura ou escrita.", categoria: "Python", aula: "Aula 10" },
  { comando: "arquivo.write(texto)", descricao: "Escreve texto em um arquivo já aberto.", categoria: "Python", aula: "Aula 10" },
  { comando: "pwd", descricao: "Mostra a pasta atual no terminal.", categoria: "Terminal", aula: "Aula 4" },
  { comando: "ls", descricao: "Lista arquivos e pastas da pasta atual.", categoria: "Terminal", aula: "Aula 4" },
  { comando: "cd pasta", descricao: "Entra em uma pasta.", categoria: "Terminal", aula: "Aula 4" },
  { comando: "cd ..", descricao: "Sobe um nível de pasta.", categoria: "Terminal", aula: "Aula 4" },
  { comando: "mkdir nome", descricao: "Cria uma nova pasta.", categoria: "Terminal", aula: "Aula 4" },
  { comando: "rm arquivo", descricao: "Remove um arquivo (sem lixeira).", categoria: "Terminal", aula: "Aula 4" },
  { comando: "rm -r pasta", descricao: "Remove uma pasta e todo o conteúdo dela.", categoria: "Terminal", aula: "Aula 4" },
  { comando: "cp origem destino", descricao: "Copia um arquivo.", categoria: "Terminal", aula: "Aula 4" },
  { comando: "mv origem destino", descricao: "Move ou renomeia um arquivo.", categoria: "Terminal", aula: "Aula 4" },
  { comando: "python3 --version", descricao: "Mostra a versão do Python instalada.", categoria: "Pip / Ambiente", aula: "Aula 2" },
  { comando: "python3 arquivo.py", descricao: "Executa um script Python.", categoria: "Terminal", aula: "Aula 5" },
  { comando: "pip install pacote", descricao: "Instala uma biblioteca Python.", categoria: "Pip / Ambiente", aula: "Aula 2" },
  { comando: "python3 -m venv venv", descricao: "Cria um ambiente virtual isolado para o projeto.", categoria: "Pip / Ambiente", aula: "Aula 8" },
  { comando: "source venv/bin/activate", descricao: "Ativa o ambiente virtual (Linux/macOS).", categoria: "Pip / Ambiente", aula: "Aula 8" },
  { comando: "pip freeze > requirements.txt", descricao: "Salva a lista de bibliotecas usadas no projeto.", categoria: "Pip / Ambiente", aula: "Aula 8" },
  { comando: "# comentário", descricao: "Tudo depois do # é ignorado pelo Python.", categoria: "Sintaxe", aula: "Aula 9" },
  { comando: "snake_case", descricao: "Convenção de nomes: tudo minúsculo, com underscore.", categoria: "Sintaxe", aula: "Aula 9" },
];

export const CHEATSHEET_MODULO_02: CheatItem[] = [
  { comando: "variavel = valor", descricao: "Cria ou atualiza uma variável.", categoria: "Sintaxe", aula: "Módulo 2 — Aula 1" },
  { comando: "type(valor)", descricao: "Mostra o tipo de um valor.", categoria: "Python", aula: "Módulo 2 — Aula 2" },
  { comando: "int(valor)", descricao: "Converte um valor para número inteiro.", categoria: "Python", aula: "Módulo 2 — Aula 2" },
  { comando: "float(valor)", descricao: "Converte um valor para número decimal.", categoria: "Python", aula: "Módulo 2 — Aula 2" },
  { comando: "str(valor)", descricao: "Converte um valor para texto.", categoria: "Python", aula: "Módulo 2 — Aula 2" },
  { comando: "round(valor, casas)", descricao: "Arredonda um número decimal para N casas.", categoria: "Python", aula: "Módulo 2 — Aula 2" },
  { comando: 'f"texto {variavel}"', descricao: "Insere variáveis dentro de um texto (f-string).", categoria: "Sintaxe", aula: "Módulo 2 — Aula 3" },
  { comando: 'f"{valor:.2f}"', descricao: "Formata um número decimal com 2 casas.", categoria: "Sintaxe", aula: "Módulo 2 — Aula 3" },
  { comando: "print(a, b, sep=..., end=...)", descricao: "sep define o separador; end define o que vem no final.", categoria: "Python", aula: "Módulo 2 — Aula 3" },
  { comando: "//", descricao: "Divisão inteira (descarta a parte decimal).", categoria: "Sintaxe", aula: "Módulo 2 — Aula 4" },
  { comando: "%", descricao: "Resto da divisão (módulo).", categoria: "Sintaxe", aula: "Módulo 2 — Aula 4" },
  { comando: "==", descricao: "Compara se dois valores são iguais.", categoria: "Sintaxe", aula: "Módulo 2 — Aula 4" },
  { comando: "and / or / not", descricao: "Combinam ou invertem condições booleanas.", categoria: "Sintaxe", aula: "Módulo 2 — Aula 4" },
];

export const CHEATSHEET_MODULO_03: CheatItem[] = [
  { comando: "if condicao:", descricao: "Executa o bloco se a condição for True.", categoria: "Sintaxe", aula: "Módulo 3 — Aula 1" },
  { comando: "elif condicao:", descricao: "Condição adicional, avaliada se as anteriores forem False.", categoria: "Sintaxe", aula: "Módulo 3 — Aula 1" },
  { comando: "else:", descricao: "Bloco padrão quando nenhuma condição anterior é True.", categoria: "Sintaxe", aula: "Módulo 3 — Aula 1" },
  { comando: "while condicao:", descricao: "Repete um bloco enquanto a condição for True.", categoria: "Sintaxe", aula: "Módulo 3 — Aula 2" },
  { comando: "break", descricao: "Interrompe o laço imediatamente.", categoria: "Sintaxe", aula: "Módulo 3 — Aula 2" },
  { comando: "for x in range(n):", descricao: "Repete n vezes, com x indo de 0 a n-1.", categoria: "Sintaxe", aula: "Módulo 3 — Aula 3" },
  { comando: "range(a, b, passo)", descricao: "Gera números de a até b-1, pulando de passo em passo.", categoria: "Python", aula: "Módulo 3 — Aula 3" },
];

```

---

## Arquivo: `lib/glossario.ts`

```ts
export type GlossarioItem = {
  termo: string;
  definicao: string;
  aula: string;
};

// Diferente do cheatsheet (comandos e funções), o glossário guarda
// CONCEITOS — as ideias por trás do código, não a sintaxe em si.
export const GLOSSARIO_MODULO_01: GlossarioItem[] = [
  { termo: "Algoritmo", definicao: "Sequência organizada de passos para resolver um problema.", aula: "Aula 1" },
  { termo: "Hardware", definicao: "Os componentes físicos do computador — processador, memória, disco, teclado.", aula: "Aula 1" },
  { termo: "Software", definicao: "A parte lógica do computador — os programas que ele executa.", aula: "Aula 1" },
  { termo: "Linguagem interpretada", definicao: "Linguagem cujo código é lido e executado linha a linha por um interpretador, sem gerar antes um executável.", aula: "Aula 6" },
  { termo: "Linguagem compilada", definicao: "Linguagem cujo código é totalmente traduzido para linguagem de máquina antes de rodar.", aula: "Aula 6" },
  { termo: "CPython", definicao: "A implementação oficial e mais usada do interpretador Python.", aula: "Aula 6" },
  { termo: "Bytecode", definicao: "Formato intermediário gerado pelo interpretador a partir do código-fonte, antes da execução final.", aula: "Aula 6" },
  { termo: "pip", definicao: "O gerenciador de pacotes do Python — instala bibliotecas prontas feitas por outras pessoas.", aula: "Aula 2" },
  { termo: "Ambiente virtual (venv)", definicao: "Uma cópia isolada do Python usada por um único projeto, evitando conflito entre dependências de projetos diferentes.", aula: "Aula 2" },
  { termo: "IDE", definicao: "Ambiente de Desenvolvimento Integrado — editor especializado em programação, com autocompletar e detecção de erros.", aula: "Aula 3" },
  { termo: "SyntaxError", definicao: "Erro que ocorre quando o código quebra a gramática do Python (ex.: parêntese faltando).", aula: "Aula 7" },
  { termo: "NameError", definicao: "Erro que ocorre ao usar uma variável ou função que não existe.", aula: "Aula 7" },
  { termo: "TypeError", definicao: "Erro que ocorre ao aplicar uma operação a tipos de dado incompatíveis.", aula: "Aula 7" },
  { termo: "IndentationError", definicao: "Erro que ocorre quando o recuo (espaços) no início de uma linha de bloco está incorreto.", aula: "Aula 7" },
  { termo: "Traceback", definicao: "O caminho que o programa percorreu até o erro — deve ser lido de baixo para cima.", aula: "Aula 7" },
  { termo: "ValueError", definicao: "Erro que ocorre ao tentar converter um valor para um tipo que ele não representa (ex.: int('vinte')).", aula: "Aula 10" },
  { termo: ".gitignore", definicao: "Arquivo que diz ao Git quais arquivos não devem ser versionados.", aula: "Aula 8" },
  { termo: "snake_case", definicao: "Convenção de nomenclatura do Python: tudo minúsculo, palavras separadas por underscore.", aula: "Aula 9" },
  { termo: "PEP 8", definicao: "Guia oficial de estilo de código do Python.", aula: "Aula 9" },
];

export const GLOSSARIO_MODULO_02: GlossarioItem[] = [
  { termo: "Variável", definicao: "Nome que aponta para um valor guardado na memória — funciona como uma etiqueta, não como uma caixa fechada.", aula: "Módulo 2 — Aula 1" },
  { termo: "Imutável", definicao: "Diz-se de um valor que, uma vez criado, não pode ser alterado — como números e strings em Python.", aula: "Módulo 2 — Aula 1" },
  { termo: "str", definicao: "Tipo de dado que representa texto (string).", aula: "Módulo 2 — Aula 2" },
  { termo: "int", definicao: "Tipo de dado que representa números inteiros.", aula: "Módulo 2 — Aula 2" },
  { termo: "float", definicao: "Tipo de dado que representa números decimais.", aula: "Módulo 2 — Aula 2" },
  { termo: "bool", definicao: "Tipo de dado que representa verdadeiro (True) ou falso (False).", aula: "Módulo 2 — Aula 2" },
  { termo: "f-string", definicao: "String prefixada com f que permite inserir variáveis diretamente com {}, convertendo tipos automaticamente.", aula: "Módulo 2 — Aula 3" },
  { termo: "Operador relacional", definicao: "Operador que compara dois valores e resulta em True ou False (ex.: ==, >, <).", aula: "Módulo 2 — Aula 4" },
  { termo: "Operador lógico", definicao: "Operador que combina expressões booleanas: and, or, not.", aula: "Módulo 2 — Aula 4" },
];

export const GLOSSARIO_MODULO_03: GlossarioItem[] = [
  { termo: "Controle de fluxo", definicao: "Recursos que permitem ao programa decidir (if) ou repetir (while, for) o que executar, em vez de rodar sempre linha a linha.", aula: "Módulo 3 — Aula 1" },
  { termo: "Condicional aninhada", definicao: "Um if dentro do bloco de outro if — frequentemente pode ser simplificado combinando condições com and/or.", aula: "Módulo 3 — Aula 1" },
  { termo: "Laço (loop)", definicao: "Estrutura que repete um bloco de código enquanto uma condição for verdadeira, ou por um número de vezes.", aula: "Módulo 3 — Aula 2" },
  { termo: "Loop infinito", definicao: "Erro que ocorre quando a condição de um while nunca se torna falsa — o programa trava repetindo para sempre.", aula: "Módulo 3 — Aula 2" },
  { termo: "range()", definicao: "Função que gera uma sequência de números, usada tipicamente com for para repetir um número definido de vezes.", aula: "Módulo 3 — Aula 3" },
  { termo: "Iterável", definicao: "Qualquer valor que pode ser percorrido item a item com for — como strings, e futuramente listas e dicionários.", aula: "Módulo 3 — Aula 3" },
];

```

---

## Arquivo: `mdx-components.tsx`

```tsx
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

```

---

## Arquivo: `next.config.mjs`

```mjs
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = createMDX({
  options: {
    // remark-gfm habilita tabelas, listas de tarefas e strikethrough —
    // usados, por exemplo, na tabela de atalhos da Aula 3.
    remarkPlugins: [remarkGfm],
  },
});

export default withMDX(nextConfig);

```

---

## Arquivo: `package.json`

```json
{
  "name": "pyforge",
  "version": "0.1.0",
  "private": true,
  "description": "Plataforma moderna de ensino de Python com conteúdo interativo.",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@next/mdx": "^15.0.0",
    "@mdx-js/loader": "^3.0.1",
    "@mdx-js/react": "^3.0.1",
    "remark-gfm": "^4.0.0",
    "lucide-react": "^0.383.0",
    "clsx": "^2.1.1"
  },
  "devDependencies": {
    "typescript": "^5.5.4",
    "@types/node": "^20.14.0",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@types/mdx": "^2.0.13",
    "tailwindcss": "^3.4.7",
    "postcss": "^8.4.40",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-config-next": "^15.0.0"
  }
}

```

---

## Arquivo: `postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```

---

## Arquivo: `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial PyForge — ver docs/design-system.md
        primary: {
          DEFAULT: "#2563EB", // Azul profundo
          light: "#3B82F6",
          dark: "#1D4ED8",
        },
        accent: {
          DEFAULT: "#FACC15", // Amarelo Python
        },
        success: {
          DEFAULT: "#22C55E",
        },
        warning: {
          DEFAULT: "#F97316",
        },
        danger: {
          DEFAULT: "#EF4444",
        },
        curiosity: {
          DEFAULT: "#A855F7", // Roxo
        },
        bg: {
          dark: "#09090B",
          "dark-elevated": "#111113",
          light: "#FAFAFA",
          "light-elevated": "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      spacing: {
        // Escala fixa definida no Design System (8/16/24/32/48/64)
        "1.5x": "8px",
        "2x": "16px",
        "3x": "24px",
        "4x": "32px",
        "6x": "48px",
        "8x": "64px",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [
    // Registra a variante `light:` — o tema escuro é o padrão da aplicação
    // (ver globals.css), então o tema claro é tratado como uma sobrecarga,
    // ativada quando a tag <html> tem a classe "light".
    plugin(function ({ addVariant }) {
      addVariant("light", "html.light &");
    }),
  ],
};

export default config;

```

---

## Arquivo: `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", "mdx-components.tsx"],
  "exclude": ["node_modules"]
}

```

---

