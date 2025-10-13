/**
 * @module AccountPasswordFormProvider
 * @category Providers
 *
 */

import { zodResolver } from '@hookform/resolvers/zod';
import { memo, PropsWithChildren, useEffect } from 'react';
import { FormProvider, useForm, UseFormSetError } from 'react-hook-form';

import { getInitialValues } from '@/containers/Account/Security/Password/Form/Provider/schema';
import { getErrorMessageTypes } from '@/helpers/form.helper';

import {
  FormInputs,
  schema,
} from '@/containers/Account/Security/Password/Form/Provider/types';
import type { AccountPasswordPayloadError } from '@/types/accountSecurity';

type Props = {
  errors?: Partial<AccountPasswordPayloadError>;
  onSubmit: (_payload: FormInputs) => void;
};

/**
 * AccountPassword Form Provider
 *
 * @category Provider
 * @param Props
 * @see https://react-hook-form.com/api/useformcontext/
 *
 */
const AccountPasswordFormProvider = ({
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
  errors: Partial<AccountPasswordPayloadError>,
  setError: UseFormSetError<FormInputs>,
) {
  if (errors?.newPassword && errors.newPassword.length > 0) {
    setError('newPassword', {
      types: getErrorMessageTypes(errors.newPassword),
    });
  }
  if (errors?.confirmPassword && errors.confirmPassword.length > 0) {
    setError('confirmPassword', {
      types: getErrorMessageTypes(errors.confirmPassword),
    });
  }
}

export default memo(AccountPasswordFormProvider);
