import { StringArray } from '@/types';
import { ApiErrorResponse } from '@fuze-store/fuze-store-shared';

export type NewsletterPayload = {
  email: string;
};

export type NewsletterPayloadError = StringArray<NewsletterPayload>;
export type NewsletterErrorResponse = Omit<ApiErrorResponse, 'errors'> & {
  errors?: Partial<NewsletterPayloadError>;
};
