/**
 * @module FormSchema
 * @category Schemas
 *
 */

import type { FormInputs } from '@/containers/Account/Details/Form/Provider/types';
import type { Account } from '@/types/account';

/**
 * Form Default Values
 *
 * @see https://react-hook-form.com/api/useform/#defaultValues
 *
 */
export const getInitialValues = (form?: Account): FormInputs => ({
  username: form?.username ?? '',
  firstName: form?.info.firstName ?? '',
  lastName: form?.info.lastName ?? '',
});
