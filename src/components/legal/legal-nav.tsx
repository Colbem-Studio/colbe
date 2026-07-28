"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, ShieldCheck, Cookie } from "@phosphor-icons/react/dist/ssr";

const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms", icon: FileText },
  { label: "Privacy Policy", href: "/privacy", icon: ShieldCheck },
  { label: "Cookie Policy", href: "/cookies", icon: Cookie },
];

export function LegalNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-0.5">
      {LEGAL_LINKS.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-2 rounded-[15px] px-3 py-2 text-sm transition-colors ${
              isActive
                ? "bg-accent font-medium text-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}