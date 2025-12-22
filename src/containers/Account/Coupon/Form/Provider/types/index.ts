/**
 * List of category form provider types
 *
 * @module CategoryFormProviderTypes
 * @category Types
 *
 */
import * as z from 'zod';

export const schema = z.object({
  couponCode: z
    .string()
    .min(1, 'Code is required')
    .max(255, 'Code cannot exceed 50 characters'),
});

export type FormInputs = z.infer<typeof schema>;

export interface FormContext {
  submit: () => void;
}
