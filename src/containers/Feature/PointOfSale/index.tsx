'use client';

import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import { alpha, Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

const PointOfSale = () => (
  <Container maxWidth="lg">
    <Grid container spacing={{ xs: 2, sm: 10 }} alignItems="center">
      <Grid size={{ xs: 12, sm: 6 }}>
        <Box
          sx={{
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#ccc',
            borderRadius: 8,
            height: 460,
            width: '100%',
          }}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Box
          sx={{
            position: 'relative',
            backgroundColor: (theme) =>
              alpha(theme.palette.primary.light, 0.24),
            borderRadius: '50%',
            height: 40,
            width: 40,
            p: 1,
            mb: 2,
          }}
        >
          <PointOfSaleOutlinedIcon
            color="primary"
            sx={{ height: 24, width: 24 }}
          />
        </Box>

        <Box mb={2}>
          <Typography variant="h5" fontWeight="500" gutterBottom>
            Point of Sale
          </Typography>

          <Typography variant="subtitle1">
            <Typography component="span" fontWeight="500">
              Sell Faster with an Intuitive POS.
            </Typography>{' '}
            A clean, responsive interface that supports drag-and-drop items,
            quick payments, and real-time syncing.
          </Typography>
        </Box>

        <Box ml={4} my={4}>
          <Stack mb={1} direction="row" alignItems="center" spacing={1}>
            <Box>
              <CheckCircleOutlinedIcon
                color="primary"
                sx={{ height: 28, width: 28 }}
              />
            </Box>
            <Box height={32}>
              <Typography>Works offline & online</Typography>
            </Box>
          </Stack>

          <Stack mb={1} direction="row" alignItems="center" spacing={1}>
            <Box>
              <CheckCircleOutlinedIcon
                color="primary"
                sx={{ height: 28, width: 28 }}
              />
            </Box>
            <Box height={32}>
              <Typography>Print or email receipts</Typography>
            </Box>
          </Stack>

          <Stack mb={1} direction="row" alignItems="center" spacing={1}>
            <Box>
              <CheckCircleOutlinedIcon
                color="primary"
                sx={{ height: 28, width: 28 }}
              />
            </Box>
            <Box height={32}>
              <Typography>Keyboard shortcuts for speed</Typography>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  </Container>
);

export default memo(PointOfSale);
