import { SocialProvider } from '@/enums/socialProviders.enum';
import { ApiErrorResponse, ApiSuccessResponse, StringArray } from '@/types';

// ---- PASSWORD

export type AccountPasswordResponse = ApiSuccessResponse;
export type AccountPasswordErrorResponse = ApiErrorResponse & {
  errors: AccountPasswordPayloadError;
};

export type AccountProviderPayload = {
  provider: SocialProvider;
  accessToken: string;
  scope?: string;
};
export type AccountPasswordPayloadError = StringArray<AccountProviderPayload>;
