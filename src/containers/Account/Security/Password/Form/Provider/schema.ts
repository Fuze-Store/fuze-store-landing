/**
 * @module FormSchema
 * @category Schemas
 *
 */

import type { FormInputs } from '@/containers/Account/Security/Password/Form/Provider/types';
import { AccountPasswordPayload } from '@/types/accountSecurity';

/**
 * Form Default Values
 *
 * @see https://react-hook-form.com/api/useform/#defaultValues
 *
 */
export const getInitialValues = (
  form?: AccountPasswordPayload,
): FormInputs => ({
  newPassword: form?.newPassword ?? '',
  confirmPassword: form?.confirmPassword ?? '',
});
