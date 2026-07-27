import Link from "next/link";
import { YoutubeLogo, InstagramLogo, TiktokLogo, XLogo, DiscordLogo } from "@phosphor-icons/react/dist/ssr";

export function MarketingCta() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="relative overflow-hidden rounded-[15px] bg-linear-to-br from-primary to-[oklch(0.42_0.19_260)] px-8 py-14 text-center md:px-16">
        <p className="text-sm font-medium text-primary-foreground/80">
          Bring your next conversation to
        </p>
        <h2 className="mt-1 text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl">
          COLBE
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm text-primary-foreground/90 md:text-base">
          We&apos;re building Colbe with people who actually care about how they
          talk to their team. If that sounds like your kind of place, come chat with us.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/register"
            className="rounded-[15px] bg-background px-6 py-3 text-sm font-medium text-foreground hover:opacity-90"
          >
            Get Started
          </Link>
          <div className="hidden h-6 w-px bg-primary-foreground/30 sm:block" />
          <div className="flex items-center gap-4">
            <YoutubeLogo weight="fill" className="h-5 w-5 text-primary-foreground/90" />
            <InstagramLogo weight="fill" className="h-5 w-5 text-primary-foreground/90" />
            <TiktokLogo weight="fill" className="h-5 w-5 text-primary-foreground/90" />
            <XLogo weight="fill" className="h-5 w-5 text-primary-foreground/90" />
            <DiscordLogo weight="fill" className="h-5 w-5 text-primary-foreground/90" />
          </div>
        </div>
      </div>
    </section>
  );
}