import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="w-full border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Colbe</span>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
          <Link href="/terms" className="hover:text-foreground">Terms</Link>
        </div>
      </div>
    </footer>
  );
}