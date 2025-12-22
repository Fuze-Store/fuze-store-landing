'use client';

import { Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

import { Invoice, formatDate } from '@fuze-store/fuze-store-shared';

import InvoiceDownloadButton from '@/containers/Account/Invoice/DownloadButton';

type Props = {
  invoice: Invoice;
};

const InvoiceItem = ({ invoice }: Props) => (
  <Grid container alignItems="center" spacing={2}>
    <Grid container size={{ xs: 12, sm: 'grow' }} spacing={0.5}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography
          fontWeight={700}
        >{`${formatDate(invoice.billingStartDate, 'MMM dd, yyyy')} - ${formatDate(invoice.billingEndDate, 'MMM dd, yyyy')}`}</Typography>
      </Grid>

      <Grid size={{ xs: 12, sm: 3 }}>
        <Typography>{`${invoice?.currency} ${invoice.totalAmount}`}</Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 3 }}>
        <Typography>{invoice.status?.code}</Typography>
      </Grid>
    </Grid>
    <Grid size={{ xs: 12, sm: 'auto' }}>
      <Stack direction="row">
        <InvoiceDownloadButton invoiceId={invoice.id} />
      </Stack>
    </Grid>
  </Grid>
);

export default memo(InvoiceItem);
