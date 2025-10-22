'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import SectionContainer from '@/components/SectionContainer';
import DoneIcon from '@mui/icons-material/Done';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import { Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { memo } from 'react';

import img1 from '@/images/ipadpro-pos-1.png';
import img2 from '@/images/ipadpro-pos-2.png';

type Props = {
  rtl?: boolean;
};

const FeaturePOS = ({ rtl = false }: Props) => {
  const bulletList = [
    'Intuitive Cart Summary – Keep track of current orders with a live summary section for easy review and editing.',
    'Active Product & Service Listing – View all available products and services, neatly organized by categories.',
    'Flexible Order Statuses – Assign orders to multiple statuses for smooth workflow management.',
    'Multiple Service Modes – Handle In-Store, Service, Delivery, Takeout, or Pickup depending on your store type.',
    'Quick Checkout & Editing – Modify orders, add items, or apply discounts without slowing down your operations.',
    'Optimized for Busy Environments – Designed for fast-paced restaurants, retail shops, and service stores.',
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 10 }}
      alignItems="stretch"
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
          <PointOfSaleOutlinedIcon
            color="primary"
            sx={{ height: 24, width: 24 }}
          />
        </StyledIconPlaceholder>

        <SectionContainer>
          <Typography variant="h5" fontWeight="500" gutterBottom>
            Point of Sale
          </Typography>

          <Typography variant="subtitle1">
            The heart of your store operations — our POS system is designed to
            make selling faster, smarter, and more organized. Whether you’re
            managing products, services, or orders, everything you need is right
            at your fingertips.
          </Typography>
        </SectionContainer>

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

export default memo(FeaturePOS);
