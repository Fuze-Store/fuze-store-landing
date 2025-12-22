'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { CACHE_TAG } from '@/enums/cache.enum';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import { FilterParams } from '@/types';
import { InvoiceListResponse } from '@/types/invoice';
import { ApiErrorResponse } from '@fuze-store/fuze-store-shared';

type Params = {
  statuses?: string;
  startDate?: string;
  endDate?: string;
} & FilterParams;

const useGetInvoiceList = ({
  page,
  perPage,
  statuses,
  startDate,
  endDate,
}: Params) =>
  useQuery<InvoiceListResponse, AxiosError<ApiErrorResponse>>({
    queryKey: [
      CACHE_TAG.ACCOUNT_INVOICES,
      page,
      perPage,
      statuses,
      startDate,
      endDate,
    ],
    queryFn: async (): Promise<InvoiceListResponse> => {
      const response = await axiosPrivate.get<InvoiceListResponse>(
        endpoints.accountInvoice.list,
        {
          params: {
            relations: 'payment',
            page,
            perPage,
            ...(statuses && { statuses }),
            ...(startDate && { startDate }),
            ...(endDate && { endDate }),
          },
        },
      );
      return response.data;
    },
    placeholderData: keepPreviousData,
  });

export default useGetInvoiceList;
