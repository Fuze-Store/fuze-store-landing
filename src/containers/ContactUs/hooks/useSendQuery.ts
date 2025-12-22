'use client';

import { useMutation } from '@tanstack/react-query';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type { ContactQueryPayload } from '@/types/support';
import type {
  ApiErrorResponse,
  ApiSuccessResponse,
} from '@fuze-store/fuze-store-shared';
import { toast } from 'sonner';

const useSendQuery = () => {
  const { mutateAsync, ...rest } = useMutation<
    ApiSuccessResponse,
    ApiErrorResponse,
    ContactQueryPayload
  >({
    mutationFn: async (
      payload: ContactQueryPayload,
    ): Promise<ApiSuccessResponse> => {
      const response = await axiosPrivate.post<ApiSuccessResponse>(
        endpoints.support.query,
        payload,
      );
      toast.success(response.data.message);
      return response.data;
    },
  });

  return { sendQuery: mutateAsync, ...rest };
};

export default useSendQuery;
