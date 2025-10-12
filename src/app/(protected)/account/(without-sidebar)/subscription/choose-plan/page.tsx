'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Container, Stack } from '@mui/material';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import useGetPlanList from '@/containers/Plan/hooks/useGetPlanList';
import { paths } from '@/helpers/page.helper';
import { PlanCode } from '@fuze-store/fuze-store-shared/enums';

import GoBackButton from '@/components/GoBackButton';
import PageLoader from '@/components/PageLoader';
import PageTitle from '@/components/PageTitle';
import SectionContainer from '@/components/SectionContainer';
import PlanForm from '@/containers/Plan/Form';

export default function Page() {
  const { data: response, isLoading } = useGetPlanList();
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>();

  const planList = useMemo(
    () =>
      (response?.data ?? []).filter(
        (item) =>
          item.code !== PlanCode.BASIC && item.code !== PlanCode.FREETRIAL,
      ),
    [response?.data],
  );

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Container sx={{ py: 2 }} maxWidth="md">
      <SectionContainer px={3}>
        <GoBackButton />
      </SectionContainer>

      <PageTitle
        ContainerProps={{ textAlign: 'center' }}
        title="Choose Plans"
      />

      <SectionContainer mb={4}>
        <PlanForm
          data={planList}
          onChangePlan={setSelectedPlanId}
          selectedPlanId={selectedPlanId}
        />
      </SectionContainer>

      <Stack direction="row">
        <Button
          href={paths.accountSubscriptionChoosePlanSummary.replaceAll(
            '[id]',
            selectedPlanId || '',
          )}
          disableElevation
          variant="contained"
          LinkComponent={Link}
          disabled={!selectedPlanId}
          endIcon={<ArrowForwardIcon />}
        >
          Continue to Summary
        </Button>
      </Stack>
    </Container>
  );
}
