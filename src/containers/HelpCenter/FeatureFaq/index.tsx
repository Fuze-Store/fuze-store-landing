'use client';

import Accordion from '@/components/Accordion';
import AccordionDetails from '@/components/AccordionDetails';
import AccordionSummary from '@/components/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

const FeatureFaq = () => (
  <Container maxWidth="lg">
    <Box mb={5}>
      <Typography component="h2" variant="h5" gutterBottom fontWeight={500}>
        Feature FAQs
      </Typography>
    </Box>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" fontWeight={600} component="span">
          Does it support table or room management?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        Yes! You can assign orders to tables, areas, or rooms—perfect for
        restaurants, cafés, or service-based businesses.
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography variant="h6" fontWeight={600} component="span">
          Can I customize my receipts and reports?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        As of now, receipt and report customization is not yet customizable. We
        plan to add this feature in the future.
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        <Typography variant="h6" fontWeight={600} component="span">
          Can I manage staff permissions?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        Yes, store owners and staff that has permission to manage staffs can
        assign custom roles and permissions per store.
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4-content"
        id="panel4-header"
      >
        <Typography variant="h6" fontWeight={600} component="span">
          Can you customize how each store behaves?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        Yes, each store can have its own settings, payment methods, tax rates,
        and more.
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4-content"
        id="panel4-header"
      >
        <Typography variant="h6" fontWeight={600} component="span">
          Does it support multiple devices or registers?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        Yes. You can run multiple terminals or registers in one store.
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4-content"
        id="panel4-header"
      >
        <Typography variant="h6" fontWeight={600} component="span">
          Can I transfer store ownership?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        Yes, store ownership can be securely transferred to another account.
      </AccordionDetails>
    </Accordion>
  </Container>
);

export default memo(FeatureFaq);
