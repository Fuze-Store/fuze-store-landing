import TableOfContents from '@/containers/Docs/TableOfContents';
import { Box, Drawer, useMediaQuery } from '@mui/material';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

export const DRAWER_WIDTH = 300;

// Define the methods/types exposed to parent
export interface DrawerRef {
  toggleDrawer: () => void;
}

const Sidebar = forwardRef<DrawerRef>((_props, ref) => {
  const containerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const isSmUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const toggleDrawer = (open?: boolean) => {
    setOpen((prevOpen) => (open !== undefined ? open : !prevOpen));
  };

  useImperativeHandle(ref, () => {
    return { toggleDrawer };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Drawer
        onClose={() => toggleDrawer()}
        open={open}
        container={containerRef.current}
        sx={{
          '& .MuiDrawer-paper': {
            border: 0,
            position: 'absolute',
            zIndex: 0,
            height: '100%',
            padding: 2,
            width: DRAWER_WIDTH,
          },
        }}
        variant={isSmUp ? 'permanent' : 'temporary'}
        anchor="left"
        ModalProps={{
          container: containerRef.current,
          disablePortal: true,
          keepMounted: true, // improves performance
        }}
      >
        <TableOfContents onClick={() => toggleDrawer(false)} />
      </Drawer>
    </Box>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
