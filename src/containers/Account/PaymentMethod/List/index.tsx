'use client';

import {
  Box,
  ButtonBase,
  Card,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import { memo } from 'react';

import useGetPaymentMethodList from '@/containers/Account/PaymentMethod/hooks/useGetPaymentMethodList';
import { paths } from '@/helpers/page.helper';
import { getAccountPaymentMethodBrandLabel } from '@/helpers/paymentMethod.helper';

import PaymentMethodItem from '@/components/PaymentMethodItem';

type Props = {
  onSelectPaymentMethod?: (_id: string) => void;
  selectedPaymentMethodId?: string;
  isSelectionMode?: boolean;
  paymentMethodId?: string;
};

const MIN_HEIGHT = 160;

const PaymentMethodList = ({
  paymentMethodId,
  selectedPaymentMethodId,
  isSelectionMode = false,
  onSelectPaymentMethod,
}: Props) => {
  const theme = useTheme();
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
      {paymentMethods.map((item) => {
        const selected = item.id === paymentMethodId;
        const selectedPaymentMethod =
          isSelectionMode && item.id === selectedPaymentMethodId;
        const title = getAccountPaymentMethodBrandLabel(item.brand);

        return (
          <Stack key={item.id} flexWrap="wrap" spacing={1}>
            <Box sx={{ width: 280 }}>
              {isSelectionMode ? (
                <ButtonBase
                  sx={{
                    width: '100%',
                    textAlign: 'left',
                    borderRadius: 2,
                    border: `2px solid ${selectedPaymentMethod ? theme.palette.primary.main : 'transparent'}`,
                  }}
                  onClick={() => onSelectPaymentMethod?.(item.id)}
                >
                  <PaymentMethodItem
                    paymentMethod={item}
                    selected={selected}
                    title={title}
                  />
                </ButtonBase>
              ) : (
                <Link
                  style={{ textDecoration: 'none' }}
                  href={paths.accountPaymentMethodDetails.replaceAll(
                    '[id]',
                    item.id,
                  )}
                >
                  <PaymentMethodItem
                    paymentMethod={item}
                    selected={selected}
                    title={title}
                  />
                </Link>
              )}
            </Box>
          </Stack>
        );
      })}
    </Box>
  ) : (
    <Typography>No Recent Invoices</Typography>
  );
};

export default memo(PaymentMethodList);
