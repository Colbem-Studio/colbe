import Avatar from "boring-avatars";
import Link from "next/link";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

const AVATAR_COLORS = ["#62a0ff", "#4361ee", "#3a3a3a", "#2a2a2a", "#7fb8ff"];

export function MarketingHero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-24 md:grid-cols-2 md:pt-32">
      <div className="text-center md:text-left">
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
          Chat that keeps up with you.
        </h1>

        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          Colbe is a chat platform built for teams who want speed without losing
          context — conversations, files, and history stay together, in sync.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
          <Link
            href="/docs"
            className="rounded-[15px] border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent"
          >
            Read the docs
          </Link>
        </div>
      </div>

      <div className="rounded-[15px] border border-border bg-card p-4">
        <div className="flex items-center gap-2 border-b border-border pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
          <span className="ml-2 text-xs text-muted-foreground"># team-launch</span>
        </div>

        <div className="mt-4 space-y-4">
          <div className="flex gap-3">
            <div className="shrink-0 overflow-hidden rounded-[15px]">
              <Avatar size={32} name="Amara" variant="beam" colors={AVATAR_COLORS} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">Amara</span>
                <span className="text-xs text-muted-foreground">10:42 AM</span>
              </div>
              <p className="mt-1 rounded-[15px] bg-secondary px-3 py-2 text-sm text-foreground">
                pushed the fix, can someone review?
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="shrink-0 overflow-hidden rounded-[15px]">
              <Avatar size={32} name="You" variant="beam" colors={AVATAR_COLORS} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">You</span>
                <span className="text-xs text-muted-foreground">10:43 AM</span>
              </div>
              <p className="mt-1 inline-flex items-center gap-1.5 rounded-[15px] bg-primary/10 px-3 py-2 text-sm text-foreground">
                on it <CheckCircle weight="fill" className="h-4 w-4 text-primary" />
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 pl-11 text-xs text-muted-foreground">
            <span className="flex gap-1">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
            </span>
            Priya is typing
          </div>
        </div>
      </div>
    </section>
  );
}