'use client';

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import BusinessIcon from '@mui/icons-material/Business';
import DiscountIcon from '@mui/icons-material/Discount';
import EventIcon from '@mui/icons-material/Event';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PaymentsIcon from '@mui/icons-material/Payments';
import PeopleIcon from '@mui/icons-material/People';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const HomeFeatures = () => (
  <Container maxWidth="lg">
    <Box mb={8}>
      <Typography
        textAlign="center"
        component="h3"
        color="primary"
        fontWeight="bold"
        gutterBottom
      >
        Key Features
      </Typography>

      <Typography
        textAlign="center"
        component="h2"
        variant="h4"
        gutterBottom
        fontWeight={500}
      >
        Everything You Need to Run and Grow Your Store
      </Typography>

      <Typography
        textAlign="center"
        variant="h6"
        gutterBottom
        color="textSecondary"
        fontWeight={400}
      >
        From seamless sales and real-time reporting to multi-store control and
        appointment bookings, our platform gives you the tools to simplify
        operations and scale with confidence.
      </Typography>
    </Box>

    <Grid container spacing={4}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack direction="row" flexWrap="nowrap">
          <Box mr={2} mt={1}>
            <SpaceDashboardIcon sx={{ width: 48, height: 48 }} />
          </Box>
          <Stack direction="column" sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              Dashboard Summary
            </Typography>
            <Typography variant="subtitle1">
              See real-time sales, reservations, and store performance at a
              glance.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack direction="row" flexWrap="nowrap">
          <Box mr={2} mt={1}>
            <PointOfSaleIcon sx={{ width: 48, height: 48 }} />
          </Box>
          <Stack direction="column" sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              Point of Sales
            </Typography>
            <Typography variant="subtitle1">
              Fast, flexible, and easy-to-use POS that works on any device.
              Intuitive sales screen built for speed and flexibility.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack direction="row" flexWrap="nowrap">
          <Box mr={2} mt={1}>
            <EventIcon sx={{ width: 48, height: 48 }} />
          </Box>
          <Stack direction="column" sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              Reservations & Appointments
            </Typography>
            <Typography variant="subtitle1">
              Let customers book with integrated online and in-store scheduling.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack direction="row" flexWrap="nowrap">
          <Box mr={2} mt={1}>
            <BusinessIcon sx={{ width: 48, height: 48 }} />
          </Box>
          <Stack direction="column" sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              Area Management
            </Typography>
            <Typography variant="subtitle1">
              Organize floors, track seating, and optimize space or service
              areas.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack direction="row" flexWrap="nowrap">
          <Box mr={2} mt={1}>
            <DiscountIcon sx={{ width: 48, height: 48 }} />
          </Box>
          <Stack direction="column" sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              Discount and Taxes
            </Typography>
            <Typography variant="subtitle1">
              Run promotions, implement taxes, issue coupons, and reward loyalty
              effortlessly.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack direction="row" flexWrap="nowrap">
          <Box mr={2} mt={1}>
            <ReceiptIcon sx={{ width: 48, height: 48 }} />
          </Box>
          <Stack direction="column" sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              Sales Tracking
            </Typography>
            <Typography variant="subtitle1">
              View order history, transaction logs, and manage refunds
              effortlessly.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack direction="row" flexWrap="nowrap">
          <Box mr={2} mt={1}>
            <MenuBookIcon sx={{ width: 48, height: 48 }} />
          </Box>
          <Stack direction="column" sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              Products & Services Setup
            </Typography>
            <Typography variant="subtitle1">
              Create categories, modifiers, and inventory for both items and
              services.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack direction="row" flexWrap="nowrap">
          <Box mr={2} mt={1}>
            <PeopleIcon sx={{ width: 48, height: 48 }} />
          </Box>
          <Stack direction="column" sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              Customers & Staff Management
            </Typography>
            <Typography variant="subtitle1">
              Track customer visits, manage staff access, and assign roles with
              ease.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack direction="row" flexWrap="nowrap">
          <Box mr={2} mt={1}>
            <AnalyticsIcon sx={{ width: 48, height: 48 }} />
          </Box>
          <Stack direction="column" sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              Reports & Analytics
            </Typography>
            <Typography variant="subtitle1">
              Access detailed insights on revenue, staff activity, and peak
              hours.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack direction="row" flexWrap="nowrap">
          <Box mr={2} mt={1}>
            <VpnKeyIcon sx={{ width: 48, height: 48 }} />
          </Box>
          <Stack direction="column" sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              Roles & Permissions
            </Typography>
            <Typography variant="subtitle1">
              Fine-tuned access control per staff or role for store security.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack direction="row" flexWrap="nowrap">
          <Box mr={2} mt={1}>
            <AccessTimeFilledIcon sx={{ width: 48, height: 48 }} />
          </Box>
          <Stack direction="column" sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              Store Sessions
            </Typography>
            <Typography variant="subtitle1">
              Open/close store shifts and record cash drawer sessions
              accurately.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack direction="row" flexWrap="nowrap">
          <Box mr={2} mt={1}>
            <SettingsIcon sx={{ width: 48, height: 48 }} />
          </Box>
          <Stack direction="column" sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              Store Preferences
            </Typography>
            <Typography variant="subtitle1">
              Customize pos settings, order settings, UI options, hours, and
              more per store.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack direction="row" flexWrap="nowrap">
          <Box mr={2} mt={1}>
            <PaymentsIcon sx={{ width: 48, height: 48 }} />
          </Box>
          <Stack direction="column" sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              Payment Methods
            </Typography>
            <Typography variant="subtitle1">
              Support multiple payment types—cash, cards, QR, e-wallets, and
              more.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack direction="row" flexWrap="nowrap">
          <Box mr={2} mt={1}>
            <ImportExportIcon sx={{ width: 48, height: 48 }} />
          </Box>
          <Stack direction="column" sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              Import/Export Data
            </Typography>
            <Typography variant="subtitle1">
              Migrate or back up your data with import/export options.
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Stack direction="row" flexWrap="nowrap">
          <Box mr={2} mt={1}>
            <AddBusinessIcon sx={{ width: 48, height: 48 }} />
          </Box>
          <Stack direction="column" sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              Multi-Store Management
            </Typography>
            <Typography variant="subtitle1">
              Centralize operations and manage multiple stores.
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  </Container>
);

export default HomeFeatures;
