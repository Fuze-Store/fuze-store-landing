'use client';

import { Box, Button, Container, TextField, Typography } from '@mui/material';
import Image from 'next/image';

import logo from '@/images/logo.png';

export default function Login() {
  return (
    <Container disableGutters maxWidth="xs">
      <Box sx={{ py: 10 }}>
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
            <Button disableElevation fullWidth>
              Go Back
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
