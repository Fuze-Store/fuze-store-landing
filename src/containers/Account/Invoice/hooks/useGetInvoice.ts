'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { CACHE_TAG } from '@/enums/cache.enum';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import { InvoiceResponse } from '@/types/invoice';
import { ApiErrorResponse } from '@fuze-store/fuze-store-shared';

const useGetInvoice = (invoiceId: string) =>
  useQuery<InvoiceResponse, AxiosError<ApiErrorResponse>>({
    queryKey: [CACHE_TAG.ACCOUNT_INVOICES, invoiceId],
    queryFn: async (): Promise<InvoiceResponse> => {
      const response = await axiosPrivate.get<InvoiceResponse>(
        endpoints.accountInvoice.get.replace(':invoiceId', invoiceId),
        {
          params: {
            relations: '*',
          },
        },
      );
      return response.data;
    },
    placeholderData: keepPreviousData,
  });

export default useGetInvoice;
