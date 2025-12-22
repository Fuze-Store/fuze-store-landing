import { SocialProvider } from '@/enums/socialProviders.enum';
import { StringArray } from '@/types';

export type AccountProviderPayload = {
  provider: SocialProvider;
  accessToken: string;
  scope?: string;
};
export type AccountPasswordPayloadError = StringArray<AccountProviderPayload>;
