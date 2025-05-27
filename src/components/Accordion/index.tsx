'use client';

import { styled } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: 'transparent',
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&::before': {
    display: 'none',
  },
}));

export default Accordion;
