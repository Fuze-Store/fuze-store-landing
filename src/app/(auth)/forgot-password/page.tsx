'use client';

import {
  Box,
  Button,
  Container,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';

import GoBackButton from '@/components/GoBackButton';
import MetaHeader from '@/components/MetaHeader';

import logo from '@/images/logo.png';

export default function Page() {
  return (
    <>
      <MetaHeader
        title="Forgot Password"
        description="Reset your password for Fuze Store."
      />

      <Toolbar />
      <Container disableGutters maxWidth="xs">
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
              Forgot Password
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

          <Box component="form" method="POST">
            <Box mb={2}>
              <Typography
                component="label"
                color="textSecondary"
                htmlFor="email"
                variant="body2"
              >
                Email *
              </Typography>
              <TextField type="email" id="email" required fullWidth />
            </Box>

            <Box mb={1}>
              <Button
                type="submit"
                variant="contained"
                disableElevation
                fullWidth
              >
                Forgot Password
              </Button>
            </Box>

            <Box mb={2}>
              <GoBackButton fullWidth />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
