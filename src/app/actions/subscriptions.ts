"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { SUBSCRIPTION_COOKIE_NAME } from "@/lib/utils/subscription-status";

export async function subscribe() {
  const cookieStore = await cookies();

  cookieStore.set(SUBSCRIPTION_COOKIE_NAME, "true", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  revalidatePath("/", "layout");
}

export async function unsubscribe() {
  const cookieStore = await cookies();

  cookieStore.delete(SUBSCRIPTION_COOKIE_NAME);

  revalidatePath("/", "layout");
}