'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Alert, Button, Divider, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import useGetSubscription from '@/containers/Account/Subscription/hooks/useGetSubscription';
import { paths } from '@/helpers/page.helper';
import { PlanCode } from '@fuze-store/fuze-store-shared';

import SectionContainer from '@/components/SectionContainer';
import AccountRecentInvoices from '@/containers/Account/Invoice/Recent';
import AddPaymentMethodButton from '@/containers/Account/PaymentMethod/AddButton';
import PaymentMethodList from '@/containers/Account/PaymentMethod/List';
import AccountSubscriptionPlan from '@/containers/Account/Subscription/Plan';

export default function Page() {
  const { data: response } = useGetSubscription();

  const subscription = response?.data;

  return (
    <Container maxWidth="md">
      <Typography fontWeight={600}>Plan</Typography>
      <Divider sx={{ mb: 2 }} />

      {subscription?.plan?.code === PlanCode.FREETRIAL && (
        <SectionContainer mb={1}>
          <Alert severity="warning">
            <Typography color="warning" variant="body2" fontWeight="bold">
              You`re on the free plan. Upgrade to access more features
            </Typography>
          </Alert>
        </SectionContainer>
      )}

      <SectionContainer sx={{ mb: 4 }}>
        <AccountSubscriptionPlan subscription={subscription} />
      </SectionContainer>

      <Typography fontWeight={600}>Payment Method</Typography>
      <Divider sx={{ mb: 2 }} />

      <SectionContainer sx={{ mb: 4 }}>
        <SectionContainer>
          <PaymentMethodList />
        </SectionContainer>

        <SectionContainer>
          <AddPaymentMethodButton />
        </SectionContainer>
      </SectionContainer>

      <Typography fontWeight={600}>Recent Invoices</Typography>
      <Divider sx={{ mb: 2 }} />

      <SectionContainer>
        <SectionContainer mb={1}>
          <AccountRecentInvoices />
        </SectionContainer>

        <Stack direction="row" justifyContent="flex-end">
          <Button
            LinkComponent={Link}
            endIcon={<ArrowForwardIcon />}
            href={paths.accountInvoice}
          >
            View All Invoices
          </Button>
        </Stack>
      </SectionContainer>
    </Container>
  );
}
