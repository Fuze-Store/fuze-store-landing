'use client';

import { PropsWithChildren } from 'react';

import useGetAccount from '@/containers/Account/hooks/useGetAccount';
import { Container, Toolbar } from '@mui/material';

export default function Layout({ children }: PropsWithChildren) {
  useGetAccount();

  return (
    <>
      <Toolbar />
      <Container disableGutters maxWidth="lg">
        {children}
      </Container>
    </>
  );
}
