'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

import useAppDispatch from '@/hooks/useAppDispatch';
import { useConfirmationContext } from '@/providers/Confirmation/Context';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type { ApiErrorResponse } from '@/types';
import type { PaymentMethodSessionResponse } from '@/types/paymentMethod';

import { resetGlobalFields, updateGlobalFields } from '@/rtk/global/slice';

const useDeletePaymentMethod = () => {
  const dispatch = useAppDispatch();
  const { showConfirmation } = useConfirmationContext();
  const { mutateAsync, ...rest } = useMutation<
    PaymentMethodSessionResponse,
    AxiosError<ApiErrorResponse>,
    string
  >({
    mutationFn: async (
      paymentMethodId: string,
    ): Promise<PaymentMethodSessionResponse> => {
      const response = await axiosPrivate.delete<PaymentMethodSessionResponse>(
        endpoints.accountPaymentMethod.delete.replace(
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
          value: { show: true, message: 'Deleting' },
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

  const deletePaymentMethod = async (returnUrl: string) => {
    const confirm = await showConfirmation({
      ButtonConfirmProps: { variant: 'contained', color: 'error' },
      title: 'Delete from payment methods?',
      description: ['These item(s) will delete from your current store.'],
      confirmText: 'Delete',
      cancelText: 'Cancel',
    });
    if (!confirm) return;
    return await mutateAsync(returnUrl);
  };

  return { deletePaymentMethod, ...rest };
};

export default useDeletePaymentMethod;
