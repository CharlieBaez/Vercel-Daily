import { NextResponse, type NextRequest } from "next/server";
import { SUBSCRIPTION_COOKIE_NAME } from "@/lib/utils/subscription-status";

export const proxy = (request: NextRequest) => {
  const isSubscribed =
    request.cookies.get(SUBSCRIPTION_COOKIE_NAME)?.value === "true";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-vercel-daily-subscriber", String(isSubscribed));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/articles/:path*"],
};