'use client';

import { Box, Container } from '@mui/material';

import useChangeEmail from '@/containers/Account/Email/hooks/useChangeEmail';
import useGetAccount from '@/containers/Account/hooks/useGetAccount';

import type { FormInputs } from '@/containers/Account/Email/Form/Provider/types';

import GoBackButton from '@/components/GoBackButton';
import PageLoader from '@/components/PageLoader';
import PageTitle from '@/components/PageTitle';
import SectionContainer from '@/components/SectionContainer';
import AccountEmailForm from '@/containers/Account/Email/Form';
import AccountEmailFormProvider from '@/containers/Account/Email/Form/Provider';
import AccountEmailFormSubmit from '@/containers/Account/Email/Form/Submit';

export default function Page() {
  const { changeEmail, error, isPending } = useChangeEmail();
  const { data: response, isLoading } = useGetAccount();

  const onSubmit = async (data: FormInputs) => {
    await changeEmail(data);
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <SectionContainer px={3}>
        <GoBackButton />
      </SectionContainer>

      <PageTitle title="Change Email" />

      <Container sx={{ ml: { md: 0 } }} maxWidth="sm">
        <AccountEmailFormProvider
          formData={response?.data}
          errors={error?.response?.data.errors}
          onSubmit={onSubmit}
        >
          <AccountEmailForm loading={isPending} />

          <Box mb={1}>
            <AccountEmailFormSubmit
              variant="contained"
              disableElevation
              loading={isPending}
              fullWidth
            />
          </Box>
        </AccountEmailFormProvider>
      </Container>
    </>
  );
}
