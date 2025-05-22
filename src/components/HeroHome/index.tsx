'use client';

import { Stack, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';

import image1 from '@/images/image1.png';

const HeroHome = () => {
  const isSmUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isLgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const imageWidth = useMemo(() => {
    if (isLgUp) return 900;
    if (isMdUp) return 600;
    return 300;
  }, [isLgUp, isMdUp]);

  return (
    <section style={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          py: 20,
          backgroundColor: '#fcfdf7',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, lg: 5, xl: 6 }} alignSelf="center">
              <Typography sx={{ mb: 2 }} fontWeight="bold" variant="h2">
                {`Welcome to `}
                <Box
                  component="span"
                  sx={{ color: 'primary.main' }}
                  className="block"
                >
                  Fuze Store
                </Box>
              </Typography>

              <Typography
                sx={{ mb: 2 }}
                component="p"
                variant="h6"
                fontWeight="400"
              >
                All-in-One POS Platform—Built for Service, Sales, and
                Simplicity. Run your store, manage reservations, handle
                appointments, and delight your customers—all from one modern POS
                system.
              </Typography>

              <Stack direction={isSmUp ? 'row' : 'column'} spacing={1}>
                <Button size="extra-large" variant="contained" color="primary">
                  Stat Free Trial
                </Button>
                <Button size="extra-large" color="primary">
                  Learn More
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, lg: 7, xl: 6 }}>
              <Box>
                <img
                  src={image1.src}
                  alt="Image Banner"
                  style={{ width: '100%' }} // or 'contain'
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default HeroHome;
