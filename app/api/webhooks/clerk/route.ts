import { Webhook } from "svix";
import { headers } from "next/headers";
import { db } from "@/lib/db/client";
import { users } from "@/lib/db/schema";

export async function POST(req: Request) {
  const payload = await req.text();
  const headerPayload = await headers();

  const svixHeaders = {
    "svix-id": headerPayload.get("svix-id")!,
    "svix-timestamp": headerPayload.get("svix-timestamp")!,
    "svix-signature": headerPayload.get("svix-signature")!,
  };

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
  const evt = wh.verify(payload, svixHeaders) as { type: string; data: { id: string; email_addresses: { email_address: string }[] } };

  if (evt.type === "user.created") {
    await db.insert(users).values({
      id: evt.data.id,
      email: evt.data.email_addresses[0].email_address,
      createdAt: new Date(),
    });
  }

  return new Response("ok", { status: 200 });
}