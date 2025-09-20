/**
 * List of form provider types
 *
 * @module FormProviderTypes
 * @category Types
 *
 */
import * as z from 'zod';

export const schema = z.object({
  email: z.email('Invalid email address'),
});

export type FormInputs = z.infer<typeof schema>;

export interface FormContext {
  submit: () => void;
}
