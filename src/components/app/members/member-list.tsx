import Avatar from "boring-avatars";

export interface Member {
  id: string;
  name: string;
  status: "online" | "offline";
}

interface MemberListProps {
  members: Member[];
}

export function MemberList({ members }: MemberListProps) {
  const online = members.filter((m) => m.status === "online");
  const offline = members.filter((m) => m.status === "offline");

  return (
    <div className="hidden w-60 flex-col border-l border-border bg-card/60 px-3 py-4 lg:flex">
      {members.length === 0 ? (
        <p className="px-1 text-sm text-muted-foreground">No members yet.</p>
      ) : (
        <>
          {online.length > 0 && (
            <div>
              <p className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Online — {online.length}
              </p>
              <div className="mt-2 space-y-1">
                {online.map((m) => (
                  <div key={m.id} className="flex items-center gap-2 rounded-[15px] px-2 py-1.5 hover:bg-accent">
                    <div className="relative shrink-0 overflow-hidden rounded-[15px]">
                      <Avatar size={28} name={m.name} variant="beam" colors={["#62a0ff", "#4361ee", "#3a3a3a", "#2a2a2a", "#7fb8ff"]} />
                      <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-card bg-primary" />
                    </div>
                    <span className="text-sm text-foreground">{m.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {offline.length > 0 && (
            <div className="mt-4">
              <p className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Offline — {offline.length}
              </p>
              <div className="mt-2 space-y-1">
                {offline.map((m) => (
                  <div key={m.id} className="flex items-center gap-2 rounded-[15px] px-2 py-1.5 opacity-50 hover:bg-accent hover:opacity-100">
                    <div className="shrink-0 overflow-hidden rounded-[15px]">
                      <Avatar size={28} name={m.name} variant="beam" colors={["#62a0ff", "#4361ee", "#3a3a3a", "#2a2a2a", "#7fb8ff"]} />
                    </div>
                    <span className="text-sm text-foreground">{m.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}