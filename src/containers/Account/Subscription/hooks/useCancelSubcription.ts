'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { toast } from 'sonner';

import { useConfirmationContext } from '@/providers/Confirmation/Context';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type { SubcriptionResponse } from '@/types/subscription';
import type { ApiErrorResponse } from '@fuze-store/fuze-store-shared';

const useCancelSubcription = () => {
  const { showConfirmation } = useConfirmationContext();
  const { mutateAsync, ...rest } = useMutation<
    SubcriptionResponse,
    AxiosError<ApiErrorResponse>
  >({
    mutationFn: async (): Promise<SubcriptionResponse> => {
      const response = await axiosPrivate.post<SubcriptionResponse>(
        endpoints.accountSubscription.cancel,
      );
      return response.data;
    },
    onSuccess: (response) => {
      toast.success(response.message);
    },
  });

  const cancelSubscription = useCallback(async () => {
    const confirm = await showConfirmation({
      ButtonConfirmProps: { variant: 'contained', color: 'error' },
      title: 'Cancel Subscrition',
      description: ['Are you sure you want to cancel your subscription?'],
      confirmText: 'Yes, cancel subscription',
      cancelText: 'Cancel',
    });
    if (!confirm) return;
    await mutateAsync();
  }, [mutateAsync, showConfirmation]);

  return { cancelSubscription, ...rest };
};

export default useCancelSubcription;
