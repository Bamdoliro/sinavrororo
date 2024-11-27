import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const url = request.nextUrl.pathname;
  const cookies = request.headers.get("cookie");
  const accessToken = cookies
    ?.split("; ")
    .find((row) => row.startsWith("refresh-token="))
    ?.split("=")[1];

  if (
    // url.startsWith("/main") ||
    url.startsWith("/alarm") ||
    url.startsWith("/faq") ||
    url.startsWith("/inquiry")
  ) {
    if (!accessToken) {
      const redirectUrl = new URL("/", request.url);
      redirectUrl.searchParams.set("message", "로그인 후 시도해주세요");
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|svg).*)",
    "/main/:path*",
    "/faq/:path*",
    "/inquiry/:path*",
    "/alarm/:path*",
  ],
};
