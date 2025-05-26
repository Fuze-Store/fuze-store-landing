'use client';

import { Alert, Box } from '@mui/material';
import Container from '@mui/material/Container';

import useGetAccountAddress from '@/containers/Account/Address/hooks/useGetAccountAddress';
import useUpdateAccountAddress from '@/containers/Account/Address/hooks/useUpdateAccountAddress';

import type { FormInputs } from '@/containers/Address/Form/Provider/types';

import PageLoader from '@/components/PageLoader';
import SectionContainer from '@/components/SectionContainer';
import AddressForm from '@/containers/Address/Form';
import AddressFormProvider from '@/containers/Address/Form/Provider';
import AddressFormSubmit from '@/containers/Address/Form/Submit';

export default function Page() {
  const { data: response, isLoading } = useGetAccountAddress();
  const { updateAccountAddress, error: err } = useUpdateAccountAddress();
  const error = err?.response?.data;

  const onSubmit = async (payload: FormInputs) => {
    const { street: address1, ...rest } = payload;
    await updateAccountAddress({ address1, ...rest });
  };

  if (isLoading) {
    return <PageLoader BoxProps={{ sx: { height: 300 } }} />;
  }

  return (
    <Container maxWidth="sm">
      <AddressFormProvider
        address={response?.data}
        errors={error?.errors}
        onSubmit={onSubmit}
      >
        {error && (
          <SectionContainer mb={2}>
            <Alert severity="error">{error.message}</Alert>
          </SectionContainer>
        )}

        <AddressForm />

        <Box mb={1}>
          <AddressFormSubmit variant="contained" disableElevation fullWidth />
        </Box>
      </AddressFormProvider>
    </Container>
  );
}
