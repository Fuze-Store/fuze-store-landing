'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import SectionContainer from '@/components/SectionContainer';
import DoneIcon from '@mui/icons-material/Done';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import { Stack } from '@mui/material';
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
    <>
      <StyledIconPlaceholder mb={2}>
        <SyncOutlinedIcon color="primary" sx={{ height: 24, width: 24 }} />
      </StyledIconPlaceholder>

      <SectionContainer>
        <Typography variant="h5" fontWeight="500" gutterBottom>
          Real-Time Sync
        </Typography>

        <Typography variant="subtitle1">
          Keep your team and systems perfectly aligned with Real-Time Sync.
          Every update in your store is instantly reflected across all devices,
          ensuring that everyone is always on the same page.
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
    </>
  );
};

export default memo(FeatureRealtime);
