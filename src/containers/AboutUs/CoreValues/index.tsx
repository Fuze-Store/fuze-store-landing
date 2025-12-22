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
          At Fuze Store, our work is guided by core values that shape every
          decision:
        </Typography>
      </Box>
    </Container>

    <Container maxWidth="lg">
      <Grid container direction="row" spacing={2}>
        <Grid size={{ xs: 6, md: 3 }}>
          <Card sx={(theme) => ({ flex: 1, height: 160 })}>
            <Stack
              sx={{ p: 3, display: 'flex', flex: 1, height: '100%' }}
              direction="column"
              alignItems="space-between"
            >
              <Box>
                <Typography variant="h6" fontWeight={500} gutterBottom>
                  Innovation with Purpose
                </Typography>
                <Typography fontWeight={500} color="text.secondary">
                  We create tools that solve real challenges.
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid size={{ xs: 6, md: 3 }}>
          <Card sx={(theme) => ({ flex: 1, height: 160 })}>
            <Stack
              sx={{ p: 3, display: 'flex', flex: 1, height: '100%' }}
              direction="column"
              alignItems="space-between"
            >
              <Box>
                <Typography variant="h6" fontWeight={500} gutterBottom>
                  Simplicity First
                </Typography>
                <Typography fontWeight={500} color="text.secondary">
                  Every feature should make running a business easier.
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid size={{ xs: 6, md: 3 }}>
          <Card sx={(theme) => ({ flex: 1, height: 160 })}>
            <Stack
              sx={{ p: 3, display: 'flex', flex: 1, height: '100%' }}
              direction="column"
              alignItems="space-between"
            >
              <Box>
                <Typography variant="h6" fontWeight={500} gutterBottom>
                  Empowerment for All
                </Typography>
                <Typography fontWeight={500} color="text.secondary">
                  We help local entrepreneurs thrive in the digital world.
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid size={{ xs: 6, md: 3 }}>
          <Card sx={(theme) => ({ flex: 1, height: 160 })}>
            <Stack
              sx={{ p: 3, display: 'flex', flex: 1, height: '100%' }}
              direction="column"
              alignItems="space-between"
            >
              <Box>
                <Typography variant="h6" fontWeight={500} gutterBottom>
                  Trust and Transparency
                </Typography>
                <Typography fontWeight={500} color="text.secondary">
                  We grow only when our users succeed.
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
