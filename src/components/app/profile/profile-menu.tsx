interface ProfileMenuProps {
  onClose: () => void;
}

export function ProfileMenu({ onClose }: ProfileMenuProps) {
  return (
    <div className="absolute bottom-full left-0 mb-2 w-56 rounded-[15px] border border-border bg-card p-2 shadow-lg">
      <button
        onClick={onClose}
        className="block w-full rounded-[15px] px-3 py-2 text-left text-sm text-foreground hover:bg-accent"
      >
        Edit profile
      </button>
      <button
        onClick={onClose}
        className="block w-full rounded-[15px] px-3 py-2 text-left text-sm text-foreground hover:bg-accent"
      >
        Switch account
      </button>
      <button
        onClick={onClose}
        className="block w-full rounded-[15px] px-3 py-2 text-left text-sm text-destructive hover:bg-accent"
      >
        Log out
      </button>
    </div>
  );
}