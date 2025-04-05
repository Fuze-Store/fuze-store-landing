'use client';

import { memo } from 'react';

import SectionContainer from '@/components/SectionContainer';
import { BoxProps, Typography, TypographyProps } from '@mui/material';

type Props = {
  title: string;
  ContainerProps?: Partial<BoxProps>;
  TypographyProps?: Partial<TypographyProps>;
};

const PageTitle = ({ title, ContainerProps, TypographyProps }: Props) => (
  <SectionContainer px={3} sx={{ mb: 4 }} {...ContainerProps}>
    <Typography variant="h4" {...TypographyProps}>
      {title}
    </Typography>
  </SectionContainer>
);

export default memo(PageTitle);
