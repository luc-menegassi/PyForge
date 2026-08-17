import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PyForge — Aprenda Python. Construa o futuro.",
  description:
    "Plataforma moderna de ensino de Python com conteúdo interativo, projetos reais e uma trilha completa do zero ao avançado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        {/* Tema: aplica a classe salva no localStorage antes da hidratação, evitando flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('pyforge-theme');
                const theme = saved || 'dark';
                document.documentElement.classList.remove('dark', 'light');
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
