/**
 * @module RegisterFormProvider
 * @category Providers
 *
 */

import { zodResolver } from '@hookform/resolvers/zod';
import { memo, PropsWithChildren, useEffect } from 'react';
import { FormProvider, useForm, UseFormSetError } from 'react-hook-form';

import { getInitialValues } from '@/containers/Register/Form/Provider/schema';
import { getErrorMessageTypes } from '@/helpers/form.helper';

import { FormInputs, schema } from '@/containers/Register/Form/Provider/types';
import { RegisterPayloadError } from '@/types/register';

type Props = {
  errors?: Partial<RegisterPayloadError>;
  onSubmit: (payload: FormInputs) => void;
};

/**
 * Register Form Provider
 *
 * @category Provider
 * @param Props
 * @see https://react-hook-form.com/api/useformcontext/
 *
 */
const RegisterFormProvider = ({
  children,
  errors,
  onSubmit,
}: PropsWithChildren<Props>) => {
  const form = useForm<FormInputs>({
    mode: 'onSubmit',
    criteriaMode: 'all',
    defaultValues: getInitialValues(),
    resolver: zodResolver(schema),
  });
  const { handleSubmit, setError } = form;

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
  errors: Partial<RegisterPayloadError>,
  setError: UseFormSetError<FormInputs>,
) {
  if (errors.confirmPassword && errors.confirmPassword.length > 0) {
    setError('confirmPassword', {
      types: getErrorMessageTypes(errors.confirmPassword),
    });
  }
  if (errors.email && errors.email.length > 0) {
    setError('email', {
      types: getErrorMessageTypes(errors.email),
    });
  }
  if (errors.firstName && errors.firstName.length > 0) {
    setError('firstName', { types: getErrorMessageTypes(errors.firstName) });
  }
  if (errors.lastName && errors.lastName.length > 0) {
    setError('lastName', {
      types: getErrorMessageTypes(errors.lastName),
    });
  }
  if (errors.newPassword && errors.newPassword.length > 0) {
    setError('password', {
      types: getErrorMessageTypes(errors.newPassword),
    });
  }
  if (errors.username && errors.username.length > 0) {
    setError('username', {
      types: getErrorMessageTypes(errors.username),
    });
  }
  if (errors.couponCode && errors.couponCode.length > 0) {
    setError('couponCode', {
      types: getErrorMessageTypes(errors.couponCode),
    });
  }
}

export default memo(RegisterFormProvider);
