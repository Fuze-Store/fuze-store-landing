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
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { paths } from '@/enums/path.enum';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import { ApiErrorResponse } from '@/types';
import { LoginPayload, LoginResponse } from '@/types/login';

import Label from '@/components/Label';

import logo from '@/images/name-logo-black.png';

const schema = z.object({
  email: z.string().min(1, 'Email is required').email(),
  password: z.string().min(1, 'Password is required'),
});
type Schema = z.infer<typeof schema>;

const login = async (data: LoginPayload): Promise<LoginResponse> => {
  const response = await axiosPrivate.post<LoginResponse>(
    endpoints.auth.login,
    data,
  );
  return response.data;
};

export default function Page() {
  const mutation = useMutation<
    LoginResponse,
    AxiosError<ApiErrorResponse>,
    LoginPayload
  >({ mutationFn: login });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    mode: 'onSubmit',
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(schema),
  });

  const onSubmit = (params: Schema) => {
    mutation.mutate(params);
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center' }} mb={4}>
          <Image src={logo} width={250} height={80} alt="Logo" />
        </Box>

        {mutation.isError && (
          <Box mb={2}>
            <Alert severity="error">
              {mutation.error.response?.data.message}
            </Alert>
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
