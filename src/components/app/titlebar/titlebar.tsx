import { Hash, Bell, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

interface TitlebarProps {
  channelName: string;
}

export function Titlebar({ channelName }: TitlebarProps) {
  return (
    <div className="flex h-14 items-center justify-between border-b border-border px-4">
      <div className="flex items-center gap-2">
        <Hash className="h-5 w-5 text-muted-foreground" />
        <span className="text-sm font-semibold text-foreground">{channelName}</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-[15px] border border-border bg-card px-3 py-1.5">
          <MagnifyingGlass className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="w-40 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>
        <button aria-label="Notifications">
          <Bell className="h-5 w-5 text-muted-foreground hover:text-foreground" />
        </button>
      </div>
    </div>
  );
}