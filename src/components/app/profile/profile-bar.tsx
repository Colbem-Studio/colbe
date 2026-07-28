import Avatar from "boring-avatars";
import { GearSix } from "@phosphor-icons/react/dist/ssr";

interface ProfileBarProps {
  userName: string;
  status?: "online" | "idle" | "offline";
}

export function ProfileBar({ userName, status = "online" }: ProfileBarProps) {
  return (
    <div className="flex items-center justify-between border-t border-border bg-card px-3 py-2">
      <div className="flex items-center gap-2">
        <div className="relative shrink-0 overflow-hidden rounded-[15px]">
          <Avatar
            size={32}
            name={userName}
            variant="beam"
            colors={["#62a0ff", "#4361ee", "#3a3a3a", "#2a2a2a", "#7fb8ff"]}
          />
          <span
            className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-card ${
              status === "online" ? "bg-primary" : status === "idle" ? "bg-yellow-500" : "bg-muted-foreground"
            }`}
          />
        </div>
        <span className="text-sm font-medium text-foreground">{userName}</span>
      </div>

      <button aria-label="Settings" className="text-muted-foreground hover:text-foreground">
        <GearSix className="h-5 w-5" />
      </button>
    </div>
  );
}