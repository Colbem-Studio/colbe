import { ScrollArea } from "@/components/ui/scroll-area";
import { LegalNav } from "@/components/legal/legal-nav";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl">
      <aside className="w-60 shrink-0 border-r border-border px-4 py-8">
        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Legal
        </p>
        <LegalNav />
      </aside>

      <ScrollArea className="flex-1">
        <div className="mx-auto max-w-2xl px-8 py-8">{children}</div>
      </ScrollArea>
    </div>
  );
}