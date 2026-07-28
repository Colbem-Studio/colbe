import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { AppTitlebar } from "@/components/app/titlebar/app-titlebar";
import { ServerRail } from "@/components/app/rail/server-rail";
import { FriendsSidebar } from "@/components/app/friends/friends-sidebar";
import { FriendsPanel } from "@/components/app/friends/friends-panel";
import { ProfileBar } from "@/components/app/profile/profile-bar";

export default async function HomePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  const userName = session?.user.name ?? "Guest";

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <AppTitlebar title="Friends" />

      <div className="flex flex-1 min-h-0 overflow-hidden">
        <div className="flex flex-col">
          <div className="flex flex-1 min-h-0">
            <ServerRail spaces={[]} />
            <FriendsSidebar conversations={[]} />
          </div>
          <ProfileBar userName={userName} userHandle={session?.user.email ?? ""} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <FriendsPanel friends={[]} pendingRequests={[]} />
        </div>
      </div>
    </div>
  );
}