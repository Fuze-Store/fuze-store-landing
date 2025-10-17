'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import DoneIcon from '@mui/icons-material/Done';
import { Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

type Props = {
  rtl?: boolean;
};

const FeatureRefund = ({ rtl = false }: Props) => {
  const bulletList = [
    'Seamless Refund Processing – Quickly issue refunds directly from completed orders.',
    'Automatic Record Keeping – Every refund is logged and linked to the original transaction for clear tracking.',
    'Reason & Notes Field – Add internal notes or customer-facing reasons for refunds.',
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
          <CurrencyExchangeOutlinedIcon
            color="primary"
            sx={{ height: 24, width: 24 }}
          />
        </StyledIconPlaceholder>

        <Box mb={2}>
          <Typography variant="h5" fontWeight="500" gutterBottom>
            Refund Management
          </Typography>

          <Typography variant="subtitle1">
            Build customer trust and handle returns with confidence using our
            Refund Management feature. Designed for transparency and ease, it
            keeps your refund process smooth, accurate, and well-documented.
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

export default memo(FeatureRefund);
