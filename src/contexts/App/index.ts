'use client';

/**
 * @module AppContext
 * @category Contexts
 *
 */

import { Dispatch, SetStateAction, createContext } from 'react';

export interface IAppContext {
  showDrawer: boolean;
  setShowDrawer: Dispatch<SetStateAction<boolean>>;
  showAccountDrawer: boolean;
  setShowAccountDrawer: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<IAppContext>({
  showDrawer: false,
  showAccountDrawer: false,
  setShowDrawer: () => {},
  setShowAccountDrawer: () => {},
});
