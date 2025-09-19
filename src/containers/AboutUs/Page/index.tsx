'use client';

import CoreValues from '@/containers/AboutUs/CoreValues';
import WhoWeServe from '@/containers/AboutUs/WhoWeServe';
import { Box, Container, Grid, Toolbar, Typography } from '@mui/material';

export default function AboutUsPage() {
  return (
    <>
      <Box
        component="section"
        sx={(theme) => ({
          bgcolor:
            theme.palette.mode === 'dark'
              ? theme.palette.grey[900]
              : theme.palette.grey[50],
          py: theme.spacing(10),
        })}
      >
        <Toolbar />
        <Container maxWidth="md">
          <Box mb={8}>
            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              Built for Businesses Like Yours
            </Typography>

            <Typography
              textAlign="center"
              gutterBottom
              color="textSecondary"
              fontWeight={400}
            >
              We’re on a mission to help retailers, restaurateurs, and service
              providers thrive with powerful yet simple point-of-sale tools.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <Grid
            mb={2}
            sx={{ minHeight: 320 }}
            container
            direction="row"
            spacing={{ xs: 2, sm: 4 }}
          >
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h4" gutterBottom>
                Mission
              </Typography>

              <Typography>
                We believe every small business deserves the same tools and
                insights as large chains. That’s why we created Fuze Store — a
                modern POS system designed for flexibility, speed, and ease of
                use, without the high costs or complexity.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#ccc',
                  borderRadius: 8,
                  height: 200,
                  width: '100%',
                }}
              />
            </Grid>
          </Grid>

          <Grid
            sx={{ minHeight: 320 }}
            container
            direction={{ xs: 'column-reverse', sm: 'row' }}
            spacing={{ xs: 2, sm: 4 }}
          >
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#ccc',
                  borderRadius: 8,
                  height: 200,
                  width: '100%',
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h4" gutterBottom>
                Vision
              </Typography>

              <Typography>
                We believe every small business deserves the same tools and
                insights as large chains. That’s why we created Fuze Store — a
                modern POS system designed for flexibility, speed, and ease of
                use, without the high costs or complexity.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="section"
        sx={(theme) => ({
          bgcolor:
            theme.palette.mode === 'dark'
              ? theme.palette.grey[900]
              : theme.palette.grey[50],
          py: theme.spacing(10),
        })}
      >
        <WhoWeServe />
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <CoreValues />
      </Box>
    </>
  );
}
