'use client';

import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { CACHE_TAG } from '@/enums/cache.enum';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import { ApiErrorResponse } from '@/types';
import { InvoiceListResponse } from '@/types/invoice';

const useGetRecentInvoices = () =>
  useQuery<InvoiceListResponse, AxiosError<ApiErrorResponse>>({
    queryKey: [CACHE_TAG.ACCOUNT_RECENT_INVOICES],
    queryFn: async (): Promise<InvoiceListResponse> => {
      const response = await axiosPrivate.get<InvoiceListResponse>(
        endpoints.accountInvoice.list,
        { params: { page: 1, perPage: 5, relations: 'payment' } },
      );
      return response.data;
    },
  });

export default useGetRecentInvoices;
