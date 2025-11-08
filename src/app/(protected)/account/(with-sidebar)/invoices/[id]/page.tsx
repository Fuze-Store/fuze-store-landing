'use client';

import { formatDate } from '@fuze-store/fuze-store-shared';
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import Container from '@mui/material/Container';
import { useParams } from 'next/navigation';

import useGetInvoice from '@/containers/Account/Invoice/hooks/useGetInvoice';

import GoBackButton from '@/components/GoBackButton';
import InvoicePaymentCard from '@/components/InvoicePaymentCard';
import SectionContainer from '@/components/SectionContainer';
import Title from '@/components/Title';
import InvoiceDownloadButton from '@/containers/Account/Invoice/DownloadButton';

const Stackitem = styled(Box)(({ theme }) => ({
  minWidth: 140,
  [theme.breakpoints.down('sm')]: {
    minWidth: 'auto',
  },
}));

export default function Page() {
  const theme = useTheme();
  const params = useParams<{ id: string }>();
  const { data: response, isFetching } = useGetInvoice(params.id);
  const invoice = response?.data;

  if (isFetching) {
    return (
      <Box>
        <SectionContainer>
          <GoBackButton />
        </SectionContainer>

        <CircularProgress />
      </Box>
    );
  }

  if (invoice) {
    return (
      <Container maxWidth="lg">
        <SectionContainer>
          <GoBackButton />
        </SectionContainer>

        <SectionContainer mb={4}>
          <Typography fontWeight={600}>Invoice Details</Typography>
          <Divider sx={{ mb: 1 }} />

          <Card
            elevation={0}
            sx={{
              minHeight: 160,
              bgcolor:
                theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 100],
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Stack direction="row" flexWrap="wrap" mb={2} spacing={3}>
                <Stackitem>
                  <Title
                    secondary="Invoice Number"
                    primary={invoice.invoiceNumber}
                  />
                </Stackitem>

                <Stackitem>
                  <Title
                    secondary="Duration"
                    primary={`${formatDate(invoice.billingStartDate, 'MMM dd, yyyy')} - ${formatDate(invoice.billingEndDate, 'MMM dd, yyyy')}`}
                  />
                </Stackitem>

                <Stackitem>
                  <Title secondary="Status" primary={invoice.status?.code} />
                </Stackitem>
              </Stack>

              <Stack direction="row" flexWrap="wrap" spacing={3}>
                <Stackitem>
                  <Title
                    secondary="Subtotal"
                    primary={`${invoice?.currency} ${invoice.subtotal.toFixed(2)}`}
                  />
                </Stackitem>

                <Stackitem>
                  <Title
                    secondary="Discount Amount"
                    primary={`${invoice?.currency} ${invoice.discountAmount.toFixed(2)}`}
                  />
                </Stackitem>

                <Stackitem>
                  <Title
                    secondary="Total Amount"
                    primary={`${invoice?.currency} ${invoice.totalAmount.toFixed(2)}`}
                    primaryTypographyProps={{ fontWeight: 'bold' }}
                  />
                </Stackitem>
              </Stack>
            </CardContent>
          </Card>
        </SectionContainer>

        <SectionContainer mb={4}>
          <Typography fontWeight={600}>Attachments</Typography>
          <Divider sx={{ mb: 1 }} />

          <Card
            elevation={0}
            sx={{
              bgcolor:
                theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 100],
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Typography fontWeight={500}>{invoice.filename}</Typography>
                <InvoiceDownloadButton invoiceId={invoice.id} />
              </Stack>
            </CardContent>
          </Card>
        </SectionContainer>

        <SectionContainer mb={4}>
          <Typography fontWeight={600}>Payments</Typography>
          <Divider sx={{ mb: 1 }} />

          <Grid container spacing={1}>
            {invoice.payments?.map((payment) => (
              <Grid size={{ xs: 6, md: 4 }} key={payment.id}>
                <InvoicePaymentCard payment={payment} />
              </Grid>
            ))}
          </Grid>
        </SectionContainer>
      </Container>
    );
  }
}
