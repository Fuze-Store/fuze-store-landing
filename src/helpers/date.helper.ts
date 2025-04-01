/**
 * List of date helpers
 *
 * @module DateHelper
 * @category Helpers
 *
 */

import { format } from 'date-fns';

/**
 * Format Date.
 *
 * @see https://date-fns.org/docs/format
 */
export function formatDate(
  date?: Date | string,
  patterns = 'MMM dd, yyyy hh:mm aa',
) {
  if (date) {
    return format(new Date(date), patterns);
  }

  return '';
}
