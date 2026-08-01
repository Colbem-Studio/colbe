"use client";

import { useState } from "react";
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

const CARD_WIDTH = 320;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;

export function MarketingFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="w-full">
      <div className="mx-auto max-w-6xl px-6 pt-20">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Our features
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
          Colbe's core features are built around trust — from encryption to
          moderation, every conversation stays private, safe, and in sync.
        </p>
      </div>

      <div className="relative mt-16 h-[280px] w-full overflow-hidden pb-20">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            const offset = i - activeIndex;
            const distance = Math.abs(offset);
            const scale = distance === 0 ? 1 : 0.86;
            const opacity = distance === 0 ? 1 : distance === 1 ? 0.55 : 0.2;
            const isActive = distance === 0;

            return (
              <button
                key={feature.title}
                onClick={() => setActiveIndex(i)}
                className="absolute left-1/2 top-0 w-[320px] shrink-0 rounded-[15px] border border-border bg-card p-6 text-left transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(calc(-50% + ${offset * STEP}px)) scale(${scale})`,
                  opacity,
                  zIndex: 10 - distance,
                  pointerEvents: isActive ? "none" : "auto",
                  cursor: isActive ? "default" : "pointer",
                }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-[15px] border border-border">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
                {isActive && (
                  <Link
                    href="#"
                    className="group mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </button>
            );
          })}
        </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-6 flex justify-center gap-2">
          {FEATURES.map((feature, i) => (
            <button
              key={feature.title}
              onClick={() => setActiveIndex(i)}
              aria-label={`Show ${feature.title}`}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}