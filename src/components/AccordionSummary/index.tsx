'use client';

import { styled } from '@mui/material';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  padding: 0,
  // ...theme.applyStyles('dark', {
  //   backgroundColor: 'rgba(255, 255, 255, .05)',
  // }),
}));

export default AccordionSummary;
