/**
 * @module useLogout
 * @category Hooks
 *
 */
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { signOut } from 'next-auth/react';
import { toast } from 'sonner';

import { paths } from '@/enums/path.enum';
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
    const response = await mutateAsync();
    await signOut({ callbackUrl: paths.home });
    return response;
  };

  return { logout, ...rest };
};

export default useLogout;
