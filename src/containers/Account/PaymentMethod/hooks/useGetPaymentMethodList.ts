'use client';

import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

import { CACHE_TAG } from '@/enums/cache.enum';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type { PaymentMethodListResponse } from '@/types/paymentMethod';
import type { ApiErrorResponse } from '@fuze-store/fuze-store-shared';

const useGetPaymentMethodList = () =>
  useQuery<PaymentMethodListResponse, AxiosError<ApiErrorResponse>>({
    queryKey: [CACHE_TAG.ACCOUNT_PAYMENT_METHOD],
    queryFn: async (): Promise<PaymentMethodListResponse> => {
      const response = await axiosPrivate.get<PaymentMethodListResponse>(
        endpoints.accountPaymentMethod.list,
      );
      return response.data;
    },
    throwOnError: (error) => {
      toast.error(error.response?.data.message);
      return true;
    },
  });

export default useGetPaymentMethodList;
