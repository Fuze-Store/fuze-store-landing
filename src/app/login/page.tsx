'use client';

import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';

import logo from '@/images/name-logo-black.png';

export default function Login() {
  return (
    <Container disableGutters maxWidth="xs">
      <Box sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center' }} mb={4}>
          <Image src={logo} width={250} height={80} alt="Logo" />
        </Box>

        <Box component="form" method="POST">
          <Box mb={2}>
            <Typography component="label" color="textSecondary" htmlFor="email">
              Email *
            </Typography>
            <TextField type="email" id="email" required fullWidth />
          </Box>

          <Box mb={2}>
            <Typography
              component="label"
              color="textSecondary"
              htmlFor="password"
            >
              Password *
            </Typography>
            <TextField type="password" required fullWidth />
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
          <Button>Forgot Password</Button>
          <Button>No account yet? Register here.</Button>
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
