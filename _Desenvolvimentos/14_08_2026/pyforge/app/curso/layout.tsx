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

