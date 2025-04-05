'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Stack,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { memo, useCallback } from 'react';

import {
  SubscriptionPlan,
  SubscriptionStatus,
} from '@/enums/subscription.enum';
import { formatDate } from '@/helpers/date.helper';

import { Subscription } from '@/types/subscription';

import SectionContainer from '@/components/SectionContainer';
import CancelButton from '@/containers/Account/Subscription/CancelButton';
import ReactiveButton from '@/containers/Account/Subscription/ReactiveButton';
import { paths } from '@/enums/path.enum';
import Link from 'next/link';

type Props = {
  subscription?: Subscription;
  loading?: boolean;
};

const AccountSubscriptionPlan = ({ subscription, loading = false }: Props) => {
  const code = subscription?.plan?.code;

  const isCanceled = subscription?.status === SubscriptionStatus.CANCELED;

  const getAccountSubscriptionLabel = useCallback(
    (code?: SubscriptionPlan): string => {
      if (code === SubscriptionPlan.FREETRIAL) return 'Free Trial';
      if (code === SubscriptionPlan.BASIC) return 'Basic Plan';
      if (code === SubscriptionPlan.STARTER) return 'Starter';
      if (code === SubscriptionPlan.STANDARD) return 'Standard';
      if (code === SubscriptionPlan.ENTERPRISE) return 'Enterprise';
      return '';
    },
    [],
  );

  const getAccountSubscriptionMessage = useCallback(
    (code?: SubscriptionPlan): string => {
      if (code === SubscriptionPlan.FREETRIAL) {
        return 'Your are on the Free Trial. Please select a plan to continue using the features before the trial ends.';
      }

      if (code === SubscriptionPlan.BASIC) {
        return 'You`re on the basic plan. Upgrade to access more features.';
      }

      if (code === SubscriptionPlan.STARTER) {
        return 'You`re on the starter plan. Upgrade to access more features.';
      }

      if (code === SubscriptionPlan.STANDARD) {
        return 'You`re on the standard plan. Upgrade to access more features.';
      }

      return '';
    },
    [],
  );

  const renderAction = () => {
    if (
      code !== SubscriptionPlan.FREETRIAL &&
      code !== SubscriptionPlan.BASIC
    ) {
      if (isCanceled) return <ReactiveButton />;
      return <CancelButton />;
    }

    return null;
  };

  return (
    <Card elevation={0}>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default memo(AccountSubscriptionPlan);
