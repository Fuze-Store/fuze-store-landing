'use client';

/**
 * @module AppProvider
 * @category Providers
 *
 */

import { memo, useMemo, useState } from 'react';

import { AppContext } from '@/contexts/App';

/**
 * App Provider
 *
 * @category Provider
 * @param Props
 * @see https://react-hook-form.com/api/useformcontext/
 *
 */
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const value = useMemo(
    () => ({
      showDrawer,
      setShowDrawer,
    }),
    [showDrawer, setShowDrawer],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default memo(AppProvider);
