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
