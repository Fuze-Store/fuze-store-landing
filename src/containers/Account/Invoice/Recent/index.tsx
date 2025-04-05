'use client';

import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import { memo } from 'react';

import useGetRecentInvoices from '@/containers/Account/Invoice/hooks/useGetRecentInvoices';

import InvoiceItem from '@/components/InvoiceItem';

const MIN_HEIGHT = 210;

const AccountRecentInvoices = () => {
  const { data: response, isLoading } = useGetRecentInvoices();

  const invoices = response?.data.items ?? [];

  return (
    <Card elevation={0} sx={{ minHeight: MIN_HEIGHT }}>
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
        <CardContent>
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
