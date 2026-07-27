import Link from "next/link";

export function MarketingHero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20 pt-24 text-center md:pt-32">
      <span className="inline-block rounded-[15px] border border-border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
        Now in early access
      </span>
      <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
        Chat that keeps up with you.
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
        Colbe brings your conversations, context, and team together in one place.
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <Link
          href="/register"
          className="rounded-[15px] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Start for free
        </Link>
        <Link
          href="#how-it-works"
          className="rounded-[15px] border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent"
        >
          See how it works
        </Link>
      </div>
    </section>
  );
}