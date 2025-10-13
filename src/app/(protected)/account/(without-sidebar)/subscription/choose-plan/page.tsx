'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Container, Stack } from '@mui/material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useReducer } from 'react';

import useGetPlanList from '@/containers/Plan/hooks/useGetPlanList';
import { paths } from '@/helpers/page.helper';
import { PlanCode } from '@fuze-store/fuze-store-shared';

import GoBackButton from '@/components/GoBackButton';
import PageLoader from '@/components/PageLoader';
import PageTitle from '@/components/PageTitle';
import SectionContainer from '@/components/SectionContainer';
import useGetSubscription from '@/containers/Account/Subscription/hooks/useGetSubscription';
import PlanForm from '@/containers/Plan/Form';

function reducer(
  _state: string | undefined,
  action: string | undefined,
): string | undefined {
  return action;
}

export default function Page() {
  const { data: planResponse, isLoading } = useGetPlanList();
  const { data: subscriptionResponse } = useGetSubscription();
  const searchParams = useSearchParams();

  const queryPlanId = searchParams.get('planId') || undefined;

  const [selectedPlanId, dispatch] = useReducer(reducer, undefined);

  const planList = useMemo(
    () =>
      (planResponse?.data ?? []).filter(
        (item) =>
          item.code !== PlanCode.BASIC && item.code !== PlanCode.FREETRIAL,
      ),
    [planResponse?.data],
  );

  useEffect(() => {
    if (queryPlanId) {
      dispatch(queryPlanId);
    } else if (subscriptionResponse?.data?.plan?.id) {
      dispatch(subscriptionResponse?.data?.plan?.id);
    }
  }, [queryPlanId, subscriptionResponse?.data?.plan?.id]);

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
          onChangePlan={dispatch}
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
