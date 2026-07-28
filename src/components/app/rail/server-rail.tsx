import Link from "next/link";
import Avatar from "boring-avatars";
import { Plus, Compass } from "@phosphor-icons/react/dist/ssr";
import { Logomark } from "@/config/ServerThumbnail/branding/logomark";

interface Space {
  id: string;
  name: string;
}

interface ServerRailProps {
  spaces: Space[];
}

export function ServerRail({ spaces }: ServerRailProps) {
  return (
    <div className="flex h-full w-[72px] shrink-0 flex-col items-center gap-2 border-r border-border bg-card py-3">
      <Link
        href="/home"
        className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-primary text-primary-foreground transition-colors hover:opacity-90"
        title="Colbe"
      >
        <Logomark className="h-6 w-6" />
      </Link>

      <div className="h-px w-8 bg-border" />

      <div className="flex flex-1 flex-col items-center gap-2 overflow-y-auto">
        {spaces.map((space) => (
          <Link
            key={space.id}
            href={`/spaces/${space.id}`}
            className="group relative flex h-12 w-12 items-center justify-center rounded-[15px] bg-secondary transition-colors hover:bg-primary/20"
            title={space.name}
          >
            <Avatar
              size={28}
              name={space.name}
              variant="beam"
              colors={["#62a0ff", "#4361ee", "#3a3a3a", "#2a2a2a", "#7fb8ff"]}
            />
          </Link>
        ))}
      </div>

      <div className="h-px w-8 bg-border" />

      <button
        className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-dashed border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        aria-label="Create a space"
      >
        <Plus className="h-5 w-5" />
      </button>

      <Link
        href="/discover"
        className="flex h-12 w-12 items-center justify-center rounded-[15px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        aria-label="Discover"
      >
        <Compass className="h-5 w-5" />
      </Link>
    </div>
  );
}