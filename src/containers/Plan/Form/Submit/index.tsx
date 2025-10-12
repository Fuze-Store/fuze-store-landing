/**
 * @module SubscriptionPlanFormSubmit
 * @category Containers
 *
 */

import { Button, ButtonProps } from '@mui/material';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import useChangePlan from '@containers/Account/Subscription/hooks/useChangePlan';
import useAppDispatch from '@hooks/useAppDispatch';

import { paths } from '@/helpers/page.helper';
import { resetGlobalFields, updateGlobalFields } from '@rtk/appGlobal/slice';

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
const SubscriptionPlanFormSubmit = ({
  planId,
  paymentMethodId,
  ButtonProps,
}: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { changePlan } = useChangePlan();
  const { t } = useTranslation(['fields', 'api']);

  const subscribe = useCallback(async () => {
    const returnUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${paths.accountSubscription}`;

    try {
      if (planId && returnUrl) {
        dispatch(
          updateGlobalFields({
            key: 'loading',
            value: {
              show: true,
              message: t('changePlan.loading', { ns: 'api' }),
            },
          }),
        );
        const response = await changePlan({
          returnUrl,
          planId,
          paymentMethodId,
        });

        if (response) {
          if (response.data.changeType === 'session') {
            dispatch(
              updateGlobalFields({
                key: 'loading',
                value: {
                  show: true,
                  message: t('changePlan.redirecting', { ns: 'api' }),
                },
              }),
            );
            void Linking.openURL(response.data.data.url);
            setTimeout(() => dispatch(resetGlobalFields(['loading'])), 10000);
          } else {
            dispatch(resetGlobalFields(['loading']));
            router.dismissTo(paths.accountSubscription);
          }
        }
      }
    } finally {
      dispatch(resetGlobalFields(['loading']));
    }
  }, [planId, dispatch, t, changePlan, paymentMethodId, router]);

  return (
    <Button variant="contained" {...ButtonProps} onClick={subscribe}>
      {t('submit.subscribe.label')}
    </Button>
  );
};

export default memo(SubscriptionPlanFormSubmit);
