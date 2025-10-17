'use client';

import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

import { paths } from '@/helpers/page.helper';

import FeatureArea from '@/containers/Feature/Area';
import Catalog from '@/containers/Feature/Catalog';
import FeatureCustomer from '@/containers/Feature/Customer';
import Dashboard from '@/containers/Feature/Dashboard';
import FeatureDiscount from '@/containers/Feature/Discount';
import FeatureEvent from '@/containers/Feature/Event';
import FeatureExpense from '@/containers/Feature/Expense';
import FeatureGiftCard from '@/containers/Feature/GiftCard';
import FeatureMigration from '@/containers/Feature/Migration';
import FeatureOrderNotification from '@/containers/Feature/OrderNotification';
import PointOfSale from '@/containers/Feature/PointOfSale';
import FeatureRealtime from '@/containers/Feature/Realtime';
import FeatureRefund from '@/containers/Feature/Refund';
import FeatureReport from '@/containers/Feature/Report';
import FeatureRole from '@/containers/Feature/Role';
import FeatureSession from '@/containers/Feature/Session';
import FeatureStaff from '@/containers/Feature/Staff';
import FeatureTax from '@/containers/Feature/Tax';
import FeatureWaitingList from '@/containers/Feature/WaitingList';

export default function FeaturePage() {
  const session = useSession();
  const isSmUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const startFreeTrialLink =
    session.status === 'authenticated' ? paths.account : paths.register;

  return (
    <>
      <Box
        component="section"
        sx={(theme) => ({
          bgcolor:
            theme.palette.mode === 'dark'
              ? theme.palette.grey[900]
              : theme.palette.grey[50],
          py: theme.spacing(10),
        })}
      >
        <Toolbar />
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography
              textAlign="center"
              component="h3"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >
              Features
            </Typography>

            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              Everything You Need to Run and Grow Your Store.
            </Typography>

            <Typography
              variant="h6"
              gutterBottom
              color="textSecondary"
              fontWeight={400}
            >
              A modern, cloud-based POS system built for retail, service, and
              food businesses — packed with powerful features to simplify
              operations and boost sales.
            </Typography>
          </Box>

          <Stack mt={4} direction="row" justifyContent="center" spacing={1}>
            <Box>
              <Button
                LinkComponent={Link}
                href={startFreeTrialLink}
                size="extra-large"
                variant="contained"
                color="primary"
              >
                Try for Free
              </Button>
            </Box>
            <Box>
              <Button
                LinkComponent={Link}
                href={paths.pricing}
                size="extra-large"
                color="primary"
                variant="outlined"
              >
                View Pricing
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <Dashboard />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureArea />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <PointOfSale />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureEvent />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureExpense />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureGiftCard />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureRefund />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureRole />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureStaff />
        </Container>
      </Box>

      <Box
        component="section"
        sx={(theme) => ({
          bgcolor:
            theme.palette.mode === 'dark'
              ? theme.palette.grey[900]
              : theme.palette.grey[50],
          py: theme.spacing(10),
        })}
      >
        <Container maxWidth="lg">
          <Catalog />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureCustomer />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureDiscount />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureSession />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureTax />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureReport />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureRealtime />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureWaitingList />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureOrderNotification />
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <FeatureMigration />
        </Container>
      </Box>

      <Divider />
    </>
  );
}
