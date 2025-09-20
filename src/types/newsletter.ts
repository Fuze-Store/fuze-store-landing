import { ApiErrorResponse, StringArray } from '@/types';

export type NewsletterPayload = {
  email: string;
};

export type NewsletterPayloadError = StringArray<NewsletterPayload>;
export type NewsletterErrorResponse = Omit<ApiErrorResponse, 'errors'> & {
  errors?: Partial<NewsletterPayloadError>;
};
