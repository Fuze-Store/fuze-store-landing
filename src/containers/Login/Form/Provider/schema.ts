/**
 * @module FormSchema
 * @category Schemas
 *
 */

import type { FormInputs } from '@/containers/Register/Form/Provider/types';

/**
 * Form Default Values
 *
 * @see https://react-hook-form.com/api/useform/#defaultValues
 *
 */
export const getInitialValues = (): FormInputs => ({
  confirmPassword: '',
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  username: '',
});
