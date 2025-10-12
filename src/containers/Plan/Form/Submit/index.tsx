/**
 * @module SubscriptionPlanFormSubmit
 * @category Containers
 *
 */

import { Button, ButtonProps } from '@mui/material';
import { useRouter } from 'next/navigation';
import { memo, useCallback } from 'react';

import useChangePlan from '@/containers/Plan/hooks/useChangePlan';

import { paths } from '@/helpers/page.helper';

export type Props = {
  planId?: string;
  paymentMethodId?: string;
  ButtonProps?: Partial<ButtonProps>;
};

/**
 * SubscriptionPlanFormSubmit
 *
 * @category Containers
 *
 */
const PlanFormSubmit = ({ planId, paymentMethodId, ButtonProps }: Props) => {
  const router = useRouter();
  const { changePlan, isPending } = useChangePlan();

  const subscribe = useCallback(async () => {
    const returnUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${paths.accountSubscription}`;

    if (planId && returnUrl) {
      const response = await changePlan({
        returnUrl,
        planId,
        paymentMethodId,
      });

      if (response) {
        if (response.data.changeType === 'session') {
          window.location.href = response.data.data.url;
        } else {
          router.replace(paths.accountSubscription);
        }
      }
    }
  }, [planId, changePlan, paymentMethodId, router]);

  return (
    <Button
      variant="contained"
      disabled={isPending}
      {...ButtonProps}
      onClick={subscribe}
    >
      {isPending ? 'Subscribing' : 'Subscribe'}
    </Button>
  );
};

export default memo(PlanFormSubmit);
