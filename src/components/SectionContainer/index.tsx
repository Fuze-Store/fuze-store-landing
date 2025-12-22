import { Box, BoxProps } from '@mui/material';
import { memo } from 'react';

const SectionContainer = (props?: BoxProps) => {
  return <Box mb={2} {...props} />;
};

export default memo(SectionContainer);
