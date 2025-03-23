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
  borderRadius: 24,
  marginLeft: theme.spacing(0.25),
  marginRight: theme.spacing(0.25),
  '&.logo': {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
  '&.selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,

    '> a': {
      color: theme.palette.primary.contrastText,
    },
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,

    '> a': {
      color: theme.palette.primary.contrastText,
    },
  },
}));

const LinkItem = styled(Link)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontWeight: 500,
  '&.social': {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
  '& .selected': {
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
      elevation={trigger ? 4 : 0}
      sx={{
        // boxShadow: 'none',
        // backgroundColor: trigger ? '#edf1e5' : 'transparent',
        backgroundColor: trigger ? '#fcfdf7' : 'transparent',
      }}
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
              <ListItem
                className={pathname === '/features' ? 'selected' : undefined}
              >
                <LinkItem href="/features">Feature</LinkItem>
              </ListItem>

              <ListItem
                className={pathname === '/pricing' ? 'selected' : undefined}
              >
                <LinkItem href="/pricing">Pricing</LinkItem>
              </ListItem>

              <ListItem
                className={pathname === '/about-us' ? 'selected' : undefined}
              >
                <LinkItem href="/about-us">About Us</LinkItem>
              </ListItem>

              <ListItem
                className={pathname === '/services' ? 'selected' : undefined}
              >
                <LinkItem href="/">Services</LinkItem>
              </ListItem>

              <ListItem
                className={pathname === '/contact-us' ? 'selected' : undefined}
              >
                <LinkItem href="/contact-us">Contact Us</LinkItem>
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
