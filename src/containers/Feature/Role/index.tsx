'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import DoneIcon from '@mui/icons-material/Done';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import { Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { memo } from 'react';

import img1 from '@/images/ipadpro-roles-1.png';
import img2 from '@/images/ipadpro-roles-2.png';

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
