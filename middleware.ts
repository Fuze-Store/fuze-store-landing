import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { paths } from '@/enums/path.enum';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const isProtected = req.nextUrl.pathname.startsWith(paths.account);

  if (isProtected && !token) {
    const url = req.nextUrl.clone();
    url.pathname = paths.login;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [`${paths.account}/:path*`],
};
