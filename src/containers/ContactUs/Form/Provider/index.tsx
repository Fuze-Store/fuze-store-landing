/**
 * @module ContactUsFormProvider
 * @category Providers
 *
 */

import { zodResolver } from '@hookform/resolvers/zod';
import { memo, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { getInitialValues } from '@/containers/ContactUs/Form/Provider/schema';
import {
  FormInputs,
  FormProviderProps,
  schema,
} from '@/containers/ContactUs/Form/Provider/types';

/**
 * ContactUs Form Provider
 *
 * @category Provider
 * @param Props
 * @see https://react-hook-form.com/api/useformcontext/
 *
 */
const ContactUsFormProvider = ({
  children,
  onSubmit: onFormSubmit,
}: FormProviderProps) => {
  const form = useForm<FormInputs>({
    mode: 'onSubmit',
    criteriaMode: 'all',
    defaultValues: getInitialValues(),
    resolver: zodResolver(schema),
  });
  const { handleSubmit } = form;

  const onSubmit = useCallback(
    (params: FormInputs) => {
      console.log(params);
      onFormSubmit?.(params);
    },
    [onFormSubmit],
  );

  return (
    <FormProvider {...form}>
      <form method="POST" noValidate onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default memo(ContactUsFormProvider);
