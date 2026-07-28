"use client";

import { useState } from "react";
import { PaperPlaneRight, Plus } from "@phosphor-icons/react/dist/ssr";

interface MessageComposerProps {
  channelName: string;
  onSend: (content: string) => void;
}

export function MessageComposer({ channelName, onSend }: MessageComposerProps) {
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-border p-4">
      <div className="flex items-center gap-2 rounded-[15px] border border-border bg-card px-3 py-2">
        <button type="button" aria-label="Add attachment" className="text-muted-foreground hover:text-foreground">
          <Plus className="h-5 w-5" />
        </button>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={`Message #${channelName}`}
          className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        <button type="submit" aria-label="Send message" className="text-primary hover:opacity-80">
          <PaperPlaneRight weight="fill" className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}