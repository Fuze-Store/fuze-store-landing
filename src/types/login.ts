import { ApiSuccessResponse } from '@/types';

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginDataResponse = {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
};
export type LoginResponse = ApiSuccessResponse & { data: LoginDataResponse };
