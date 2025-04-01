'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type {
  AccountDetailsErrorResponse,
  AccountDetailsPayload,
  AccountDetailsResponse,
} from '@/types/account';

const useUpdateAccount = () => {
  const { mutateAsync, ...rest } = useMutation<
    AccountDetailsResponse,
    AxiosError<AccountDetailsErrorResponse>,
    AccountDetailsPayload
  >({
    mutationFn: async (
      data: AccountDetailsPayload,
    ): Promise<AccountDetailsResponse> => {
      const response = await axiosPrivate.patch<AccountDetailsResponse>(
        endpoints.account.update,
        data,
      );
      return response.data;
    },
    onSuccess: (response) => {
      toast.success(response.message);
    },
  });

  return { updateAccount: mutateAsync, ...rest };
};

export default useUpdateAccount;
