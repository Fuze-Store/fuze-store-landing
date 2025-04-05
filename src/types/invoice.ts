import { SubscriptionInvoiceStatus } from '@/enums/subscription.enum';
import { ApiSuccessResponse, ListResponse } from '@/types';

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

export type InvoiceListResponse = ApiSuccessResponse & {
  data: ListResponse<Invoice[]>;
};

export type InvoiceDownloadResponse = ApiSuccessResponse & {
  data: { url: string };
};
