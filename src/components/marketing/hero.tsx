import Link from "next/link";
import { ChatCircleDots, UsersThree, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function MarketingHero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-16 pt-24 text-center md:pt-32">
      <h1 className="font-mono text-4xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-6xl">
        Where your people
        <br />
        <span className="text-primary">actually talk.</span>
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground md:text-base">
        Friends, communities, or your whole business — Colbe keeps every
        conversation, file, and moment in sync, all in one place.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/register"
          className="rounded-[15px] bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Get started
        </Link>
        <Link
          href="/docs"
          className="rounded-[15px] border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
        >
          Read the docs
        </Link>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link
          href="/features/messaging"
          className="group rounded-[15px] border border-border p-4 text-left hover:bg-accent"
        >
          <ChatCircleDots className="h-5 w-5 text-primary" weight="bold" />
          <span className="mt-2 flex items-center gap-1 text-sm font-medium text-foreground">
            Messaging
            <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
          <p className="mt-1 text-xs text-muted-foreground">
            Real-time, with threads and history
          </p>
        </Link>

        <Link
          href="/features/communities"
          className="group rounded-[15px] border border-border p-4 text-left hover:bg-accent"
        >
          <UsersThree className="h-5 w-5 text-primary" weight="bold" />
          <span className="mt-2 flex items-center gap-1 text-sm font-medium text-foreground">
            Communities
            <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
          <p className="mt-1 text-xs text-muted-foreground">
            Spaces for anyone, from close friends to whole companies
          </p>
        </Link>
      </div>
    </section>
  );
}