'use client';

import { Box, Container, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';

import useRegister from '@/containers/Auth/hooks/useRegister';
import { FormInputs } from '@/containers/Register/Form/Provider/types';

import GoBackButton from '@/components/GoBackButton';
import RegisterForm from '@/containers/Register/Form';
import RegisterFormProvider from '@/containers/Register/Form/Provider';
import RegisterFormSubmit from '@/containers/Register/Form/Submit';

import logo from '@/images/logo.png';

export default function Page() {
  const { register, error } = useRegister();

  const onSubmit = async (data: FormInputs) => {
    await register({ ...data, newPassword: data.password });
  };

  return (
    <RegisterFormProvider
      errors={error?.response?.data.errors}
      onSubmit={onSubmit}
    >
      <Toolbar />
      <Container maxWidth="sm">
        <Box sx={{ py: { sm: 10 } }}>
          <Box sx={{ textAlign: 'center' }} mb={2}>
            <Image src={logo} width={80} height={80} alt="Logo" />
          </Box>

          <Box mb={4}>
            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              Create an account
            </Typography>

            <Typography
              textAlign="center"
              gutterBottom
              color="textSecondary"
              fontWeight={400}
            >
              Lorem ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry’s standard dummy..
            </Typography>
          </Box>

          <RegisterForm />

          <Box mb={1}>
            <RegisterFormSubmit
              variant="contained"
              disableElevation
              fullWidth
            />
          </Box>

          <Box mb={2}>
            <GoBackButton fullWidth />
          </Box>
        </Box>
      </Container>
    </RegisterFormProvider>
  );
}
