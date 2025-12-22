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
  mobile: z
    .object({
      countryCode: z.string().min(1, 'Country code is required'),
      number: z
        .string()
        .min(7, 'Mobile number must be at least 7 digits')
        .max(15, 'Mobile number cannot exceed 15 digits'),
    })
    .optional(),
});

export type FormInputs = z.infer<typeof schema>;

export interface FormContext {
  submit: () => void;
}
