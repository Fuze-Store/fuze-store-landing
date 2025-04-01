/**
 * List of category form provider types
 *
 * @module CategoryFormProviderTypes
 * @category Types
 *
 */
import * as z from 'zod';

export const schema = z.object({
  username: z.string().min(6, 'Username must be at least 6 characters long'),
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name cannot exceed 50 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name cannot exceed 50 characters'),
});

export type FormInputs = z.infer<typeof schema>;

export interface FormContext {
  submit: () => void;
}
