'use client';

import { Box, BoxProps, CircularProgress } from '@mui/material';
import { memo } from 'react';

type Props = {
  BoxProps?: Partial<BoxProps>;
};

const PageLoader = ({ BoxProps }: Props) => (
  <Box
    {...BoxProps}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: '100vh',
      ...BoxProps?.sx,
    }}
  >
    <CircularProgress />
  </Box>
);

export default memo(PageLoader);
