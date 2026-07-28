import { Badge } from "@/components/ui/badge";

interface LastUpdatedBadgeProps {
  date: string;
}

export function LastUpdatedBadge({ date }: LastUpdatedBadgeProps) {
  return (
    <Badge variant="outline" className="rounded-[15px] text-xs font-normal text-muted-foreground">
      Last updated: {date}
    </Badge>
  );
}