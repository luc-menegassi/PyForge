// mdx.d.ts (colocar na raiz do repositório, ao lado do next.config.mjs)

declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const meta: {
    modulo: string;
    titulo: string;
    duracao: string;
    nivel: string;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}