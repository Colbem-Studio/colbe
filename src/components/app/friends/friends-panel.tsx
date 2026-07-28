"use client";

import { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { StatusIndicator } from "@/components/app/profile/status-indicator";

export interface Friend {
  id: string;
  name: string;
  status: "online" | "idle" | "dnd" | "offline";
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

      <div className="px-4 pt-4">
        <div className="flex items-center gap-2 rounded-[15px] border border-border bg-card px-3 py-2">
          <MagnifyingGlass className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {activeTab === "Pending" ? (
          pendingRequests.length === 0 ? (
            <p className="text-sm text-muted-foreground">No pending requests.</p>
          ) : (
            <div className="space-y-2">
              {pendingRequests.map((r) => (
                <div key={r.id} className="flex items-center justify-between rounded-[15px] border border-border p-3">
                  <span className="text-sm text-foreground">{r.name}</span>
                  <span className="text-xs text-muted-foreground capitalize">{r.direction}</span>
                </div>
              ))}
            </div>
          )
        ) : visibleFriends.length === 0 ? (
          <p className="text-sm text-muted-foreground">No friends to show yet.</p>
        ) : (
          <div className="space-y-1">
            {visibleFriends.map((f) => (
              <div key={f.id} className="flex items-center gap-3 rounded-[15px] px-2 py-2 hover:bg-accent">
                <StatusIndicator status={f.status} />
                <span className="text-sm text-foreground">{f.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}