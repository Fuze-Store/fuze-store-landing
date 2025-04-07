'use client';

import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

import { formatDate } from '@/helpers/date.helper';

import type { Invoice } from '@/types/invoice';

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
        <Typography>{invoice.status}</Typography>
      </Grid>
    </Grid>
    <Grid size={{ xs: 12, sm: 'auto' }}>
      <InvoiceDownloadButton invoiceId={invoice.id} />
    </Grid>
  </Grid>
);

export default memo(InvoiceItem);
