'use client';

import {
  formatDate,
  PlanCode,
  Subscription,
  SubscriptionStatus,
} from '@fuze-store/fuze-store-shared';
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  useTheme,
} from '@mui/material';
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
  const theme = useTheme();
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
    <Card
      elevation={0}
      variant="elevation"
      sx={{
        bgcolor: theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 100],
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <SectionContainer>
          <Typography variant="h6" fontWeight={500}>
            {getAccountSubscriptionLabel(code)}
          </Typography>
        </SectionContainer>

        {loading ? (
          <Stack justifyContent="center" alignItems="center">
            <CircularProgress />
          </Stack>
        ) : (
          <>
            <SectionContainer mb={4}>
              {isCanceled ? (
                <Typography variant="body2">Subscription canceled</Typography>
              ) : (
                <Typography variant="body2">
                  {getAccountSubscriptionMessage(code)}
                </Typography>
              )}

              {Boolean(subscription?.expiresAt) && subscription?.expiresAt && (
                <Typography variant="body2">
                  {`Your plan will expire on `}
                  <Typography
                    component="span"
                    variant="inherit"
                    fontWeight="bold"
                  >
                    {formatDate(subscription?.expiresAt, 'MMM dd, yyyy')}
                  </Typography>
                </Typography>
              )}

              {Boolean(subscription?.endDate) && subscription?.endDate && (
                <Typography variant="body2">
                  {`Your next billing will be on `}
                  <Typography
                    component="span"
                    variant="inherit"
                    fontWeight="bold"
                  >
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
      </CardContent>
    </Card>
  );
};

export default memo(AccountSubscriptionPlan);
