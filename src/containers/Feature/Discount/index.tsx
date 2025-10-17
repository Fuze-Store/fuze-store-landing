'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import DoneIcon from '@mui/icons-material/Done';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

type Props = {
  rtl?: boolean;
};

const FeatureDiscount = ({ rtl = false }: Props) => {
  const bulletList = [
    'Fixed or Percentage Discounts – Apply either a set amount or a percentage off.',
    'Cart-Level or Item-Level – Choose to discount the entire order or specific products/services.',
    'Scheduled Availability – Set start and end dates for promotions so discounts are active only when you want them.',
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
          <LocalOfferOutlinedIcon
            color="primary"
            sx={{ height: 24, width: 24 }}
          />
        </StyledIconPlaceholder>

        <Box mb={2}>
          <Typography variant="h5" fontWeight="500" gutterBottom>
            Flexible Discounts
          </Typography>

          <Typography variant="subtitle1">
            Boost sales and reward customers with our Discounts system. Simple
            to set up, easy to manage, and perfect for promotions or seasonal
            deals.
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

export default memo(FeatureDiscount);
