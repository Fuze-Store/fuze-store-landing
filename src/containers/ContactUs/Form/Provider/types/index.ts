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
  name: z
    .string()
    .min(1, 'Name is required')
    .max(50, 'Name cannot exceed 50 characters'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phoneNumber: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

export type FormInputs = z.infer<typeof schema>;

export type FormProviderProps = {
  children: ReactNode;
  onSubmit?: (_payload: FormInputs) => void;
};
