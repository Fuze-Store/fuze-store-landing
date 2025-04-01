/**
 * List of category form provider types
 *
 * @module CategoryFormProviderTypes
 * @category Types
 *
 */
import * as z from 'zod';

export const schema = z
  .object({
    newPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(100, 'Password cannot exceed 100 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(
        /[^a-zA-Z0-9]/,
        'Password must contain at least one special character',
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type FormInputs = z.infer<typeof schema>;

export interface FormContext {
  submit: () => void;
}
