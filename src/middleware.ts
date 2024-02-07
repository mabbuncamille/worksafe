import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  const token = request.cookies.get('authToken');

  if (url === '/') {
    if (token) {
      return NextResponse.redirect(new URL('/dashboard/app', request.url));
    }
    return NextResponse.next();
  }

  if (url.startsWith('/dashboard/app')) {
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/', '/dashboard/app'],
};
