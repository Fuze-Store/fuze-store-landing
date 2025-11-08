'use client';

import {
  Button,
  Divider,
  Grid,
  Stack,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';

import useGetAccount from '@/containers/Account/hooks/useGetAccount';
import useGetPlanList from '@/containers/Plan/hooks/useGetPlanList';
import useSession from '@/hooks/useSession';
import {
  getDifferentFeaturesValues,
  PlanCode,
} from '@fuze-store/fuze-store-shared';

import type { Plan } from '@fuze-store/fuze-store-shared';

import PlanCard from '@/components/PlanCard';
import SectionContainer from '@/components/SectionContainer';
import ContactUs from '@/containers/Pricing/ContactUs';
import Faqs from '@/containers/Pricing/Faqs';
import Matrix from '@/containers/Pricing/Matrix';
import { paths } from '@/helpers/page.helper';
import Link from 'next/link';

export default function PricingPage() {
  const { data: session } = useSession();
  useGetAccount({ enabled: Boolean(session) });
  const { data: plansResponse } = useGetPlanList();
  const isSmUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const plans: Plan[] = useMemo(
    () => plansResponse?.data || [],
    [plansResponse?.data],
  );

  const filteredPlans = useMemo(
    (): Plan[] => plans.filter((plan) => plan.code !== PlanCode.FREETRIAL),
    [plans],
  );

  const differentFeatures = useMemo(
    () => getDifferentFeaturesValues(filteredPlans),
    [filteredPlans],
  );

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
        <SectionContainer mb={8}>
          <Container maxWidth="md">
            <Box mb={8}>
              <Typography
                textAlign="center"
                component="h2"
                variant="h4"
                gutterBottom
                fontWeight={500}
              >
                Pricing
              </Typography>

              <Typography
                textAlign="center"
                variant="h6"
                gutterBottom
                color="textSecondary"
                fontWeight={400}
              >
                Flexible Plans for Every Stage of Your Business. From startups
                to growing enterprises — choose the plan that fits your workflow
                and budget.
              </Typography>
            </Box>
          </Container>
        </SectionContainer>

        <Container maxWidth="lg">
          <Grid container alignItems="stretch" spacing={2}>
            {filteredPlans.map((plan, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
                <PlanCard
                  plan={plan}
                  prevPlan={filteredPlans[index - 1]}
                  differentFeatures={differentFeatures}
                />
              </Grid>
            ))}
          </Grid>

          <Stack my={4} direction="row" alignItems="center" spacing={2}>
            <Divider sx={{ flex: 1 }} />
            <Typography variant="body1" fontWeight={500}>
              OR
            </Typography>
            <Divider sx={{ flex: 1 }} />
          </Stack>

          <Stack
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: 400,
              margin: '0 auto',
            }}
            spacing={3}
          >
            <Typography variant="h4" gutterBottom fontWeight={700}>
              Custom
            </Typography>

            <Typography textAlign="center" gutterBottom>
              Need a tailored solution? Contact us to create a plan that fits
            </Typography>

            <Button
              variant="contained"
              LinkComponent={Link}
              href={paths.contactUs}
              fullWidth
              size="large"
            >
              Contact Us
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box
        id="matrix"
        component="section"
        sx={(theme) => ({ py: theme.spacing(10) })}
      >
        <Container maxWidth="lg" disableGutters={!isSmUp}>
          <Matrix plans={filteredPlans} />
        </Container>
      </Box>

      <Divider />

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container disableGutters maxWidth="lg">
          <Faqs />
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
          <ContactUs />
        </Container>
      </Box>

      <Divider />
    </>
  );
}
