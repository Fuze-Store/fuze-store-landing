import {
  ApiSuccessResponse,
  Invoice,
  ListResponse,
} from '@fuze-store/fuze-store-shared';

export type InvoiceResponse = ApiSuccessResponse & {
  data: Invoice;
};

export type InvoiceListResponse = ApiSuccessResponse & {
  data: ListResponse<Invoice[]>;
};

export type InvoiceDownloadResponse = ApiSuccessResponse & {
  data: { url: string };
};
