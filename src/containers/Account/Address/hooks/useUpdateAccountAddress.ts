'use client';

import { useMutation } from '@tanstack/react-query';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';
import { toast } from 'sonner';

import {
  AccountAddressErrorResponse,
  AccountAddressResponse,
  AddressPayload,
} from '@/types/account';
import { AxiosError } from 'axios';

const useUpdateAccountAddress = () => {
  const { mutateAsync, ...rest } = useMutation<
    AccountAddressResponse,
    AxiosError<AccountAddressErrorResponse>,
    AddressPayload
  >({
    mutationFn: async (
      data: AddressPayload,
    ): Promise<AccountAddressResponse> => {
      const response = await axiosPrivate.put<AccountAddressResponse>(
        endpoints.account.address,
        data,
      );

      toast.success(response.data.message);

      return response.data;
    },
  });

  return { updateAccountAddress: mutateAsync, ...rest };
};

export default useUpdateAccountAddress;
