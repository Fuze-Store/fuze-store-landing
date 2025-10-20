/**
 * @module FormSchema
 * @category Schemas
 *
 */

import type { FormInputs } from '@/containers/Address/Form/Provider/types';
import type { Address } from '@/types/address';

/**
 * Form Default Values
 *
 * @see https://react-hook-form.com/api/useform/#defaultValues
 *
 */
export const getInitialValues = (address?: Partial<Address>): FormInputs => ({
  street: address?.address1 ?? '',
  neighborhood: address?.neighborhood ?? '',
  city: address?.city ?? '',
  province: address?.province ?? '',
  postalCode: address?.postalCode ?? '',
  country: address?.country ?? '',
});
