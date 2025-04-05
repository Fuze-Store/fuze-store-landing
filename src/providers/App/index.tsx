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
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showAccountDrawer, setShowAccountDrawer] = useState(false);

  const value = useMemo(
    () => ({
      showDrawer,
      showAccountDrawer,
      setShowDrawer,
      setShowAccountDrawer,
    }),
    [showDrawer, showAccountDrawer, setShowDrawer, setShowAccountDrawer],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default memo(AppProvider);
