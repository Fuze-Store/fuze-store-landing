import {
  SubscriptionInvoiceStatus,
  SubscriptionPlan,
  SubscriptionStatus,
} from '@/enums/subscription.enum';
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
  plan?: SubscriptionPlan;
  /**
   * The date for subscribing to new plan
   */
  scheduleChangeDate: string | null;
  /**
   * The new plan to be subscribed on next billing
   */
  newPlan?: SubscriptionPlan;
  /**
   * list of subscription invoices
   */
  invoices?: Invoice[];

  stores?: Store[];
}

export interface Invoice {
  id: string;
  /**
   * The reference identifier that connects to payments service
   */
  reference: string | null;
  /**
   * The first day of your billing cycle
   */
  billingStartDate: string;
  /**
   * The last day of your billing cycle
   */
  billingEndDate: string;
  /**
   * Total amount of your billings (base fee, store sales fee, etc)
   */
  totalAmount: number;
  /**
   * The satatus of your invoice
   */
  status: SubscriptionInvoiceStatus;
  filename: string;
  currency: string;

  createdAt: string;
  updatedAt: string | null;
}
