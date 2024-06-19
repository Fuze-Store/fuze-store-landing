'use client';

import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import AppBarMui from '@mui/material/AppBar';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

import Logo from '@/components/Logo';
import { AppContext } from '@/contexts/App';

const ListGroup = styled('ul')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  listStyleType: 'none',
  padding: 0,
}));

const ListItem = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  '&.logo': {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
}));

const LinkItem = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontWeight: 500,
  '&:hover': {
    color: theme.palette.primary.dark,
  },
  '&.social': {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
  '&.selected': {
    color: theme.palette.primary.main,
  },
  '&.selected:hover': {
    color: theme.palette.primary.dark,
  },
}));

export default function AppBar() {
  const theme = useTheme();
  const pathname = usePathname();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const { setShowDrawer } = useContext(AppContext);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 64,
  });

  return (
    <AppBarMui
      color={trigger ? 'default' : 'transparent'}
      // position={trigger ? 'fixed' : 'absolute'}
      position="fixed"
      sx={{ boxShadow: 'none' }}
    >
      <Toolbar disableGutters style={{ height: 64 }}>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Link href="/">
              <Logo />
            </Link>
          </Box>

          {isMdUp && (
            <ListGroup className="list-none">
              <ListItem>
                <LinkItem
                  href="/about-us"
                  className={pathname === '/about-us' ? 'selected' : undefined}
                >
                  About Us
                </LinkItem>
              </ListItem>
              <ListItem>
                <LinkItem href="/">Services</LinkItem>
              </ListItem>

              <ListItem>
                <LinkItem href="/">Our Work</LinkItem>
              </ListItem>
              <ListItem>
                <LinkItem
                  href="/contact-us"
                  className={
                    pathname === '/contact-us' ? 'selected' : undefined
                  }
                >
                  Contact Us
                </LinkItem>
              </ListItem>
            </ListGroup>
          )}
        </Container>

        {!isMdUp && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: (theme) => theme.spacing(2),
              transform: 'translateY(-50%)',
            }}
          >
            <IconButton
              onClick={() => setShowDrawer((prevState) => !prevState)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBarMui>
  );
}
