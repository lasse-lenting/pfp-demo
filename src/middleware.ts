import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Paths that do not require authentication
  if (
    pathname.startsWith('/demo-login') ||
    pathname.startsWith('/api/demo-login') ||
    pathname.startsWith('/api/demo-logout') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.') // for favicon, images, etc.
  ) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get('demo_auth');
  
  if (!authCookie || authCookie.value !== 'authenticated') {
    const loginUrl = new URL('/demo-login', request.url);
    // Pass the original URL so we can redirect back after login
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  // Ignore static files and API routes that aren't protected
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
