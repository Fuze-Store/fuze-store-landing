'use client';

import StyledIconPlaceholder from '@/components/IconPlaceholder';
import SectionContainer from '@/components/SectionContainer';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DoneIcon from '@mui/icons-material/Done';
import { Grid, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { memo } from 'react';

import img1 from '@/images/ipadpro-report-1.png';
import img2 from '@/images/ipadpro-report-2.png';

type Props = {
  rtl?: boolean;
};

const FeatureReport = ({ rtl = false }: Props) => {
  const bulletList = [
    'Customizable Reporting Periods – Export reports by daily, weekly, monthly, quarterly, or annual periods.',
    'Sales Analytics – View best sellers, sales by category, and total sales to spot trends instantly.',
    'Export Options – Download summaries in formats suitable for accounting, analysis, or presentations.',
    'Make Informed Decisions – Use reports to adjust pricing, inventory, and marketing strategies.',
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
          <BarChartOutlinedIcon
            color="primary"
            sx={{ height: 24, width: 24 }}
          />
        </StyledIconPlaceholder>

        <SectionContainer>
          <Typography variant="h5" fontWeight="500" gutterBottom>
            Advanced Reporting
          </Typography>

          <Typography variant="subtitle1">
            Turn your data into actionable insights with Reports. Track
            performance, understand trends, and make smarter business decisions
            with easy-to-read summaries and detailed analytics.
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

export default memo(FeatureReport);
