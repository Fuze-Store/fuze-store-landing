'use client';

import {
  Box,
  Card,
  CardContent,
  Chip,
  ChipOwnProps,
  Stack,
  useTheme,
} from '@mui/material';
import { memo } from 'react';

import { InvoicePayment } from '@fuze-store/fuze-store-shared';

import Title from '@/components/Title';

type Props = {
  payment: InvoicePayment;
};

const InvoicePaymentCard = ({ payment }: Props) => {
  const theme = useTheme();

  const getStatusLabel = () => {
    if (payment.status?.code === 'PAID') {
      return 'Paid';
    }
    if (payment.status?.code === 'PENDING') {
      return 'Pending';
    }
    if (payment.status?.code === 'FAILED') {
      return 'Failed';
    }

    return 'Unknown';
  };

  const getStatusColor = (): ChipOwnProps['color'] => {
    if (payment.status?.code === 'PAID') {
      return 'success';
    }
    if (payment.status?.code === 'PENDING') {
      return 'warning';
    }
    if (payment.status?.code === 'FAILED') {
      return 'error';
    }

    return undefined;
  };

  return (
    <Card
      elevation={0}
      sx={{
        bgcolor: theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 100],
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="space-between"
          mb={2}
        >
          <Title
            secondary="Amount"
            primary={`${payment.currency} ${payment.amount}`}
          />

          <Box>
            <Chip
              label={getStatusLabel()}
              color={getStatusColor()}
              size="small"
            />
          </Box>
        </Stack>
        <Title secondary="Reference" primary={payment.pspReference} />
      </CardContent>
    </Card>
  );
};

export default memo(InvoicePaymentCard);
