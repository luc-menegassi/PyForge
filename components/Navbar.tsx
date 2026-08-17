import Link from "next/link";
import { Search } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-bg-dark/80 backdrop-blur light:border-zinc-200 light:bg-bg-light/80">
      <div className="pf-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
          <Link href="/curso" className="transition hover:text-zinc-100">
            Curso
          </Link>
          <Link href="/cheatsheet" className="transition hover:text-zinc-100">
            Cheatsheet
          </Link>
          <Link href="/glossario" className="transition hover:text-zinc-100">
            Glossário
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Buscar"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-primary hover:text-primary light:border-zinc-300"
          >
            <Search size={16} />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

