'use client';

import { PropsWithChildren } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import useGetAccount from '@/containers/Account/hooks/useGetAccount';
import Sidebar from '@/containers/Account/Sidebar';
import {
  Box,
  Container,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export default function Layout({ children }: PropsWithChildren) {
  useGetAccount();
  const theme = useTheme();
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <>
      <Toolbar />
      <Container disableGutters maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            minHeight: { xs: 'auto', md: `calc(100vh - 64px)` },
          }}
        >
          <Stack
            direction="row"
            alignItems="stretch"
            sx={{ width: '100%', flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Box py={4}>
              <Sidebar />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Stack
                p={2}
                mt={{ xs: 0, md: 2 }}
                mb={2}
                alignItems="center"
                direction="row"
              >
                <Breadcrumbs />
              </Stack>

              {children}
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
