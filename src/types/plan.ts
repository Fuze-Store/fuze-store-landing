import { AvailableCurrency } from '@/enums/currencies.enum';
import { SubscriptionPlan } from '@/enums/subscription.enum';
import { ApiSuccessResponse } from '@/types';

export type PlanFeatureValue = boolean | number | string;

export interface Plan {
  baseFee: number;
  code: SubscriptionPlan;
  description: string;
  currency: AvailableCurrency;
  features: Record<string, PlanFeatureValue>;
  id: string;
  commissionRate: number;
  name: string;
  salesThreshold: number;
}

export type PlanResponse = ApiSuccessResponse & {
  data: Plan[];
};
