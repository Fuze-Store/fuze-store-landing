/**
 * @module AccountPaymentMethodTypes
 * @category Types
 *
 */

import type { AdyenSupportedRecurringProcessingModels } from '@/enums/adyen.enum';
import type { AdyenSessionsResponse } from '@/types/adyen';
import type { ApiSuccessResponse } from '@fuze-store/fuze-store-shared';

export interface PaymentMethod {
  brand: string;
  expiryMonth?: string;
  expiryYear?: string;
  externalResponseCode?: string;
  externalTokenReference?: string;
  iban?: string;
  holderName?: string;
  id: string;
  issuerName?: string;
  lastFour?: string;
  name?: string;
  networkTxReference?: string;
  ownerName?: string;
  shopperEmail?: string;
  shopperReference?: string;
  supportedRecurringProcessingModels?: AdyenSupportedRecurringProcessingModels[];
  type: string;
}

export type PaymentMethodListResponse = ApiSuccessResponse & {
  data: PaymentMethod[];
};

export type PaymentMethodSessionResponse = ApiSuccessResponse & {
  data: AdyenSessionsResponse;
};
