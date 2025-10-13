'use client';

import {
  formatDate,
  PlanCode,
  Subscription,
  SubscriptionStatus,
} from '@fuze-store/fuze-store-shared';
import { Box, Button, CircularProgress, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { memo, useCallback } from 'react';

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
        <Typography fontWeight={500}>
          {getAccountSubscriptionLabel(code)}
        </Typography>
      </SectionContainer>

      {loading ? (
        <Stack justifyContent="center" alignItems="center">
          <CircularProgress />
        </Stack>
      ) : (
        <>
          <SectionContainer>
            {isCanceled ? (
              <Typography>Subscription canceled</Typography>
            ) : (
              <Typography>{getAccountSubscriptionMessage(code)}</Typography>
            )}

            {Boolean(subscription?.expiresAt) && subscription?.expiresAt && (
              <Stack flexWrap="wrap">
                <Typography>{`Your plan will expire on `}</Typography>
                <Typography fontWeight="bold">
                  {formatDate(subscription?.expiresAt, 'MMM dd, yyyy')}
                </Typography>
              </Stack>
            )}

            {Boolean(subscription?.endDate) && subscription?.endDate && (
              <Typography>
                {`Your next billing will be on `}
                <Typography component="span" fontWeight="bold">
                  {formatDate(subscription?.endDate, 'MMMM dd, yyyy')}
                </Typography>
              </Typography>
            )}

            {subscription?.activeRedemptions &&
              subscription?.activeRedemptions?.length > 0 && (
                <Stack flexWrap="wrap">
                  <Typography>{`You have an active coupon ${subscription?.activeRedemptions[0]?.validUntil ? `valid until ` : ''}`}</Typography>
                  {Boolean(subscription?.activeRedemptions[0]?.validUntil) &&
                    subscription?.activeRedemptions[0]?.validUntil && (
                      <Typography fontWeight="bold">
                        {formatDate(
                          subscription?.activeRedemptions[0]?.validUntil,
                          'MMMM yyyy',
                        )}
                      </Typography>
                    )}
                </Stack>
              )}
          </SectionContainer>

          <Stack direction="row" spacing={1}>
            {!isCanceled && (
              <Button
                sx={{ minWidth: 160 }}
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
