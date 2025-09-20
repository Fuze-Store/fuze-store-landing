'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type { ApiSuccessResponse } from '@/types';
import type {
  NewsletterErrorResponse,
  NewsletterPayload,
} from '@/types/newsletter';

const unsubscribe = async (
  data: NewsletterPayload,
): Promise<ApiSuccessResponse> => {
  const response = await axiosPrivate.post<ApiSuccessResponse>(
    endpoints.newsletter.unsubscribe,
    data,
  );
  return response.data;
};

const useUnsubscribe = () => {
  const { mutateAsync, ...rest } = useMutation<
    ApiSuccessResponse,
    AxiosError<NewsletterErrorResponse>,
    NewsletterPayload
  >({
    mutationFn: async (data: NewsletterPayload) => await unsubscribe(data),
  });

  return { unsubscribe: mutateAsync, ...rest };
};

export default useUnsubscribe;
