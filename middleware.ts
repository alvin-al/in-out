import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("user_token");

  //Redirect jika sudah login
  if (request.nextUrl.pathname === "/") {
    if (token && token.value !== "") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  // Redirect ke /login jika token tidak ada atau kosong
  if (!token || token.value === "") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!login|register|_next/static|_next/image|favicon.ico).*)"],
};
