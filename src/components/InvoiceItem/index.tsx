'use client';

import { Grid2 } from '@mui/material';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

import { formatDate } from '@/helpers/date.helper';

import type { Invoice } from '@/types/invoice';

import InvoiceDownloadButton from '@/containers/Account/Invoice/DownloadButton';

type Props = {
  invoice: Invoice;
};

const InvoiceItem = ({ invoice }: Props) => (
  <Grid2 container alignItems="center" spacing={2}>
    <Grid2 container size={{ xs: 12, sm: 'grow' }} spacing={0.5}>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <Typography
          fontWeight={700}
        >{`${formatDate(invoice.billingStartDate, 'MMM dd, yyyy')} - ${formatDate(invoice.billingEndDate, 'MMM dd, yyyy')}`}</Typography>
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 3 }}>
        <Typography>{`${invoice?.currency} ${invoice.totalAmount}`}</Typography>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 3 }}>
        <Typography>{invoice.status}</Typography>
      </Grid2>
    </Grid2>
    <Grid2 size={{ xs: 12, sm: 'auto' }}>
      <InvoiceDownloadButton invoiceId={invoice.id} />
    </Grid2>
  </Grid2>
);

export default memo(InvoiceItem);
