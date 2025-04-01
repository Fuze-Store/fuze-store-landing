'use client';

import { Box, CircularProgress } from '@mui/material';
import { memo } from 'react';

const PageLoader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: '100vh',
    }}
  >
    <CircularProgress />
  </Box>
);

export default memo(PageLoader);
