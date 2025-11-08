/**
 * @module AccountCouponFormProvider
 * @category Providers
 *
 */

import { zodResolver } from '@hookform/resolvers/zod';
import { memo, PropsWithChildren, useEffect } from 'react';
import { FormProvider, useForm, UseFormSetError } from 'react-hook-form';

import { getInitialValues } from '@/containers/Account/Coupon/Form/Provider/schema';
import { getErrorMessageTypes } from '@/helpers/form.helper';

import {
  FormInputs,
  schema,
} from '@/containers/Account/Coupon/Form/Provider/types';
import {
  CouponValidatePayload,
  CouponValidatePayloadError,
} from '@/types/coupon';

type Props = {
  formData?: CouponValidatePayload;
  errors?: Partial<CouponValidatePayloadError>;
  onSubmit: (payload: FormInputs) => void;
};

/**
 * AccountCoupon Form Provider
 *
 * @category Provider
 * @param Props
 * @see https://react-hook-form.com/api/useformcontext/
 *
 */
const AccountCouponFormProvider = ({
  children,
  formData,
  errors,
  onSubmit,
}: PropsWithChildren<Props>) => {
  const form = useForm<FormInputs>({
    mode: 'onSubmit',
    criteriaMode: 'all',
    defaultValues: getInitialValues(),
    resolver: zodResolver(schema),
  });
  const { handleSubmit, setError, reset } = form;

  useEffect(() => {
    if (formData) reset(getInitialValues(formData));
  }, [formData, reset]);

  useEffect(() => {
    if (errors) generateFormErrors(errors, setError);
  }, [errors, setError]);

  return (
    <FormProvider {...form}>
      <form method="POST" noValidate onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

function generateFormErrors(
  errors: Partial<CouponValidatePayloadError>,
  setError: UseFormSetError<FormInputs>,
) {
  if (errors?.couponCode && errors.couponCode.length > 0) {
    setError('couponCode', {
      types: getErrorMessageTypes(errors.couponCode),
    });
  }
}

export default memo(AccountCouponFormProvider);
