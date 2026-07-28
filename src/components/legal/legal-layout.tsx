import { Sidebar } from "flowbite-react";
import { LegalNav } from "@/components/legal/legal-nav";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar
        aria-label="Legal navigation"
        className="h-screen w-60 shrink-0 [&>div]:rounded-none [&>div]:bg-card"
      >
        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Legal
        </p>
        <LegalNav />
      </Sidebar>

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-2xl px-8 py-10">{children}</div>
      </div>
    </div>
  );
}