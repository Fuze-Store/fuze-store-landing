'use client';

import { AppContext } from '@/contexts/App';

import CloseIcon from '@mui/icons-material/Close';
import { List, ListItemButton, ListItemText } from '@mui/material';
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

  return (
    <Drawer
      anchor="right"
      open={showDrawer}
      onClose={toggleDrawer}
      PaperProps={{
        sx: {
          width: {
            xs: 300,
            sm: '50%',
            md: '40%',
          },
          px: {
            xs: 2,
            lg: 10,
          },
          py: {
            // xs: 4,
            lg: 7,
          },
          pt: 8,
        },
      }}
    >
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          sx={{ color: 'inherit', padding: 0 }}
          component="a"
          href="/about-us"
          onClick={toggleDrawer}
          className={pathname === '/about-us' ? 'selected' : undefined}
        >
          <ListItemButtonS>
            <ListItemText primary="About Us" />
          </ListItemButtonS>
        </ListItem>
        <ListItem
          sx={{ color: 'inherit', padding: 0 }}
          component="a"
          href="/"
          onClick={toggleDrawer}
        >
          <ListItemButtonS>
            <ListItemText primary="Services" />
          </ListItemButtonS>
        </ListItem>
        <ListItem
          sx={{ color: 'inherit', padding: 0 }}
          component="a"
          href="/"
          onClick={toggleDrawer}
        >
          <ListItemButtonS>
            <ListItemText primary="Our work" />
          </ListItemButtonS>
        </ListItem>
        <ListItem
          sx={{ color: 'inherit', padding: 0 }}
          component="a"
          href="/contact-us"
          onClick={toggleDrawer}
          className={pathname === '/contact-us' ? 'selected' : undefined}
        >
          <ListItemButtonS>
            <ListItemText primary="Contact Us" />
          </ListItemButtonS>
        </ListItem>
      </List>

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
