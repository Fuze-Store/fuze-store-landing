'use client';

import DoneIcon from '@mui/icons-material/Done';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import { Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { memo } from 'react';

import img1 from '@/images/ipadpro-dashboard.png';

import StyledIconPlaceholder from '@/components/IconPlaceholder';

type Props = {
  rtl?: boolean;
};

const FeatureDashboard = ({ rtl = false }: Props) => {
  const bulletList = [
    `KPI Summary – Instantly see your store’s performance, including sales, orders, and customer activity.`,
    'Flexible Filtering – Analyze trends by time periods like last 7 days, last month, or this month for accurate comparisons.',
    'Quick Access to Reports – View important reports directly from the dashboard to track growth and spot opportunities.',
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 10 }}
      alignItems="center"
      direction={rtl ? 'row-reverse' : 'row'}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <Image src={img1} alt="Dashboard" layout="responsive" width={500} />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <StyledIconPlaceholder mb={2}>
          <SpaceDashboardOutlinedIcon
            color="primary"
            sx={{ height: 24, width: 24 }}
          />
        </StyledIconPlaceholder>

        <Box mb={2}>
          <Typography variant="h5" fontWeight="500">
            Dashboard Summary
          </Typography>

          <Typography variant="subtitle1">
            Stay on top of your business at a glance with our Dashboard.
            Designed for busy store owners, it gives you all the key insights
            you need to make quick, informed decisions.
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

export default memo(FeatureDashboard);
