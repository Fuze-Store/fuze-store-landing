/**
 * List of category form provider types
 *
 * @module CategoryFormProviderTypes
 * @category Types
 *
 */
import * as z from 'zod';

// import type { StringArray } from '@app/types/Common';

export const schema = z
  .object({
    username: z.string().min(6, 'Username must be at least 6 characters long'),
    // .max(20, 'Username cannot exceed 20 characters'),
    firstName: z
      .string()
      .min(1, 'First name is required')
      .max(50, 'First name cannot exceed 50 characters'),
    lastName: z
      .string()
      .min(1, 'Last name is required')
      .max(50, 'Last name cannot exceed 50 characters'),
    email: z.string().email('Invalid email address'),
    password: z
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
    couponCode: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type FormInputs = z.infer<typeof schema>;

export interface FormContext {
  submit: () => void;
}
