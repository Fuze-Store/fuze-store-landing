'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import DoneIcon from '@mui/icons-material/Done';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import { Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { memo } from 'react';

import img1 from '@/images/ipadpro-event-1.png';
import img2 from '@/images/ipadpro-event-2.png';

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
            position: 'relative',
            width: '100%',
            height: '100%',
            my: 4,
            paddingBottom: '20%',
          }}
        >
          <Box
            component={Image}
            src={img1}
            alt="POS 1"
            layout="responsive"
            sx={{
              maxWidth: { xs: 400, sm: 520, md: 400, lg: 560, xl: 600 },
              position: 'relative',
              top: 0,
              right: rtl
                ? { xs: '-5%', sm: '-5%', md: '5%', lg: '8%', xl: 0 }
                : 0,
            }}
          />

          <Box
            component={Image}
            src={img2}
            alt="POS 2"
            layout="responsive"
            sx={{
              position: 'absolute',
              top: '30%',
              maxWidth: { xs: 400, sm: 520, md: 400, lg: 560, xl: 600 },
              right: rtl ? 0 : { xs: '5%', md: '-10%', lg: '-8%', xl: 0 },
            }}
          />
        </Box>
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
