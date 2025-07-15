'use client';

import { Alert, Box, Container } from '@mui/material';
import { useRouter } from 'next/navigation';

import useChangeEmail from '@/containers/Account/Email/hooks/useChangeEmail';
import useGetAccount from '@/containers/Account/hooks/useGetAccount';
import { paths } from '@/helpers/page.helper';

import type { FormInputs } from '@/containers/Account/Email/Form/Provider/types';

import GoBackButton from '@/components/GoBackButton';
import PageLoader from '@/components/PageLoader';
import SectionContainer from '@/components/SectionContainer';
import AccountEmailForm from '@/containers/Account/Email/Form';
import AccountEmailFormProvider from '@/containers/Account/Email/Form/Provider';
import AccountEmailFormSubmit from '@/containers/Account/Email/Form/Submit';

export default function Page() {
  const router = useRouter();
  const { data: response, isLoading } = useGetAccount();
  const { changeEmail, error: err, isPending } = useChangeEmail();
  const error = err?.response?.data;

  const onSubmit = async (data: FormInputs) => {
    await changeEmail(data);
    router.replace(paths.account);
  };

  if (isLoading) {
    return <PageLoader BoxProps={{ sx: { height: 300 } }} />;
  }

  return (
    <Container maxWidth="sm">
      <SectionContainer>
        <GoBackButton />
      </SectionContainer>

      <AccountEmailFormProvider
        formData={response?.data}
        errors={error?.errors}
        onSubmit={onSubmit}
      >
        {error && (
          <SectionContainer mb={2}>
            <Alert severity="error">{error.message}</Alert>
          </SectionContainer>
        )}
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
  );
}
