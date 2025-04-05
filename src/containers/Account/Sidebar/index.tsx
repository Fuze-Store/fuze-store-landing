'use client';

import { AppContext } from '@/contexts/App';
import { accountPages } from '@/helpers/page.helper';

import CloseIcon from '@mui/icons-material/Close';
import {
  List,
  ListItemButton,
  ListItemText,
  Stack,
  useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useContext } from 'react';

const ListItemButtonS = styled(ListItemButton)(({ theme }) => ({
  borderRadius: 8,
  marginBottom: theme.spacing(1),
  '&.selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.contrastText,
    },
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.contrastText,
    },
  },
  '&.selected:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
}));

const Sidebar = () => {
  const pathname = usePathname();
  const { showAccountDrawer, setShowAccountDrawer } = useContext(AppContext);
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const toggleDrawer = () =>
    setShowAccountDrawer((prevShowDrawer) => !prevShowDrawer);

  const renderList = () => (
    <List>
      {accountPages.map((nav) => {
        const selected = pathname === nav.path.toString();
        const className = selected ? 'selected' : undefined;

        return (
          <ListItem key={nav.label} sx={{ color: 'inherit', padding: 0 }}>
            <ListItemButtonS
              LinkComponent={Link}
              // @ts-expect-error: Typescript
              href={nav.path}
              selected={selected}
              className={className}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>{nav.icon}</ListItemIcon>
              <ListItemText primary={nav.label} />
            </ListItemButtonS>
          </ListItem>
        );
      })}
    </List>
  );

  if (isMdUp) {
    return (
      <Box
        component="nav"
        sx={{
          width: 280,
          height: `calc(100vh - 64px)`,
          py: 4,
          px: 2,
          // borderRight: `1px solid rgba(0, 0, 0, 0.12)`,
        }}
      >
        {renderList()}
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={showAccountDrawer}
      // variant="persistent"
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
      <Stack spacing={1}>{renderList()}</Stack>

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
};

export default memo(Sidebar);
