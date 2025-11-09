'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import { CACHE_TAG } from '@/enums/cache.enum';
import type { InvoiceResponse } from '@/types/invoice';
import type { ApiErrorResponse } from '@fuze-store/fuze-store-shared';

type Payload = {
  invoiceId: string;
  returnUrl: string;
  paymentMethodId?: string;
};

const usePayInvoice = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, ...rest } = useMutation<
    InvoiceResponse,
    AxiosError<ApiErrorResponse>,
    Payload
  >({
    mutationFn: async ({
      invoiceId,
      ...payload
    }: Payload): Promise<InvoiceResponse> => {
      const response = await axiosPrivate.post<InvoiceResponse>(
        endpoints.accountInvoice.pay.replace(':invoiceId', invoiceId),
        payload,
      );
      return response.data;
    },

    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: [CACHE_TAG.ACCOUNT_INVOICES, response.data.id],
      });
      toast.success(response.message);
    },
  });

  return { payInvoice: mutateAsync, ...rest };
};

export default usePayInvoice;
