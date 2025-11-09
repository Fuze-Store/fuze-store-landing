/**
 * @module PayButton
 * @category Containers
 *
 */

import { formatDate, Invoice } from '@fuze-store/fuze-store-shared';
import AddCardIcon from '@mui/icons-material/AddCard';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  ButtonProps,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { memo, useMemo, useState } from 'react';

import usePayInvoice from '@/containers/Account/Invoice/hooks/usePayInvoice';
import useGetSubscription from '@/containers/Account/Subscription/hooks/useGetSubscription';

import SectionContainer from '@/components/SectionContainer';
import Title from '@/components/Title';
import PaymentMethodList from '@/containers/Account/PaymentMethod/List';
import { paths } from '@/helpers/page.helper';

export type Props = {
  invoice: Invoice;
  ButtonProps?: Partial<ButtonProps>;
};

/**
 * Reusable component
 *
 * @category Components
 *
 */
const PayButton = ({ invoice, ButtonProps }: Props) => {
  const [open, setOpen] = useState(false);
  const { payInvoice, isPending, isSuccess } = usePayInvoice();
  const { data: response } = useGetSubscription({ enabled: open });
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState<
    string | undefined
  >();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const subscription = useMemo(() => response?.data, [response?.data]);

  const handlePay = async () => {
    await payInvoice({
      invoiceId: invoice.id,
      returnUrl: `${window.location.origin}${paths.accountPaymentMethodDetails.replace('[id]', invoice.id)}`,
      paymentMethodId: selectedPaymentMethodId,
    });

    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        disableElevation
        startIcon={<AddCardIcon />}
        loading={isPending}
        size="large"
        {...ButtonProps}
        onClick={handleOpen}
      >
        Pay Now
      </Button>

      <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Summary</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid size={{ xs: 12, sm: 6 }}>
              <SectionContainer>
                <Title
                  secondary="Invoice Number"
                  primary={invoice.invoiceNumber}
                  secondaryTypographyProps={{ variant: 'body1' }}
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    fontWeight: 'bold',
                  }}
                />
              </SectionContainer>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <SectionContainer>
                <Title
                  secondary="Total Amount"
                  primary={`${invoice?.currency} ${invoice.totalAmount.toFixed(2)}`}
                  secondaryTypographyProps={{ variant: 'body1' }}
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    fontWeight: 'bold',
                  }}
                />
              </SectionContainer>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <SectionContainer>
                <Title
                  secondary="Period"
                  primary={`${formatDate(invoice.billingStartDate, 'MMM dd, yyyy')} - ${formatDate(invoice.billingEndDate, 'MMM dd, yyyy')}`}
                  secondaryTypographyProps={{ variant: 'body1' }}
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    fontWeight: 'bold',
                  }}
                />
              </SectionContainer>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <SectionContainer>
                <Typography
                  variant="body1"
                  fontWeight="medium"
                  color="textSecondary"
                  gutterBottom
                >
                  Payment Methods
                </Typography>
                <PaymentMethodList
                  isSelectionMode={true}
                  selectedPaymentMethodId={selectedPaymentMethodId}
                  onSelectPaymentMethod={setSelectedPaymentMethodId}
                  paymentMethodId={subscription?.paymentMethodId ?? undefined}
                />
              </SectionContainer>
            </Grid>
          </Grid>

          <Stack direction="row" justifyContent="flex-end">
            <Button
              variant="contained"
              disableElevation
              size="extra-large"
              loading={isPending}
              onClick={handlePay}
            >
              Pay
            </Button>
          </Stack>
        </DialogContent>
        <Box sx={{ position: 'absolute', top: 12, right: 12 }}>
          <IconButton>
            <CloseIcon onClick={handleClose} />
          </IconButton>
        </Box>
      </Dialog>
    </>
  );
};

export default memo(PayButton);
