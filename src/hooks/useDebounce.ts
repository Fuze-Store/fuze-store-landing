/**
 * @module useDebounce
 * @category Hooks
 *
 */
import { useEffect, useState } from 'react';

/**
 * get color base on theme color key
 *
 * @category Hooks
 *
 */

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
