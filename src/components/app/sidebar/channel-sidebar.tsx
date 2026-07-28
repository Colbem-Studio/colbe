import Link from "next/link";
import { Hash, SpeakerHigh, CaretDown } from "@phosphor-icons/react/dist/ssr";

interface Channel {
  id: string;
  label: string;
  type: "text" | "voice";
}

interface ChannelSidebarProps {
  spaceName: string;
  channels: Channel[];
}

export function ChannelSidebar({ spaceName, channels }: ChannelSidebarProps) {
  const textChannels = channels.filter((c) => c.type === "text");
  const voiceChannels = channels.filter((c) => c.type === "voice");

  return (
    <div className="flex h-full w-60 flex-col border-r border-border bg-card/60">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="text-sm font-semibold text-foreground">{spaceName}</span>
        <CaretDown className="h-4 w-4 text-muted-foreground" />
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-2 py-4">
        {channels.length === 0 ? (
          <p className="px-2 text-sm text-muted-foreground">
            No channels yet — create one to get started.
          </p>
        ) : (
          <>
            {textChannels.length > 0 && (
              <div>
                <p className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Text channels
                </p>
                <div className="mt-1 space-y-0.5">
                  {textChannels.map((c) => (
                    <Link
                      key={c.id}
                      href={`/channels/${c.id}`}
                      className="flex items-center gap-2 rounded-[15px] px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                    >
                      <Hash className="h-4 w-4" />
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {voiceChannels.length > 0 && (
              <div>
                <p className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Voice channels
                </p>
                <div className="mt-1 space-y-0.5">
                  {voiceChannels.map((c) => (
                    <Link
                      key={c.id}
                      href={`/channels/${c.id}`}
                      className="flex items-center gap-2 rounded-[15px] px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                    >
                      <SpeakerHigh className="h-4 w-4" />
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}