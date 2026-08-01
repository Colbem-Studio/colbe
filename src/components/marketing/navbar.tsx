"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Info, BookOpen } from "@phosphor-icons/react/dist/ssr";

const LINKS = [
  { href: "/about", label: "About", icon: Info },
  { href: "/docs", label: "Documentation", icon: BookOpen },
];

export function MarketingNavbar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 w-full px-4 py-3">
      <nav className="mx-auto flex max-w-3xl items-center justify-between rounded-[15px] bg-card px-4 py-2 shadow-lg">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/favicon.svg" alt="Colbe" width={24} height={24} />
          <span className="text-base font-semibold text-foreground">Colbe</span>
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          {LINKS.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 border-b-2 pb-0.5 text-sm transition-colors ${
                  isActive
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}