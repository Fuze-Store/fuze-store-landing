import { AvailableCurrency } from '@/enums/currencies.enum';
import {
  SubscriptionPlan,
  SubscriptionStatus,
} from '@/enums/subscription.enum';
import { ApiSuccessResponse } from '@/types';
import { Invoice } from '@/types/invoice';
import { Store } from '@/types/store';

export interface Subscription {
  id: string;
  /**
   * The reference identifier that connects to payments service
   */
  reference: string | null;
  /**
   * The default payment id where you billed
   */
  paymentMethodId: string | null;
  /**
   * Start date of billing
   */
  startDate: string | null;
  /**
   * End date of billing
   */
  endDate: string | null;
  expiresAt: string | null;
  /**
   * Status of subscription
   */
  status: SubscriptionStatus;
  createdAt: string;
  updatedAt: string | null;
  /**
   * Subscribed Plan
   */
  plan?: Plan;
  /**
   * The date for subscribing to new plan
   */
  scheduleChangeDate: string | null;
  /**
   * The new plan to be subscribed on next billing
   */
  newPlan?: Plan;
  /**
   * list of subscription invoices
   */
  invoices?: Invoice[];

  stores?: Store[];
}

export interface Plan {
  baseFee: number;
  code: SubscriptionPlan;
  currency: AvailableCurrency;
  features: Record<string, any>;
  id: string;
  name: string;
  salesThreshold: number;
}

export type SubcriptionResponse = ApiSuccessResponse & {
  data: Subscription;
};
