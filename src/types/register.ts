import { ApiErrorResponse, ApiSuccessResponse, StringArray } from '@/types';
import { User } from '@/types/user';

export type RegisterPayload = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  newPassword: string;
  confirmPassword: string;
  couponCode?: string;
};
export type RegisterResponse = ApiSuccessResponse & { data: User };

export type RegisterPayloadError = StringArray<RegisterPayload>;
export type RegisterErrorResponse = Omit<ApiErrorResponse, 'errors'> & {
  errors?: Partial<RegisterPayloadError>;
};
