/**
 * @module AccountDetailsFormProvider
 * @category Providers
 *
 */

import { zodResolver } from '@hookform/resolvers/zod';
import { memo, PropsWithChildren, useEffect } from 'react';
import { FormProvider, useForm, UseFormSetError } from 'react-hook-form';

import { getInitialValues } from '@/containers/Account/Details/Form/Provider/schema';
import { getErrorMessageTypes } from '@/helpers/form.helper';

import {
  FormInputs,
  schema,
} from '@/containers/Account/Details/Form/Provider/types';
import type { Account, AccountDetailsPayloadError } from '@/types/account';

type Props = {
  formData?: Account;
  errors?: Partial<AccountDetailsPayloadError>;
  onSubmit: (payload: FormInputs) => void;
};

/**
 * AccountDetails Form Provider
 *
 * @category Provider
 * @param Props
 * @see https://react-hook-form.com/api/useformcontext/
 *
 */
const AccountDetailsFormProvider = ({
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
  errors: Partial<AccountDetailsPayloadError>,
  setError: UseFormSetError<FormInputs>,
) {
  if (errors.username && errors.username.length > 0) {
    setError('username', {
      types: getErrorMessageTypes(errors.username),
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
}

export default memo(AccountDetailsFormProvider);
