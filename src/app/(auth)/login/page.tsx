'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
} from '@mui/material';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { paths } from '@/enums/path.enum';

import Label from '@/components/Label';
import FacebookLoginButton from '@/containers/Auth/FacebookLoginButton';
import GoogleLoginButton from '@/containers/Auth/GoogleLoginButton';

import logo from '@/images/name-logo-black.png';

const schema = z.object({
  email: z.string().min(1, 'Email is required').email(),
  password: z.string().min(1, 'Password is required'),
});
type Schema = z.infer<typeof schema>;

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    mode: 'onSubmit',
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (params: Schema) => {
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
    <Container maxWidth="xs">
      <Box sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center' }} mb={4}>
          <Image src={logo} width={250} height={80} alt="Logo" />
        </Box>

        {errorMessage && (
          <Box mb={2}>
            <Alert severity="error">{errorMessage}</Alert>
          </Box>
        )}

        <Box
          component="form"
          method="POST"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box mb={2}>
            <Label htmlFor="email" error={!!errors.email}>
              Email *
            </Label>
            <TextField
              type="email"
              id="email"
              required
              fullWidth
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Box>

          <Box mb={2}>
            <Label htmlFor="email" error={!!errors.password}>
              Password *
            </Label>
            <TextField
              type="password"
              required
              fullWidth
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Box>

          <Box mb={2}>
            <Button
              type="submit"
              variant="contained"
              disableElevation
              fullWidth
              loading={loading}
            >
              Login
            </Button>
          </Box>
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
  );
}
