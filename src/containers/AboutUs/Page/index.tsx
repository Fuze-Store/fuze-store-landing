'use client';

import CoreValues from '@/containers/AboutUs/CoreValues';
import { paths } from '@/helpers/page.helper';
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';

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
        <Container maxWidth="lg">
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
              variant="h6"
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
                To make modern business tools accessible and effortless for
                every store owner. We believe technology should work for people,
                not the other way around. We believe every small business
                deserves the same tools and insights as large chains. That’s why
                we created Fuze Store — a modern POS system designed for
                flexibility, speed, and ease of use, without the high costs or
                complexity.
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
                Our Vision
              </Typography>

              <Typography>
                To provide store owners with a powerful, reliable POS system —
                and to create a companion customer app that bridges the gap
                between stores and their customers. We aim to simplify the
                relationship between business and buyer, creating a smooth and
                meaningful experience on both ends.
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
        <Container maxWidth="lg">
          <Box mb={8}>
            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              What We Do / Our Solutions
            </Typography>

            <Typography
              textAlign="center"
              variant="h6"
              gutterBottom
              color="textSecondary"
              fontWeight={400}
            >
              We provide an all-in-one SaaS Point of Sale designed to adapt to
              every type of business: retail, restaurant, service-based, and
              more. Our platform combines powerful features with an intuitive
              interface, enabling store owners to manage sales, inventory,
              customers, and employees with ease. With Fuze Store, businesses
              can streamline operations, enhance customer experiences, and drive
              growth — all from a single, user-friendly system. Every
              feature—from reporting to staff management—is designed to help
              stores save time, reduce errors, and grow profitably.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* <Box
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
      </Box> */}

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <CoreValues />
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
        <Container maxWidth="md">
          <Box mb={2}>
            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              Join Us
            </Typography>

            <Typography
              textAlign="center"
              variant="h6"
              gutterBottom
              color="textSecondary"
              fontWeight={400}
            >
              Whether you’re a small café, a local store, or a growing brand,
              Fuze Store is here to help you simplify operations and connect
              better with your customers.
            </Typography>

            <Stack mt={10} direction="row" spacing={2}>
              <Box flex={1}>
                <Button
                  LinkComponent={Link}
                  href={paths.register}
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  disableElevation
                  sx={{ height: 56 }}
                >
                  <Typography variant="h6">Get Started</Typography>
                </Button>
              </Box>
              <Box flex={1}>
                <Button
                  LinkComponent={Link}
                  href={paths.contactUs}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ height: 56 }}
                >
                  <Typography variant="h6">Contact Us</Typography>
                </Button>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}
