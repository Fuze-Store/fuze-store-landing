/**
 * @module NewsletterFormProvider
 * @category Providers
 *
 */

import { zodResolver } from '@hookform/resolvers/zod';
import { memo, PropsWithChildren, useEffect } from 'react';
import { FormProvider, useForm, UseFormSetError } from 'react-hook-form';

import { getInitialValues } from '@/containers/Newsletter/Form/Provider/schema';
import { getErrorMessageTypes } from '@/helpers/form.helper';

import {
  FormInputs,
  schema,
} from '@/containers/Newsletter/Form/Provider/types';
import { NewsletterPayloadError } from '@/types/newsletter';

type Props = {
  errors?: Partial<NewsletterPayloadError>;
  onSubmit: (payload: FormInputs) => void;
};

/**
 * Newsletter Form Provider
 *
 * @category Provider
 * @param Props
 * @see https://react-hook-form.com/api/useformcontext/
 *
 */
const NewsletterFormProvider = ({
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
  errors: Partial<NewsletterPayloadError>,
  setError: UseFormSetError<FormInputs>,
) {
  if (errors.email && errors.email.length > 0) {
    setError('email', {
      types: getErrorMessageTypes(errors.email),
    });
  }
}

export default memo(NewsletterFormProvider);
