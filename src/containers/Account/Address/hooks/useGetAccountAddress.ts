'use client';

import { useQuery } from '@tanstack/react-query';

import { CACHE_TAG } from '@/enums/cache.enum';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import { ApiErrorResponse } from '@/types';
import { AccountAddressResponse } from '@/types/account';

const getAccountAddress = async (): Promise<AccountAddressResponse> => {
  const response = await axiosPrivate.get<AccountAddressResponse>(
    endpoints.account.address,
  );
  return response.data;
};

const useGetAccountAddress = () =>
  useQuery<AccountAddressResponse, ApiErrorResponse>({
    queryKey: [CACHE_TAG.ACCOUNT_ADDRESS],
    queryFn: getAccountAddress,
  });

export default useGetAccountAddress;
