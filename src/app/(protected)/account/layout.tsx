'use client';

import { PropsWithChildren } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import Sidebar from '@/containers/Account/Sidebar';
import { Box, Container, Stack, Toolbar, useMediaQuery } from '@mui/material';

export default function Layout({ children }: PropsWithChildren) {
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <>
      <Toolbar />
      <Container disableGutters maxWidth="lg">
        <Stack
          p={2}
          mt={2}
          mb={{ xs: 0, md: 4 }}
          alignItems="center"
          direction="row"
        >
          <Breadcrumbs />
        </Stack>

        <Stack sx={{ width: '100%' }} spacing={isMdUp ? 3 : 0}>
          <Box sx={{ width: '100%' }}>
            <Sidebar />
          </Box>

          <Box sx={{ flex: 1, width: '100%' }}>{children}</Box>
        </Stack>
      </Container>
    </>
  );
}
