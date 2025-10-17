'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import DoneIcon from '@mui/icons-material/Done';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

type Props = {
  rtl?: boolean;
};

const FeatureStaff = ({ rtl = false }: Props) => {
  const bulletList = [
    'Create Staff Profiles Easily – Add team members without requiring them to create a full Fuze Store POS account.',
    'Controlled Access – Only registered accounts can log in to the POS Store, ensuring secure and verified access.',
    'Attach Roles & Permissions – Assign custom roles to define what each staff member can view or manage.',
    'Perfect for Multi-Store Teams – Manage staff per location with role-based access unique to each store.',
    'Centralized Management – View, edit, or remove staff anytime from your dashboard.',
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
          <PersonOutlineOutlinedIcon
            color="primary"
            sx={{ height: 24, width: 24 }}
          />
        </StyledIconPlaceholder>

        <Box mb={2}>
          <Typography variant="h5" fontWeight="500" gutterBottom>
            Staff Management
          </Typography>

          <Typography variant="subtitle1">
            Simplify team management and keep your operations organized with our
            Staff Management feature. From role assignments to permissions,
            everything you need to manage your people is built right in.
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

export default memo(FeatureStaff);
