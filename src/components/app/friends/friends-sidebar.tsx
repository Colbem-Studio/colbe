import Link from "next/link";
import { MagnifyingGlass, UsersThree, Storefront, Plus } from "@phosphor-icons/react/dist/ssr";

export interface Conversation {
  id: string;
  userName: string;
  lastMessage?: string;
}

interface FriendsSidebarProps {
  conversations: Conversation[];
}

export function FriendsSidebar({ conversations }: FriendsSidebarProps) {
  return (
    <div className="flex min-h-0 w-60 shrink-0 flex-col border-r border-border bg-card/60">
      <div className="p-2">
        <button className="flex w-full items-center gap-2 rounded-[15px] border border-border bg-background px-3 py-2 text-sm text-muted-foreground shadow-inner shadow-black/20 hover:bg-accent">
          <MagnifyingGlass className="h-4 w-4 shrink-0" />
          <span className="truncate">Find or start a conversation</span>
        </button>
      </div>

      <nav className="space-y-0.5 px-2 pb-2">
        <Link
          href="/home"
          className="flex items-center gap-3 rounded-[15px] bg-accent px-3 py-2 text-sm font-medium text-foreground"
        >
          <UsersThree className="h-5 w-5 shrink-0" />
          <span>Friends</span>
        </Link>
        <Link
          href="/shop"
          className="flex items-center gap-3 rounded-[15px] px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          <Storefront className="h-5 w-5 shrink-0" />
          <span>Shop</span>
        </Link>
      </nav>

      <div className="flex items-center justify-between border-t border-border px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Direct messages
        </span>
        <button aria-label="New conversation" className="text-muted-foreground hover:text-foreground">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="min-h-0 flex-1 space-y-0.5 overflow-y-auto px-2 pb-2">
        {conversations.length === 0 ? (
          <p className="px-3 py-2 text-sm text-muted-foreground">No conversations yet.</p>
        ) : (
          conversations.map((c) => (
            <Link
              key={c.id}
              href={`/home/conversations/${c.id}`}
              className="flex flex-col rounded-[15px] px-3 py-2 hover:bg-accent"
            >
              <span className="text-sm text-foreground">{c.userName}</span>
              {c.lastMessage && (
                <span className="truncate text-xs text-muted-foreground">{c.lastMessage}</span>
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}