/**
 * List of time helpers
 *
 * @module TimeHelper
 * @category Helpers
 *
 */

import { Duration, formatDuration, intervalToDuration } from 'date-fns';

const zeroPad = (num: number) => String(num).padStart(2, '0');

/**
 * Format to readable time
 */
export function convertToTime(
  seconds: number,
  format?: (keyof Duration)[],
): string {
  if (Number.isNaN(seconds)) return seconds.toString();

  const newFormat: (keyof Duration)[] = format
    ? format
    : // Show only minutes and seconds if less than an hour
      seconds < 3600
      ? ['minutes', 'seconds']
      : ['hours', 'minutes', 'seconds'];
  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });

  return formatDuration(duration, {
    format: newFormat,
    zero: true,
    delimiter: ':',
    locale: { formatDistance: (_token, count) => zeroPad(count) },
  });
}
