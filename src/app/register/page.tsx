'use client';

import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';

import logo from '@/images/logo.png';

export default function Login() {
  return (
    <Container disableGutters maxWidth="sm">
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

        <Box component="form" method="POST">
          <Box mb={2}>
            <Typography
              component="label"
              color="textSecondary"
              htmlFor="username"
              variant="body2"
            >
              Username *
            </Typography>
            <TextField type="text" id="username" required fullWidth />

            <Box mt={2}>
              <Typography component="p" variant="caption" color="textSecondary">
                * Username must be at least 6 characters.
              </Typography>
              <Typography component="p" variant="caption" color="textSecondary">
                * Username must be a lowercase.
              </Typography>
              <Typography component="p" variant="caption" color="textSecondary">
                * Username must be alphanumeric, dot, underscore only.
              </Typography>
            </Box>
          </Box>

          <Box mb={2}>
            <Stack direction="row" spacing={1}>
              <Box sx={{ flex: 1 }}>
                <Typography
                  component="label"
                  color="textSecondary"
                  htmlFor="first-name"
                  variant="body2"
                >
                  First Name *
                </Typography>
                <TextField type="text" id="first-name" required fullWidth />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  component="label"
                  color="textSecondary"
                  htmlFor="last-name"
                  variant="body2"
                >
                  Last Name *
                </Typography>
                <TextField type="text" id="last-name" required fullWidth />
              </Box>
            </Stack>
          </Box>

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

          <Box mb={2}>
            <Typography
              component="label"
              color="textSecondary"
              htmlFor="password"
              variant="body2"
            >
              Password *
            </Typography>
            <TextField type="password" id="password" required fullWidth />

            <Box mt={2}>
              <Typography component="p" variant="caption" color="textSecondary">
                * New Password must be at least 8 characters.
              </Typography>
              <Typography component="p" variant="caption" color="textSecondary">
                * New Password must contain at least 1 lowercase.
              </Typography>
              <Typography component="p" variant="caption" color="textSecondary">
                * New Password must contain at least 1 uppercase.
              </Typography>
              <Typography component="p" variant="caption" color="textSecondary">
                * New Password must contain at least 8 numbers.
              </Typography>
            </Box>
          </Box>

          <Box mb={2}>
            <Typography
              component="label"
              color="textSecondary"
              htmlFor="confirm-password"
              variant="body2"
            >
              Confirm Password *
            </Typography>
            <TextField
              type="password"
              id="confirm-password"
              required
              fullWidth
            />
          </Box>

          <Box mb={1}>
            <Button
              type="submit"
              variant="contained"
              disableElevation
              fullWidth
            >
              Create Account
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
