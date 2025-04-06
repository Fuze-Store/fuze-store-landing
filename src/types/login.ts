import type { ApiSuccessResponse } from '@/types';
import type { User } from '@/types/user';

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginDataResponse = {
  clientId: string;
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
  user: User;
  // tokenType: TokenType;
};

export type LoginResponse = ApiSuccessResponse & { data: LoginDataResponse };
