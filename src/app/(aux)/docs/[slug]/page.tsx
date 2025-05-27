'use client';

import MdxClientRenderer from '@/components/MdxClientRenderer';
import Sidebar, { DRAWER_WIDTH, DrawerRef } from '@/containers/Docs/Sidebar';
import { MDXProvider } from '@mdx-js/react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useParams } from 'next/navigation';
import { useRef } from 'react';

export default function Page() {
  const { slug } = useParams();
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

  if (typeof slug !== 'string') return <p>Invalid slug</p>;

  return (
    <MDXProvider
      components={{
        h1: (props) => <Typography variant="h3" gutterBottom {...props} />,
        h2: (props) => <Typography variant="h4" gutterBottom {...props} />,
        h3: (props) => <Typography variant="h5" gutterBottom {...props} />,
        p: (props) => <Typography variant="body1" {...props} />,
        ul: (props) => <Box component="ul" sx={{ pl: 4, mb: 2 }} {...props} />,
        ol: (props) => <Box component="ol" sx={{ pl: 4, mb: 2 }} {...props} />,
        li: (props) => (
          <Box component="li" sx={{ display: 'list-item', pl: 1 }} {...props} />
        ),
        img: (props) => (
          <Box
            component="img"
            sx={{
              maxWidth: '100%',
              borderRadius: 2,
              my: 3,
              boxShadow: 2,
            }}
            {...props}
          />
        ),
        blockquote: (props) => (
          <Box
            sx={{
              borderLeft: '4px solid #ccc',
              pl: 2,
              ml: 0,
              color: 'text.secondary',
              fontStyle: 'italic',
              my: 3,
            }}
            {...props}
          />
        ),
        code: (props) => (
          <Box
            component="code"
            sx={{
              backgroundColor: '#f5f5f5',
              padding: '2px 6px',
              borderRadius: '4px',
              fontFamily: 'monospace',
              fontSize: '0.875rem',
            }}
            {...props}
          />
        ),
      }}
    >
      <Toolbar />
      <Box py={2}>
        <Container maxWidth="lg" disableGutters>
          <Stack direction="row" spacing={2}>
            <Box sx={{ width: { xs: 'auto', sm: DRAWER_WIDTH } }}>
              <Sidebar ref={ref} />
            </Box>
            <Stack sx={{ marginLeft: { xs: 0, sm: DRAWER_WIDTH }, flex: 1 }}>
              {renderDocSidebar()}
              <MdxClientRenderer slug={slug} />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </MDXProvider>
  );
}
