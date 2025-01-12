import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Ambil token dari cookies
  const token = request.cookies.get("user_token");

  // Jika token tidak ada, redirect ke halaman depan atau login
  if (!token) {
    if (
      !["/", "/login", "/register"].includes(request.nextUrl.pathname) &&
      !request.nextUrl.pathname.startsWith("/_next")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Jika token ada, biarkan request dilanjutkan
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
