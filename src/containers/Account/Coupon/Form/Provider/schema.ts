/**
 * @module FormSchema
 * @category Schemas
 *
 */

import type { FormInputs } from '@/containers/Account/Coupon/Form/Provider/types';

/**
 * Form Default Values
 *
 * @see https://react-hook-form.com/api/useform/#defaultValues
 *
 */
export const getInitialValues = (form?: {
  couponCode: string;
}): FormInputs => ({
  couponCode: form?.couponCode ?? '',
});
