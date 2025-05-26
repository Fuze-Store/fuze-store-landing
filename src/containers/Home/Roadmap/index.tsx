'use client';

import { Stack, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import './style.css';

const Dot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: -23,
  top: 7,
  height: 12,
  width: 12,
  background: theme.palette.primary.main,
  borderRadius: '50%',
}));

const Roadmap = () => (
  <Container maxWidth="md">
    <Box mb={8}>
      <Typography
        textAlign="center"
        component="h3"
        color="primary"
        fontWeight="bold"
        gutterBottom
      >
        Roadmap
      </Typography>

      <Typography
        textAlign="center"
        component="h2"
        variant="h4"
        gutterBottom
        fontWeight={500}
      >
        We&apos;re Just Getting Started.
      </Typography>

      <Typography
        textAlign="center"
        variant="h6"
        gutterBottom
        color="textSecondary"
        fontWeight={400}
      >
        Innovation never stops. We’re constantly improving your experience,
        guided by your feedback and industry needs.
      </Typography>
    </Box>

    <Box
      sx={{
        borderLeftWidth: 2,
        borderLeftColor: (theme) => theme.palette.primary.main,
        borderLeftStyle: 'solid',
        position: 'relative',
      }}
    >
      <Box sx={{ ml: 2, position: 'relative' }}>
        <Dot />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <Box>
            <Typography variant="h5">Recently Released</Typography>
            <ul>
              <li>Offline Mode Syncing</li>
              <li>Advanced Sales Reporting Filters</li>
              <li>Multi-Store Dashboard View</li>
              <li>Store-specific Role Management</li>
            </ul>
          </Box>
          <Box component="span" color="text.secondary">
            1. Sept
          </Box>
        </Stack>
      </Box>

      <Box sx={{ ml: 2, mt: 4, position: 'relative' }}>
        <Dot />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <Box>
            <Typography variant="h5">Recently Released</Typography>
            <ul>
              <li>Offline Mode Syncing</li>
              <li>Advanced Sales Reporting Filters</li>
              <li>Multi-Store Dashboard View</li>
              <li>Store-specific Role Management</li>
            </ul>
          </Box>
          <Box component="span" color="text.secondary">
            1. Sept
          </Box>
        </Stack>
      </Box>

      <Box sx={{ ml: 2, mt: 4, position: 'relative' }}>
        <Dot />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <Box>
            <Typography variant="h5">Recently Released</Typography>
            <ul>
              <li>Offline Mode Syncing</li>
              <li>Advanced Sales Reporting Filters</li>
              <li>Multi-Store Dashboard View</li>
              <li>Store-specific Role Management</li>
            </ul>
          </Box>
          <Box component="span" color="text.secondary">
            1. Sept
          </Box>
        </Stack>
      </Box>
    </Box>
  </Container>
);

export default memo(Roadmap);
