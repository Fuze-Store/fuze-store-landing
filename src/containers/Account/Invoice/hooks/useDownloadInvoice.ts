'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type { ApiErrorResponse } from '@/types';
import { InvoiceDownloadResponse } from '@/types/invoice';

const useDownloadInvoice = () => {
  const { mutateAsync, ...rest } = useMutation<
    InvoiceDownloadResponse,
    AxiosError<ApiErrorResponse>,
    string
  >({
    mutationFn: async (invoiceId: string): Promise<InvoiceDownloadResponse> => {
      const response = await axiosPrivate.post<InvoiceDownloadResponse>(
        endpoints.accountInvoice.download.replace(':invoiceId', invoiceId),
      );
      return response.data;
    },
    onSuccess: (response) => {
      window.open(response.data.url, '_blank');
    },
  });

  return { downloadInvoice: mutateAsync, ...rest };
};

export default useDownloadInvoice;
