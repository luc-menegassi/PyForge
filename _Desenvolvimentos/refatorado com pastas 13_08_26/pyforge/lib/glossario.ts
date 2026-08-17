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

