'use client';

import { Alert, Box, Container } from '@mui/material';
import { useRouter } from 'next/navigation';

import useGetAccount from '@/containers/Account/hooks/useGetAccount';
import useUpdateAccount from '@/containers/Account/hooks/useUpdateAccount';
import { paths } from '@/helpers/page.helper';

import type { FormInputs } from '@/containers/Account/Details/Form/Provider/types';

import GoBackButton from '@/components/GoBackButton';
import PageLoader from '@/components/PageLoader';
import PageTitle from '@/components/PageTitle';
import SectionContainer from '@/components/SectionContainer';
import AccountDetailsForm from '@/containers/Account/Details/Form';
import AccountDetailsFormProvider from '@/containers/Account/Details/Form/Provider';
import AccountDetailsFormSubmit from '@/containers/Account/Details/Form/Submit';

export default function Page() {
  const router = useRouter();
  const { data: response, isLoading } = useGetAccount();
  const { updateAccount, error: err, isPending } = useUpdateAccount();
  const error = err?.response?.data;

  const onSubmit = async (data: FormInputs) => {
    await updateAccount({
      username: data.username,
      info: { firstName: data.firstName, lastName: data.lastName },
    });
    router.replace(paths.account);
  };

  if (isLoading) {
    return <PageLoader BoxProps={{ sx: { height: 300 } }} />;
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
          errors={error?.errors}
          onSubmit={onSubmit}
        >
          {error && (
            <SectionContainer mb={2}>
              <Alert severity="error">{error.message}</Alert>
            </SectionContainer>
          )}

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
