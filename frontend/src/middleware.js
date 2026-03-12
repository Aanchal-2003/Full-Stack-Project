import { NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get("user_token")?.value;
    const { pathname } = request.nextUrl;
    const protectedRouters = ["/checkout", "/profile"];
    if (protectedRouters.some(route => pathname.startsWith(route))) {
        if (!token) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    if ((pathname === "/login") && token) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/checkout/:path*",
        "/profile/:path*",
        "/login"
    ]
};