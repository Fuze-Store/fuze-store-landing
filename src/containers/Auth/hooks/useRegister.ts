'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type {
  RegisterErrorResponse,
  RegisterPayload,
  RegisterResponse,
} from '@/types/register';

const register = async (data: RegisterPayload): Promise<RegisterResponse> => {
  const response = await axiosPrivate.post<RegisterResponse>(
    endpoints.auth.register,
    data,
  );
  return response.data;
};

const useRegister = () => {
  const { mutateAsync, ...rest } = useMutation<
    RegisterResponse,
    AxiosError<RegisterErrorResponse>,
    RegisterPayload
  >({
    mutationFn: async (data: RegisterPayload) => await register(data),
  });

  return { register: mutateAsync, ...rest };
};

export default useRegister;
