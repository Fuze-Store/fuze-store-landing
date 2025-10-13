'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { CACHE_TAG } from '@/enums/cache.enum';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import { FilterParams } from '@/types';
import { InvoiceListResponse } from '@/types/invoice';
import { ApiErrorResponse } from '@fuze-store/fuze-store-shared';

const useGetInvoiceList = (filters: FilterParams) =>
  useQuery<InvoiceListResponse, AxiosError<ApiErrorResponse>>({
    queryKey: [CACHE_TAG.ACCOUNT_INVOICES, filters.page, filters.perPage],
    queryFn: async (): Promise<InvoiceListResponse> => {
      const response = await axiosPrivate.get<InvoiceListResponse>(
        endpoints.accountInvoice.list,
        {
          params: {
            page: filters.page,
            perPage: filters.perPage,
            relations: 'payment',
          },
        },
      );
      return response.data;
    },
    placeholderData: keepPreviousData,
  });

export default useGetInvoiceList;
