'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import DoneIcon from '@mui/icons-material/Done';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

type Props = {
  rtl?: boolean;
};

const FeatureCustomer = ({ rtl = false }: Props) => {
  const bulletList = [
    `Comprehensive customer profiles – Record basic information like name and email, plus optional details like gender, date of birth, mobile number, and address.`,
    'Order history at a glance – Quickly view all past orders to understand preferences and trends.',
    'Assign customers to orders – Link purchases to the right customer for accurate tracking and loyalty programs.',
    'Connect customers to events – Track appointments or reservations and ensure seamless service.',
  ];

  return (
    <>
      <StyledIconPlaceholder mb={2}>
        <GroupsOutlinedIcon color="primary" sx={{ height: 24, width: 24 }} />
      </StyledIconPlaceholder>

      <Box mb={2}>
        <Typography variant="h5" fontWeight="500" gutterBottom>
          Customer Management
        </Typography>

        <Typography variant="subtitle1">
          Build stronger relationships and keep track of every interaction with
          your customers using our Customer Management system. Perfect for both
          retail and service businesses, it helps you personalize service and
          stay connected.
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

export default memo(FeatureCustomer);
