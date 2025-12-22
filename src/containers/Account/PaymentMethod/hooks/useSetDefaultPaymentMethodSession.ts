'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

import useAppDispatch from '@/hooks/useAppDispatch';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type { SubcriptionResponse } from '@/types/subscription';
import type { ApiErrorResponse } from '@fuze-store/fuze-store-shared';

import { resetGlobalFields, updateGlobalFields } from '@/rtk/global/slice';

const useSetDefaultPaymentMethodSession = () => {
  const dispatch = useAppDispatch();
  const { mutateAsync, ...rest } = useMutation<
    SubcriptionResponse,
    AxiosError<ApiErrorResponse>,
    string
  >({
    mutationFn: async (
      paymentMethodId: string,
    ): Promise<SubcriptionResponse> => {
      const response = await axiosPrivate.patch<SubcriptionResponse>(
        endpoints.accountPaymentMethod.setDefault.replace(
          ':paymentMethodId',
          paymentMethodId,
        ),
      );
      return response.data;
    },
    onMutate: () => {
      dispatch(
        updateGlobalFields({
          key: 'loading',
          value: { show: true, message: 'Loading' },
        }),
      );
    },
    onSuccess: (response) => {
      toast.success(response.message);
    },
    onError: ({ response }) => {
      toast.error(response?.data.message);
    },
    onSettled: () => {
      dispatch(resetGlobalFields(['loading']));
    },
  });

  return { setDefaultPaymentMethod: mutateAsync, ...rest };
};

export default useSetDefaultPaymentMethodSession;
