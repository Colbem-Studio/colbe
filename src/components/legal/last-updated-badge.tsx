import { Badge } from "flowbite-react";

interface LastUpdatedBadgeProps {
  date: string;
}

export function LastUpdatedBadge({ date }: LastUpdatedBadgeProps) {
  return (
    <Badge color="gray" className="rounded-[15px] text-xs font-normal">
      Last updated: {date}
    </Badge>
  );
}