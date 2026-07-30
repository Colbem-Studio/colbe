import Image from "next/image";
import Link from "next/link";
import { Info, BookOpen } from "@phosphor-icons/react/dist/ssr";

const NAV_LINKS = [
  { label: "About", href: "/about", icon: Info },
  { label: "Documentation", href: "/docs", icon: BookOpen },
];

export function MarketingNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/favicon.svg" alt="Colbe logo" width={24} height={24} />
          <span className="text-lg font-semibold tracking-tight text-foreground">Colbe</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}