/**
 * List of types
 *
 * @module FormProviderTypes
 * @category Types
 *
 */
import type { ReactNode } from 'react';
import * as z from 'zod';

import { AddressPayloadError } from '@/types/account';
import type { Address } from '@/types/address';

export const schema = z.object({
  street: z
    .string()
    .min(1, 'Street is required')
    .max(255, 'Street cannot exceed 255 characters'),
  address2: z.string().max(255, 'Address line 2 cannot exceed 255 characters'),
  neighborhood: z
    .string()
    .min(1, 'Neighborhood is required')
    .max(255, 'Neighborhood cannot exceed 255 characters'),
  city: z
    .string()
    .min(1, 'City is required')
    .max(255, 'Neighborhood cannot exceed 255 characters'),
  province: z
    .string()
    .min(1, 'Province is required')
    .max(255, 'Province cannot exceed 255 characters'),
  postalCode: z.string().max(255, 'Postal Code cannot exceed 255 characters'),
  country: z
    .string()
    .min(1, 'Country is required')
    .max(255, 'Country cannot exceed 255 characters'),
});

export type FormInputs = z.infer<typeof schema>;

export type FormProviderProps = {
  children: ReactNode;
  address?: Partial<Address>;
  errors?: AddressPayloadError;
  onSubmit?: (payload: FormInputs) => void;
};
