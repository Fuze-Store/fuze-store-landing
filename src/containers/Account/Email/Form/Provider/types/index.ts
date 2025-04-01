/**
 * List of category form provider types
 *
 * @module CategoryFormProviderTypes
 * @category Types
 *
 */
import * as z from 'zod';

export const schema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email')
    .max(50, 'Email cannot exceed 50 characters'),
});

export type FormInputs = z.infer<typeof schema>;

export interface FormContext {
  submit: () => void;
}
