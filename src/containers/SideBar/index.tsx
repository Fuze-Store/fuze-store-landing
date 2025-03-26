'use client';

import { AppContext } from '@/contexts/App';
import { paths } from '@/enums/path.enum';
import { navPages } from '@/helpers/page.helper';

import CloseIcon from '@mui/icons-material/Close';
import {
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

const ListItemButtonS = styled(ListItemButton)(({ theme }) => ({
  borderRadius: 8,
  marginBottom: theme.spacing(1),
  '&.selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  '&.selected:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
}));

export default function SideBar() {
  const pathname = usePathname();
  const { showDrawer, setShowDrawer } = useContext(AppContext);

  const toggleDrawer = () => setShowDrawer((prevShowDrawer) => !prevShowDrawer);

  console.log('pathname', pathname);

  return (
    <Drawer
      anchor="right"
      open={showDrawer}
      onClose={toggleDrawer}
      PaperProps={{
        sx: {
          width: { xs: 300, sm: '50%', md: '40%' },
          px: { xs: 2, lg: 10 },
          py: { lg: 7 },
          pt: 8,
        },
      }}
    >
      <Stack spacing={1}>
        <List component="nav" aria-label="main menu">
          {navPages.map((nav) => {
            const className =
              pathname === nav.path.toString() ? 'selected' : undefined;

            return (
              <ListItem
                key={nav.label}
                sx={{ color: 'inherit', padding: 0 }}
                component="a"
                href={nav.path}
                onClick={toggleDrawer}
              >
                <ListItemButtonS className={className}>
                  <ListItemText primary={nav.label} />
                </ListItemButtonS>
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List component="nav" aria-label="account menu">
          <ListItem
            sx={{ color: 'inherit', padding: 0 }}
            component="a"
            href={paths.login}
            onClick={toggleDrawer}
          >
            <ListItemButtonS>
              <ListItemText primary="Login" />
            </ListItemButtonS>
          </ListItem>

          <ListItem
            sx={{ color: 'inherit', padding: 0 }}
            component="a"
            href={paths.register}
            onClick={toggleDrawer}
          >
            <ListItemButtonS>
              <ListItemText primary="Register" />
            </ListItemButtonS>
          </ListItem>
          <ListItem
            sx={{ color: 'inherit', padding: 0 }}
            component="a"
            href={paths.account}
            onClick={toggleDrawer}
          >
            <ListItemButtonS>
              <ListItemText primary="Register" />
            </ListItemButtonS>
          </ListItem>
          <ListItemButtonS>
            <ListItemText primary="Logout" />
          </ListItemButtonS>
        </List>
      </Stack>

      <Box
        sx={{
          position: 'absolute',
          top: (theme) => theme.spacing(3),
          right: (theme) => theme.spacing(2.5),
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <CloseIcon sx={{ fontSize: (theme) => theme.spacing(3.5) }} />
        </IconButton>
      </Box>
    </Drawer>
  );
}
