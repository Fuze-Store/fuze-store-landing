'use client';

import { alpha, styled } from '@mui/material';
import Box from '@mui/material/Box';

const StyledIconPlaceholder = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: alpha(theme.palette.primary.light, 0.24),
  borderRadius: '50%',
  height: 40,
  width: 40,
  p: 1,
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
}));

export default StyledIconPlaceholder;
