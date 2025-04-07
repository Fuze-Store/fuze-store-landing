'use client';

import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Toolbar,
} from '@mui/material';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { paths } from '@/enums/path.enum';

import type { FormInputs } from '@/containers/Login/Form/Provider/types';

import FacebookLoginButton from '@/containers/Auth/FacebookLoginButton';
import GoogleLoginButton from '@/containers/Auth/GoogleLoginButton';
import LoginForm from '@/containers/Login/Form';
import LoginFormProvider from '@/containers/Login/Form/Provider';
import LoginFormSubmit from '@/containers/Login/Form/Submit';

import logo from '@/images/name-logo-black.png';

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (params: FormInputs) => {
    try {
      setLoading(true);
      const result = await signIn('credentials', {
        ...params,
        redirect: false,
      });

      if (result?.ok) {
        router.push(paths.account);
        return;
      }

      if (result?.status === 401) {
        setErrorMessage('Incorrect email or password.');
      } else {
        setErrorMessage('Something went wrong processing your request');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginFormProvider onSubmit={onSubmit}>
      <Toolbar />
      <Container maxWidth="xs">
        <Box sx={{ py: { sm: 10 } }}>
          <Box sx={{ textAlign: 'center' }} mb={4}>
            <Image src={logo} width={250} height={80} alt="Logo" />
          </Box>

          {errorMessage && (
            <Box mb={2}>
              <Alert severity="error">{errorMessage}</Alert>
            </Box>
          )}

          <LoginForm loading={loading} />

          <Box mb={2}>
            <LoginFormSubmit fullWidth loading={loading} />
          </Box>

          <Stack direction="column" alignItems="flex-start">
            <Button LinkComponent={Link} href={paths.forgotPassword}>
              Forgot Password
            </Button>
            <Button LinkComponent={Link} href={paths.register}>
              No account yet? Register here.
            </Button>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Stack direction="column" alignItems="flex-start" spacing={1}>
            <FacebookLoginButton />
            <GoogleLoginButton />
          </Stack>
        </Box>
      </Container>
    </LoginFormProvider>
  );
}
