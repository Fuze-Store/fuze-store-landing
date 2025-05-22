'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './style.css';

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

    <Box
      sx={{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 8,
        height: 440,
        width: '100%',
      }}
    />
  </Container>
);

export default SupportedPlatform;
