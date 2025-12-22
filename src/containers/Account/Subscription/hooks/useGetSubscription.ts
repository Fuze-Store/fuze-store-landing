'use client';

import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { CACHE_TAG } from '@/enums/cache.enum';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type { SubcriptionResponse } from '@/types/subscription';
import type { ApiErrorResponse } from '@fuze-store/fuze-store-shared';

const useGetSubscription = (
  options?: Partial<
    UndefinedInitialDataOptions<
      SubcriptionResponse,
      AxiosError<ApiErrorResponse>
    >
  >,
) =>
  useQuery<SubcriptionResponse, AxiosError<ApiErrorResponse>>({
    queryKey: [CACHE_TAG.ACCOUNT_SUBSCRIPTION],
    queryFn: async (): Promise<SubcriptionResponse> => {
      const response = await axiosPrivate.get<SubcriptionResponse>(
        endpoints.accountSubscription.get,
        { params: { relations: 'plan,redemptions' } },
      );
      return response.data;
    },
    ...options,
  });

export default useGetSubscription;
