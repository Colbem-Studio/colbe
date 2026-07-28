import Avatar from "boring-avatars";

export interface Message {
  id: string;
  authorName: string;
  content: string;
  createdAt: Date;
}

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  if (messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center px-6">
        <p className="text-sm text-muted-foreground">
          No messages yet — say something to get the conversation started.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
      {messages.map((message) => (
        <div key={message.id} className="flex gap-3">
          <div className="shrink-0 overflow-hidden rounded-[15px]">
            <Avatar
              size={36}
              name={message.authorName}
              variant="beam"
              colors={["#62a0ff", "#4361ee", "#3a3a3a", "#2a2a2a", "#7fb8ff"]}
            />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-medium text-foreground">{message.authorName}</span>
              <span className="text-xs text-muted-foreground">
                {message.createdAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-foreground">{message.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}