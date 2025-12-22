'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type {
  AccountPasswordErrorResponse,
  AccountPasswordPayload,
} from '@/types/accountSecurity';
import { ApiSuccessResponse } from '@fuze-store/fuze-store-shared';

const useChangePassword = () => {
  const { mutateAsync, ...rest } = useMutation<
    ApiSuccessResponse,
    AxiosError<AccountPasswordErrorResponse>,
    AccountPasswordPayload
  >({
    mutationFn: async (
      data: AccountPasswordPayload,
    ): Promise<ApiSuccessResponse> => {
      const response = await axiosPrivate.patch<ApiSuccessResponse>(
        endpoints.account.changePassword,
        data,
      );
      return response.data;
    },
  });

  return { changePassword: mutateAsync, ...rest };
};

export default useChangePassword;
