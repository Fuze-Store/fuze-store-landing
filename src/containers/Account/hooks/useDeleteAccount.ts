'use client';

import { useMutation } from '@tanstack/react-query';

import { useConfirmationContext } from '@/providers/Confirmation/Context';
import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type {
  ApiErrorResponse,
  ApiSuccessResponse,
} from '@fuze-store/fuze-store-shared';

const useDeleteAccount = () => {
  const { showConfirmation } = useConfirmationContext();
  const { mutateAsync, ...rest } = useMutation<
    ApiSuccessResponse,
    ApiErrorResponse
  >({
    mutationFn: async (): Promise<ApiSuccessResponse> => {
      const response = await axiosPrivate.delete<ApiSuccessResponse>(
        endpoints.account.delete,
        { method: 'DELETE' },
      );
      return response.data;
    },
  });

  const deleteAccount = async () => {
    const confirm = await showConfirmation({
      ButtonConfirmProps: { variant: 'contained', color: 'error' },
      title: 'Delete account',
      description: [
        'This action is irreversible and will result in the permanent loss of all your account data. If you proceed, you will be logged out immediately, and your account will be deactivated.',
        'If you change your mind, you have a 30-day grace period to reactivate your account. During this time, you can log in with your existing credentials to restore your account and access your data.',
      ],
      confirmText: 'Delete',
      cancelText: 'Cancel',
    });
    if (!confirm) return;
    await mutateAsync();
  };

  return { deleteAccount, ...rest };
};

export default useDeleteAccount;
