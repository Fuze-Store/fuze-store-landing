'use client';

import { useQuery } from '@tanstack/react-query';

import { CACHE_TAG } from '@/enums/cache.enum';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import { ApiErrorResponse } from '@/types';
import { AccountDetailsResponse } from '@/types/account';

const getAccount = async (): Promise<AccountDetailsResponse> => {
  const response = await axiosPrivate.get<AccountDetailsResponse>(
    endpoints.account.me,
    {
      params: {
        relations: `provider`,
      },
    },
  );
  return response.data;
};

const useGetAccount = () =>
  useQuery<AccountDetailsResponse, ApiErrorResponse>({
    queryKey: [CACHE_TAG.ACCOUNT],
    queryFn: getAccount,
  });

export default useGetAccount;
