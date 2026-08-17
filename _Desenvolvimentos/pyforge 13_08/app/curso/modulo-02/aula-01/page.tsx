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
