'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import DoneIcon from '@mui/icons-material/Done';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import { Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

type Props = {
  rtl?: boolean;
};

const FeatureRole = ({ rtl = false }: Props) => {
  const bulletList = [
    'Custom Role Creation – Define roles that fit your workflow, like Cashier, Manager, or Staff.',
    'Granular Permissions – Control access to every feature, from POS to reports, with precision.',
    'Per-Store Configuration – Assign unique permissions for each store under your account for total flexibility.',
    'Secure Access Control – Prevent unauthorized actions and protect sensitive business data.',
    'Easy Updates – Modify roles or permissions anytime as your team and operations evolve.',
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
          <GppGoodOutlinedIcon color="primary" sx={{ height: 24, width: 24 }} />
        </StyledIconPlaceholder>

        <Box mb={2}>
          <Typography variant="h5" fontWeight="500" gutterBottom>
            Roles & Permissions
          </Typography>

          <Typography variant="subtitle1">
            Stay in control of your business with Roles & Permissions. Whether
            you’re managing a single store or multiple locations, you decide who
            sees what — ensuring security, focus, and efficiency across your
            team.
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

export default memo(FeatureRole);
