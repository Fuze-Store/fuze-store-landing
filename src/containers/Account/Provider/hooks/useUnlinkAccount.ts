'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import { CACHE_TAG } from '@/enums/cache.enum';
import type { ApiErrorResponse } from '@/types';
import type { AccountDetailsResponse } from '@/types/account';
import { toast } from 'sonner';

type Context = { previousData?: AccountDetailsResponse };

const useUnlinkAccount = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, ...rest } = useMutation<
    AccountDetailsResponse,
    AxiosError<ApiErrorResponse>,
    void,
    Context
  >({
    mutationFn: async (): Promise<AccountDetailsResponse> => {
      const response = await axiosPrivate.patch<AccountDetailsResponse>(
        endpoints.social.unlink,
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
    onError: (err, _newData, context) => {
      if (context?.previousData) {
        queryClient.setQueryData([CACHE_TAG.ACCOUNT], context.previousData);
      }

      toast.error(err.response?.data.message);
    },
    onSuccess: async (response) => {
      toast.success(response.message);

      await queryClient.invalidateQueries({
        queryKey: [CACHE_TAG.ACCOUNT],
        refetchType: 'none',
      });
    },
  });

  return { linkAccount: mutateAsync, ...rest };
};

export default useUnlinkAccount;
