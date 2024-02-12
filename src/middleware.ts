import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  const token = request.cookies.get('authToken');

  if (url === '/') {
    if (token) {
      return NextResponse.redirect(new URL('/home', request.url));
    }
    return NextResponse.next();
  }

  if (url.startsWith('/home')) {
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/', '/home'],
};
