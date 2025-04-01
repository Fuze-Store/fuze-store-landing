'use client';

import {
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Toolbar,
} from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SectionContainer from '@/components/SectionContainer';
import useGetSubscription from '@/containers/Account/Subscription/hooks/useGetSubscription';
import AccountSubscriptionPlan from '@/containers/Account/Subscription/Plan';

export default function Page() {
  const { data: response } = useGetSubscription();

  const subscription = response?.data;
  console.log(subscription);
  return (
    <>
      <Toolbar />

      <Container maxWidth="md">
        <Typography variant="body2">Plan</Typography>
        <Divider sx={{ my: 1 }} />

        <SectionContainer>
          <AccountSubscriptionPlan subscription={subscription} />
        </SectionContainer>

        <Typography variant="body2">Payment Method</Typography>
        <Divider sx={{ my: 1 }} />

        <SectionContainer>
          <Card elevation={0}>
            <CardContent>
              <SectionContainer>
                <Typography>Starter</Typography>
              </SectionContainer>

              <SectionContainer>
                <Typography variant="body2">
                  You`re on the basic plan. Upgrade to access more features.
                </Typography>
                <Typography variant="body2">
                  Your next billing will be on Mar 16, 2025 01:51 AM
                </Typography>
              </SectionContainer>

              <Stack direction="row" spacing={2}>
                <Button variant="contained">Choose Plan</Button>
                <Button color="error">Cancel Subscription</Button>
              </Stack>
            </CardContent>
          </Card>
        </SectionContainer>

        <Typography variant="body2">Recent Invoices</Typography>
        <Divider sx={{ my: 1 }} />

        <SectionContainer>
          <Card elevation={0}>
            <CardContent>
              <SectionContainer>
                <Typography>Starter</Typography>
              </SectionContainer>

              <SectionContainer>
                <Typography variant="body2">
                  You`re on the basic plan. Upgrade to access more features.
                </Typography>
                <Typography variant="body2">
                  Your next billing will be on Mar 16, 2025 01:51 AM
                </Typography>
              </SectionContainer>

              <Stack direction="row" spacing={2}>
                <Button variant="contained">Choose Plan</Button>
                <Button color="error">Cancel Subscription</Button>
              </Stack>
            </CardContent>
          </Card>
        </SectionContainer>
      </Container>
    </>
  );
}
