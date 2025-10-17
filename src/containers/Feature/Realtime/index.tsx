'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import SectionContainer from '@/components/SectionContainer';
import DoneIcon from '@mui/icons-material/Done';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import { Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

type Props = {
  rtl?: boolean;
};

const FeatureRealtime = ({ rtl = false }: Props) => {
  const bulletList = [
    'Instant Updates – Orders, inventory, and customer information sync automatically as soon as changes occur.',
    'Optimized for Busy Stores – Perfect for fast-paced restaurants, retail, and multi-store setups.',
    'Improved Staff Coordination – Staff can see changes immediately, from new orders to updated statuses.',
    'Multi-Device Support – All terminals, tablets, and dashboards stay up-to-date in real time.',
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
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#ccc',
            borderRadius: 8,
            minHeight: 460,
            height: '100%',
            width: '100%',
          }}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <StyledIconPlaceholder mb={2}>
          <SyncOutlinedIcon color="primary" sx={{ height: 24, width: 24 }} />
        </StyledIconPlaceholder>

        <SectionContainer>
          <Typography variant="h5" fontWeight="500" gutterBottom>
            Real-Time Sync
          </Typography>

          <Typography variant="subtitle1">
            Keep your team and systems perfectly aligned with Real-Time Sync.
            Every update in your store is instantly reflected across all
            devices, ensuring that everyone is always on the same page.
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

export default memo(FeatureRealtime);
