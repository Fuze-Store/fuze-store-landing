'use client';

import React from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import Sidebar from '@/containers/Account/Sidebar';
import {
  Box,
  Container,
  Divider,
  Stack,
  Toolbar,
  useMediaQuery,
} from '@mui/material';

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <>
      <Toolbar />
      <Container disableGutters maxWidth="xl">
        <Stack
          direction="row"
          alignItems="stretch"
          divider={isMdUp && <Divider orientation="vertical" flexItem />}
          spacing={isMdUp ? 3 : 0}
        >
          <Box>
            <Sidebar />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box px={3} py={2}>
              <Breadcrumbs />
            </Box>
            {children}
          </Box>
        </Stack>
      </Container>
    </>
  );
}
