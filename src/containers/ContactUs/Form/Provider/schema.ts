/**
 * @module FormSchema
 * @category Schemas
 *
 */

import type { FormInputs } from '@/containers/ContactUs/Form/Provider/types';

/**
 * Form Default Values
 *
 * @see https://react-hook-form.com/api/useform/#defaultValues
 *
 */
export const getInitialValues = (): FormInputs => ({
  message: '',
  email: '',
  name: '',
  phoneNumber: '',
});
