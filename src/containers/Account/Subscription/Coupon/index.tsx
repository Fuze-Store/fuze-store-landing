/**
 * @module SubscriptionCoupon
 * @category Containers
 *
 */

import { CouponRedemption } from '@fuze-store/fuze-store-shared';
import { memo } from 'react';

import useApplyCode from '@/containers/Account/Coupon/hooks/useApplyCode';

import SectionContainer from '@/components/SectionContainer';
import CouponForm from '@/containers/Account/Coupon/Form';
import CouponFormProvider from '@/containers/Account/Coupon/Form/Provider';
import CouponFormSubmit from '@/containers/Account/Coupon/Form/Submit';
import {
  Alert,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

type Props = {
  activeRedemptions?: CouponRedemption[];
};

const SubscriptionCoupon = ({ activeRedemptions = [] }: Props) => {
  const theme = useTheme();
  const { applyCoupon, isPending, data: response, error } = useApplyCode();

  console.log('error?.response', error?.response);

  if (activeRedemptions.length > 0) {
    return (
      <Card
        sx={{
          bgcolor:
            theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 100],
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight={500}>
            Active Coupon
          </Typography>
          <Typography variant="body2">
            Here is the coupon currently applied to your subscription.
          </Typography>
          {activeRedemptions.map((redemption) => (
            <Alert
              key={redemption.id}
              severity="success"
              title={redemption.coupon?.code || 'Coupon'}
            >
              {Boolean(redemption.coupon?.description) && (
                <Typography>{redemption.coupon?.description}</Typography>
              )}
            </Alert>
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <CouponFormProvider
      onSubmit={applyCoupon}
      errors={error?.response?.data.errors}
    >
      <Card
        elevation={0}
        sx={{
          minHeight: 160,
          bgcolor:
            theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 100],
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <SectionContainer mb={3}>
            <Typography variant="h6" gutterBottom fontWeight={500}>
              Do you have a coupon?
            </Typography>
            <Typography variant="body2" color="textSecondary">
              You can apply your coupon code to get a discount on your
              subscription plan.
            </Typography>
          </SectionContainer>

          {Boolean(error) && (
            <SectionContainer>
              <Alert severity="error">
                {error?.response?.data?.message || 'Error'}
              </Alert>
            </SectionContainer>
          )}

          {response && (
            <SectionContainer>
              <Alert severity="success" title={response.message} />
            </SectionContainer>
          )}

          <CouponForm loading={isPending} />

          <Stack direction="row" justifyContent="flex-end">
            <Box>
              <CouponFormSubmit loading={isPending} style={{ minWidth: 160 }} />
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </CouponFormProvider>
  );
};

export default memo(SubscriptionCoupon);
