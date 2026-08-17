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
