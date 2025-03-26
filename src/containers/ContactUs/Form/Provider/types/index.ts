/**
 * List of types
 *
 * @module FormProviderTypes
 * @category Types
 *
 */
import * as z from 'zod';

import type { ReactNode } from 'react';

export const schema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name cannot exceed 50 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name cannot exceed 50 characters'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phoneNumber: z.string(),
  message: z.string().min(1, 'Message is required'),
});

export type FormInputs = z.infer<typeof schema>;

export type FormProviderProps = {
  children: ReactNode;
  onSubmit?: (payload: FormInputs) => void;
};
