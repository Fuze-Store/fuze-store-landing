'use client';

import { accountPages } from '@/helpers/page.helper';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Avatar,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useState } from 'react';

import useGetAccount from '@/containers/Account/hooks/useGetAccount';

import SectionContainer from '@/components/SectionContainer';

const Sidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { data: response } = useGetAccount();
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const account = response?.data;

  const renderContent = () => (
    <Box
      sx={{
        height: '100%',
        width: 280,
        py: { xs: 2, md: 6 },
        px: 2,
        borderRadius: 4,
        bgcolor: (theme) => theme.palette.grey[50],
      }}
    >
      <SectionContainer mb={6}>
        {account && (
          <Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
            <Avatar alt={account?.info.fullName}>
              {account?.info.fullName.charAt(0).toUpperCase()}
            </Avatar>

            <Box>
              <Typography component="p" lineHeight={1.1}>
                {account?.info.fullName}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {account?.email}
              </Typography>
            </Box>
          </Stack>
        )}
      </SectionContainer>

      <List>
        {accountPages.map((nav) => {
          return (
            <ListItemButton
              dense
              selected={nav.path === pathname}
              sx={{ my: 1, borderRadius: 2 }}
              LinkComponent={Link}
              href={nav.path}
              key={nav.label}
              onClick={() => toggleDrawer(false)}
            >
              <ListItemText
                primary={
                  <Stack direction="row" alignItems="center" spacing={2}>
                    {nav.icon}
                    <Typography fontWeight={500}>{nav.label}</Typography>
                  </Stack>
                }
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );

  if (isMdUp) {
    return renderContent();
  }

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Button onClick={toggleDrawer(true)} startIcon={<MenuIcon />}>
          Account Menu
        </Button>
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {renderContent()}
      </Drawer>
    </>
  );
};

export default memo(Sidebar);
