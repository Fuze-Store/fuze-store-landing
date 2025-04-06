'use client';

import { Plan } from '@/types/plan';
import CheckIcon from '@mui/icons-material/Check';
import {
  alpha,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { memo, useMemo } from 'react';

const FeatureItem = () => (
  <Stack direction="row" alignItems="center" spacing={1}>
    <Box
      sx={{
        p: 1,
        height: 24,
        width: 24,
        borderRadius: '50%',
        backgroundColor: (theme) => theme.palette.success.light,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CheckIcon
        sx={{
          fontWeight: 500,
          fontSize: 16,
          color: (theme) => theme.palette.primary.dark,
        }}
      />
    </Box>

    <Typography variant="body2" color="textSecondary">
      Access to basic features
    </Typography>
  </Stack>
);

type Props = {
  plan: Plan;
};

const PlanItem = ({ plan }: Props) => {
  const message = useMemo(() => {
    if (plan.commissionRate > 0 && plan.salesThreshold > 0) {
      return `plus ${plan.commissionRate * 100}% above ${plan.currency} ${plan.salesThreshold} monthly sales`;
    }

    if (plan.commissionRate > 0) {
      return `plus ${plan.commissionRate * 100}% commission`;
    }

    return '';
  }, [plan]);

  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardContent
        sx={{
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          textAlign: 'center',
        }}
      >
        <Box sx={{ p: 2 }}>
          <Chip
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.light, 0.16),
              px: 2,
              fontWeight: 500,
            }}
            variant="outlined"
            label={plan.name}
            color="primary"
          />
        </Box>

        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ verticalAlign: 'bottom' }}
        >
          <Typography
            variant="h6"
            sx={{ verticalAlign: 'top' }}
            component="span"
            fontWeight={700}
          >
            {plan.currency}
          </Typography>
          {plan.baseFee}
        </Typography>

        <Typography gutterBottom color="textSecondary" sx={{ maxWidth: 240 }}>
          {message}
        </Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <Box mb={2}>
          <Typography variant="subtitle1" fontWeight={500}>
            Features
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Everything in our Free plan plus ...
          </Typography>
        </Box>

        <Grid container spacing={1}>
          <Grid size={{ xs: 12 }}>
            <FeatureItem />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FeatureItem />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FeatureItem />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FeatureItem />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FeatureItem />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FeatureItem />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FeatureItem />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardContent>
        <Button variant="contained" disableElevation fullWidth>
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
};

export default memo(PlanItem);
