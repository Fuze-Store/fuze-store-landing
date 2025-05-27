import Accordion from '@/components/Accordion';
import AccordionDetails from '@/components/AccordionDetails';
import AccordionSummary from '@/components/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

const TableOfContents = () => {
  return (
    <>
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
    </>
  );
};

export default TableOfContents;
