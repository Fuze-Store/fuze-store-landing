'use client';

import { Button, ButtonProps } from '@mui/material';
import { memo } from 'react';

import useReactivateSubcription from '@/containers/Account/Subscription/hooks/useReactivateSubcription';

const SubscriptionReactiveButton = (props?: ButtonProps) => {
  const { reactivateSubscription } = useReactivateSubcription();

  return (
    <Button color="success" {...props} onClick={() => reactivateSubscription()}>
      Reactivate
    </Button>
  );
};

export default memo(SubscriptionReactiveButton);
