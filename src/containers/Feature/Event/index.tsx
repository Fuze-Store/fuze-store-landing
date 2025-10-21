'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import DoneIcon from '@mui/icons-material/Done';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import { Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

type Props = {
  rtl?: boolean;
};

const FeatureExpense = ({ rtl = false }: Props) => {
  const bulletList = [
    'Beautiful Calendar Views – Switch between Monthly, Agenda, or Day views for a clear overview of all upcoming events.',
    'Two Event Types – Manage Reservations for tables or spaces and Appointments for services or clients.',
    'Linked to Orders – Easily attach events to orders for seamless coordination and accurate tracking.',
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 10 }}
      alignItems="center"
      direction={rtl ? 'row-reverse' : 'row'}
    >
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
        <StyledIconPlaceholder mb={2}>
          <EventOutlinedIcon color="primary" sx={{ height: 24, width: 24 }} />
        </StyledIconPlaceholder>

        <Box mb={2}>
          <Typography variant="h5" fontWeight="500">
            Reservations & Appointments
          </Typography>

          <Typography variant="subtitle1">
            Keep your schedule organized and your customers delighted with our
            Events feature — designed for both reservations and appointments.
            Whether you’re running a restaurant, salon, or service-based store,
            managing bookings has never been easier.
          </Typography>
        </Box>

        <Box component="ul" p={0} my={4}>
          {bulletList.map((text, index) => (
            <Stack
              component="li"
              key={index}
              mb={1}
              direction="row"
              alignItems="flex-start"
              spacing={1}
            >
              <Box component="span">
                <DoneIcon color="primary" sx={{ height: 28, width: 28 }} />
              </Box>
              <Typography>{text}</Typography>
            </Stack>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default memo(FeatureExpense);
