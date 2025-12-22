'use client';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { CACHE_TAG } from '@/enums/cache.enum';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import { AccountDetailsResponse } from '@/types/account';
import { ApiErrorResponse } from '@fuze-store/fuze-store-shared';

export const getAccount = async (): Promise<AccountDetailsResponse> => {
  const response = await axiosPrivate.get<AccountDetailsResponse>(
    endpoints.account.me,
    {
      params: {
        relations: `providers`,
      },
    },
  );
  return response.data;
};

const useGetAccount = (
  options?: Omit<
    UseQueryOptions<
      AccountDetailsResponse,
      ApiErrorResponse,
      AccountDetailsResponse
    >,
    'queryKey' | 'queryFn'
  >,
) =>
  useQuery<AccountDetailsResponse, ApiErrorResponse>({
    queryKey: [CACHE_TAG.ACCOUNT],
    queryFn: getAccount,
    ...options,
  });

export default useGetAccount;
