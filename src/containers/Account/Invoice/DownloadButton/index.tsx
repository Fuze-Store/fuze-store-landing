/**
 * @module InvoiceDownloadButton
 * @category Containers
 *
 */

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { memo } from 'react';

// import useDownloadInvoice from '@containers/Account/Invoice/hooks/useDownloadInvoice';
import useDownloadInvoice from '@/containers/Account/Invoice/hooks/useDownloadInvoice';

import { Button, ButtonProps } from '@mui/material';

export type Props = {
  invoiceId: string;
  ButtonProps?: Partial<ButtonProps>;
};

/**
 * Reusable component
 *
 * @category Components
 *
 */
const InvoiceDownloadButton = ({ invoiceId, ButtonProps }: Props) => {
  const { downloadInvoice, isPending } = useDownloadInvoice();

  return (
    <Button
      variant="contained"
      disableElevation
      startIcon={<CloudDownloadIcon />}
      loading={isPending}
      {...ButtonProps}
      onClick={() => downloadInvoice(invoiceId)}
    >
      Download
    </Button>
  );
};

export default memo(InvoiceDownloadButton);
