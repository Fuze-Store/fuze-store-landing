/**
 * List of form helpers
 *
 * @module FormHelper
 * @category Helpers
 *
 */

import type { FieldError, MultipleFieldErrors } from 'react-hook-form';

export function getErrorMessages(error?: FieldError): string | string[] {
  if (error?.types) return Object.values(error.types) as string[];
  return error?.message ?? [];
}

export function getErrorMessageTypes(messages: string[]): MultipleFieldErrors {
  const types: MultipleFieldErrors = {};

  messages.forEach((message, index) => {
    types[`custom${index}`] = message;
  });

  return types;
}
