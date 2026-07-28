type Status = "online" | "idle" | "dnd" | "offline";

interface StatusIndicatorProps {
  status: Status;
  size?: "sm" | "md";
  withRing?: boolean;
}

const STATUS_COLORS: Record<Status, string> = {
  online: "bg-primary",
  idle: "bg-yellow-500",
  dnd: "bg-destructive",
  offline: "bg-muted-foreground",
};

export function StatusIndicator({ status, size = "sm", withRing = false }: StatusIndicatorProps) {
  const dimension = size === "sm" ? "h-2.5 w-2.5" : "h-3 w-3";

  return (
    <span
      className={`inline-block rounded-full ${dimension} ${STATUS_COLORS[status]} ${
        withRing ? "border-2 border-card" : ""
      }`}
    />
  );
}