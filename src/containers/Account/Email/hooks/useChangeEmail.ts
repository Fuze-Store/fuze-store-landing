'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type {
  AccountDetailsResponse,
  AccountEmailErrorResponse,
  AccountEmailPayload,
} from '@/types/account';
import { toast } from 'sonner';

const useChangeEmail = () => {
  const { mutateAsync, ...rest } = useMutation<
    AccountDetailsResponse,
    AxiosError<AccountEmailErrorResponse>,
    AccountEmailPayload
  >({
    mutationFn: async (
      data: AccountEmailPayload,
    ): Promise<AccountDetailsResponse> => {
      const response = await axiosPrivate.patch<AccountDetailsResponse>(
        endpoints.account.changeEmail,
        data,
      );
      return response.data;
    },
    onSuccess: (response) => {
      toast.success(response.message);
    },
  });

  return { changeEmail: mutateAsync, ...rest };
};

export default useChangeEmail;
