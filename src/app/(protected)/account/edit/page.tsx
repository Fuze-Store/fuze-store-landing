'use client';

import { Box, Container } from '@mui/material';

import useGetAccount from '@/containers/Account/hooks/useGetAccount';
import useUpdateAccount from '@/containers/Account/hooks/useUpdateAccount';

import type { FormInputs } from '@/containers/Account/Details/Form/Provider/types';

import GoBackButton from '@/components/GoBackButton';
import PageLoader from '@/components/PageLoader';
import PageTitle from '@/components/PageTitle';
import SectionContainer from '@/components/SectionContainer';
import AccountDetailsForm from '@/containers/Account/Details/Form';
import AccountDetailsFormProvider from '@/containers/Account/Details/Form/Provider';
import AccountDetailsFormSubmit from '@/containers/Account/Details/Form/Submit';

export default function Page() {
  const { updateAccount, error, isPending } = useUpdateAccount();
  const { data: response, isLoading } = useGetAccount();

  const onSubmit = async (data: FormInputs) => {
    await updateAccount({
      username: data.username,
      info: { firstName: data.firstName, lastName: data.lastName },
    });
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <SectionContainer px={3}>
        <GoBackButton />
      </SectionContainer>

      <PageTitle title="Edit" />

      <Container sx={{ ml: { md: 0 } }} maxWidth="sm">
        <AccountDetailsFormProvider
          formData={response?.data}
          errors={error?.response?.data.errors}
          onSubmit={onSubmit}
        >
          <AccountDetailsForm loading={isPending} />

          <Box mb={1}>
            <AccountDetailsFormSubmit
              variant="contained"
              disableElevation
              loading={isPending}
              fullWidth
            />
          </Box>
        </AccountDetailsFormProvider>
      </Container>
    </>
  );
}
