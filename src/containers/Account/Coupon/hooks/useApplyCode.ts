'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type {
  CouponValidateErrorResponse,
  CouponValidatePayload,
  CouponValidateResponse,
} from '@/types/coupon';
import { toast } from 'sonner';

const useApplyCode = () => {
  const { mutateAsync, ...rest } = useMutation<
    CouponValidateResponse,
    AxiosError<CouponValidateErrorResponse>,
    CouponValidatePayload
  >({
    mutationFn: async (
      data: CouponValidatePayload,
    ): Promise<CouponValidateResponse> => {
      const response = await axiosPrivate.post<CouponValidateResponse>(
        endpoints.coupon.apply,
        data,
      );
      return response.data;
    },
    onSuccess: (response) => {
      toast.success(response.message);
    },
  });

  return { applyCoupon: mutateAsync, ...rest };
};

export default useApplyCode;
