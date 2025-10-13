'use client';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type {
  ApiErrorResponse,
  ApiSuccessResponse,
} from '@fuze-store/fuze-store-shared';

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
    onSuccess: (response) => {
      toast.success(response.message);
    },
  });

  return { resendEmail: mutateAsync, ...rest };
};

export default useResendEmail;
