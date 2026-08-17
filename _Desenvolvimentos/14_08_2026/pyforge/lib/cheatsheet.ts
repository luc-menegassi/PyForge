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

