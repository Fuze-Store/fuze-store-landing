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
  const isSmUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const toggleDrawer = () => {
    ref.current?.toggleDrawer();
  };

  const renderDocSidebar = () => {
    if (isSmUp) return null;

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
          <Stack direction="row" spacing={2}>
            <Box sx={{ width: { xs: 'auto', sm: DRAWER_WIDTH } }}>
              <Sidebar ref={ref} />
            </Box>
            <Stack sx={{ marginLeft: { xs: 0, sm: DRAWER_WIDTH }, flex: 1 }}>
              {renderDocSidebar()}
              <Box className="prose-mdx" sx={{ my: 3 }}>
                {children}
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
