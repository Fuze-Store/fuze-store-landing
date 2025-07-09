'use client';

import useSession from '@/hooks/useSession';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

import { paths } from '@/enums/path.enum';

export default function Layout({ children }: PropsWithChildren) {
  const session = useSession();

  if (session.status === 'unauthenticated') {
    redirect(paths.login);
  }

  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
    >
      {children}
    </GoogleOAuthProvider>
  );
}
