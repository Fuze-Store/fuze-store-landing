'use client';

import FrontHandOutlinedIcon from '@mui/icons-material/FrontHandOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { alpha, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

const Sales = () => (
  <Container maxWidth="lg">
    <Box mb={10}>
      <Typography component="h3" color="primary" fontWeight="bold" gutterBottom>
        Sales
      </Typography>

      <Typography component="h2" variant="h4" gutterBottom fontWeight={500}>
        Every Sale, Tracked and Transparent.
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        color="textSecondary"
        fontWeight={400}
      >
        View all your transactions in one place. Issue refunds, track receipts,
        and maintain clean sales logs.
      </Typography>
    </Box>

    <Grid container spacing={{ xs: 2, sm: 8 }} alignItems="center">
      <Grid size={{ xs: 12, md: 7 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box mb={4}>
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
                <LocalMallOutlinedIcon
                  color="primary"
                  sx={{ height: 24, width: 24 }}
                />
              </Box>

              <Box mb={2}>
                <Typography variant="h6" fontWeight="500" gutterBottom>
                  Products
                </Typography>

                <Typography>
                  Accept online bookings and manage walk-ins seamlessly with a
                  calendar built for clinics, salons, and service stores.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Box mb={4}>
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
                <FrontHandOutlinedIcon
                  color="primary"
                  sx={{ height: 24, width: 24 }}
                />
              </Box>

              <Box mb={2}>
                <Typography variant="h6" fontWeight="500" gutterBottom>
                  Services
                </Typography>

                <Typography>
                  Accept online bookings and manage walk-ins seamlessly with a
                  calendar built for clinics, salons, and service stores.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Box mb={4}>
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
                <LocalMallOutlinedIcon
                  color="primary"
                  sx={{ height: 24, width: 24 }}
                />
              </Box>

              <Box mb={2}>
                <Typography variant="h6" fontWeight="500" gutterBottom>
                  Products
                </Typography>

                <Typography>
                  Accept online bookings and manage walk-ins seamlessly with a
                  calendar built for clinics, salons, and service stores.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Box mb={4}>
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
                <FrontHandOutlinedIcon
                  color="primary"
                  sx={{ height: 24, width: 24 }}
                />
              </Box>

              <Box mb={2}>
                <Typography variant="h6" fontWeight="500" gutterBottom>
                  Services
                </Typography>

                <Typography>
                  Accept online bookings and manage walk-ins seamlessly with a
                  calendar built for clinics, salons, and service stores.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={{ xs: 12, md: 5 }}>
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
    </Grid>
  </Container>
);

export default memo(Sales);
