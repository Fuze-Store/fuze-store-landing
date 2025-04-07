'use client';

import { Button, ButtonProps } from '@mui/material';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

const GoBackButton = (props?: Partial<ButtonProps>) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      // startIcon={<ArrowBackIcon />}
      disableElevation
      {...props}
    >
      Go Back
    </Button>
  );
};

export default memo(GoBackButton);
