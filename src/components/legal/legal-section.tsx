import { Separator } from "@/components/ui/separator";

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}

export function LegalSection({ title, children, isLast = false }: LegalSectionProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
      {!isLast && <Separator className="mt-8" />}
    </div>
  );
}