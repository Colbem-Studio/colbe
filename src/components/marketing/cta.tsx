import Link from "next/link";

export function MarketingCta() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Ready to try Colbe?
        </h2>
        <p className="mt-4 text-muted-foreground">Join early access — no credit card required.</p>
        <Link
          href="/register"
          className="mt-8 inline-block rounded-[15px] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}