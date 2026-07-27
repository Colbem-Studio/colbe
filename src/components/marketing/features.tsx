import Link from "next/link";
import {
  ShieldCheck,
  LockKey,
  Eye,
  UsersThree,
  Plugs,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";

const FEATURES = [
  {
    title: "End-to-end encryption",
    description: "Messages are encrypted from sender to recipient. Not even we can read them in transit or at rest...",
    icon: LockKey,
  },
  {
    title: "Content moderation",
    description: "Automated and human-reviewed moderation keeps conversations safe without slowing your team down...",
    icon: ShieldCheck,
  },
  {
    title: "Privacy controls",
    description: "Fine-grained control over who sees what — read receipts, presence, and message history are all opt-in...",
    icon: Eye,
  },
  {
    title: "Real-time sync",
    description: "Every message reflects instantly across your whole team, no refresh needed...",
    icon: UsersThree,
  },
  {
    title: "Built-in auth",
    description: "Secure by default — sign-in, sessions, and permissions handled out of the box...",
    icon: LockKey,
  },
  {
    title: "Multi-platform integration",
    description: "Connect the tools your team already uses instead of asking them to switch...",
    icon: Plugs,
  },
];

export function MarketingFeatures() {
  return (
    <section id="features" className="bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Our features
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
          Colbe's core features are built around trust — from encryption to
          moderation, every conversation stays private, safe, and in sync.
        </p>

        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-[15px] border border-border">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
                <Link
                  href="#"
                  className="group mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}