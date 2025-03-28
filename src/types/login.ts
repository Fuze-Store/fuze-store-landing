import { ApiSuccessResponse } from '@/types';

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginDataResponse = {
  clientId: string;
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
  // tokenType: TokenType;
};

export type LoginResponse = ApiSuccessResponse & { data: LoginDataResponse };
