'use client';

import { styled } from '@mui/material';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingLeft: 0,
  paddingRight: 0,
  color: theme.palette.text.secondary,
}));

export default AccordionDetails;
