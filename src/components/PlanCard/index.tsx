'use client';

import { Plan, PlanFeatureValue } from '@fuze-store/fuze-store-shared';
import { PlanCode } from '@fuze-store/fuze-store-shared/enums';
import { featureLabels } from '@fuze-store/fuze-store-shared/helpers';
import CheckIcon from '@mui/icons-material/Check';
import {
  alpha,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  useTheme,
} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { memo, useMemo } from 'react';

const FeatureItem = ({ name }: { name: string; value?: PlanFeatureValue }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Box
        sx={{
          p: 1,
          height: 16,
          width: 16,
          borderRadius: '50%',
          border: `1px solid ${theme.palette.text.primary}`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CheckIcon sx={{ fontWeight: 500, fontSize: 12 }} />
      </Box>

      <Typography variant="body2" color="textSecondary">
        {featureLabels[name] ?? name}
        {/* {`${featureLabels[name]}: ${getFeatureValue(value, name)}`} */}
      </Typography>
    </Stack>
  );
};

type Props = {
  plan: Plan;
  prevPlan?: Plan;
  selected?: boolean;
  isSelection?: boolean;
  onSelectPlan?: (_planId: string) => void;
  differentFeatures?: Record<string, Record<string, PlanFeatureValue>>;
};

const PlanCard = ({
  plan,
  prevPlan,
  selected = false,
  isSelection = false,
  differentFeatures = {},
  onSelectPlan,
}: Props) => {
  const theme = useTheme();

  const message = useMemo(() => {
    if (plan.commissionRate > 0 && plan.salesThreshold > 0) {
      return `plus ${plan.commissionRate * 100}% above ${plan.currency} ${plan.salesThreshold} monthly sales`;
    }

    if (plan.commissionRate > 0) {
      return `plus ${plan.commissionRate * 100}% of monthly sales`;
    }

    return 'Always free';
  }, [plan]);

  const priceLabel = useMemo(() => {
    return (
      <>
        <Stack direction="row">
          {plan.baseFee > 0 && (
            <Typography
              variant="h6"
              sx={{ verticalAlign: 'top' }}
              component="span"
              fontWeight={700}
            >
              {plan.currency}
            </Typography>
          )}
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ verticalAlign: 'bottom' }}
          >
            {plan.baseFee === 0
              ? 'Free'
              : Intl.NumberFormat('en-US', {
                  maximumFractionDigits: 0,
                }).format(plan.baseFee)}
            <Typography variant="body2" sx={{ maxWidth: 240 }}>
              {message}
            </Typography>
          </Typography>
        </Stack>
      </>
    );
  }, [message, plan.baseFee, plan.currency]);

  const getButton = (code: PlanCode) => {
    if (isSelection) {
      return (
        <Button
          sx={{ borderRadius: 2 }}
          variant={selected ? 'contained' : 'outlined'}
          fullWidth
          disableElevation
          disabled={selected}
          color={selected ? 'primary' : 'primary'}
          onClick={() => onSelectPlan?.(plan.id)}
        >
          {selected ? 'Selected' : 'Select Plan'}
        </Button>
      );
    }

    if (code === PlanCode.BASIC) {
      return (
        <Button
          sx={{ borderRadius: 2 }}
          variant="contained"
          disableElevation
          fullWidth
          color="inherit"
        >
          Get Started with Free Trial
        </Button>
      );
    }

    if (code === PlanCode.STARTER) {
      return (
        <Button
          sx={{ borderRadius: 2 }}
          variant="contained"
          fullWidth
          disableElevation
          color="inherit"
        >
          Get Started with Starter
        </Button>
      );
    }

    if (code === PlanCode.STANDARD) {
      return (
        <Button
          sx={{ borderRadius: 2 }}
          variant="contained"
          fullWidth
          color="primary"
        >
          Get Started with Standard
        </Button>
      );
    }

    if (code === PlanCode.PREMIUM) {
      return (
        <Button
          sx={{ borderRadius: 2 }}
          variant="contained"
          fullWidth
          color="primary"
        >
          Get Started with Premium
        </Button>
      );
    }

    return (
      <Button
        sx={{ borderRadius: 2 }}
        variant="contained"
        disableElevation
        fullWidth
        color="primary"
      >
        Get Started
      </Button>
    );
  };

  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: 4,
        border: `2px solid ${selected ? theme.palette.primary.main : theme.palette.divider}`,
      }}
    >
      <CardContent sx={{ flexDirection: 'column', display: 'flex' }}>
        <Stack
          mb={4}
          spacing={0.5}
          justifyContent="center"
          direction="row"
          alignItems="center"
        >
          <Typography variant="h6" fontWeight="bold">
            {plan.name}
          </Typography>
          {/* <Chip size="small" label="Popular" color="error" /> */}
        </Stack>
        <Chip
          sx={{
            backgroundColor: (theme) =>
              alpha(theme.palette.primary.light, 0.16),
            px: 2,
            fontWeight: 500,
            display: 'none',
          }}
          variant="outlined"
          label={plan.name}
          color="primary"
        />

        {priceLabel}

        <Box mt={2}>{getButton(plan.code)}</Box>
      </CardContent>
      <Divider sx={{ mx: 2 }} />
      <CardContent sx={{ px: 3 }}>
        <Box mb={2}>
          <Typography variant="body2">Features:</Typography>
        </Box>

        <Grid container spacing={1}>
          {plan.code === PlanCode.BASIC && (
            <Grid size={{ xs: 12 }}>
              <FeatureItem name="Basic Features" />
            </Grid>
          )}
          {plan.code === PlanCode.STARTER && (
            <Grid size={{ xs: 12 }}>
              <FeatureItem name="All Basic Features" />
            </Grid>
          )}
          {plan.code === PlanCode.STANDARD && (
            <Grid size={{ xs: 12 }}>
              <FeatureItem name="All Starter Features" />
            </Grid>
          )}
          {plan.code === PlanCode.PREMIUM && (
            <Grid size={{ xs: 12 }}>
              <FeatureItem name="All Features" />
            </Grid>
          )}

          {plan.code !== PlanCode.BASIC && plan.code !== PlanCode.PREMIUM && (
            <>
              {Object.keys(differentFeatures).map((key, index) => {
                const prevDiffFeature = prevPlan
                  ? differentFeatures[key][prevPlan.code]
                  : undefined;
                const diffFeature = differentFeatures[key][plan.code];

                const showFeature =
                  diffFeature !== false && prevDiffFeature === false;

                return (
                  showFeature && (
                    <Grid size={{ xs: 12 }} key={index}>
                      <FeatureItem
                        name={key}
                        value={differentFeatures[key][plan.code]}
                      />
                    </Grid>
                  )
                );
              })}
            </>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default memo(PlanCard);
