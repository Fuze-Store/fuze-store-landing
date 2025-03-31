/**
 * @module AddressFormProvider
 * @category Providers
 *
 */

import { zodResolver } from '@hookform/resolvers/zod';
import { memo, useCallback, useEffect } from 'react';
import { FormProvider, useForm, UseFormSetError } from 'react-hook-form';

import { getInitialValues } from '@/containers/Address/Form/Provider/schema';
import { getErrorMessageTypes } from '@/helpers/form.helper';

import {
  FormInputs,
  FormProviderProps,
  schema,
} from '@/containers/Address/Form/Provider/types';
import { AddressPayloadError } from '@/types/account';

/**
 * Address Form Provider
 *
 * @category Provider
 * @param Props
 * @see https://react-hook-form.com/api/useformcontext/
 *
 */
const AddressFormProvider = ({
  children,
  address,
  errors,
  onSubmit: onFormSubmit,
}: FormProviderProps) => {
  const form = useForm<FormInputs>({
    mode: 'onSubmit',
    criteriaMode: 'all',
    defaultValues: getInitialValues(),
    resolver: zodResolver(schema),
  });
  const { handleSubmit, reset, setError } = form;

  useEffect(() => {
    if (address) {
      reset(getInitialValues(address));
    }
  }, [address, reset]);

  useEffect(() => {
    if (errors) generateFormErrors(errors, setError);
  }, [errors, setError]);

  const onSubmit = useCallback(
    (params: FormInputs) => {
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

function generateFormErrors(
  errors: Partial<AddressPayloadError>,
  setError: UseFormSetError<FormInputs>,
) {
  if (errors?.address1 && errors.address1.length > 0) {
    setError('street', {
      types: getErrorMessageTypes(errors.address1),
    });
  }
  if (errors?.barangay && errors.barangay.length > 0) {
    setError('barangay', {
      types: getErrorMessageTypes(errors.barangay),
    });
  }
  if (errors?.city && errors.city.length > 0) {
    setError('city', {
      types: getErrorMessageTypes(errors.city),
    });
  }
  if (errors?.province && errors.province.length > 0) {
    setError('province', {
      types: getErrorMessageTypes(errors.province),
    });
  }
  if (errors?.postalCode && errors.postalCode.length > 0) {
    setError('postalCode', {
      types: getErrorMessageTypes(errors.postalCode),
    });
  }
  if (errors?.country && errors.country.length > 0) {
    setError('country', {
      types: getErrorMessageTypes(errors.country),
    });
  }
}

export default memo(AddressFormProvider);
