"use client";

import { useState } from "react";
import Avatar from "boring-avatars";
import { MicrophoneSlash, Headphones, GearSix, CaretDown } from "@phosphor-icons/react/dist/ssr";
import { ProfileMenu } from "@/components/app/profile/profile-menu";
import { StatusIndicator } from "@/components/app/profile/status-indicator";

interface ProfileBarProps {
  userName: string;
  userHandle: string;
  status?: "online" | "idle" | "dnd" | "offline";
}

export function ProfileBar({ userName, userHandle, status = "online" }: ProfileBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex shrink-0 items-center justify-between gap-2 border-t border-border bg-card px-2 py-2">
      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="flex min-w-0 items-center gap-2 rounded-[15px] px-1 py-1 hover:bg-accent"
      >
        <div className="relative shrink-0 overflow-hidden rounded-[15px]">
          <Avatar
            size={32}
            name={userName}
            variant="beam"
            colors={["#62a0ff", "#4361ee", "#3a3a3a", "#2a2a2a", "#7fb8ff"]}
          />
          <span className="absolute -bottom-0.5 -right-0.5">
            <StatusIndicator status={status} withRing />
          </span>
        </div>
        <div className="min-w-0 text-left">
          <p className="truncate text-sm font-medium text-foreground">{userName}</p>
          <p className="truncate text-xs text-muted-foreground">{userHandle}</p>
        </div>
      </button>

      <div className="flex shrink-0 items-center gap-1">
        <button aria-label="Mute microphone" className="rounded-[15px] p-1.5 text-destructive hover:bg-accent">
          <MicrophoneSlash weight="fill" className="h-4 w-4" />
        </button>
        <button aria-label="Deafen" className="rounded-[15px] p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground">
          <Headphones className="h-4 w-4" />
        </button>
        <button aria-label="Settings" className="rounded-[15px] p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground">
          <GearSix className="h-4 w-4" />
        </button>
      </div>

      {menuOpen && <ProfileMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
}