'use client';

import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import Sidebar from '@/containers/Account/Sidebar';
import { AppContext } from '@/contexts/App';
import {
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
} from '@mui/material';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { setShowAccountDrawer } = useContext(AppContext);
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const toggleDrawer = () => setShowAccountDrawer((prev) => !prev);

  return (
    <>
      <Toolbar />
      <Container disableGutters maxWidth="xl">
        <Stack
          px={3}
          py={2}
          mb={{ xs: 0, md: 4 }}
          alignItems="center"
          direction="row"
        >
          {!isMdUp && (
            <Box ml={-1} mr={2}>
              <IconButton aria-label="account menu" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
          <Box>
            <Breadcrumbs />
          </Box>
        </Stack>

        <Stack
          direction="row"
          alignItems="stretch"
          // divider={isMdUp && <Divider orientation="vertical" flexItem />}
          spacing={isMdUp ? 3 : 0}
        >
          <Box>
            <Sidebar />
          </Box>
          <Box sx={{ flex: 1, width: '100%' }}>{children}</Box>
        </Stack>
      </Container>
    </>
  );
}
