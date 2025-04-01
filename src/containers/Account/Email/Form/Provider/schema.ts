/**
 * @module FormSchema
 * @category Schemas
 *
 */

import type { FormInputs } from '@/containers/Account/Email/Form/Provider/types';

/**
 * Form Default Values
 *
 * @see https://react-hook-form.com/api/useform/#defaultValues
 *
 */
export const getInitialValues = (form?: { email: string }): FormInputs => ({
  email: form?.email ?? '',
});
