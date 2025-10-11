'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: 0,
}));

const Faqs = () => {
  return (
    <>
      <Box px={2} mb={8}>
        <Typography
          textAlign="center"
          component="h2"
          variant="h4"
          gutterBottom
          fontWeight={500}
        >
          FAQs
        </Typography>

        <Typography
          textAlign="center"
          gutterBottom
          color="textSecondary"
          fontWeight={400}
        >
          Here are some of our FAQs. If you have any other questions, please
          feel free to contact us.
        </Typography>
      </Box>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6" fontWeight={600} component="span">
            Can I upgrade or downgrade my plan anytime?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Yes. Upgrades take effect immediately, and downgrades are scheduled
          for the next billing cycle.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h6" fontWeight={600} component="span">
            Do I need to enter my card to start the trial?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          No credit card is required to start the 30-day free trial.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h6" fontWeight={600} component="span">
            What’s included in the free trial?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          You’ll enjoy full access to all features for 30 days, limited to one
          store only. This lets you experience the complete system before
          deciding on a paid plan.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography variant="h6" fontWeight={600} component="span">
            What happens after my trial ends?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          When your trial ends, your account automatically switches to the Basic
          (Free) plan. You’ll still keep your data, but advanced features will
          be disabled until you upgrade.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6" fontWeight={600} component="span">
            How does the pricing work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Our pricing model combines a base monthly fee and a small percentage
          of your total monthly sales per store. This way, you only pay more as
          your business grows — keeping costs flexible and fair.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6" fontWeight={600} component="span">
            Why do I receive separate invoices per store?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Each store operates independently within your account. To make
          accounting and tracking easier, we issue a separate invoice per store
          for transparency in billing and performance.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6" fontWeight={600} component="span">
            How is the commission calculated?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Your commission rate (e.g., 1%) is multiplied by your total completed
          sales per store at the end of each billing cycle. Refunds and canceled
          orders are automatically excluded.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography variant="h6" fontWeight={600} component="span">
            Can I transfer ownership of my subscription to another user?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Yes. The Store Owner can transfer ownership from the store settings at
          any time.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography variant="h6" fontWeight={600} component="span">
            Does the POS work offline?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          No. An internet connection is required to use the POS system.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default memo(Faqs);
