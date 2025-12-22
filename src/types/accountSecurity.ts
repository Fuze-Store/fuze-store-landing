import { StringArray } from '@/types';
import { ApiErrorResponse } from '@fuze-store/fuze-store-shared';

// ---- PASSWORD

export type AccountPasswordErrorResponse = ApiErrorResponse & {
  errors: AccountPasswordPayloadError;
};

export type AccountPasswordPayload = {
  newPassword: string;
  confirmPassword: string;
};
export type AccountPasswordPayloadError = StringArray<AccountPasswordPayload>;
