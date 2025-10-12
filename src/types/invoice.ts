import { ApiSuccessResponse, ListResponse } from '@/types';
import { Invoice } from '@fuze-store/fuze-store-shared';

export type InvoiceListResponse = ApiSuccessResponse & {
  data: ListResponse<Invoice[]>;
};

export type InvoiceDownloadResponse = ApiSuccessResponse & {
  data: { url: string };
};
