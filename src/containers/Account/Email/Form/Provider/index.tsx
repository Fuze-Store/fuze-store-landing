/**
 * @module AccountEmailFormProvider
 * @category Providers
 *
 */

import { zodResolver } from '@hookform/resolvers/zod';
import { memo, PropsWithChildren, useEffect } from 'react';
import { FormProvider, useForm, UseFormSetError } from 'react-hook-form';

import { getInitialValues } from '@/containers/Account/Email/Form/Provider/schema';
import { getErrorMessageTypes } from '@/helpers/form.helper';

import {
  FormInputs,
  schema,
} from '@/containers/Account/Email/Form/Provider/types';
import type {
  AccountEmailPayload,
  AccountEmailPayloadError,
} from '@/types/account';

type Props = {
  formData?: AccountEmailPayload;
  errors?: Partial<AccountEmailPayloadError>;
  onSubmit: (payload: FormInputs) => void;
};

/**
 * AccountEmail Form Provider
 *
 * @category Provider
 * @param Props
 * @see https://react-hook-form.com/api/useformcontext/
 *
 */
const AccountEmailFormProvider = ({
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
  errors: Partial<AccountEmailPayloadError>,
  setError: UseFormSetError<FormInputs>,
) {
  if (errors?.email && errors.email.length > 0) {
    setError('email', {
      types: getErrorMessageTypes(errors.email),
    });
  }
}

export default memo(AccountEmailFormProvider);
