'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Footer from '@/components/Footer';
import Catalog from '@/containers/Feature/Catalog';
import Dashboard from '@/containers/Feature/Dashboard';
import Event from '@/containers/Feature/Event';
import PointOfSale from '@/containers/Feature/PointOfSale';
import Sales from '@/containers/Feature/Sales';
import { Divider, Toolbar } from '@mui/material';

export default function Page() {
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
          <Box textAlign="center">
            <Typography
              textAlign="center"
              component="h3"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >
              Features
            </Typography>

            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              Everything You Need to Run and Grow Your Store.
            </Typography>

            <Typography
              variant="h6"
              gutterBottom
              color="textSecondary"
              fontWeight={400}
            >
              A modern, cloud-based POS system built for retail, service, and
              food businesses — packed with powerful features to simplify
              operations and boost sales.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Dashboard />
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <PointOfSale />
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Event />
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
        <Catalog />
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Sales />
      </Box>

      <Divider />

      <Footer />
    </>
  );
}
