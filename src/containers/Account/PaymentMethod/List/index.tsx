'use client';

import { Box, Card, CircularProgress, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { memo } from 'react';

import useGetPaymentMethodList from '@/containers/Account/PaymentMethod/hooks/useGetPaymentMethodList';
import { paths } from '@/enums/path.enum';
import { getAccountPaymentMethodBrandLabel } from '@/helpers/paymentMethod.helper';

import PaymentMethodItem from '@/components/PaymentMethodItem';

type Props = {
  paymentMethodId?: string;
};

const MIN_HEIGHT = 210;

const PaymentMethodList = ({ paymentMethodId }: Props) => {
  const { data: response, isLoading } = useGetPaymentMethodList();

  const paymentMethods = response?.data ?? [];

  if (isLoading) {
    return (
      <Card elevation={0} sx={{ minHeight: MIN_HEIGHT }}>
        <Box
          sx={{
            height: MIN_HEIGHT,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <CircularProgress />
        </Box>
      </Card>
    );
  }

  return paymentMethods.length > 0 ? (
    <Box>
      {paymentMethods.map((item) => (
        <Stack key={item.id} flexWrap="wrap" spacing={1}>
          <Box sx={{ width: 280 }}>
            <Link
              style={{ textDecoration: 'none' }}
              href={paths.accountPaymentMethodDetails.replaceAll(
                '[id]',
                item.id,
              )}
            >
              <PaymentMethodItem
                paymentMethod={item}
                selected={item.id === paymentMethodId}
                title={getAccountPaymentMethodBrandLabel(item.brand)}
              />
            </Link>
          </Box>
        </Stack>
      ))}
    </Box>
  ) : (
    <Typography>No Recent Invoices</Typography>
  );
};

export default memo(PaymentMethodList);
