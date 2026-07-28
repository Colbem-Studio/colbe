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
    <div className="flex h-screen w-full flex-col">
      <AppTitlebar title="Colbe" />

      <div className="flex flex-1 overflow-hidden">
        <ServerRail spaces={[]} />

        <div className="flex flex-col">
          <FriendsSidebar conversations={[]} />
          <ProfileBar userName={userName} userHandle={session?.user.email ?? ""} />
        </div>

        <FriendsPanel friends={[]} pendingRequests={[]} />
      </div>
    </div>
  );
}