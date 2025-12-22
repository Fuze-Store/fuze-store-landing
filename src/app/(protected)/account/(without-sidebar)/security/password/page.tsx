'use client';

import { Box, Container } from '@mui/material';
import { useRouter } from 'next/navigation';

import useChangePassword from '@/containers/Account/Security/hooks/useChangePassword';
import { paths } from '@/helpers/page.helper';

import type { FormInputs } from '@/containers/Account/Security/Password/Form/Provider/types';

import GoBackButton from '@/components/GoBackButton';
import SectionContainer from '@/components/SectionContainer';
import AccountPasswordForm from '@/containers/Account/Security/Password/Form';
import AccountPasswordFormProvider from '@/containers/Account/Security/Password/Form/Provider';
import AccountPasswordFormSubmit from '@/containers/Account/Security/Password/Form/Submit';

export default function Page() {
  const router = useRouter();
  const { changePassword, error, isPending } = useChangePassword();

  const onSubmit = async (data: FormInputs) => {
    await changePassword(data);
    router.replace(paths.accountSecurity);
  };

  return (
    <Container sx={{ py: 2 }} maxWidth="sm">
      <SectionContainer>
        <GoBackButton />
      </SectionContainer>

      <AccountPasswordFormProvider
        errors={error?.response?.data.errors}
        onSubmit={onSubmit}
      >
        <AccountPasswordForm loading={isPending} />

        <Box mb={1}>
          <AccountPasswordFormSubmit
            variant="contained"
            disableElevation
            loading={isPending}
            fullWidth
          />
        </Box>
      </AccountPasswordFormProvider>
    </Container>
  );
}
