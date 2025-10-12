'use client';

import { Subscription } from '@fuze-store/fuze-store-shared';
import {
  PlanCode,
  SubscriptionStatus,
} from '@fuze-store/fuze-store-shared/enums';
import { Box, Button, CircularProgress, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { memo, useCallback } from 'react';

import { formatDate } from '@fuze-store/fuze-store-shared/helpers';

import SectionContainer from '@/components/SectionContainer';
import CancelButton from '@/containers/Account/Subscription/CancelButton';
import ReactiveButton from '@/containers/Account/Subscription/ReactiveButton';
import { paths } from '@/helpers/page.helper';

type Props = {
  subscription?: Subscription;
  loading?: boolean;
};

const AccountSubscriptionPlan = ({ subscription, loading = false }: Props) => {
  const code = subscription?.plan?.code;

  const isCanceled = subscription?.status === SubscriptionStatus.CANCELED;

  const getAccountSubscriptionLabel = useCallback((code?: PlanCode): string => {
    if (code === PlanCode.FREETRIAL) return 'Free Trial';
    if (code === PlanCode.BASIC) return 'Basic Plan';
    if (code === PlanCode.STARTER) return 'Starter';
    if (code === PlanCode.STANDARD) return 'Standard';
    if (code === PlanCode.PREMIUM) return 'Premium';
    return '';
  }, []);

  const getAccountSubscriptionMessage = useCallback(
    (code?: PlanCode): string => {
      if (code === PlanCode.FREETRIAL) {
        return 'Your are on the Free Trial. Please select a plan to continue using the features before the trial ends.';
      }

      if (code === PlanCode.BASIC) {
        return 'You`re on the basic plan. Upgrade to access more features.';
      }

      if (code === PlanCode.STARTER) {
        return 'You`re on the starter plan. Upgrade to access more features.';
      }

      if (code === PlanCode.STANDARD) {
        return 'You`re on the standard plan. Upgrade to access more features.';
      }

      return '';
    },
    [],
  );

  const renderAction = () => {
    if (code !== PlanCode.FREETRIAL && code !== PlanCode.BASIC) {
      if (isCanceled) return <ReactiveButton />;
      return <CancelButton />;
    }

    return null;
  };

  return (
    <Box py={2}>
      <SectionContainer>
        <Typography>{getAccountSubscriptionLabel(code)}</Typography>
      </SectionContainer>

      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <SectionContainer>
            {isCanceled ? (
              <Typography>Subscription canceled</Typography>
            ) : (
              <Typography>{getAccountSubscriptionMessage(code)}</Typography>
            )}
            {subscription?.expiresAt ? (
              <Typography>
                {`Your plan will expire on `}
                <Typography component="span" fontWeight="bold">
                  {formatDate(subscription?.expiresAt)}
                </Typography>
              </Typography>
            ) : (
              <Typography>
                {`Your next billing will be on `}
                <Typography component="span" fontWeight="bold">
                  {formatDate(subscription?.endDate ?? undefined)}
                </Typography>
              </Typography>
            )}
          </SectionContainer>

          <Stack direction="row" spacing={1}>
            {!isCanceled && (
              <Button
                LinkComponent={Link}
                href={paths.accountSubscriptionChoosePlan}
                variant="contained"
                disableElevation
              >
                Choose Plan
              </Button>
            )}
            {renderAction()}
          </Stack>
        </>
      )}
    </Box>
  );
};

export default memo(AccountSubscriptionPlan);
