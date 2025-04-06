'use client';

import Logout from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Person from '@mui/icons-material/Person';
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AppBarMui from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';

import useLogout from '@/containers/Auth/hooks/useLogout';
import { AppContext } from '@/contexts/App';
import { paths } from '@/enums/path.enum';
import { navPages } from '@/helpers/page.helper';

import Logo from '@/components/Logo';

const ListGroup = styled('ul')(() => ({
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
  const { logout } = useLogout();
  const { status } = useSession();
  const { setShowDrawer } = useContext(AppContext);
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 64,
  });

  const isElevate = isMdUp && trigger;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderAccount = () => {
    if (status === 'authenticated') {
      return (
        <>
          <Box>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Link
              style={{ textDecoration: 'none', color: 'inherit' }}
              href={paths.account}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Person fontSize="small" />
                </ListItemIcon>
                Account
              </MenuItem>
            </Link>
            <MenuItem onClick={logout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </>
      );
    }

    if (status === 'unauthenticated') {
      return (
        <Stack
          direction="row"
          alignItems="center"
          divider={<Divider orientation="vertical" sx={{ height: 40 }} />}
          spacing={1}
        >
          <Button
            LinkComponent={Link}
            sx={{ fontSize: 16, px: 4 }}
            href={paths.login}
          >
            Login
          </Button>
          <Button
            LinkComponent={Link}
            sx={{ fontSize: 16, px: 4 }}
            href={paths.register}
          >
            Register
          </Button>
        </Stack>
      );
    }

    return null;
  };

  return (
    <AppBarMui
      color={isElevate ? 'default' : 'transparent'}
      position={isMdUp ? 'fixed' : 'absolute'}
      elevation={isElevate ? 4 : 0}
      sx={{
        // backgroundColor: trigger ? '#edf1e5' : 'transparent',
        backgroundColor: isElevate ? '#fcfdf7' : 'transparent',
      }}
    >
      <Toolbar disableGutters style={{ height: 64 }}>
        <Container
          maxWidth="xl"
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
            <Stack direction="row" spacing={3}>
              <ListGroup className="list-none">
                {navPages.map((nav) => {
                  const className =
                    pathname === nav.path.toString() ? 'selected' : undefined;

                  return (
                    <ListItem key={nav.label} className={className}>
                      <LinkItem href={nav.path}>{nav.label}</LinkItem>
                    </ListItem>
                  );
                })}
              </ListGroup>

              {renderAccount()}
            </Stack>
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
