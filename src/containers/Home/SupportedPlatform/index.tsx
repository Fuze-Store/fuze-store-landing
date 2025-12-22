'use client';

import platformImage from '@/images/platform_image.png';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const SupportedPlatform = () => (
  <Container maxWidth="lg">
    <Box mb={8}>
      <Typography
        textAlign="center"
        component="h3"
        color="primary"
        fontWeight="bold"
        gutterBottom
      >
        Platform & Devices
      </Typography>

      <Typography
        textAlign="center"
        component="h2"
        variant="h4"
        gutterBottom
        fontWeight={500}
      >
        Work Anywhere. On Any Device.
      </Typography>

      <Typography
        textAlign="center"
        variant="h6"
        gutterBottom
        color="textSecondary"
        fontWeight={400}
      >
        Whether you’re at the counter, on the floor, or offsite — our POS system
        keeps you connected and in control across every screen.
      </Typography>
    </Box>

    <Stack sx={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        src={platformImage}
        alt="Platform and Devices"
        style={{
          maxWidth: 800,
          width: '100%',
          height: 'auto',
          borderRadius: 8,
          marginBottom: 32,
        }}
      />
    </Stack>
  </Container>
);

export default SupportedPlatform;
