'use client';

import { Grid, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { memo } from 'react';

const StyledList = styled('ul')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    padding: 0,
  },
  '& a': {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

const Articles = () => (
  <Container maxWidth="lg">
    <Box mb={5}>
      <Typography component="h2" variant="h5" gutterBottom fontWeight={500}>
        Example Categories & Articles
      </Typography>
    </Box>

    <Grid container spacing={4} alignItems="stretch">
      <Grid size={{ xs: 12, sm: 4, md: 3 }}>
        <Box>
          <Typography variant="h6">Getting Started</Typography>
          <StyledList>
            <li>
              <Link href="/">How to create your first store</Link>
            </li>
            <Box component="li">Setting up your POS in under 5 minutes</Box>
            <Box component="li">Importing products via CSV</Box>
            <Box component="li">
              Setting up your store’s tax, time zone, and currency
            </Box>
          </StyledList>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 4, md: 3 }}>
        <Box>
          <Typography variant="h6">Managing Products & Services</Typography>
          <StyledList>
            <li>
              <Link href="/">Add/edit/delete items</Link>
            </li>
            <Box component="li">
              <Link href="/">Product categories vs modifiers</Link>
            </Box>
            <Box component="li">
              <Link href="/">Inventory tracking and low-stock alerts</Link>
            </Box>
          </StyledList>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 4, md: 3 }}>
        <Box>
          <Typography variant="h6">Orders, Payments & Refunds</Typography>
          <StyledList>
            <li>
              <Link href="/">Creating and managing orders</Link>
            </li>
            <Box component="li">
              <Link href="/">Applying discounts and promotions</Link>
            </Box>
            <Box component="li">
              <Link href="/">Handling refunds and partial payments</Link>
            </Box>
          </StyledList>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 4, md: 3 }}>
        <Box>
          <Typography variant="h6">Staff, Roles & Permissions</Typography>
          <StyledList>
            <li>
              <Link href="/">Creating staff accounts with pincodes</Link>
            </li>
            <Box component="li">
              <Link href="/">Assigning roles per store</Link>
            </Box>
            <Box component="li">
              <Link href="/">Managing staff access and logs</Link>
            </Box>
          </StyledList>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 4, md: 3 }}>
        <Box>
          <Typography variant="h6">Billing & Subscriptions</Typography>
          <StyledList>
            <li>
              <Link href="/">Understanding your plan & features</Link>
            </li>
            <Box component="li">
              <Link href="/">How to upgrade/downgrade</Link>
            </Box>
            <Box component="li">
              <Link href="/">How billing and invoices work</Link>
            </Box>
          </StyledList>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 4, md: 3 }}>
        <Box>
          <Typography variant="h6">Reports & Analytics</Typography>
          <StyledList>
            <li>
              <Link href="/">Daily sales report</Link>
            </li>
            <Box component="li">
              <Link href="/">Exporting sales and tax reports</Link>
            </Box>
            <Box component="li">
              <Link href="/">Understanding commission-based reporting</Link>
            </Box>
          </StyledList>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 4, md: 3 }}>
        <Box>
          <Typography variant="h6">POS Devices & Mobile App</Typography>
          <StyledList>
            <li>
              <Link href="/">
                Recommended hardware (printers, tablets, scanners)
              </Link>
            </li>
            <Box component="li">
              <Link href="/">Installing the mobile app (iOS, Android)</Link>
            </Box>
            <Box component="li">
              <Link href="/">Connectivity issues</Link>
            </Box>
          </StyledList>
        </Box>
      </Grid>
    </Grid>
  </Container>
);

export default memo(Articles);
