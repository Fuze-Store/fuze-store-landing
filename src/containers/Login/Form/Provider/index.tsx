/**
 * @module LoginFormProvider
 * @category Providers
 *
 */

import { zodResolver } from '@hookform/resolvers/zod';
import { memo, PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { getInitialValues } from '@/containers/Login/Form/Provider/schema';

import { FormInputs, schema } from '@/containers/Login/Form/Provider/types';

type Props = {
  onSubmit: (payload: FormInputs) => void;
};

/**
 * Login Form Provider
 *
 * @category Provider
 * @param Props
 * @see https://react-hook-form.com/api/useformcontext/
 *
 */
const LoginFormProvider = ({
  children,
  onSubmit,
}: PropsWithChildren<Props>) => {
  const form = useForm<FormInputs>({
    mode: 'onSubmit',
    criteriaMode: 'all',
    defaultValues: getInitialValues(),
    resolver: zodResolver(schema),
  });
  const { handleSubmit } = form;

  return (
    <FormProvider {...form}>
      <form method="POST" noValidate onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default memo(LoginFormProvider);
