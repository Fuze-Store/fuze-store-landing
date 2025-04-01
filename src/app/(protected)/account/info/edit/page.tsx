'use client';

import { Box, Container } from '@mui/material';

import useGetAccount from '@/containers/Account/hooks/useGetAccount';
import useUpdateAccount from '@/containers/Account/hooks/useUpdateAccount';

import type { FormInputs } from '@/containers/Account/Details/Form/Provider/types';

import GoBackButton from '@/components/GoBackButton';
import PageLoader from '@/components/PageLoader';
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
    <AccountDetailsFormProvider
      formData={response?.data}
      errors={error?.response?.data.errors}
      onSubmit={onSubmit}
    >
      <Container maxWidth="sm">
        <Box sx={{ py: 10 }}>
          <AccountDetailsForm loading={isPending} />

          <Box mb={1}>
            <AccountDetailsFormSubmit
              variant="contained"
              disableElevation
              loading={isPending}
              fullWidth
            />
          </Box>

          <Box mb={2}>
            <GoBackButton disableElevation fullWidth />
          </Box>
        </Box>
      </Container>
    </AccountDetailsFormProvider>
  );
}
