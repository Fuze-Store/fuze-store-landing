'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import { CACHE_TAG } from '@/enums/cache.enum';
import type { AccountDetailsResponse } from '@/types/account';
import { AccountProviderPayload } from '@/types/accountProvider';
import type { ApiErrorResponse } from '@fuze-store/fuze-store-shared';

type Context = { previousData?: AccountDetailsResponse };

const useLinkAccount = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, ...rest } = useMutation<
    AccountDetailsResponse,
    AxiosError<ApiErrorResponse>,
    AccountProviderPayload,
    Context
  >({
    mutationFn: async (
      data: AccountProviderPayload,
    ): Promise<AccountDetailsResponse> => {
      const response = await axiosPrivate.post<AccountDetailsResponse>(
        endpoints.social.link,
        data,
      );
      return response.data;
    },
    onMutate: async (): Promise<Context> => {
      await queryClient.cancelQueries({ queryKey: [CACHE_TAG.ACCOUNT] });
      const previousData = queryClient.getQueryData<AccountDetailsResponse>([
        CACHE_TAG.ACCOUNT,
      ]);

      // Optimistically update the cache
      queryClient.setQueryData<AccountDetailsResponse>(
        [CACHE_TAG.ACCOUNT],
        (old) => old,
      );

      return { previousData };
    },
    onError: ({ response }, _newData, context) => {
      if (context?.previousData) {
        queryClient.setQueryData([CACHE_TAG.ACCOUNT], context.previousData);
      }

      toast.error(response?.data.message);
    },
    onSuccess: async (response) => {
      toast.success(response.message);

      await queryClient.invalidateQueries({
        queryKey: [CACHE_TAG.ACCOUNT],
        refetchType: 'none',
      });

      // Optimistically update the cache
      queryClient.setQueryData<AccountDetailsResponse>(
        [CACHE_TAG.ACCOUNT],
        (old) => (old ? { ...old, data: response.data } : response),
      );
    },
  });

  return { linkAccount: mutateAsync, ...rest };
};

export default useLinkAccount;
