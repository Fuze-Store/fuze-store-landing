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
  useTheme,
} from '@mui/material';
import { memo } from 'react';

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
  const theme = useTheme();

  const renderPaymentInfo = () => {
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
  };

  return (
    <Card
      elevation={0}
      sx={{
        width: '100%',
        height: 120,
        bgcolor: theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 100],
      }}
      {...CardProps}
    >
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
