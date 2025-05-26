import Accordion from '@/components/Accordion';
import AccordionDetails from '@/components/AccordionDetails';
import AccordionSummary from '@/components/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

export const DRAWER_WIDTH = 300;

// Define the methods/types exposed to parent
export interface DrawerRef {
  toggleDrawer: () => void;
}

const TableOfContents = forwardRef<DrawerRef>((_props, ref) => {
  const containerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const isSmUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const toggleDrawer = () => setOpen((prevOpen) => !prevOpen);

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
        onClose={toggleDrawer}
        open={open || isSmUp}
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
        <Typography variant="h6" gutterBottom>
          Table of Contents
        </Typography>

        <Accordion defaultExpanded sx={{ borderBottom: 0 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>1. Introduction</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ py: 0 }}>
            <List dense>
              <ListItem disablePadding>
                <ListItemButton selected>
                  <ListItemText primary="1.1 Purpose" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="1.2 Scope" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded sx={{ borderBottom: 0 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>2. Getting Started</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ py: 0 }}>
            <List dense>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="2.1 Installation" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="2.2 First Steps" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded sx={{ borderBottom: 0 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>3. Advanced Topics</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ py: 0 }}>
            <List dense>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="3.1 Customization" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="3.2 Performance Tuning" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded sx={{ borderBottom: 0 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>1. Introduction</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ py: 0 }}>
            <List dense>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="1.1 Purpose" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="1.2 Scope" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded sx={{ borderBottom: 0 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>2. Getting Started</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ py: 0 }}>
            <List dense>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="2.1 Installation" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="2.2 First Steps" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded sx={{ borderBottom: 0 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>3. Advanced Topics</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ py: 0 }}>
            <List dense>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="3.1 Customization" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="3.2 Performance Tuning" />
                </ListItemButton>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Drawer>
    </Box>
  );
});

TableOfContents.displayName = 'TableOfContents';

export default TableOfContents;
