import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.rewrite(new URL('/unauthorized', req.nextUrl.origin));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/properties/add', '/profile', '/properties/saved', '/messages'],
};
