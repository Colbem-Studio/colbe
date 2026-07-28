interface AppTitlebarProps {
  title: string;
}

export function AppTitlebar({ title }: AppTitlebarProps) {
  return (
    <div className="flex h-8 shrink-0 items-center justify-center border-b border-border bg-card">
      <span className="text-xs font-medium text-muted-foreground">{title}</span>
    </div>
  );
}