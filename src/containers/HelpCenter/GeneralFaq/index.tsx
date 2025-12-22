'use client';

import Accordion from '@/components/Accordion';
import AccordionDetails from '@/components/AccordionDetails';
import AccordionSummary from '@/components/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

const GeneralFaq = () => (
  <Container maxWidth="lg">
    <Box mb={5}>
      <Typography component="h2" variant="h5" gutterBottom fontWeight={500}>
        General FAQs
      </Typography>
    </Box>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" fontWeight={600} component="span">
          What is Fuze Store?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        Our POS system is an all-in-one platform for managing sales, inventory,
        staff, and stores—built for food, small stores, and service businesses.
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography variant="h6" fontWeight={600} component="span">
          Is it cloud-based or offline?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        It’s cloud-based, so you can access your data anytime, anywhere. Offline
        features are not yet available.
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        <Typography variant="h6" fontWeight={600} component="span">
          Does it work on mobile or tablet?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        Yes, it works seamlessly on tablets, desktops, and mobile devices using
        our responsive web app or mobile app version.
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4-content"
        id="panel4-header"
      >
        <Typography variant="h6" fontWeight={600} component="span">
          Can I manage multiple stores?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        Absolutely! You can manage multiple stores under one account, each with
        separate settings, staff, and reports.
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4-content"
        id="panel4-header"
      >
        <Typography variant="h6" fontWeight={600} component="span">
          Do you offer customer support?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        Yes. You can reach us via chat, email, or through our social media
        pages.
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4-content"
        id="panel4-header"
      >
        <Typography variant="h6" fontWeight={600} component="span">
          Is there a user guide or documentation?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        Yes, we provide detailed documentation and user guides to help you
        navigate our system.
      </AccordionDetails>
    </Accordion>
  </Container>
);

export default memo(GeneralFaq);
