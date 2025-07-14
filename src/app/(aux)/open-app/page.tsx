'use client';

import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

export default function Open() {
  useEffect(() => {
    const now = Date.now();

    // Fallback to home (or any route in your PWA)
    const fallback = () => {
      if (Date.now() - now < 2200) {
        window.location.href = process.env
          .NEXT_PUBLIC_FUZE_STORE_APP_WEBURL as string; // or your PWA home route
      }
    };

    setTimeout(fallback, 1500);

    // Attempt to open the app
    window.location.href = process.env.NEXT_PUBLIC_FUZE_STORE_APP_URL as string;
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Opening Fuze Store App…
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
      >{`If the app doesn't open, you'll be redirected shortly.`}</Typography>
    </Box>
  );
}
