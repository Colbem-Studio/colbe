"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import {
  Rocket,
  ChatCircleDots,
  UsersThree,
  ShieldCheck,
  Plugs,
  Code,
} from "@phosphor-icons/react/dist/ssr";

const DOCS_NAV = [
  {
    section: "Getting started",
    items: [
      { label: "Introduction", href: "/docs", icon: Rocket },
      { label: "Quickstart", href: "/docs/quickstart", icon: Code },
    ],
  },
  {
    section: "Core concepts",
    items: [
      { label: "Messaging", href: "/docs/messaging", icon: ChatCircleDots },
      { label: "Communities", href: "/docs/communities", icon: UsersThree },
      { label: "Security", href: "/docs/security", icon: ShieldCheck },
    ],
  },
  {
    section: "Integrations",
    items: [{ label: "API & webhooks", href: "/docs/api", icon: Plugs }],
  },
];

const sidebarTheme = {
  root: {
    inner: "h-full overflow-y-auto rounded-[15px] bg-card px-3 py-4",
  },
  item: {
    base: "flex items-center gap-2 rounded-[15px] p-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground",
  },
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full">
      <aside className="hidden w-64 shrink-0 px-4 py-8 md:block">
        <div className="sticky top-8 h-[calc(100vh-4rem)]">
          <Sidebar theme={sidebarTheme} aria-label="Docs navigation">
            <Link href="/" className="mb-4 flex items-center gap-2 px-2">
              <Image src="/favicon.svg" alt="Colbe" width={20} height={20} />
              <span className="text-sm font-semibold text-foreground">Docs</span>
            </Link>

            <SidebarItems>
              {DOCS_NAV.map(({ section, items }) => (
                <SidebarItemGroup key={section}>
                  <p className="px-2 pb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {section}
                  </p>
                  {items.map(({ label, href, icon: Icon }) => (
                    <SidebarItem key={href} as={Link} href={href} icon={Icon}>
                      {label}
                    </SidebarItem>
                  ))}
                </SidebarItemGroup>
              ))}
            </SidebarItems>
          </Sidebar>
        </div>
      </aside>

      <main className="min-w-0 flex-1 px-6 py-8">
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>
    </div>
  );
}