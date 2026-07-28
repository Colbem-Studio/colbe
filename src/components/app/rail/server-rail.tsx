import Link from "next/link";
import Avatar from "boring-avatars";
import { Plus } from "@phosphor-icons/react/dist/ssr";

interface Space {
  id: string;
  name: string;
}

interface ServerRailProps {
  spaces: Space[];
}

export function ServerRail({ spaces }: ServerRailProps) {
  return (
    <div className="flex h-full w-18 flex-col items-center gap-3 border-r border-border bg-card py-4">
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

      <button
        className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-dashed border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        aria-label="Create a space"
      >
        <Plus className="h-5 w-5" />
      </button>
    </div>
  );
}