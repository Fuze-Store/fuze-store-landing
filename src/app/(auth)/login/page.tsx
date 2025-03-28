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
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import useLogin from '@/containers/Auth/hooks/useLogin';
import { paths } from '@/enums/path.enum';

import Label from '@/components/Label';

import logo from '@/images/name-logo-black.png';

const schema = z.object({
  email: z.string().min(1, 'Email is required').email(),
  password: z.string().min(1, 'Password is required'),
});
type Schema = z.infer<typeof schema>;

export default function Page() {
  const { login, isError, error, isPending } = useLogin();

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
    await login(params);
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center' }} mb={4}>
          <Image src={logo} width={250} height={80} alt="Logo" />
        </Box>

        {isError && (
          <Box mb={2}>
            <Alert severity="error">{error.response?.data.message}</Alert>
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
              disabled={isPending}
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
              disabled={isPending}
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
              disabled={isPending}
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
          <Button
            variant="outlined"
            sx={{ backgroundColor: '#4267b2', color: '#fff' }}
            disableElevation
            fullWidth
          >
            Login with Facebook
          </Button>
          <Button
            variant="outlined"
            sx={{ backgroundColor: '#fff', color: '#000' }}
            disableElevation
            fullWidth
          >
            Sign in with Google
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
