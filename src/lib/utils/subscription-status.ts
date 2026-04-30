import { cookies } from "next/headers";

export const SUBSCRIPTION_COOKIE_NAME = "vercel-daily-subscriber";

export async function getSubscriptionStatus() {
  const cookieStore = await cookies();

  return cookieStore.get(SUBSCRIPTION_COOKIE_NAME)?.value === "true";
}