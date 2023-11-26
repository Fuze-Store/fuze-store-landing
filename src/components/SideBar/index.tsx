'use client';

import { AppContext } from '@/contexts/App';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';

export default function SideBar() {
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
            xs: 5,
            lg: 10,
          },
          py: {
            xs: 4,
            lg: 7,
          },
        },
      }}
    >
      <Typography>Test</Typography>

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
