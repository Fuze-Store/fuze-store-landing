'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import { useConfirmationContext } from '@/providers/Confirmation/Context';
import type { SubcriptionResponse } from '@/types/subscription';
import type { ApiErrorResponse } from '@fuze-store/fuze-store-shared';
import { useCallback } from 'react';

const useReactivateSubcription = () => {
  const { showConfirmation } = useConfirmationContext();
  const { mutateAsync, ...rest } = useMutation<
    SubcriptionResponse,
    AxiosError<ApiErrorResponse>
  >({
    mutationFn: async (): Promise<SubcriptionResponse> => {
      const response = await axiosPrivate.post<SubcriptionResponse>(
        endpoints.accountSubscription.reactivate,
      );
      return response.data;
    },
    onSuccess: (response) => {
      toast.success(response.message);
    },
  });

  const reactivateSubscription = useCallback(async () => {
    const confirm = await showConfirmation({
      ButtonConfirmProps: { variant: 'contained', color: 'success' },
      title: 'Reactivate Subscrition',
      description: ['Are you sure you want to reactivate your subscription?'],
      confirmText: 'Reactivate',
      cancelText: 'Cancel',
    });
    if (!confirm) return;
    await mutateAsync();
  }, [mutateAsync, showConfirmation]);

  return { reactivateSubscription, ...rest };
};

export default useReactivateSubcription;
