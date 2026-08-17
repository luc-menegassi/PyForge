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
