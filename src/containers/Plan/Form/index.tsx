/**
 * @module PlanForm
 * @category Containers
 *
 */
import { Grid } from '@mui/material';
import { memo, useMemo } from 'react';

import {
  getDifferentFeaturesValues,
  type Plan,
} from '@fuze-store/fuze-store-shared';

import PlanCard from '@/components/PlanCard';

type Props = {
  data?: Plan[];
  selectedPlanId?: string;
  onChangePlan?: (_planId: string) => void;
};

/**
 * Subscription Select Plan
 *
 * @category Containers
 *
 */
const PlanForm = ({ data = [], selectedPlanId, onChangePlan }: Props) => {
  const differentFeatures = useMemo(
    () => getDifferentFeaturesValues(data),
    [data],
  );

  return (
    <Grid container alignItems="stretch" spacing={2}>
      {data.map((plan, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <PlanCard
            plan={plan}
            prevPlan={data[index - 1]}
            differentFeatures={differentFeatures}
            onSelectPlan={onChangePlan}
            isSelection
            selected={selectedPlanId === plan.id}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(PlanForm);
