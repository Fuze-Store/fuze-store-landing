'use client';

import { Button, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';

import useGetPaymentMethodList from '@/containers/Account/PaymentMethod/hooks/useGetPaymentMethodList';
import useGetSubscription from '@/containers/Account/Subscription/hooks/useGetSubscription';
import { paths } from '@/enums/path.enum';
import { getAccountPaymentMethodBrandLabel } from '@/helpers/paymentMethod.helper';

import GoBackButton from '@/components/GoBackButton';
import PageTitle from '@/components/PageTitle';
import PaymentMethodItem from '@/components/PaymentMethodItem';
import SectionContainer from '@/components/SectionContainer';
import SetDefaultButton from '@/containers/Account/PaymentMethod/SetDefaultButton';
import useDeletePaymentMethod from '@/containers/Account/PaymentMethod/hooks/useDeletePaymentMethod';

export default function Page() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { data: responseSubscription } = useGetSubscription();
  const { data: response } = useGetPaymentMethodList();
  const { deletePaymentMethod, isSuccess } = useDeletePaymentMethod();

  useEffect(() => {
    if (isSuccess) router.push(paths.accountSubscription);
  }, [isSuccess, router]);

  const paymentMethods = useMemo(() => response?.data ?? [], [response?.data]);

  const paymentMethod = useMemo(
    () => paymentMethods.find((item) => item.id === params.id),
    [params.id, paymentMethods],
  );

  const isDefault = useMemo(
    (): boolean => responseSubscription?.data?.paymentMethodId === params.id,
    [responseSubscription?.data?.paymentMethodId, params.id],
  );

  return (
    <>
      <SectionContainer px={3}>
        <GoBackButton />
      </SectionContainer>

      <PageTitle title="Edit Payment Method" />

      <Container sx={{ ml: { md: 0 } }} maxWidth="sm">
        {paymentMethod && (
          <>
            <SectionContainer>
              <PaymentMethodItem
                paymentMethod={paymentMethod}
                selected={isDefault}
                title={getAccountPaymentMethodBrandLabel(paymentMethod.brand)}
              />
            </SectionContainer>

            <Stack direction="row" spacing={1}>
              <SetDefaultButton
                ButtonProps={{ disabled: isDefault }}
                paymentMethodId={paymentMethod.id}
              />
              <Button
                color="error"
                onClick={() => deletePaymentMethod(paymentMethod.id)}
              >
                Delete Payment Method
              </Button>
            </Stack>
          </>
        )}
      </Container>
    </>
  );
}
