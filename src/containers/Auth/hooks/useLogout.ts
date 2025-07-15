/**
 * @module useLogout
 * @category Hooks
 *
 */
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { signOut } from 'next-auth/react';
import { toast } from 'sonner';

import { paths } from '@/helpers/page.helper';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import { ApiErrorResponse, ApiSuccessResponse } from '@/types';

export const logoutFn = async (): Promise<ApiSuccessResponse> => {
  const response = await axiosPrivate.post<ApiSuccessResponse>(
    endpoints.auth.logout,
  );
  return response.data;
};

/**
 * Login api
 *
 * @category Hooks
 *
 */
const useLogout = () => {
  const { mutateAsync, ...rest } = useMutation<
    ApiSuccessResponse,
    AxiosError<ApiErrorResponse>
  >({
    mutationFn: logoutFn,
    onError: (error) => {
      toast.message(error.response?.data.message);
    },
  });

  const logout = async () => {
    try {
      await mutateAsync();
    } finally {
      await signOut({ callbackUrl: paths.home });
    }
  };

  return { logout, ...rest };
};

export default useLogout;
