'use client';

import useSession from '@/hooks/useSession';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

import { paths } from '@/helpers/page.helper';
import { Box, CircularProgress } from '@mui/material';

export default function Layout({ children }: PropsWithChildren) {
  const session = useSession();

  if (session.status === 'loading') {
    return (
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

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
