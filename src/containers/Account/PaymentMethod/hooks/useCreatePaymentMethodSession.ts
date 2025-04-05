'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { useConfirmationContext } from '@/providers/Confirmation/Context';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type { ApiErrorResponse } from '@/types';
import { PaymentMethodSessionResponse } from '@/types/paymentMethod';

const useCreatePaymentMethodSession = () => {
  const { showConfirmation } = useConfirmationContext();
  const { mutateAsync, ...rest } = useMutation<
    PaymentMethodSessionResponse,
    AxiosError<ApiErrorResponse>,
    string
  >({
    mutationFn: async (
      returnUrl: string,
    ): Promise<PaymentMethodSessionResponse> => {
      const response = await axiosPrivate.post<PaymentMethodSessionResponse>(
        endpoints.accountPaymentMethod.session,
        { returnUrl },
      );
      return response.data;
    },
  });

  const createPaymentMethodSession = async (returnUrl: string) => {
    const confirm = await showConfirmation({
      ButtonConfirmProps: { variant: 'contained', color: 'primary' },
      title: 'Create Payment Method Session',
      description: [
        'This will create a new payment method session and navigate to the Adyen payment gateway. Do you want to proceed?',
      ],
      confirmText: 'Proceed',
      cancelText: 'Cancel',
    });
    if (!confirm) return;
    return await mutateAsync(returnUrl);
  };

  return { createPaymentMethodSession, ...rest };
};

export default useCreatePaymentMethodSession;
