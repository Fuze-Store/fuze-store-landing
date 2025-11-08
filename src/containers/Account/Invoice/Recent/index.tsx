'use client';

import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { memo } from 'react';

import useGetRecentInvoices from '@/containers/Account/Invoice/hooks/useGetRecentInvoices';

import InvoiceItem from '@/components/InvoiceItem';

const MIN_HEIGHT = 210;

const AccountRecentInvoices = () => {
  const theme = useTheme();
  const { data: response, isLoading } = useGetRecentInvoices();

  const invoices = response?.data.items ?? [];

  return (
    <Card
      elevation={0}
      sx={{
        minHeight: MIN_HEIGHT,
        bgcolor: theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 100],
      }}
    >
      {isLoading ? (
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
      ) : (
        <CardContent sx={{ p: 3 }}>
          {invoices.length > 0 ? (
            <Stack spacing={1}>
              {invoices.map((invoice) => (
                <InvoiceItem key={invoice.id} invoice={invoice} />
              ))}
            </Stack>
          ) : (
            <Typography>No Recent Invoices</Typography>
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default memo(AccountRecentInvoices);
