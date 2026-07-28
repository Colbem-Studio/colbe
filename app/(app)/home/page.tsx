import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { ServerRail } from "@/components/app/rail/server-rail";
import { ChannelSidebar } from "@/components/app/sidebar/channel-sidebar";
import { ProfileBar } from "@/components/app/profile/profile-bar";
import { Titlebar } from "@/components/app/titlebar/titlebar";
import { MessageList } from "@/components/app/messages/message-list";
import { MessageComposer } from "@/components/app/messages/message-composer";
import { MemberList } from "@/components/app/members/member-list";

export default async function HomePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  const userName = session?.user.name ?? "Guest";

  return (
    <div className="flex h-screen w-full">
      <ServerRail spaces={[]} />

      <div className="flex flex-col">
        <ChannelSidebar spaceName="" channels={[]} />
        <ProfileBar userName={userName} />
      </div>

      <div className="flex flex-1 flex-col">
        <Titlebar channelName="" />
        <MessageList messages={[]} />
        <MessageComposer channelName="" onSend={() => {}} />
      </div>

      <MemberList members={[]} />
    </div>
  );
}