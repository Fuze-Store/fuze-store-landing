/**
 * @module useLogin
 * @category Hooks
 *
 */
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

import { useAuthContext } from '@/containers/Auth/Context/Context';

import { ApiErrorResponse } from '@/types';
import { LoginPayload, LoginResponse } from '@/types/login';

import endpoints from '@/utils/endpoints';

const loginFn = async (data: LoginPayload): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(endpoints.auth.login, data, {
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  });
  return response.data;
};

/**
 * Login api
 *
 * @category Hooks
 *
 */
const useLogin = () => {
  const { setToken } = useAuthContext();

  const { mutateAsync, ...rest } = useMutation<
    LoginResponse,
    AxiosError<ApiErrorResponse>,
    LoginPayload
  >({ mutationFn: loginFn });

  const login = async (params: LoginPayload) => {
    const response = await mutateAsync(params);

    setToken(response.data.clientId, {
      accessToken: response.data.accessToken,
      expiresIn: response.data.expiresIn,
      tokenType: 'bearer',
    });

    return response;
  };

  return { login, ...rest };
};

export default useLogin;
