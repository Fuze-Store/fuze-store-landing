'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type { ApiErrorResponse } from '@/types';
import type { AccountDetailsResponse } from '@/types/account';
import { AccountProviderPayload } from '@/types/accountProvider';

type Context = { previousData?: AccountDetailsResponse };

const useLinkAccount = () => {
  const { mutateAsync, ...rest } = useMutation<
    AccountDetailsResponse,
    AxiosError<ApiErrorResponse>,
    AccountProviderPayload,
    Context
  >({
    mutationFn: async (
      data: AccountProviderPayload,
    ): Promise<AccountDetailsResponse> => {
      const response = await axiosPrivate.patch<AccountDetailsResponse>(
        endpoints.social.link,
        data,
      );
      return response.data;
    },
    // onMutate: async (): Promise<Context> => {
    //   await queryClient.cancelQueries({ queryKey: [CACHE_TAG.ACCOUNT] });
    //   const previousData = queryClient.getQueryData<AccountDetailsResponse>([
    //     CACHE_TAG.ACCOUNT,
    //   ]);

    //   // Optimistically update the cache
    //   queryClient.setQueryData<AccountDetailsResponse>(
    //     [CACHE_TAG.ACCOUNT],
    //     (old) => old,
    //   );

    //   return { previousData };
    // },
    // onError: (err, _newData, context) => {
    //   if (context?.previousData) {
    //     queryClient.setQueryData([CACHE_TAG.ACCOUNT], context.previousData);
    //   }

    //   toast.error(err.response?.data.message);
    // },
    onSuccess: (response) => {
      toast.success(response.message);

      // await queryClient.invalidateQueries({
      //   queryKey: [CACHE_TAG.ACCOUNT],
      //   refetchType: 'none',
      // });
    },
  });

  return { linkAccount: mutateAsync, ...rest };
};

export default useLinkAccount;
