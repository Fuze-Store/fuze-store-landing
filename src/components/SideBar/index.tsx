'use client';

import { AppContext } from '@/contexts/App';
import { Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { useContext } from 'react';

export default function SideBar() {
  const { showDrawer, setShowDrawer } = useContext(AppContext);

  return (
    <Drawer
      anchor="right"
      open={showDrawer}
      onClose={() => setShowDrawer((prevShowDrawer) => !prevShowDrawer)}
    >
      <Typography>Test</Typography>
    </Drawer>
  );
}
