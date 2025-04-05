/**
 * @module CardPaymentMethod
 * @category Components
 *
 */

import {
  Box,
  Card,
  CardContent,
  CardProps,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import { memo, useCallback } from 'react';

import { PaymentMethod } from '@/types/paymentMethod';

import Title from '@/components/Title';

type Props = {
  paymentMethod: PaymentMethod;
  title: string;
  selected?: boolean;
  CardProps?: CardProps;
};

/**
 *
 * @category Components
 * @param Props
 *
 */
const PaymentMethodItem = ({
  paymentMethod,
  title,
  selected = false,
  CardProps,
}: Props) => {
  const renderPaymentInfo = useCallback(() => {
    if (paymentMethod?.expiryMonth && paymentMethod?.expiryYear) {
      return (
        <Stack flexWrap="wrap" spacing={4}>
          <Box>
            <Title
              primary={`${paymentMethod?.lastFour || '****'}`}
              secondary="Card Number"
            />
          </Box>
          <Box>
            <Title
              primary={`${paymentMethod.expiryMonth}/${paymentMethod.expiryYear}`}
              secondary="expiry"
            />
          </Box>
        </Stack>
      );
    }

    if (paymentMethod?.externalTokenReference) {
      return (
        <Title
          primary={paymentMethod.externalTokenReference}
          secondary="Reference Number"
        />
      );
    }

    return null;
  }, [
    paymentMethod.expiryMonth,
    paymentMethod.expiryYear,
    paymentMethod.externalTokenReference,
    paymentMethod?.lastFour,
  ]);

  return (
    <Card elevation={0} style={{ width: '100%', height: 120 }} {...CardProps}>
      <CardContent>
        <Stack direction="row" mb={2} spacing={1}>
          <Box sx={{ flex: 1 }}>
            <Typography>{title}</Typography>
          </Box>

          {selected && <Chip label="default" color="default" size="small" />}
        </Stack>
        {renderPaymentInfo()}
      </CardContent>
    </Card>
  );
};

export default memo(PaymentMethodItem);
