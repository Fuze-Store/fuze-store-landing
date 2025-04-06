import { AvailableCurrency } from '@/enums/currencies.enum';
import { SubscriptionPlan } from '@/enums/subscription.enum';
import { ApiSuccessResponse } from '@/types';

export interface Plan {
  baseFee: number;
  code: SubscriptionPlan;
  currency: AvailableCurrency;
  features: Record<string, any>;
  id: string;
  commissionRate: number;
  name: string;
  salesThreshold: number;
}

export type PlanResponse = ApiSuccessResponse & {
  data: Plan[];
};
