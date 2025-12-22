'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';
import type {
  AccountSubscriptionCreateSessionResponse,
  ApiErrorResponse,
  SubscriptionCreateSessionPayload,
} from '@fuze-store/fuze-store-shared';

import { toast } from 'sonner';

const useChangePlan = () => {
  const { mutateAsync, ...rest } = useMutation<
    AccountSubscriptionCreateSessionResponse,
    AxiosError<ApiErrorResponse>,
    SubscriptionCreateSessionPayload
  >({
    mutationFn: async (
      data: SubscriptionCreateSessionPayload,
    ): Promise<AccountSubscriptionCreateSessionResponse> => {
      const response =
        await axiosPrivate.post<AccountSubscriptionCreateSessionResponse>(
          endpoints.accountSubscription.changePlan,
          data,
        );
      return response.data;
    },
    onSuccess: (response) => {
      toast.success(response.message);
    },
    onError: (error) => {
      toast.error(error.response?.data.message, {
        description: error.response?.data.errors
          ? Object.values(error.response?.data.errors).join('\n ')
          : undefined,
      });
    },
  });

  return { changePlan: mutateAsync, ...rest };
};

export default useChangePlan;
