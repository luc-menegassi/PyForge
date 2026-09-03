# PyForge — Setup de Deploy no GitHub Pages

Entrega pontual (infraestrutura), fora do fluxo normal de aulas. Contém
apenas os arquivos novos ou alterados para habilitar o GitHub Pages —
não é o snapshot completo do projeto.

## Onde colocar cada arquivo

- `next.config.mjs` → substitui o arquivo existente na raiz do repo
- `.github/workflows/deploy.yml` → arquivo novo

---

## Arquivo: `next.config.mjs`

```mjs
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

// GITHUB_PAGES=true é setado só pelo workflow de deploy (ver
// .github/workflows/deploy.yml) — localmente (`npm run dev`), o site
// continua rodando normal, sem basePath, sem exigir a variável.
const isGithubPages = process.env.GITHUB_PAGES === "true";

// Nome do repositório no GitHub. Só é usado se o Pages for publicado
// como "project page" (usuario.github.io/PyForge). Se um dia vocês
// migrarem para um domínio próprio ou para um repo usuario.github.io,
// basta remover basePath/assetPrefix abaixo.
const repoName = "PyForge";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],

  // Gera HTML/CSS/JS estáticos em ./out no lugar de rodar um servidor —
  // é isso que o GitHub Pages consegue servir. O PyForge não usa API
  // routes, SSR dinâmico nem imagens otimizadas pelo Next, então essa
  // troca não exige mudança de lógica no código.
  output: "export",

  // Sem isso, rotas como /curso/modulo-01/aula-01 retornam 404 no Pages
  // (ele espera /curso/modulo-01/aula-01/index.html).
  trailingSlash: true,

  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
});

export default withMDX(nextConfig);
```

---

## Arquivo: `.github/workflows/deploy.yml`

```yaml
name: Deploy PyForge to GitHub Pages

on:
  push:
    branches: [main]
  # Permite disparar manualmente pela aba "Actions" do GitHub, sem
  # precisar de um novo commit — útil para testar o deploy isolado.
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

# Evita dois deploys rodando ao mesmo tempo se houver pushes em sequência.
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout do repositório
        uses: actions/checkout@v4

      - name: Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"

      - name: Instalar dependências
        run: npm ci

      - name: Build estático (com basePath do GitHub Pages)
        run: npm run build
        env:
          GITHUB_PAGES: "true"

      - name: Adicionar .nojekyll
        # Sem isso, o GitHub Pages tenta processar o site com Jekyll e
        # ignora pastas começando com "_" — incluindo _next/, onde o
        # Next.js coloca os assets do build. O arquivo só precisa existir,
        # o conteúdo é irrelevante.
        run: touch ./out/.nojekyll

      - name: Preparar artefato do Pages
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Publicar no GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Passo a passo para ativar

1. **Adicione os dois arquivos acima** no repositório (o `next.config.mjs`
   substitui o existente; o workflow é novo, na pasta `.github/workflows/`).
2. No GitHub, vá em **Settings → Pages** do repositório e, em "Build and
   deployment → Source", selecione **"GitHub Actions"** (não "Deploy from
   a branch").
3. Faça commit e push para a branch `main`. O workflow roda sozinho e
   publica o site em `https://<seu-usuario>.github.io/PyForge/`.
4. Acompanhe o progresso na aba **Actions** do repositório.

## Teste local antes de subir (recomendado)

Rode localmente com a mesma flag usada no CI, para conferir se o build
gera o `./out` sem erros:

```bash
GITHUB_PAGES=true npm run build
```

Se quiser servir esse resultado localmente para conferir visualmente
(o `basePath` só existe quando `GITHUB_PAGES=true`, então os links
internos vão apontar para `/PyForge/...`):

```bash
npx serve out
```

## O que NÃO precisou mudar

- **Nenhuma rota dinâmica hoje** (`app/curso/modulo-XX/aula-YY/page.tsx`
  são todas estáticas) — então `generateStaticParams` não é necessário
  ainda. Isso só entra em cena quando o refactor para
  `/curso/[modulo]/[aula]` for feito (próximo item da fila).
- `PyPlayground` (Pyodide via CDN) — roda inteiramente no navegador,
  sem depender de servidor.
- `ThemeToggle` (localStorage) — cliente puro, sem SSR.
- Todo o conteúdo MDX das aulas — compilado em build time, sem mudança.

## Atenção para quando a rota dinâmica for implementada

Quando `/curso/[modulo]/[aula]/page.tsx` existir, será obrigatório
exportar `generateStaticParams()` retornando todas as combinações
módulo/aula — sem isso, `output: "export"` falha no build, porque ele
precisa saber de antemão todas as páginas para pré-renderizar. Vale
lembrar disso quando chegarmos nessa etapa da fila.
