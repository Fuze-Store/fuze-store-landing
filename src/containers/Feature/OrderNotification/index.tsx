'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import DoneIcon from '@mui/icons-material/Done';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

type Props = {
  rtl?: boolean;
};

const FeatureOrderNotification = ({ rtl = false }: Props) => {
  const bulletList = [
    'Email Alerts – Automatically notify customers whenever an order is created, updated, or completed.',
    'Real-Time Updates – Receive notifications immediately to act fast and avoid delays.',
    'Order Tracking – Keep customers informed about their order status at every step.',
  ];

  return (
    <>
      <StyledIconPlaceholder mb={2}>
        <NotificationsActiveOutlinedIcon
          color="primary"
          sx={{ height: 24, width: 24 }}
        />
      </StyledIconPlaceholder>

      <Box mb={2}>
        <Typography variant="h5" fontWeight="500" gutterBottom>
          Order Notifications
        </Typography>

        <Typography variant="subtitle1">
          Keep your team and customers in the loop with Order Notifications —
          ensuring every order update is communicated instantly and reliably.
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
    </>
  );
};

export default memo(FeatureOrderNotification);
