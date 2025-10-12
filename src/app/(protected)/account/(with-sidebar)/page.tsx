'use client';

import {
  CircularProgress,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import useGetAccount from '@/containers/Account/hooks/useGetAccount';

import MetaHeader from '@/components/MetaHeader';
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
      <>
        <MetaHeader
          title="Account"
          description="Manage your account settings for Fuze Store."
        />

        <Container sx={{ marginLeft: 0 }} maxWidth="sm">
          <Box py={2}>
            <Typography fontWeight={600}>Personal Information</Typography>
            <Divider sx={{ mb: 2 }} />

            <SectionContainer mt={3} mb={6}>
              <AccountDetailsInfo
                fullName={account.info.fullName}
                initials={account.info.initials}
              />
            </SectionContainer>

            <Typography fontWeight={600}>Email</Typography>
            <Divider sx={{ mb: 2 }} />

            <SectionContainer mt={3} mb={6}>
              <AccountDetailsEmail
                email={account.email}
                isVerified={account.isVerified}
              />
            </SectionContainer>

            <Typography fontWeight={600}>Social</Typography>
            <Divider sx={{ mb: 2 }} />

            <SectionContainer mt={3} mb={6}>
              <AccountDetailsProvider providers={account.providers} />
            </SectionContainer>

            <SectionContainer>
              <AccountDeleteButton />
            </SectionContainer>
          </Box>
        </Container>
      </>
    );
  }

  return null;
}
