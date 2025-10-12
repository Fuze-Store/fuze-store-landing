/**
 * @module RegisterForm
 * @category Forms
 *
 */

import {
  FormControl,
  FormHelperText,
  InputProps,
  OutlinedInput,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { memo, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { axiosPrivate } from '@/utils/axios';
import endpoints from '@/utils/endpoints';

import type {
  CouponValidateErrorResponse,
  CouponValidatePayload,
  CouponValidateResponse,
} from '@/types/coupon';

import FieldErrorMessage from '@/components/FieldErrorMessage';
import Label from '@/components/Label';
import useDebounce from '@/hooks/useDebounce';

type Props = {
  label?: string;
  name?: string;
  required?: boolean;
  InputProps?: Partial<InputProps>;
};

const validate = async (
  params: CouponValidatePayload,
): Promise<CouponValidateResponse | CouponValidateErrorResponse> => {
  try {
    const response = await axiosPrivate.get<CouponValidateResponse>(
      endpoints.coupon.validate,
      { params },
    );
    return response.data;
  } catch (err) {
    const error = err as AxiosError<CouponValidateErrorResponse>;
    return (
      error.response?.data || {
        success: false,
        message: 'Invalid coupon code',
      }
    );
  }
};

const CouponField = ({
  label = 'Voucher Code',
  name = 'couponCode',
  required = false,
  InputProps,
}: Props) => {
  const {
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const couponCode = watch(name) ?? '';
  const debouncedCouponCode = useDebounce(couponCode, 500);

  const { data: response } = useQuery({
    queryKey: ['validate-coupon', debouncedCouponCode],
    queryFn: () => validate({ code: debouncedCouponCode }),
    enabled: !!debouncedCouponCode, // only run when couponCode has a value
    retry: false,
  });

  const isValid = response && response.success === true;
  const isNotValid = response && response.success === false;

  useEffect(() => {
    if (response?.success === false) {
      setError(name, {
        type: 'server',
        types: { server: response?.message || 'Invalid coupon code' },
        message: response?.message || 'Invalid coupon code',
      });
      return;
    }

    clearErrors(name);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <>
      <FormControl
        focused={isValid}
        error={isNotValid}
        fullWidth
        variant="outlined"
      >
        <Label
          htmlFor={name}
          {...(isNotValid && { color: 'error' })}
          {...(isValid && { color: 'success' })}
        >
          {label}
        </Label>
        <OutlinedInput
          type="text"
          id={name}
          required={required}
          fullWidth
          color={isValid ? 'success' : 'primary'}
          {...register(name)}
          error={isNotValid}
          {...InputProps}
        />
        {response?.success && (
          <FormHelperText
            sx={{ color: isValid ? 'success.main' : 'inherit' }}
            id={name}
          >
            {response.message}
          </FormHelperText>
        )}
        <FieldErrorMessage name={name} errors={errors} />
      </FormControl>
    </>
  );
};

export default memo(CouponField);
