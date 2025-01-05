import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("user_token");

  // Jika tidak ada token, redirect ke login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Jika ada token dan user mengakses halaman login atau home, redirect ke dashboard
  if (
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/"
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Lanjutkan request ke halaman yang diminta
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!login|register|_next/static|_next/image|favicon.ico).*)"],
};
