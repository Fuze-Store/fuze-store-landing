'use client';

import Sidebar, { DRAWER_WIDTH, DrawerRef } from '@/containers/Docs/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { PropsWithChildren, useRef } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  const ref = useRef<DrawerRef>(null);
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const toggleDrawer = () => {
    ref.current?.toggleDrawer();
  };

  const renderDocSidebar = () => {
    if (isMdUp) return null;

    return (
      <Stack py={2} direction="row">
        <Button startIcon={<MenuIcon />} onClick={toggleDrawer}>
          Table of Contents
        </Button>
      </Stack>
    );
  };

  return (
    <>
      <Toolbar />
      <Box py={2}>
        <Container maxWidth="xl" disableGutters>
          <Stack direction="row" spacing={{ xs: 0, md: 2 }}>
            <Box
              sx={{
                minHeight: 'calc(100vh)',
                width: { xs: 'auto', md: DRAWER_WIDTH },
              }}
            >
              <Sidebar ref={ref} />
            </Box>
            <Stack
              sx={{
                px: 2,
                overflowX: 'auto',
                marginLeft: { xs: 0, md: DRAWER_WIDTH },
                width: { xs: '100%', md: `calc(100% - ${DRAWER_WIDTH}px)` },
              }}
            >
              {renderDocSidebar()}
              <Box component="article" className="prose-mdx">
                {children}
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
