import { ApiErrorResponse, ApiSuccessResponse, StringArray } from '@/types';

// ---- PASSWORD

export type AccountPasswordResponse = ApiSuccessResponse;
export type AccountPasswordErrorResponse = ApiErrorResponse & {
  errors: AccountPasswordPayloadError;
};

export type AccountPasswordPayload = {
  newPassword: string;
  confirmPassword: string;
};
export type AccountPasswordPayloadError = StringArray<AccountPasswordPayload>;
