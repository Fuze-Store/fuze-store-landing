/**
 * List of form helpers
 *
 * @module FormHelper
 * @category Helpers
 *
 */

import parsePhoneNumberFromString from 'libphonenumber-js';
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

export function getMobileObjValue(mobile?: string | null): {
  countryCode: string;
  number: string;
} {
  if (mobile) {
    const parsed = parsePhoneNumberFromString(mobile);

    if (parsed) {
      return {
        countryCode: `+${parsed.countryCallingCode}`,
        number: parsed.nationalNumber,
      };
    }
  }

  return { countryCode: '', number: '' };
}

export function getMobileStringValue(params?: {
  countryCode?: string;
  number?: string;
}): string {
  if (!params || (params && (!params?.countryCode || !params?.number))) {
    return '';
  }
  return `${params.countryCode}${params.number}`;
}
