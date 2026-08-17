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

