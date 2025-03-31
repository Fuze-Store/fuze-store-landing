'use client';

import { useMutation } from '@tanstack/react-query';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type { ApiErrorResponse, ApiSuccessResponse } from '@/types';

const useResendEmail = () => {
  const { mutateAsync, ...rest } = useMutation<
    ApiSuccessResponse,
    ApiErrorResponse
  >({
    mutationFn: async (): Promise<ApiSuccessResponse> => {
      const response = await axiosPrivate.post<ApiSuccessResponse>(
        endpoints.account.resendEmailVerification,
      );
      return response.data;
    },
  });

  return { resendEmail: mutateAsync, ...rest };
};

export default useResendEmail;
