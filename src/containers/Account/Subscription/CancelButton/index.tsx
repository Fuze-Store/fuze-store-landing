'use client';

import { Button, ButtonProps } from '@mui/material';
import { memo } from 'react';

import useCancelSubcription from '@/containers/Account/Subscription/hooks/useCancelSubcription';

const SubscriptionCancelButton = (props?: ButtonProps) => {
  const { cancelSubscription } = useCancelSubcription();

  return (
    <Button color="error" {...props} onClick={() => cancelSubscription()}>
      Cancel Subscription
    </Button>
  );
};

export default memo(SubscriptionCancelButton);
