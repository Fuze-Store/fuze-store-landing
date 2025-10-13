'use client';

import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { CACHE_TAG } from '@/enums/cache.enum';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import { SubcriptionResponse } from '@/types/subscription';
import { ApiErrorResponse } from '@fuze-store/fuze-store-shared';

const useGetSubscription = () =>
  useQuery<SubcriptionResponse, AxiosError<ApiErrorResponse>>({
    queryKey: [CACHE_TAG.ACCOUNT_SUBSCRIPTION],
    queryFn: async (): Promise<SubcriptionResponse> => {
      const response = await axiosPrivate.get<SubcriptionResponse>(
        endpoints.accountSubscription.get,
        {
          params: {
            relations: 'plan',
          },
        },
      );
      return response.data;
    },
  });

export default useGetSubscription;
