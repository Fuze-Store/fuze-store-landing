'use client';

import { Card, Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

const CoreValues = () => (
  <>
    <Container maxWidth="md">
      <Box mb={8}>
        <Typography
          textAlign="center"
          component="h2"
          variant="h4"
          gutterBottom
          fontWeight={500}
        >
          Core Values
        </Typography>

        <Typography
          textAlign="center"
          variant="h6"
          gutterBottom
          color="textSecondary"
          fontWeight={400}
        >
          Whether you’re at the counter, on the floor, or offsite — our POS
          system keeps you connected and in control across every screen.
        </Typography>
      </Box>
    </Container>

    <Container maxWidth="lg">
      <Grid container direction="row" spacing={2}>
        <Grid size={{ xs: 6, md: 3 }}>
          <Card sx={(theme) => ({ flex: 1, height: 290 })}>
            <Stack
              sx={{ p: 3, display: 'flex', flex: 1, height: '100%' }}
              direction="column"
              alignItems="space-between"
            >
              <Box>
                <Typography variant="h6" fontWeight={500} gutterBottom>
                  Customer-First Always
                </Typography>
                <Typography fontWeight={500} color="text.secondary">
                  We succeed when our customers do. Every feature we build,
                  every improvement we make, starts with your needs in mind.
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid size={{ xs: 6, md: 3 }}>
          <Card sx={(theme) => ({ flex: 1, height: 290 })}>
            <Stack
              sx={{ p: 3, display: 'flex', flex: 1, height: '100%' }}
              direction="column"
              alignItems="space-between"
            >
              <Box>
                <Typography variant="h6" fontWeight={500} gutterBottom>
                  Keep It Simple
                </Typography>
                <Typography fontWeight={500} color="text.secondary">
                  Powerful doesn’t have to be complicated. We build intuitive
                  tools that are easy to learn and even easier to love.
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid size={{ xs: 6, md: 3 }}>
          <Card sx={(theme) => ({ flex: 1, height: 290 })}>
            <Stack
              sx={{ p: 3, display: 'flex', flex: 1, height: '100%' }}
              direction="column"
              alignItems="space-between"
            >
              <Box>
                <Typography variant="h6" fontWeight={500} gutterBottom>
                  Move with Purpose
                </Typography>
                <Typography fontWeight={500} color="text.secondary">
                  We’re here to help businesses grow — and we don’t waste time.
                  We ship quickly, listen constantly, and evolve fast.
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid size={{ xs: 6, md: 3 }}>
          <Card sx={(theme) => ({ flex: 1, height: 290 })}>
            <Stack
              sx={{ p: 3, display: 'flex', flex: 1, height: '100%' }}
              direction="column"
              alignItems="space-between"
            >
              <Box>
                <Typography variant="h6" fontWeight={500} gutterBottom>
                  Grow Together
                </Typography>
                <Typography fontWeight={500} color="text.secondary">
                  Whether you’re running one store or scaling to many, we grow
                  with you — supporting every step of your journey.
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </>
);

export default memo(CoreValues);
