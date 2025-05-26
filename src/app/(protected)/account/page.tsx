'use client';

import { CircularProgress, Stack, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import useGetAccount from '@/containers/Account/hooks/useGetAccount';

import SectionContainer from '@/components/SectionContainer';
import AccountDeleteButton from '@/containers/Account/DeleteButton';
import AccountDetailsEmail from '@/containers/Account/Details/Email';
import AccountDetailsInfo from '@/containers/Account/Details/Info';
import AccountDetailsProvider from '@/containers/Account/Details/Provider';

export default function Page() {
  const { data: response, isLoading } = useGetAccount();

  const account = response?.data;

  if (isLoading) {
    return (
      <>
        <Toolbar />
        <Stack direction="row" justifyContent="center">
          <CircularProgress />
        </Stack>
      </>
    );
  }

  if (account) {
    return (
      <Container maxWidth="sm">
        <Box py={2}>
          <SectionContainer>
            <AccountDetailsInfo
              email={account.email}
              fullName={account.info.fullName}
              initials={account.info.initials}
            />
          </SectionContainer>

          <SectionContainer>
            <AccountDetailsEmail
              email={account.email}
              isVerified={account.isVerified}
            />
          </SectionContainer>

          <SectionContainer>
            <AccountDetailsProvider providers={account.providers} />
          </SectionContainer>

          <SectionContainer>
            <AccountDeleteButton />
          </SectionContainer>
        </Box>
      </Container>
    );
  }

  return null;
}
