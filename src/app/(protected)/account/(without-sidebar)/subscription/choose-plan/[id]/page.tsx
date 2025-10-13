'use client';

import { Container, Divider, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import { useMemo, useState } from 'react';

import useGetPlanList from '@/containers/Plan/hooks/useGetPlanList';
import { PlanCode } from '@fuze-store/fuze-store-shared';

import GoBackButton from '@/components/GoBackButton';
import PageLoader from '@/components/PageLoader';
import PageTitle from '@/components/PageTitle';
import PlanCard from '@/components/PlanCard';
import SectionContainer from '@/components/SectionContainer';
import AddPaymentMethodButton from '@/containers/Account/PaymentMethod/AddButton';
import PaymentMethodList from '@/containers/Account/PaymentMethod/List';
import PlanFormSubmit from '@/containers/Plan/Form/Submit';

export default function Page() {
  const params = useParams<{ id: string }>();
  const { data: response, isLoading } = useGetPlanList();
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState<
    string | undefined
  >();

  const planList = useMemo(
    () =>
      (response?.data ?? []).filter(
        (item) =>
          item.code !== PlanCode.BASIC && item.code !== PlanCode.FREETRIAL,
      ),
    [response?.data],
  );

  const selectedPlan = useMemo(
    () => planList.find((plan) => plan.id === params.id),
    [params.id, planList],
  );

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Container maxWidth="md">
      <SectionContainer p={1}>
        <GoBackButton />
      </SectionContainer>

      <PageTitle
        ContainerProps={{ sx: { textAlign: 'center' } }}
        title="Summary"
      />

      <Typography fontWeight={600}>Plan</Typography>
      <Divider sx={{ mb: 2 }} />

      {selectedPlan && (
        <>
          <SectionContainer mb={4}>
            <PlanCard plan={selectedPlan} isSelection selected />
          </SectionContainer>
          <Typography fontWeight={600}>Payment Method</Typography>
          <Divider sx={{ mb: 2 }} />

          <SectionContainer sx={{ mb: 4 }}>
            <SectionContainer>
              <PaymentMethodList
                isSelectionMode
                selectedPaymentMethodId={selectedPaymentMethodId}
                onSelectPaymentMethod={setSelectedPaymentMethodId}
              />
            </SectionContainer>

            <SectionContainer>
              <AddPaymentMethodButton />
            </SectionContainer>
          </SectionContainer>

          <PlanFormSubmit
            ButtonProps={{ fullWidth: true }}
            planId={selectedPlan?.id}
            paymentMethodId={selectedPaymentMethodId}
          />
        </>
      )}
    </Container>
  );
}
