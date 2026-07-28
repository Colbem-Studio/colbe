"use client";

import { useState } from "react";
import Avatar from "boring-avatars";
import { MagnifyingGlass, ChatCircle, DotsThreeVertical, Check, X } from "@phosphor-icons/react/dist/ssr";
import { StatusIndicator } from "@/components/app/profile/status-indicator";

export interface Friend {
  id: string;
  name: string;
  status: "online" | "idle" | "dnd" | "offline";
  activity?: string;
}

export interface PendingRequest {
  id: string;
  name: string;
  direction: "incoming" | "outgoing";
}

interface FriendsPanelProps {
  friends: Friend[];
  pendingRequests: PendingRequest[];
}

const TABS = ["Online", "All", "Pending", "Add Friend"] as const;
const AVATAR_COLORS = ["#62a0ff", "#4361ee", "#3a3a3a", "#2a2a2a", "#7fb8ff"];

export function FriendsPanel({ friends, pendingRequests }: FriendsPanelProps) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Online");

  const onlineFriends = friends.filter((f) => f.status !== "offline");
  const visibleFriends = activeTab === "Online" ? onlineFriends : friends;

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center gap-4 border-b border-border px-4 py-3">
        <span className="text-sm font-semibold text-foreground">Friends</span>
        <div className="h-4 w-px bg-border" />
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-[15px] px-3 py-1 text-sm ${
              activeTab === tab
                ? "bg-accent text-foreground"
                : tab === "Add Friend"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center gap-2 rounded-[15px] border border-border bg-card px-3 py-1.5">
          <MagnifyingGlass className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {activeTab === "Pending" ? (
          pendingRequests.length === 0 ? (
            <p className="px-1 text-sm text-muted-foreground">No pending requests.</p>
          ) : (
            <>
              <p className="px-1 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Pending — {pendingRequests.length}
              </p>
              <div className="divide-y divide-border border-t border-border">
                {pendingRequests.map((r) => (
                  <div key={r.id} className="flex items-center justify-between px-1 py-2.5">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0 overflow-hidden rounded-[15px]">
                        <Avatar size={32} name={r.name} variant="beam" colors={AVATAR_COLORS} />
                      </div>
                      <div>
                        <p className="text-sm text-foreground">{r.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">{r.direction} request</p>
                      </div>
                    </div>
                    {r.direction === "incoming" && (
                      <div className="flex items-center gap-2">
                        <button aria-label="Accept" className="rounded-[15px] bg-secondary p-2 text-primary hover:bg-primary/20">
                          <Check className="h-4 w-4" />
                        </button>
                        <button aria-label="Decline" className="rounded-[15px] bg-secondary p-2 text-destructive hover:bg-destructive/20">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )
        ) : visibleFriends.length === 0 ? (
          <p className="px-1 text-sm text-muted-foreground">No friends to show yet.</p>
        ) : (
          <>
            <p className="px-1 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {activeTab === "Online" ? "Online" : "All friends"} — {visibleFriends.length}
            </p>
            <div className="divide-y divide-border border-t border-border">
              {visibleFriends.map((f) => (
                <div key={f.id} className="group flex items-center justify-between px-1 py-2.5">
                  <div className="flex items-center gap-3">
                    <div className="relative shrink-0 overflow-hidden rounded-[15px]">
                      <Avatar size={32} name={f.name} variant="beam" colors={AVATAR_COLORS} />
                      <span className="absolute -bottom-0.5 -right-0.5">
                        <StatusIndicator status={f.status} withRing />
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{f.name}</p>
                      <p className="text-xs text-muted-foreground">{f.activity ?? f.status}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <button aria-label="Message" className="rounded-[15px] bg-secondary p-2 text-muted-foreground hover:text-foreground">
                      <ChatCircle className="h-4 w-4" />
                    </button>
                    <button aria-label="More options" className="rounded-[15px] bg-secondary p-2 text-muted-foreground hover:text-foreground">
                      <DotsThreeVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}