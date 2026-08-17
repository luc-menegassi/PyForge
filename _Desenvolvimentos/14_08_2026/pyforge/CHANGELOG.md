# Changelog

Todas as mudanças notáveis deste projeto serão documentadas aqui.
O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

## [Não lançado]

### Adicionado

- **Busca fuzzy com Fuse.js** em `/cheatsheet` e `/glossario` — tolera
  pequenos erros de digitação (ex.: buscar "indentaçao" ainda encontra
  "IndentationError"). Substitui o filtro anterior por `includes()`
  exato. `ReferenceSearch`/`useFilteredItems` (`components/ReferenceSearch.tsx`)
  agora recebem uma lista de `keys` (nomes das propriedades pesquisáveis
  do item) em vez de uma função `fields` — os dois pontos de uso
  (`app/cheatsheet/page.tsx` e `app/glossario/page.tsx`) foram
  atualizados de acordo. Nova dependência: `fuse.js`.

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

